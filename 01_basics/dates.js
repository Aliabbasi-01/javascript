let mydate= new Date()

// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)


// let mycreateddate=new Date(2025,1,17)
// let mycreateddate=new Date(2025,1,17,17,30)
// console.log(mycreateddate.toDateString())
// console.log(mycreateddate.toLocaleString())
// let mycreateddate= new Date("2020-01-25")
// let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate)
// console.log(mycreateddate.getTime())

// seconds ma conbert krna k lya mili seconds ko

//console.log(Date.now()/1000)
//  ya value decimal ma a ri ha to decimal ko khtm krna k lya 
// console.log(Math.floor(Date.now()/1000))
let newdate=new Date()
 const day=newdate.toLocaleString("ur-PK",{
    weekday : "long"
})
console.log(day)