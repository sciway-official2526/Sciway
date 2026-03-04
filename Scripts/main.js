/*** MAP & ELEMENTS ***/

const MAP_FOLDER = "maps/";
const SVG_VIEWBOX = "0 0 100 100";

const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");
const routeBtn = document.getElementById("route-btn");
const replayBtn = document.getElementById("replay-btn");
const gpsBtn = document.getElementById("gps-btn");

const mapContainer = document.getElementById("map-container");
const mapInner = document.getElementById("map-inner");
const mapImage = document.getElementById("map-image");
const svg = document.getElementById("route-layer");

svg.setAttribute("viewBox", SVG_VIEWBOX);
svg.setAttribute("preserveAspectRatio", "none");

/*** POPULATE DROPDOWNS WITH SORTING ***/

function populateDropdowns() {

    if (!Array.isArray(nodes)) {
        console.error("nodes not loaded");
        return;
    }

    // Sort nodes alphabetically by name
    const selectableNodes = nodes
        .filter(n => n.selectable)
        .sort((a, b) => a.name.localeCompare(b.name));

    selectableNodes.forEach(node => {
        const startOption = document.createElement("option");
        startOption.value = node.id;
        startOption.textContent = node.name;
        startSelect.appendChild(startOption);

        const endOption = document.createElement("option");
        endOption.value = node.id;
        endOption.textContent = node.name;
        endSelect.appendChild(endOption);
    });

    // Prevent selecting the same node for start and end
    startSelect.addEventListener("change", () => {
        const startValue = startSelect.value;
        Array.from(endSelect.options).forEach(option => {
            option.disabled = option.value === startValue;
        });
        // If current end is same as start, reset end
        if (endSelect.value === startValue) endSelect.value = "";
    });

    endSelect.addEventListener("change", () => {
        const endValue = endSelect.value;
        Array.from(startSelect.options).forEach(option => {
            option.disabled = option.value === endValue;
        });
        // If current start is same as end, reset start
        if (startSelect.value === endValue) startSelect.value = "";
    });
}

document.addEventListener("DOMContentLoaded", populateDropdowns);


/*** REPLAY FUNCTION ***/
let lastPath = null;

replayBtn.addEventListener("click", () => {
    if (!lastPath) return;
    clearRoute();
    renderRouteMultiFloor(lastPath);
});


/*** IMAGE DRAG PREVENTION ***/

mapImage.addEventListener("dragstart", e => e.preventDefault());

/*** PAN & ZOOM LOGIC ***/

mapContainer.style.cursor = "grab";
let scale = 1, translateX = 0, translateY = 0;
let isPanning = false, startX = 0, startY = 0;
let lastTouchDistance = null, lastTouchCenter = null;

function updateTransform() {
    mapInner.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// Mouse wheel zoom
mapContainer.addEventListener("wheel", e => {
    e.preventDefault();
    const zoomSpeed = 0.0015;
    scale += -e.deltaY * zoomSpeed;
    scale = Math.min(Math.max(scale, 0.6), 3);
    updateTransform();
}, { passive: false });

// Mouse pan
mapContainer.addEventListener("mousedown", e => {
    isPanning = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    mapContainer.style.cursor = "grabbing";
});
window.addEventListener("mousemove", e => {
    if (!isPanning) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
});
window.addEventListener("mouseup", () => {
    isPanning = false;
    mapContainer.style.cursor = "grab";
});

// Touch pan & pinch zoom
mapContainer.addEventListener("touchstart", e => {
    if (e.touches.length === 1) {
        isPanning = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
    }
    if (e.touches.length === 2) {
        lastTouchDistance = getTouchDistance(e.touches);
        lastTouchCenter = getTouchCenter(e.touches);
    }
}, { passive: false });

mapContainer.addEventListener("touchmove", e => {
    e.preventDefault();
    if (e.touches.length === 1 && isPanning) {
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        updateTransform();
    }
    if (e.touches.length === 2) {
        const newDistance = getTouchDistance(e.touches);
        const center = getTouchCenter(e.touches);
        if (lastTouchDistance) {
            const zoomFactor = newDistance / lastTouchDistance;
            scale = Math.min(Math.max(scale * zoomFactor, 0.6), 3);
            translateX += center.x - lastTouchCenter.x;
            translateY += center.y - lastTouchCenter.y;
        }
        lastTouchDistance = newDistance;
        lastTouchCenter = center;
        updateTransform();
    }
}, { passive: false });

mapContainer.addEventListener("touchend", () => {
    isPanning = false;
    lastTouchDistance = null;
    lastTouchCenter = null;
});

function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
}
function getTouchCenter(touches) {
    return { x: (touches[0].clientX + touches[1].clientX)/2, y: (touches[0].clientY + touches[1].clientY)/2 };
}
/*** UTILITIES ***/

