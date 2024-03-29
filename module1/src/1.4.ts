// string

let MyName:string ='jahid hasan';

//number 
let myRoll: number =1

// boolean
let isAdmin: boolean= true;
// udefined
let x : undefined= undefined;
// null 
let y :null = null

//anytype should not declare;
// let d;
let d:Number;


//array declaration in typescript;


let friends:string[] =['jahid', 'hasan']

friends.push('oli')

let eligableRollList: number[] =[101,201,301]

eligableRollList.push(401);

let ageName:[number, string]= [22, 'jahid',]

let ageNameIsAdmin :[number , string, boolean]= [22, 'jahid hasan', true]


// speacila tuple type array

let coordinates :[number, number]= [1,5];
coordinates.push(2)
console.log(coordinates);