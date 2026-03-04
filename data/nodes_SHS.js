const nodes = [
//1st floor nodes
		{
			id:"Principal",
			name:"Principal's Office",
			map:"SHS_FINALBLDG_1.png",
			x: 64.62,
			y: 36.4,
			type:"room",
			floor: 0,
			selectable: true
		},
		{
			id:"Finance",
			name:"Finance Office",
			map:"SHS_FINALBLDG_1.png",
			x: 35.84,
			y: 36.4,
			type:"room",
			floor: 0,
			selectable: true
		},
		{
			id:"Registrar",
			name:"Registrar's Office",
			map:"SHS_FINALBLDG_1.png",
			x: 17.07,
			y: 36.4,
			type:"room",
			floor: 0,
			selectable: true
		},
		{
			id:"CR_I",
			name:"CR (1st Floor)",
			map:"SHS_FINALBLDG_1.png",
			x: 85.96,
			y: 22.32,
			type:"room",
			floor: 0,
			selectable: true
		},
		{
			id:"path1_1",
			map:"SHS_FINALBLDG_1.png",
			x: 94.4,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"path1_2",
			map:"SHS_FINALBLDG_1.png",
			x: 85.96,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"path1_3",
			map:"SHS_FINALBLDG_1.png",
			x: 64.62,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"path1_4",
			map:"SHS_FINALBLDG_1.png",
			x: 35.84,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"path1_5",
			map:"SHS_FINALBLDG_1.png",
			x: 17.07,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"path1_6",
			map:"SHS_FINALBLDG_1.png",
			x: 3.4,
			y: 84.75,
			type:"path",
			floor: 0,
			selectable: false
		},
		{
			id:"stair1_1",
			map:"SHS_FINALBLDG_1.png",
			x: 94.4,
			y: 22.32,
			type:"stair",
			floor: 0,
			selectable: false
		},
		{
			id:"stair1_2",
			map:"SHS_FINALBLDG_1.png",
			x: 3.4,
			y: 22.32,
			type:"stair",
			floor: 0,
			selectable: false
		},
		
		//2nd floor
		{
			id:"Lovelace",
			name:"11_Lovelace",
			map:"SHS_FINALBLDG_2.png",
			x: 69.4,
			y: 38.29,
			type:"room",
			floor: 1,
			selectable: true
		},
		{
			id:"Danajon",
			name:"7_Danajon",
			map:"SHS_FINALBLDG_2.png",
			x: 28.62,
			y: 38.29,
			type:"room",
			floor: 1,
			selectable: true
		},
		{
			id:"CR_II",
			name:"CR (2nd Floor)",
			map:"SHS_FINALBLDG_2.png",
			x: 90.62,
			y: 23.73,
			type:"room",
			floor: 1,
			selectable: true
		},
		{
			id:"path2_1",
			map:"SHS_FINALBLDG_2.png",
			x: 96.62,
			y: 83.88,
			type:"path",
			floor: 1,
			selectable: false
		},
		{
			id:"path2_2",
			map:"SHS_FINALBLDG_2.png",
			x: 90.62,
			y: 83.88,
			type:"path",
			floor: 1,
			selectable: false
		},
		{
			id:"path2_3",
			map:"SHS_FINALBLDG_2.png",
			x: 69.4,
			y: 83.88,
			type:"path",
			floor: 1,
			selectable: false
		},
		{
			id:"path2_4",
			map:"SHS_FINALBLDG_2.png",
			x: 28.62,
			y: 83.88,
			type:"path",
			floor: 1,
			selectable: false
		},
		{
			id:"path2_5",
			map:"SHS_FINALBLDG_2.png",
			x: 3.18,
			y: 83.88,
			type:"path",
			floor: 1,
			selectable: false
		},
		{
			id:"stair2_1",
			map:"SHS_FINALBLDG_2.png",
			x: 96.62,
			y: 18.03,
			type:"stair",
			floor: 1,
			selectable: false
		},
		{
			id:"stair2_2",
			map:"SHS_FINALBLDG_2.png",
			x: 3.18,
			y: 25,
			type:"stair",
			floor: 1,
			selectable: false
		},
		//3rd Floor
		{
			id:"Hahn",
			name:"11_Hahn",
			map:"SHS_FINALBLDG_3.png",
			x: 68.18,
			y: 38.63,
			type:"room",
			floor: 2,
			selectable: true
		},
		{
			id:"Elion",
			name:"11_Elion",
			map:"SHS_FINALBLDG_3.png",
			x: 28.62,
			y: 38.63,
			type:"room",
			floor: 2,
			selectable: true
		},
		{
			id:"CR_III",
			name:"CR (3rd Floor)",
			map:"SHS_FINALBLDG_3.png",
			x: 90.18,
			y: 24.37,
			type:"room",
			floor: 2,
			selectable: true
		},
		{
			id:"path3_1",
			map:"SHS_FINALBLDG_3.png",
			x: 96.4,
			y: 83.6,
			type:"path",
			floor: 2,
			selectable: false
		},
		{
			id:"path3_2",
			map:"SHS_FINALBLDG_3.png",
			x: 90.18,
			y: 83.6,
			type:"path",
			floor: 2,
			selectable: false
		},
		{
			id:"path3_3",
			map:"SHS_FINALBLDG_3.png",
			x: 68.18,
			y: 83.6,
			type:"path",
			floor: 2,
			selectable: false
		},
		{
			id:"path3_4",
			map:"SHS_FINALBLDG_3.png",
			x: 28.62,
			y: 83.6,
			type:"path",
			floor: 2,
			selectable: false
		},
		{
			id:"path3_5",
			map:"SHS_FINALBLDG_3.png",
			x: 3.4,
			y: 83.6,
			type:"path",
			floor: 2,
			selectable: false
		},
		{
			id:"stair3_1",
			map:"SHS_FINALBLDG_3.png",
			x: 96.4,
			y: 17.09,
			type:"stair",
			floor: 2,
			selectable: false
		},
		{
			id:"stair3_2",
			map:"SHS_FINALBLDG_3.png",
			x: 3.4,
			y: 25.96,
			type:"stair",
			floor: 2,
			selectable: false
		},
		//4th Floor
		{
			id:"Ayala",
			name:"11_Ayala",
			map:"SHS_FINALBLDG_4.png",
			x: 68.4,
			y: 39.96,
			type:"room",
			floor: 3,
			selectable: true
		},
		{
			id:"Vesalius",
			name:"11_Vesalius",
			map:"SHS_FINALBLDG_4.png",
			x: 28.18,
			y: 39.96,
			type:"room",
			floor: 3,
			selectable: true
		},
		{
			id:"CR_IV",
			name:"CR (4th Floor)",
			map:"SHS_FINALBLDG_4.png",
			x: 90.4,
			y: 24.61,
			type:"room",
			floor: 3,
			selectable: true
		},
		{
			id:"path4_1",
			map:"SHS_FINALBLDG_4.png",
			x: 96.51,
			y: 83.77,
			type:"path",
			floor: 3,
			selectable: false
		},
		{
			id:"path4_2",
			map:"SHS_FINALBLDG_4.png",
			x: 90.4,
			y: 83.77,
			type:"path",
			floor: 3,
			selectable: false
		},
		{
			id:"path4_3",
			map:"SHS_FINALBLDG_4.png",
			x: 68.4,
			y: 83.77,
			type:"path",
			floor: 3,
			selectable: false
		},
		{
			id:"path4_4",
			map:"SHS_FINALBLDG_4.png",
			x: 28.18,
			y: 83.77,
			type:"path",
			floor: 3,
			selectable: false
		},
		{
			id:"path4_5",
			map:"SHS_FINALBLDG_4.png",
			x: 3.62,
			y: 83.77,
			type:"path",
			floor: 3,
			selectable: false
		},
		{
			id:"stair4_1",
			map:"SHS_FINALBLDG_4.png",
			x: 96.51,
			y: 18.71,
			type:"stair",
			floor: 3,
			selectable: false
		},
		{
			id:"stair4_2",
			map:"SHS_FINALBLDG_4.png",
			x: 3.62,
			y: 27.17,
			type:"stair",
			floor: 3,
			selectable: false
		}
		
				
]

























		

			
