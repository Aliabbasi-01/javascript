// premitive datatypes
// 7 categories     string,number,boolean,null,undefined,symbol,BigInt

const id=11
const useremail="ali@gmail.com"
let username;
const outsidetemp=null
let IsLogedIn=false


const userid=Symbol("123")
const newuserid=Symbol("123")

const Bignumber=34563574463846n
console.log(userid)
console.log(newuserid)
console.log(userid==newuserid)



// (refrence) Non premitive

// Array,object,function 
// arrays
const heros=["Shoukat nawaz","umer nazir","khwaja Mehran","Aman kashmiri"];


// objects
let myobj={
    name: "Ali",
    age: 23,
    section: 16,
    gender:"male"
}


const myfunction=function(){
    console.log("Thus is my function")
}

console.table(myobj)
console.table(heros)


console.log(typeof Bignumber)

myfunction()

