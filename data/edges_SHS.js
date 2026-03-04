const edges = {
	//first floor
	Principal : [
		{ to: "path1_3", weight: 2 }
	],
	Finance : [
		{ to: "path1_4", weight: 2 }
	],
	Registrar : [
		{ to: "path1_5", weight: 2 }
	],
	CR_I : [
		{ to: "path1_2", weight: 5 }
	],
	path1_1 : [
		{ to: "path1_2", weight: 2 },
		{ to: "stair1_1", weight: 5 }
	],
	path1_2 : [
		{ to: "path1_1", weight: 2 },
		{ to: "path1_3", weight: 4 },
		{ to: "CR_I", weight: 5 }
	],
	path1_3 : [
		{ to: "Principal", weight: 2 },
		{ to: "path1_2", weight: 4 },
		{ to: "path1_4", weight: 7 }		
	],
	path1_4 : [
		{ to: "Finance", weight: 2 },
		{ to: "path1_3", weight: 7 },
		{ to: "path1_5", weight: 4 }		
	],
	path1_5 : [
		{ to: "Registrar", weight: 2 },
		{ to: "path1_4", weight: 5 },
		{ to: "path1_6", weight: 3 }		
	],
	path1_6 : [
		{ to: "path1_5", weight: 3 },
		{ to: "stair1_2", weight: 5 }		
	],
	stair1_1 : [
		{ to: "path1_1", weight: 5 },
		{ to: "stair2_1", weight: 3 }		
	],
	stair1_2 : [
		{ to: "path1_6", weight: 5 },
		{ to: "stair2_2", weight: 3 }		
	],
	//2nd floor
	Lovelace : [
		{ to: "path2_3", weight: 2 }		
	],
	Danajon : [
		{ to: "path2_4", weight: 2 }		
	],
	CR_II : [
		{ to: "path2_2", weight: 5 }	
	],
	path2_1 : [
		{ to: "stair2_1", weight: 5 },
		{ to: "path2_2", weight: 2 },		
	],
	path2_2 : [
		{ to: "CR_II", weight: 5 },
		{ to: "path2_1", weight: 2 },
		{ to: "path2_3", weight: 4 }		
	],
	path2_3 : [
		{ to: "Lovelace", weight: 2 },
		{ to: "path2_2", weight: 4 },
		{ to: "path2_4", weight: 7 }		
	],
	path2_4 : [
		{ to: "Danajon", weight: 2 },
		{ to: "path2_3", weight: 7 },
		{ to: "path2_5", weight: 5 }		
	],
	path2_5 : [
		{ to: "stair2_2", weight: 5 },
		{ to: "path2_4", weight: 5 }		
	],
	stair2_1 : [
		{ to: "path2_1", weight: 5 },
		{ to: "stair1_1", weight: 3 },
		{ to: "stair3_1", weight: 3 }		
	],
	stair2_2 : [
		{ to: "path2_5", weight: 5 },
		{ to: "stair1_2", weight: 3 },
		{ to: "stair3_2", weight: 3 }		
	],
	
	//third floor
	Hahn : [
		{ to: "path3_3", weight: 2 }		
	],
	Elion : [
		{ to: "path3_4", weight: 2 }		
	],
	CR_III : [
		{ to: "path3_2", weight: 5 }	
	],
	path3_1 : [
		{ to: "stair3_1", weight: 5 },
		{ to: "path3_2", weight: 2 },		
	],
	path3_2 : [
		{ to: "CR_III", weight: 5 },
		{ to: "path3_1", weight: 2 },
		{ to: "path3_3", weight: 4 }		
	],
	path3_3 : [
		{ to: "Hahn", weight: 2 },
		{ to: "path3_2", weight: 4 },
		{ to: "path3_4", weight: 7 }		
	],
	path3_4 : [
		{ to: "Elion", weight: 2 },
		{ to: "path3_3", weight: 7 },
		{ to: "path3_5", weight: 5 }		
	],
	path3_5 : [
		{ to: "stair3_2", weight: 5 },
		{ to: "path3_4", weight: 5 }		
	],
	stair3_1 : [
		{ to: "path3_1", weight: 5 },
		{ to: "stair2_1", weight: 3 },
		{ to: "stair4_1", weight: 3 }		
	],
	stair3_2 : [
		{ to: "path3_5", weight: 5 },
		{ to: "stair4_2", weight: 3 },
		{ to: "stair2_2", weight: 3 }		
	],
	
	//Fourth floor
	
	Ayala : [
		{ to: "path4_3", weight: 2 }		
	],
	Vesalius : [
		{ to: "path4_4", weight: 2 }		
	],
	CR_IV : [
		{ to: "path4_2", weight: 5 }	
	],
	path4_1 : [
		{ to: "stair4_1", weight: 5 },
		{ to: "path4_2", weight: 2 },		
	],
	path4_2 : [
		{ to: "CR_IV", weight: 5 },
		{ to: "path4_1", weight: 2 },
		{ to: "path4_3", weight: 4 }		
	],
	path4_3 : [
		{ to: "Ayala", weight: 2 },
		{ to: "path4_2", weight: 4 },
		{ to: "path4_4", weight: 7 }		
	],
	path4_4 : [
		{ to: "Vesalius", weight: 2 },
		{ to: "path4_3", weight: 7 },
		{ to: "path4_5", weight: 5 }		
	],
	path4_5 : [
		{ to: "stair4_2", weight: 5 },
		{ to: "path4_4", weight: 5 }		
	],
	stair4_1 : [
		{ to: "path4_1", weight: 5 },
		{ to: "stair3_1", weight: 3 }	
	],
	stair4_2 : [
		{ to: "path4_5", weight: 5 },
		{ to: "stair3_2", weight: 3 }		
	]
	
};
	
	