function getNode(id) {
    return nodes.find(n => n.id === id);
}

function clearRoute() {
    svg.innerHTML = "";
}

function bringPinsToFront() {
    svg.querySelectorAll(".pin")
        .forEach(pin => svg.appendChild(pin));
}

/*** PIN DRAWING ***/

function drawPin(node, type) {
    const color =
        type === "start" ? "#00cc00" :
        type === "user" ? "#1a73e8" :
        "#cc0000";

    const PIN_SIZE = 1.3;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y - PIN_SIZE);
    circle.setAttribute("r", PIN_SIZE);
    circle.setAttribute("fill", color);
    circle.classList.add("pin", type);

    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points",
        `${node.x - PIN_SIZE*0.8},${node.y - PIN_SIZE*0.2} ` +
        `${node.x + PIN_SIZE*0.8},${node.y - PIN_SIZE*0.2} ` +
        `${node.x},${node.y + PIN_SIZE*1.2}`
    );
    triangle.setAttribute("fill", color);
    triangle.classList.add("pin", type);

    svg.appendChild(circle);
    svg.appendChild(triangle);
}

/*** ROUTE CALCULATION ***/

function calculateRoute() {
    const startId = startSelect.value;
    const endId = endSelect.value;

    clearRoute();

    const path = dijkstra(startId, endId);

    if (!path || path.length < 2) {
        alert("No route found.");
        return;
    }

    lastPath = path;
    replayBtn.style.display = "inline-block";

    renderRouteMultiFloor(path);
}

/*** MULTI-FLOOR RENDERING ***/
function renderRouteMultiFloor(path) {
    let index = 0;
    let t = 0;
    const speed = 0.05;

    const startNode = getNode(path[0]);
    let currentFloor = startNode.floor;

    mapImage.src = MAP_FOLDER + startNode.map;
    drawPin(startNode, "start");

    function nextSegment() {

        if (index >= path.length - 1) {
            drawPin(getNode(path[path.length - 1]), "end");
            return;
        }

        const a = getNode(path[index]);
        const b = getNode(path[index + 1]);

        if (a.floor !== currentFloor) {
            currentFloor = a.floor;
            mapImage.src = MAP_FOLDER + a.map;
            clearRoute();
        }

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", a.x);
        line.setAttribute("y1", a.y);
        line.setAttribute("x2", a.x);
        line.setAttribute("y2", a.y);
        line.setAttribute("stroke", "#000");
        line.setAttribute("stroke-width", 0.8);
        line.setAttribute("stroke-linecap", "round");

        svg.appendChild(line);

        t = 0;

        function animate() {
            t += speed;
            if (t > 1) t = 1;

            line.setAttribute("x2", a.x + (b.x - a.x) * t);
            line.setAttribute("y2", a.y + (b.y - a.y) * t);

            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                bringPinsToFront();
                index++;
                nextSegment();
            }
        }

        animate();
    }

    nextSegment();
}

/*** GPS SYSTEM ***/

