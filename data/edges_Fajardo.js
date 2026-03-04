const edges = {
	//first floor
	Care: [
		{ to: "path1_1", weight: 3 }
	],
	Clinic: [
		{ to: "path1_2", weight: 3 }
	],
	Belcher: [
		{ to: "path1_3", weight: 3 }
	],
	Kurzweil: [
		{ to: "path1_4", weight: 3 }
	],
	Simmons: [
		{ to: "path1_6", weight: 3 }
	],
	Planck: [
		{ to: "path1_7", weight: 3 }
	],
	stair1_1: [
		{ to: "path1_5", weight: 5 },
		{ to: "stair2_1", weight: 4 }
	],
	path1_1: [
		{ to: "Care", weight: 3 },
		{ to: "path1_2", weight: 3 }
	],
	path1_2: [
		{ to: "Clinic", weight: 3 },
		{ to: "path1_1", weight: 3 },
		{ to: "path1_3", weight: 3 }
	],
	path1_3: [
		{ to: "Belcher", weight: 3 },
		{ to: "path1_2", weight: 3 },
		{ to: "path1_4", weight: 3 }
	],
	path1_4: [
		{ to: "Kurzweil", weight: 3 },
		{ to: "path1_3", weight: 3 },
		{ to: "path1_5", weight: 3 }
	],
	path1_5: [
		{ to: "stair1_1", weight: 5 },
		{ to: "path1_4", weight: 3 },
		{ to: "path1_6", weight: 3 }
	],
	path1_6: [
		{ to: "Simmons", weight: 3 },
		{ to: "path1_5", weight: 3 },
		{ to: "path1_7", weight: 3 }
	],
	path1_7: [
		{ to: "Planck", weight: 3 },
		{ to: "path1_6", weight: 3 }
	],
//second floor
	Kaist: [
		{ to: "path2_1", weight: 3 }
	],
	Fraunhofer: [
		{ to: "path2_2", weight: 3 }
	],
	Cern: [
		{ to: "path2_4", weight: 3 }
	],
	Kavli: [
		{ to: "path25", weight: 3 }
	],
	Riken: [
		{ to: "path2_6", weight: 3 }
	],
	stair2_1: [
		{ to: "path2_3", weight: 5 },
		{ to: "stair1_1", weight: 4 }
	],
	path2_1: [
		{ to: "Kaist", weight: 3 },
		{ to: "path2_2", weight: 3 }
	],
	path2_2: [
		{ to: "Fraunhofer", weight: 3 },
		{ to: "path2_1", weight: 3 },
		{ to: "path2_3", weight: 3 }
	],
	path2_3: [
		{ to: "stair2_1", weight: 5 },
		{ to: "path2_2", weight: 3 },
		{ to: "path2_4", weight: 3 }
	],
	path2_4: [
		{ to: "Cern", weight: 3 },
		{ to: "path2_3", weight: 3 },
		{ to: "path2_5", weight: 3 }
	],
	path2_5: [
		{ to: "Kavli", weight: 3 },
		{ to: "path2_4", weight: 3 },
		{ to: "path2_6", weight: 3 }
	],
	path2_6: [
		{ to: "Riken", weight: 3 },
		{ to: "path2_5", weight: 3 }
	]
	
};
	
	