const nodes = [
	//Buildings
	{
		id: "Gate", 
		name: "Main Gate", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 23.89, 
		y: 95.93, 
		type: "poi"
	},
	{
		id: "Fajardo", 
		name: "Fajardo Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 8.57, 
		y: 57.59, 
		type: "poi"
	},
	{
		id: "CR", 
		name: "CR", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 6.68, 
		y: 10.76, 
		type: "poi"
	},
	{
		id: "GSP", 
		name: "GSP Garden", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 15.59, 
		y: 22.12, 
		type: "poi"
	},
	{
		id: "MAPEH", 
		name: "MAPEH Department", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 17.65, 
		y: 10.76, 
		type: "poi"
	},
	{
		id: "Discipline", 
		name: "Discipline Office", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 13.53, 
		y: 10.76, 
		type: "poi"
	},
	{
		id: "Perez", 
		name: "Perez Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 45.92, 
		y: 9.27, 
		type: "poi"
	},
	{
		id: "Canteen", 
		name: "Canteen", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 30.84, 
		y: 24.17, 
		type: "poi"
	},
	{
		id: "Gym", 
		name: "Gymnasium", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 47.94, 
		y: 46.89, 
		type: "poi"
	},
	{
		id: "CR (girls)", 
		name: "CR (girls)", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 70.93, 
		y: 9.27, 
		type: "poi"
	},
	{
		id: "Canteen (Mang Rey)", 
		name: "Canteen (Mang Rey)", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 74.01, 
		y: 9.27, 
		type: "poi"
	},
	{
		id: "DPWH", 
		name: "DPWH Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 89.23, 
		y: 9.27, 
		type: "poi"
	},
	{
		id: "SPJ", 
		name: "SPJ Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 96.45, 
		y: 25.19, 
		type: "poi"
	},
	{
		id: "CR (boys)", 
		name: "CR (boys)", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 96.12, 
		y: 40.99, 
		type: "poi"
	},
	{
		id: "Library", 
		name: "Library", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 87.23, y: 42.98, 
		type: "poi"
	},
	{
		id: "SHS", 
		name: "SHS Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 77.67, 
		y: 48.04, 
		type: "poi"
	},
	{
		id: "JHS Faculty", 
		name: "JHS Faculty", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 71.9, 
		y: 71.28, 
		type: "poi"
	},
	{
		id: "AVR", 
		name: "Audio Visual Room (AVR)", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 62.67, 
		y: 71.28, 
		type: "poi"
	},
	{
		id: "SHS_Faculty", 
		name: "SHS Faculty", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 54.34, 
		y: 71.28, 
		type: "poi"
	},
	{
		id: "Security", 
		name: "Security Bank Building", 
		map: "GENERAL_MAP_FINAL.png", 
		x: 45.67, 
		y: 88.92, 
		type: "poi"
	},
	
	//Paths node data
	{
		id:"path1_1",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 93.07
	},
	{
		id:"path1_2",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 93.07
	},
	{
		id:"path1_3",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 57.59
	},
	{
		id:"path1_4",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 8.57,
		y: 28.50
	},
	{
		id:"path1_5",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 15.59,
		y: 28.50
	},
	{
		id:"path1_6",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 28.50
	},
	{
		id:"path1_7",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 17.86
	},
	{
		id:"path1_8",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 17.65,
		y: 17.86
	},
	{
		id:"path1_9",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 13.53,
		y: 17.86
	},
	{
		id:"path1_10",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 8.57,
		y: 17.86
	},
	{
		id:"path1_11",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 6.68,
		y: 17.86
	},
	{
		id:"path1_12",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 43.76
	},
	{
		id:"path1_13",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 43.76
	},
	{
		id:"path1_14",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 46.89
	},
	{
		id:"path1_15",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 6.86
	},
	{
		id:"path1_16",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.64,
		y: 9.27
	},
	{
		id:"path1_17",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 57.59
	},
	{
		id:"path1_18",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 79.94
	},
	{
		id:"path1_19",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 47.94
	},
	//section 2 on the map
	{
		id:"path2_1",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 45.67,
		y: 79.94
	},
	{
		id:"path2_2",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 49.67,
		y: 79.94
	},
	{
		id:"path2_3",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 67.12,
		y: 79.94
	},
	{
		id:"path2_4",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 68.01,
		y: 79.94
	},
	{
		id:"path2_5",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 67.12,
		y: 92.83
	},
	{
		id:"path2_8",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 49.67,
		y: 61.54
	},
	{
		id:"path2_9",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 54.34,
		y: 61.54
	},
	{
		id:"path2_10",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 62.67,
		y: 61.54
	},
	{
		id:"path2_11",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 67.9,
		y: 61.54
	},
	{
		id:"path2_12",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 49.67,
		y: 47.94
	},
	{
		id:"path2_13",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 47.94,
		y: 31.26
	},
	{
		id:"path2_14",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 42.49,
		y: 31.26
	},
	{
		id:"path2_15",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 30.84,
		y: 31.26
	},
	{
		id:"path2_16",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 30.84,
		y: 17.07
	},
	{
		id:"path2_17",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 30.84,
		y: 15.65
	},
	{
		id:"path2_18",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 42.49,
		y: 15.65
	},
	{
		id:"path2_19",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 45.92,
		y: 15.65
	},
	{
		id:"path2_20",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 67.85,
		y: 15.65
	},
	{
		id:"path2_21",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 67.85,
		y: 9.27
	},
	
	//Section 3 on the map
	{
		id:"path3_1",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 70.93,
		y: 15.65
	},
	{
		id:"path3_2",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 74.01,
		y: 15.65
	},
	{
		id:"path3_3",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 77.44,
		y: 15.65
	},
	{
		id:"path3_4",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 81.55,
		y: 15.65
	},
	{
		id:"path3_5",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 81.55,
		y: 25.19
	},
	{
		id:"path3_6",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 81.55,
		y: 30.86
	},
	{
		id:"path3_7",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 89.23,
		y: 15.65
	},
	{
		id:"path3_8",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 87.23,
		y: 25.19
	},
	{
		id:"path3_9",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 89.23,
		y: 25.19
	},
	{
		id:"path3_10",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 94.45,
		y: 25.19
	},
	{
		id:"path3_11",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 94.56,
		y: 37.53
	},
	{
		id:"path3_12",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 96.12,
		y: 37.53
	},
	{
		id:"path3_13",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 77.67,
		y: 30.86
	},
	{
		id:"path3_14",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 74.56,
		y: 36.23
	},
	{
		id:"path3_15",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 69.9,
		y: 36.23
	},
	{
		id:"path3_16",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 69.9,
		y: 47.94
	},
	{
		id:"path3_17",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 69.9,
		y: 61.54
	},
	{
		id:"path3_18",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 71.9,
		y: 61.54
	},
	{
		id:"path3_19",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 74.56,
		y: 61.54
	},
	{
		id:"path3_20",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 74.60,
		y: 48.04
	},
	
	//Stairs node data
	
	{
		id:"stairs_1",
		type:"stairs",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 47.94
	},
	{
		id:"stairs_2",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 23.64,
		y: 6.86
	},
	{
		id:"stairs_3",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 67.85,
		y: 6.43
	},
	{
		id:"stairs_4",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 77.44,
		y: 6.43
	},
	{
		id:"stairs_5",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 97.12,
		y: 6.43
	},
	{
		id:"stairs_6",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 64.9,
		y: 92.83
	},
	{
		id:"stairs_7",
		type:"stairs",
		map: "GENERAL_MAP_FINAL.png",
		x: 27.45,
		y: 92.83
	}
	
];