// calibration points
const calibrationPoints = [
    { lat: 15.485739301781981, lng: 120.97380717428112, x: 20.48, y: 86.24 },
    { lat: 15.486152587354715, lng: 120.97426045383736, x: 11.87, y: 20.14 },
    { lat: 15.485130675510511, lng: 120.97458279015557, x: 92.44, y: 4.34 },
    { lat: 15.485332664996667, lng: 120.9745343659121, x: 92.25, y: 47.64 },
    { lat: 15.485392524404139, lng: 120.97400515727534, x: 72.53, y: 86.16 }
];


function convertLatLngToMapXY(lat, lng) {

    let numeratorX = 0;
    let numeratorY = 0;
    let denominator = 0;

    calibrationPoints.forEach(point => {
        const d = Math.hypot(lat - point.lat, lng - point.lng);
        const weight = d === 0 ? 1e9 : 1 / (d * d);

        numeratorX += weight * point.x;
        numeratorY += weight * point.y;
        denominator += weight;
    });

    let x = numeratorX / denominator;
    let y = numeratorY / denominator;

    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    return { x, y };
}

// Campus bounds
const campusBounds = {
    latMin: Math.min(...calibrationPoints.map(p => p.lat)),
    latMax: Math.max(...calibrationPoints.map(p => p.lat)),
    lngMin: Math.min(...calibrationPoints.map(p => p.lng)),
    lngMax: Math.max(...calibrationPoints.map(p => p.lng))
};

function isInsideCampus(lat, lng) {
    const margin = 0.0003; // ~30m buffer
    
    return lat >= campusBounds.latMin &&
           lat <= campusBounds.latMax &&
           lng >= campusBounds.lngMin &&
           lng <= campusBounds.lngMax;
}

/*** LIVE GPS ***/

let liveGPS = false;
let watchID = null;
let userMarker = null;
let lastNode = null;

function findNearestNode(x, y) {
    let closest = null;
    let minDistance = Infinity;

    nodes.forEach(node => {
        if (!node.selectable) return;
        const dist = Math.hypot(node.x - x, node.y - y);
        if (dist < minDistance) {
            minDistance = dist;
            closest = node;
        }
    });

    return closest;
}

function startLiveGPS() {

    if (!navigator.geolocation)
        return alert("Geolocation not supported");

    liveGPS = true;

    if (!userMarker) {
        userMarker = document.createElement("div");
        userMarker.className = "user-marker";
        userMarker.style.position = "absolute";
        userMarker.style.width = "18px";
        userMarker.style.height = "18px";
        userMarker.style.borderRadius = "50%";
        userMarker.style.background = "#1a73e8";
        userMarker.style.border = "3px solid white";
        userMarker.style.boxShadow = "0 0 12px rgba(26,115,232,0.6)";
        userMarker.style.transform = "translate(-50%, -50%)";
        userMarker.style.zIndex = 40;
        mapInner.appendChild(userMarker);
    }

    watchID = navigator.geolocation.watchPosition(pos => {

        const { latitude, longitude } = pos.coords;

        if (!isInsideCampus(latitude, longitude)) {
            userMarker.style.display = "none";
            return;
        }

        userMarker.style.display = "block";

        const { x, y } = convertLatLngToMapXY(latitude, longitude);

        if (!lastNode) lastNode = { x, y };

        lastNode.x += (x - lastNode.x) * 0.2;
        lastNode.y += (y - lastNode.y) * 0.2;

        userMarker.style.left = `${lastNode.x}%`;
        userMarker.style.top = `${lastNode.y}%`;

        // Auto-set start to nearest node
        const nearest = findNearestNode(lastNode.x, lastNode.y);
        if (nearest && startSelect.value !== nearest.id) {
            startSelect.value = nearest.id;
        }

    }, err => console.error(err),
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 });
}

function stopLiveGPS() {
    if (watchID !== null)
        navigator.geolocation.clearWatch(watchID);
    liveGPS = false;
    if (userMarker)
        userMarker.style.display = "none";
}

// GPS Button
if (gpsBtn) {
    gpsBtn.addEventListener("click", () => {
        if (!liveGPS) startLiveGPS();
        else stopLiveGPS();
    });

}
