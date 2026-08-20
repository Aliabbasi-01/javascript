const myarr=[1,2,3,4,5]
// console.log(myarr);
//console.log(myarr[4]);

//array methods
// myarr.push(6)
// myarr.push("Abbasi")
// console.log(myarr)
// console.log(myarr.includes("9"))
// console.log(myarr.indexOf(3))

// const newarr=myarr.join()
// console.log(myarr)
// console.log(newarr)


//slice,splice
// console.log("ORIGINAL ARRAY : ",myarr)

// const myn1=myarr.slice(1,3)
// console.log("sLICE RESULTS : ",myn1)
// console.log("After slice : ",myarr)

// const myn2=myarr.splice(1,3)
// console.log("SPLICE RESULTS : ",myn2)

// console.log("After Splice :",myarr)



const arr1=[1,2,3,4,"Ali",true]
const arr2=[5,6,7,8,"Abbasi",false]
// arr1.push(arr2)
// console.log(arr1)

// const arr3=arr1.concat(arr2)
// console.log(arr3)


//spread the array
// const arr4=[...arr1,...arr2]
// console.log(arr4)

const another_array=[1,2,3,[4,5,6,[7,8]],9,10,[11,12,[13,14,15],16]]
const real_another_array=another_array.flat()
console.log(real_another_array)

const score1=100
const score2=200
const score3=300
const name="MuhammadAli"
console.log(Array.of(score1,score2,score3))
console.log(Array.from(name))
















// shift and unshift for adding and deleting value from start of array 