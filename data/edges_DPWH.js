const edges = {
	//first floor
	Verde : [
		{ to: "path1_4", weight: 2 }
	],
	
	Sierra : [
		{ to: "path1_3", weight: 2 }
	],
	
	CR : [
		{ to: "path1_2", weight: 4 }
	],
	
	path1_1 : [
		{ to: "stair1_1", weight: 5 },
		{ to: "path1_2", weight: 1 }
	],
	
	path1_2 : [
		{ to: "CR", weight: 4 },
		{ to: "path1_3", weight: 5 }
	],
	
	path1_3 : [
		{ to: "Sierra", weight: 2 },
		{ to: "path1_4", weight: 6 },
		{ to: "path1_2", weight: 5 }
	],
	path1_4 : [
		{ to: "Verde", weight: 2 },
		{ to: "path1_3", weight: 6 },
		{ to: "path1_5", weight: 5 }
	],
	path1_5 : [
		{ to: "stair1_2", weight: 5 },
		{ to: "path1_4", weight: 5 }
	],
	stair1_1 : [
		{ to: "path1_1", weight: 5 },
		{ to: "stair2_1", weight: 5 } //link to 2nd floor
	],
	stair1_2 : [
		{ to: "path1_5", weight: 5 },
		{ to: "stair2_2", weight: 5 } //link to 2nd floor
	],
	
	//2nd floor
	Nido : [
		{ to: "path2_3", weight: 2 }
	],
	Malampaya : [
		{ to: "path2_2", weight: 2 }
	],
	path2_1 : [
		{ to: "path2_2", weight: 5 },
		{ to: "stair2_1", weight: 5 }
	],
	path2_2 : [
		{ to: "path2_1", weight: 5 },
		{ to: "path2_3", weight: 6 },
		{ to: "Malampaya", weight: 2 }	
	],
	path2_3 : [
		{ to: "path2_2", weight: 6 },
		{ to: "stair2_4", weight: 5 },
		{ to: "Nido", weight: 2 }
	],
	path2_4 : [
		{ to: "path2_3", weight: 5 },
		{ to: "stair2_2", weight: 5 }
	],
	stair2_1 : [
		{ to: "path2_1", weight: 5 },
		{ to: "stair1_1", weight: 5 }, //Link to 1st floor
		{ to: "stair3_1", weight: 5 } //Link to 3rd floor
	],
	stair2_2 : [
		{ to: "path2_4", weight: 5 },
		{ to: "stair1_2", weight: 5 }, //Link to 1st floor
		{ to: "stair3_2", weight: 5 } //Link to 3rd floor
	],
	
	//3rd floor
	Tubbataha : [
		{ to: "path3_3", weight: 2 }
	],
	Hamaguitan : [
		{ to: "path3_2", weight: 2 }
	],
	path3_1 : [
		{ to: "path3_2", weight: 5 },
		{ to: "stair3_1", weight: 5 }
	],
	path3_2 : [
		{ to: "Hamaguitan", weight: 2 },
		{ to: "path3_3", weight: 6 },
		{ to: "path3_1", weight: 5 }
	],
	path3_3 : [
		{ to: "Tubbataha", weight: 2 },
		{ to: "path3_4", weight: 5 },
		{ to: "path3_2", weight: 6 }
	],
	path3_4 : [
		{ to: "path3_3", weight: 5 },
		{ to: "stair3_2", weight: 5 }
	],
	stair3_1 : [
		{ to: "path3_1", weight: 5 },
		{ to: "stair2_1", weight: 5 } //Link to 2nd floor
	],
	stair3_2 : [
		{ to: "path3_4", weight: 5 },
		{ to: "stair2_2", weight: 5 } //Link to 2nd floor
	]
	
};
	
	