const edges = {
	//first floor
	Yamanaka : [
		{ to: "path1_8", weight: 2 }
	],
	Venter : [
		{ to: "path1_7", weight: 2 }
	],
	ChemLab : [
		{ to: "path1_6", weight: 2 }
	],
	HT : [
		{ to: "path1_5", weight: 2 }
	],
	Nicolelis : [
		{ to: "path1_4", weight: 2 }
	],
	MathDept : [
		{ to: "path1_3", weight: 2 }
	],
	SSLG : [
		{ to: "path1_2", weight: 2 }
	],
	MAPEH : [
		{ to: "path1_11", weight: 3 }
	],
	stair1_1 : [
		{ to: "path1_1", weight: 5 },
		{ to: "stair2_1", weight: 5 }
	],
	stair1_2 : [
		{ to: "path1_9", weight: 5 },
		{ to: "stair2_2", weight: 5 }
	],
	path1_1 : [
		{ to: "stair1_1", weight: 5 },
		{ to: "path1_2", weight: 1 }
	],
	path1_2 : [
		{ to: "path1_1", weight: 1 },
		{ to: "path1_3", weight: 3 },
		{ to: "SSLG", weight: 2 }
	],
	path1_3 : [
		{ to: "path1_4", weight: 3 },
		{ to: "path1_2", weight: 3 },
		{ to: "MathDept", weight: 2 }
	],
	path1_4 : [
		{ to: "path1_3", weight: 3 },
		{ to: "path1_5", weight: 3 },
		{ to: "Nicolelis", weight: 2 }
	],
	path1_5 : [
		{ to: "path1_4", weight: 3 },
		{ to: "path1_6", weight: 3 },
		{ to: "HT", weight: 2 }
	],
	path1_6 : [
		{ to: "path1_5", weight: 3 },
		{ to: "path1_7", weight: 3 },
		{ to: "ChemLab", weight: 2 }
	],
	path1_7 : [
		{ to: "path1_6", weight: 3 },
		{ to: "path1_8", weight: 3 },
		{ to: "Venter", weight: 2 }
	],
	path1_8 : [
		{ to: "path1_7", weight: 3 },
		{ to: "path1_9", weight: 3 },
		{ to: "Yamanaka", weight: 2 }
	],
	path1_9 : [
		{ to: "stair1_2", weight: 5 },
		{ to: "path1_8", weight: 3 },
		{ to: "path1_10", weight: 3 }
	],
	path1_10 : [
		{ to: "path1_11", weight: 2 },
		{ to: "path1_9", weight: 3 }
	],
	path1_11 : [
		{ to: "path1_10", weight: 2 },
		{ to: "MAPEH", weight: 2 }
	],
//2nd Floor route
	DelMundo : [
		{ to: "path2_2", weight: 2 }
	],
	Zara : [
		{ to: "path2_3", weight: 2 }
	],
	Quisumbing : [
		{ to: "path2_4", weight: 2 }
	],
	Alcala : [
		{ to: "path2_5", weight: 2 }
	],
	Olivera : [
		{ to: "path2_6", weight: 2 }
	],
	Juliano : [
		{ to: "path2_7", weight: 2 }
	],
	stair2_1 : [
		{ to: "path2_1", weight: 5 },
		{ to: "stair1_1", weight: 5 }
	],
	stair2_2 : [
		{ to: "path2_8", weight: 5 },
		{ to: "stair1_2", weight: 5 }
	],
	path2_1 : [
		{ to: "stair2_1", weight: 5 },
		{ to: "path2_2", weight: 3 }
	],
	path2_2 : [
		{ to: "path2_1", weight: 3 },
		{ to: "path2_3", weight: 3 },
		{ to: "DelMundo", weight: 2 }
	],
	path2_3 : [
		{ to: "path2_2", weight: 3 },
		{ to: "path2_4", weight: 3 },
		{ to: "Zara", weight: 2 }
	],
	path2_4 : [
		{ to: "path2_3", weight: 3 },
		{ to: "path2_5", weight: 3 },
		{ to: "Quisumbing", weight: 2 }
	],
	path2_5 : [
		{ to: "path2_4", weight: 3 },
		{ to: "path2_6", weight: 3 },
		{ to: "Alcala", weight: 2 }
	],
	path2_6 : [
		{ to: "path2_5", weight: 3 },
		{ to: "path2_7", weight: 3 },
		{ to: "Olivera", weight: 2 }
	],
	path2_7 : [
		{ to: "path2_6", weight: 3 },
		{ to: "path2_8", weight: 3 },
		{ to: "Juliano", weight: 2 }
	],
	path2_8 : [
		{ to: "stair2_2", weight: 5 },
		{ to: "path2_7", weight: 3}
	]
};
	
	