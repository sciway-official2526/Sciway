function getCoordinates(event) {
	const map = document.getElementById("campus-map");
	const marker = document.getElementById("marker");
	//const coordsText = document.getElementById("coords");
	
	const rect = map.getBoundingClientRect();
	
	const xPx = event.clientX - rect.left;
	const yPx = event.clientY - rect.top;
	
	const xPct = (xPx / rect.width) * 100;
	const yPct = (yPx / rect.height) * 100;
	
	document.getElementById("coords").innerText = `X%: ${xPct.toFixed(2)}, Y%: ${yPct.toFixed(2)}`;
	
	marker.style.left = xPct + "%";
	marker.style.top = yPct + "%";
	market.style.display = "block";
	
	console.log({xPct, yPct});
}

function resetMap(){
	document.getElementById("marker").style.display = "none";
	document.getElementById("coords").innerText = "X: -, Y: -";
}