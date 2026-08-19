let name= "Muhammad ALi"
let repocount=50
console.log(name+repocount)
const shopname = new String('TechTraders')

console.log(`My name is ${name.UPP} and my repo counts are ${repocount}`);
console.log(shopname);
console.log(shopname[7]);

console.log(name[0]);
console.log(shopname.length)
console.log(shopname.toUpperCase())
console.log(shopname.charAt(2))
console.log("working")

console.log(shopname.indexOf('c'))

const newstring=shopname.substring(0,5)
console.log(newstring)

console.log(shopname.substring(0,7))

const mystringone="     muzzamil     "
console.log(mystringone)
console.log(mystringone.trim())

const url="http://muhammadali%20abbasi"
const newurl=url.replace('%20','_')

console.log(url)
console.log(newurl)
console.log(url.includes('muh'));
console.log(url.includes('raja'));

//we can split string on the basic of spaces ,dots,lines,chracters
const newname=new String("muhammadaliabbasi")
console.log(newname.split('a'))



