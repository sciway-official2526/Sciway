const edges = {
	Gate: [
		{ to: "path1_1", weight: 2 }
	],
	
	path1_1: [
		{ to: "Gate", weight: 2 },
		{ to: "path1_2", weight: 5 },
		{ to: "path1_18", weight: 3 },
		{ to: "stairs_7", weight: 4 }
	],
	
	path1_2: [
		{ to: "path1_1", weight: 5 },
		{ to: "path1_3", weight: 8 }
	],
	
	path1_3: [
		{ to: "path1_2", weight: 8 },
		{ to: "Fajardo", weight: 2 },
		{ to: "path1_14", weight: 5},
		{ to: "path1_3",  weight: 3},
		{ to: "path1_17",  weight: 1 }		
		
	],
	
	Fajardo: [
		{ to: "path1_3", weight: 2 },
		{ to: "path1_4", weight: 3 }
	],
	
	path1_4: [
		{ to: "Fajardo", weight: 3 },
		{ to: "path1_10", weight: 3 },
		{ to: "path1_5", weight: 4 }
	],
	path1_5: [
		{ to: "path1_4", weight: 4 },
		{ to: "GSP", weight: 3 },
		{ to: "path1_6", weight: 4}
	],
	
	GSP : [
		{ to: "path1_5", weight: 3 }
	],
	
	path1_6: [
		{ to: "path1_5", weight: 4},
		{ to: "path1_7", weight: 4 },
		{ to: "path1_12", weight: 5}
		//{ to: "path2_15", weight: 8 }
	],
	
	path1_7: [
		{ to: "path1_6", weight: 4 },
		{ to: "path1_8", weight: 3 },
		{ to: "path1_15", weigt: 2 },
		{ to: "path2_16", weight: 3 }
	],
	
	path1_8 : [
		{ to: "path1_7", weight: 3 },
		{ to: "path1_9", weight: 2 },
		{ to: "MAPEH", weight: 1}
	],
	
	MAPEH : [
		{ to: "path1_8", weight: 1}
	],
	
	path1_9: [
		{ to: "path1_8", weight: 2 },
		{ to: "Discipline", weight: 1 }
	],
	
	Discipline: [
		{ to: "path1_9", weight: 1 }
	],
	
	path1_10 : [
		{ to: "path1_4", weight: 3 },
		{ to: "path1_11", weight: 1 }
	],
	
	path1_11 : [
		{ to: "path1_10", weight: 1 },
		{ to: "CR", weight: 1 }
	],
	
	CR : [
		{ to: "path1_11", weight: 1}
	],
	
	path1_12 : [
		{ to: "path1_6", weight: 5},
		{ to: "path1_13", weight: 1 }
	],
	
	path1_13 : [
		{ to: "path1_12", weight: 1 },
		{ to: "path1_14", weight: 1 }
	],
	
	path1_14 : [
		{ to: "path1_17", weight: 5},
		{ to: "path1_13", weight: 1 },
		{ to: "Gym", weight: 8 }
	],
	
	Gym : [
		{ to: "path1_14", weight: 8 },
		{ to: "path2_13", weight: 5 }
	],
	
	path1_15 : [
		{ to: "path1_7", weigt: 2 },
		{ to: "stairs_2", weight: 2 }
	],
	
	path1_16 : [
		{ to: "stairs_2", weight: 2 },
		{ to: "path1_16", weight: 11 }
	],
	
	path1_17 : [
		{ to: "path1_14", weight: 5},
		{ to: "path1_3",  weight: 1 }
	],
	
	path1_18 : [
		{ to: "path1_17", weight: 2 },
		{ to: "path2_1", weight: 8 }
	],
	
	path2_1 : [
		{ to: "path1_18", weight: 10 },
		{ to: "path2_2", weight: 4 },
		{ to: "Security", weight: 3 }
	],
	
	path2_2 : [
		{ to: "path2_1", weight: 4 },
		{ to: "path2_8", weight: 6 },
		{ to: "path2_3", weight: 9 }
	],
	
	path2_3 : [
		{ to: "path2_4", weight: 2 },
		{ to: "path2_2", weight: 9 },
		{ to: "path2_5", weight: 4 }
	],
	
	path2_4 : [
		{ to: "path2_3", weight: 2 },
		{ to: "path2_11", weight: 5 }
	],
	
	path2_5 : [
		{ to: "path2_3", weight: 4 },
		{ to: "stairs_6", weight: 3 }
	],
	
	stairs_6 : [
		{ to: "Security", weight: 1 },
		{ to: "path2_5", weight: 3 }
	],
	
	stairs_7 : [
		{ to: "path1_1", weight: 4 },
		{ to: "Security", weight: 1 }
	],
	
	path2_8 : [
		{ to: "path2_2", weight: 6 },
		{ to: "path2_9", weight: 3 },
		{ to: "path2_12", weight: 3 }
	],
	
	path2_9 : [
		{ to: "path2_10", weight: 4 },
		{ to: "path2_8", weight: 3 },
		{ to: "SHS_Faculty", weight: 5 }
	],
	
	SHS_Faculty : [
		{ to: "path2_9", weight: 5 }
	],
	
	path2_10 : [
		{ to: "path2_11", weight: 3 },
		{ to: "path2_9", weight: 4 },
		{ to: "AVR", weight: 5 }
	],
	
	AVR : [
		{ to: "path2_10", weight: 5 }
	],
	
	path2_11 : [
		{ to: "path2_4", weight: 5 },
		{ to: "path3_17", weight: 2 },
		{ to: "path2_10", weight: 3 }
	],
	
	path2_12 : [
		{ to: "Gym", weight: 1 },
		{ to: "path2_8", weight: 3 },
		{ to: "path3_16", weight: 5 }
	],
	
	path2_13 : [
		{ to: "Gym", weight: 5 },
		{ to: "path2_14", weight: 2 }
	],
	
	path2_14 : [
		{ to: "path2_18", weight: 3 },
		{ to: "path2_15", weight: 6 },
		{ to: "path2_13", weight: 2 }
	],
	
	path2_15 : [
		{ to: "Canteen", weight: 2 },
		{ to: "path2_14", weight: 6 }
		//{ to: "path1_6", weight: 8 }
	],
	
	path2_16 : [
		{ to: "Canteen", weight: 2 },
		{ to: "path2_17", weight: 1 },
		{ to: "path1_7", weight: 3 }
	],
	
	path2_17 : [
		{ to: "path2_18", weight: 5 },
		{ to: "path2_16", weight: 1 }
	],
	
	path2_18 : [
		{ to: "path2_19", weight: 2 },
		{ to: "path2_17", weight: 5 },
		{ to: "path2_14", weight: 3 }
	],
	
	path2_19 : [
		{ to: "Perez", weight: 2 },
		{ to: "path2_20", weight: 11 },
		{ to: "path2_18", weight: 2 }
	],
	
	path2_20 : [
		{ to: "path2_21", weight: 4 },
		{ to: "path2_19", weight: 11 },
		{ to: "path3_1", weight: 3 }
	],
	
	path2_21 : [
		{ to: "Perez", weight: 11 },
		{ to: "stairs_3", weight: 1 },
		{ to: "path2_20", weight: 4 }
	],
	
	Perez : [
		{ to: "path1_16", weight: 11 },
		{ to: "path2_19", weight: 2 },
		{ to: "path2_21", weight: 11 }
	],
	
	Canteen : [
		{ to: "path2_16", weight: 2 },
		{ to: "path1_15", weight: 2 }
	],
	
	Security : [
		{ to: "path2_1", weight: 3 },
		{ to: "stairs_6", weight: 1 },
		{ to: "stairs_7", weight: 1 }
	],
	
	stairs_3 : [
		{ to: "path2_21", weight: 1 }
	],
	
	stairs_2 : [
		{ to: "path1_16", weight: 2 },
		{ to: "path1_15", weight: 2 }
	]
};
	
	
	