const nodes = [
//1st floor nodes
	{
			id:"MAPEH",
			name:"MAPEH Department",
			map:"PEREZ_FINALBLDG_1.png",
			x: 9.31,
			y: 56.33,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Yamanaka",
			name:"8-Yamanaka",
			map:"PEREZ_FINALBLDG_1.png",
			x: 35.7,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Venter",
			name:"8-Venter",
			map:"PEREZ_FINALBLDG_1.png",
			x: 45.38,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"ChemLab",
			name:"Chemistry Lab",
			map:"PEREZ_FINALBLDG_1.png",
			x: 55.15,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"HT",
			name:"Head Teachers' Office",
			map:"PEREZ_FINALBLDG_1.png",
			x: 63.59,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Nicolelis",
			name:"8-Nicolelis",
			map:"PEREZ_FINALBLDG_1.png",
			x: 71.42,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"MathDept",
			name:"Math Department",
			map:"PEREZ_FINALBLDG_1.png",
			x: 81.27,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"SSLG",
			name:"SSLG Office",
			map:"PEREZ_FINALBLDG_1.png",
			x: 89.63,
			y: 37.87,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"path1_1",
			map:"PEREZ_FINALBLDG_1.png",
			x: 96.23,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_2",
			map:"PEREZ_FINALBLDG_1.png",
			x: 89.63,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_3",
			map:"PEREZ_FINALBLDG_1.png",
			x: 81.27,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_4",
			map:"PEREZ_FINALBLDG_1.png",
			x: 71.42,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_5",
			map:"PEREZ_FINALBLDG_1.png",
			x: 63.59,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_6",
			map:"PEREZ_FINALBLDG_1.png",
			x: 55.15,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_7",
			map:"PEREZ_FINALBLDG_1.png",
			x: 45.38,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_8",
			map:"PEREZ_FINALBLDG_1.png",
			x: 35.7,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_9",
			map:"PEREZ_FINALBLDG_1.png",
			x: 27.61,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_10",
			map:"PEREZ_FINALBLDG_1.png",
			x: 21.01,
			y: 83.52,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_11",
			map:"PEREZ_FINALBLDG_1.png",
			x: 21.01,
			y: 56.33,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"stair1_1",
			map:"PEREZ_FINALBLDG_1.png",
			x: 96.23,
			y: 23.3,
			type:"stair",
			floor: 0,
			selectable: false
	},
	{
			id:"stair1_2",
			map:"PEREZ_FINALBLDG_1.png",
			x: 27.61,
			y: 23.3,
			type:"stair",
			floor: 0,
			selectable: false
	},

//2nd Floor Nodes
	{
			id:"DelMundo",
			name:"10-Del Mundo",
			map:"PEREZ_FINALBLDG_2.png",
			x: 84,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Zara",
			name:"10-Zara",
			map:"PEREZ_FINALBLDG_2.png",
			x: 69.84,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Quisumbing",
			name:"10-Quisumbing",
			map:"PEREZ_FINALBLDG_2.png",
			x: 57.17,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Alcala",
			name:"10-Alcala",
			map:"PEREZ_FINALBLDG_2.png",
			x: 44.15,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Olivera",
			name:"10-Olivera",
			map:"PEREZ_FINALBLDG_2.png",
			x: 29.72,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Juliano",
			name:"10-Juliano",
			map:"PEREZ_FINALBLDG_2.png",
			x: 16.52,
			y: 34.9,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"path2_1",
			map:"PEREZ_FINALBLDG_2.png",
			x: 95.09,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_2",
			map:"PEREZ_FINALBLDG_2.png",
			x: 84,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_3",
			map:"PEREZ_FINALBLDG_2.png",
			x: 69.84,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_4",
			map:"PEREZ_FINALBLDG_2.png",
			x: 57.17,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_5",
			map:"PEREZ_FINALBLDG_2.png",
			x: 44.15,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_6",
			map:"PEREZ_FINALBLDG_2.png",
			x: 29.72,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_7",
			map:"PEREZ_FINALBLDG_2.png",
			x: 16.52,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_8",
			map:"PEREZ_FINALBLDG_2.png",
			x: 5,
			y: 82.63,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"stair2_1",
			map:"PEREZ_FINALBLDG_2.png",
			x: 95.09,
			y: 24.01,
			type:"stair",
			floor: 1,
			selectable: false
	},
	{
			id:"stair2_2",
			map:"PEREZ_FINALBLDG_2.png",
			x: 5,
			y: 24.01,
			type:"stair",
			floor: 1,
			selectable: false
	}
]
		

			
