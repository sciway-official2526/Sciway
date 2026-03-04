const edges = {
	//first floor
	Lieber: [
		{ to: "path1_2", weight: 3 }
	],
	CompLab: [
		{ to: "path1_3", weight: 3 }
	],
	MT: [
		{ to: "path1_4", weight: 4 }
	],
	Bernoulli: [
		{ to: "path1_5", weight: 3 }
	],
	Shannon: [
		{ to: "path1_6", weight: 3 }
	],
	stair1_1: [
		{ to: "path1_1", weight: 5 },
		{ to: "stair2_1", weight: 5 }
	],
	stair1_2: [
		{ to: "path1_7", weight: 5 },
		{ to: "stair2_2", weight: 5 }
	],
	path1_1: [
		{ to: "stair1_1", weight: 5 },
		{ to: "path1_2", weight: 3 }
	],
	path1_2: [
		{ to: "path1_1", weight: 3 },
		{ to: "path1_3", weight: 3 },
		{ to: "Lieber", weight: 3  }
	],
	path1_3: [
		{ to: "path1_2", weight: 3 },
		{ to: "path1_4", weight: 3 },
		{ to: "Lieber", weight: 3 } 
	],
	path1_4: [
		{ to: "path1_3", weight: 2 },
		{ to: "path1_5", weight: 3 },
		{ to: "MT", weight: 4 } 
	],
	path1_5: [
		{ to: "path1_4", weight: 3 },
		{ to: "path1_6", weight: 4 },
		{ to: "Bernoulli", weight: 3 } 
	],
	path1_6: [
		{ to: "path1_5", weight: 4 },
		{ to: "path1_7", weight: 4 },
		{ to: "Shannon", weight: 3 } 
	],
	path1_7: [
		{ to: "path1_6", weight: 4 },
		{ to: "stair1_2", weight: 5 }
	],
//second floor
	NewComp: [
		{ to: "path2_2", weight: 3 }
	],
	Stephenson: [
		{ to: "path2_3", weight: 3 }
	],
	Mayer: [
		{ to: "path2_4", weight: 3 }
	],
	Pacioli: [
		{ to: "path2_5", weight: 3 }
	],
	stair2_1: [
		{ to: "path2_1", weight: 5 },
		{ to: "stair1_1", weight: 5 }
	],
	stair2_2: [
		{ to: "path2_6", weight: 5 },
		{ to: "stair1_2", weight: 5 }
	],
	path2_1: [
		{ to: "stair2_1", weight: 5 },
		{ to: "path2_2", weight: 3 }
	],
	path2_2: [
		{ to: "path2_1", weight: 3 },
		{ to: "path2_3", weight: 3 },
		{ to: "NewComp", weight: 3 }
	],
	path2_3: [
		{ to: "path2_2", weight: 3 },
		{ to: "path2_4", weight: 3 },
		{ to: "Stephenson", weight: 3 }
	],
	path2_4: [
		{ to: "path2_3", weight: 3 },
		{ to: "path2_5", weight: 3 },
		{ to: "Mayer", weight: 3 }
	],
	path2_5: [
		{ to: "path2_4", weight: 3 },
		{ to: "path2_6", weight: 3 },
		{ to: "Pacioli", weight: 3 }
	],
	path2_6: [
		{ to: "stair2_2", weight: 5 },
		{ to: "path2_5", weight: 3 }
	]
	
};
	
	