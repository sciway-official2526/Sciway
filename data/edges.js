const edges = {
//first section
	
	Gate: [
		{ to: "path1_1", weight: 2 }
	],
	Fajardo: [
		{ to: "path1_3", weight: 2 },
		{ to: "path1_5", weight: 7 },
	],
	GSP: [
		{ to: "path1_8", weight: 3 }
	],
	CR: [
		{ to: "path1_7", weight: 3 }
	],
	Discipline: [
		{ to: "path1_14", weight: 3 }
	],
	MAPEH: [
		{ to: "path1_15", weight: 3 }
	],
	Canteen: [
		{ to: "path1_19", weight: 4 }
	],
	path1_1: [
		{ to: "path1_13", weight: 4 },
		{ to: "path1_2", weight: 5 },
		{ to: "Gate", weight: 2 }
	],
	path1_2: [
		{ to: "path1_3", weight: 7 },
		{ to: "path1_1", weight: 5 }
	],
	path1_3: [
		{ to: "path1_4", weight: 3 },
		{ to: "Fajardo", weight: 2 }
	],
	path1_4: [
		{ to: "path1_3", weight: 4 },
		{ to: "path1_12", weight: 5 }
	],
	path1_5: [
		{ to: "path1_8", weight: 3 },
		{ to: "path1_6", weight: 3 },
		{ to: "Fajardo", weight: 6 }
	],
	path1_6: [
		{ to: "path1_7", weight: 2 },
		{ to: "path1_14", weight: 2 },
		{ to: "path1_5", weight: 3 }
	],
	path1_7: [
		{ to: "path1_6", weight: 2 },
		{ to: "CR", weight: 2 }
	],
	path1_8: [
		{ to: "path1_5", weight: 3 },
		{ to: "path1_9", weight: 3 },
		{ to: "GSP", weight: 2 }
	],
	path1_9: [
		{ to: "path1_16", weight: 4 },
		{ to: "path1_8", weight: 3 },
		{ to: "path1_22", weight: 2 }
	],
	path1_10: [
		{ to: "path1_11", weight: 2 },
		{ to: "path1_22", weight: 2 }
	],
	path1_11: [
		{ to: "path1_12", weight: 2 },
		{ to: "path1_10", weight: 2 }
	],
	path1_12: [
		{ to: "path1_4", weight: 5 },
		{ to: "path1_11", weight: 2 },
		{ to: "path1_13", weight: 6 },
		{ to: "path1_21", weight: 5 }
	],
	path1_13: [
		{ to: "path1_12", weight: 6 },
		{ to: "path1_20", weight: 3 },
		{ to: "path1_1", weight: 4 }
	],
	path1_14: [
		{ to: "path1_15", weight: 3 },
		{ to: "path1_6", weight: 2 },
		{ to: "Discipline", weight: 3 }
	],
	path1_15: [
		{ to: "path1_15", weight: 3 },
		{ to: "path1_16", weight: 3 },
		{ to: "MAPEH", weight: 3 }
	],
	path1_16: [
		{ to: "path1_15", weight: 3 },
		{ to: "path1_9", weight: 4 },
		{ to: "path1_17", weight: 5 }
	],
	path1_17: [
		{ to: "path1_16", weight: 5 },
		{ to: "path1_18", weight: 1 }
	],
	path1_18: [
		{ to: "path1_17", weight: 1 },
		{ to: "path2_16", weight: 6 }
	],
	path1_19: [
		{ to: "Canteen", weight: 3 },
		{ to: "path2_1", weight: 6 },
		{ to: "path1_21", wieght: 5 }
	],
	path1_20: [
		{ to: "SB", weight: 8 },
		{ to: "path1_13", weight: 2 }
	],
	path1_21: [
		{ to: "path1_12", weight: 4 },
		{ to: "path1_19", weight: 5 },
		{ to: "Gym", weight: 5 }
	],
	path1_22: [
		{ to: "path1_9", weight: 3 },
		{ to: "path1_19", weight: 6 },
		{ to: "path1_10", weight: 2 }
	],
	

//second section

	Perez: [
		{ to: "path2_16", weight: 3 },
		{ to: "path2_21", weight: 7 }
	],
	SHSF: [
		{ to: "path2_12", weight: 3 }
	],
	AVR: [
		{ to: "path2_13", weight: 3 }
	],
	JHS: [
		{ to: "path2_17", weight: 3 }
	],
	CRg: [
		{ to: "path2_22", weight: 3 }
	],
	SB: [
		{ to: "path2_11", weight: 5 },
		{ to: "path2_19", weight: 6 },
		{ to: "path1_20", weight: 8 }
	],
	Gym: [
		{ to: "path2_10", weight: 4 },
		{ to: "path2_2", weight: 5 },
		{ to: "path1_21", weight: 5 }
	],
	path2_1: [
		{ to: "path2_16", weight: 5 },
		{ to: "path2_2", weight: 3 },
		{ to: "path1_19", weight: 6 }
	],
	path2_2: [
		{ to: "path2_1", weight: 3 },
		{ to: "path2_3", weight: 5 },
		{ to: "Gym", weight: 5 }
	],
	path2_3: [
		{ to: "path2_2", weight: 5 },
		{ to: "path2_4", weight: 5 }
	],
	path2_4: [
		{ to: "path2_3", weight: 5 },
		{ to: "path2_5", weight: 2 }
	],
	path2_5: [
		{ to: "path2_6", weight: 3 },
		{ to: "path2_4", weight: 2 }
	],
	path2_6: [
		{ to: "path2_7", weight: 4 },
		{ to: "path2_5", weight: 3 },
		{ to: "path3_13", weight: 5 }
	],
	path2_7: [
		{ to: "path2_6", weight: 4 },
		{ to: "path2_8", weight: 2 },
		{ to: "path2_15", weight: 5 }
	],
	path2_8: [
		{ to: "path2_7", weight: 2 },
		{ to: "path2_9", weight: 3 },
		{ to: "path2_14", weight: 5 }
	],
	path2_9: [
		{ to: "path2_8", weight: 3 },
		{ to: "path2_10", weight: 5 }
	],
	path2_10: [
		{ to: "Gym", weight: 4 },
		{ to: "path2_12", weight: 5 },
		{ to: "path2_9", weight: 5 }
	],
	path2_11: [
		{ to: "path2_12", weight: 3 },
		{ to: "SB", weight: 5 }
	],
	path2_12: [
		{ to: "path2_12", weight: 5 },
		{ to: "path2_11", weight: 3 },
		{ to: "path2_13", weight: 5 },
		{ to: "SHSF", weight: 3 }
	],
	path2_13: [
		{ to: "path2_12", weight: 5 },
		{ to: "path2_14", weight: 3 },
		{ to: "AVR", weight: 3 }
	],
	path2_14: [
		{ to: "path2_17", weight: 3 },
		{ to: "path2_13", weight: 3 },
		{ to: "path2_15", weight: 2 }
	],
	path2_15: [
		{ to: "path2_14", weight: 2 },
		{ to: "path2_7", weight: 4 },
		{ to: "path3_14", weight: 5 }
	],
	path2_16: [
		{ to: "path2_1", weight: 5 },
		{ to: "path1_18", weight: 6 },
		{ to: "Perez", weight: 2 }
	],
	path2_17: [
		{ to: "path2_18", weight: 3 },
		{ to: "path2_14", weight: 3 },
		{ to: "JHS", weight: 3 }
	],
	path2_18: [
		{ to: "path2_17", weight: 3 },
		{ to: "path2_19", weight: 2 }
	],
	path2_19: [
		{ to: "path2_18", weight: 2 },
		{ to: "SB", weight: 6 }
	],
	path2_20: [
		{ to: "path2_10", weight: 4 },
		{ to: "path2_2", weight: 5 },
		{ to: "path1_12", weight: 9 }
	],
	path2_21: [
		{ to: "Perez", weight: 7 },
		{ to: "path2_22", weight: 2 }
	],
	path2_22: [
		{ to: "path2_21", weight: 2 },
		{ to: "CRg", weight: 3 },
		{ to: "path3_1", weight: 3 }
	],
	
//Third section
	
	DPWH: [
		{ to: "path3_3", weight: 4 },
		{ to: "path3_6", weight: 3 }
	],
	CanteenMR: [
		{ to: "path3_1", weight: 3 }
	],
	Library: [
		{ to: "path3_5", weight: 6 }
	],
	SPJ: [
		{ to: "path3_7", weight: 2 }
	],
	CRb: [
		{ to: "path3_9", weight: 3 }
	],
	SHS: [
		{ to: "path3_13", weight: 4 },
		{ to: "path3_15", weight: 4 },
		{ to: "Finance", weight: 3 }
	],
	Registrar: [
		{ to: "path3_13", weight: 3 }
	],
	Principal: [
		{ to: "path3_15", weight: 3 }
	],
	Finance: [
		{ to: "SHS", weight: 3 }
	],
	path3_1: [
		{ to: "CanteenMR", weight: 3 },
		{ to: "path3_2", weight: 2 },
		{ to: "path2_22", weight: 3 }
	],
	path3_2: [
		{ to: "path3_1", weight: 2 },
		{ to: "path3_3", weight: 3 }
	],
	path3_3: [
		{ to: "path3_4", weight: 3 },
		{ to: "DPWH", weight: 4 },
		{ to: "path3_2", weight: 3 }
	],
	path3_4: [
		{ to: "path3_5", weight: 3 },
		{ to: "path3_3", weight: 3 },
		{ to: "path3_10", weight: 3 }
	],
	path3_5: [
		{ to: "path3_4", weight: 3 },
		{ to: "path3_6", weight: 2 },
		{ to: "Library", weight: 6 }
	],
	path3_6: [
		{ to: "path3_7", weight: 4 },
		{ to: "path3_5", weight: 2 },
		{ to: "DPWH", weight: 3 }
	],
	path3_7: [
		{ to: "path3_8", weight: 4 },
		{ to: "path3_6", weight: 4 },
		{ to: "SPJ", weight: 2 }
	],
	path3_8: [
		{ to: "path3_7", weight: 4 },
		{ to: "path3_9", weight: 2 }
	],
	path3_9: [
		{ to: "CRb", weight: 3 },
		{ to: "path3_8", weight: 2 }
	],
	path3_10: [
		{ to: "path3_4", weight: 3 },
		{ to: "path3_11", weight: 3 }
	],
	path3_11: [
		{ to: "path3_10", weight: 3 },
		{ to: "path3_12", weight: 3 }
	],
	path3_12: [
		{ to: "path3_11", weight: 3 },
		{ to: "path3_13", weight: 3 }
	],
	path3_13: [
		{ to: "path3_12", weight: 3 },
		{ to: "Registrar", weight: 3 },
		{ to: "SHS", weight: 4 },
		{ to: "path2_6", weight: 5 }
	],
	path3_14: [
		{ to: "path3_15", weight: 2 },
		{ to: "path2_15", weight: 5 }
	],
	path3_15: [
		{ to: "path3_14", weight: 2 },
		{ to: "SHS", weight: 4 },
		{ to: "Principal", weight: 3 }
	]
};
	
	
	