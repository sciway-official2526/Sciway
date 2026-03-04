function changeMap(newSrc) {
	const map = document.getElementById("campus-map");
	
	map.style.opacity = 0;
	setTimeout(() => {
		map.src = newSrc;
		map.style.opacity = 1;
	}, 200);
}