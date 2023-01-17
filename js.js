// const delay = ms => {
//     return new Promise(r => {
//         setTimeout(() => r(), ms)
//     })
// }
// delay(5000).then(() => console.log("5 sec")).then(() => {
//     console.log("after 5 sec")
// })

// const url = 'https://jsonplaceholder.typicode.com/posts/1'

// function fetchToDos() {
//     console.log("Fetch todo started...")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
// fetchToDos().then(data => {
//     console.log("Data:", data)
// })

// async function fetchAsinc(){
//     console.log("Fetch todo started...")
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log("Data:", data)
// }
// fetchAsinc()

// let people = [
//     {name:"Daniil", age:20,sex:"male"},
//     {name:"Kris", age:15,sex:"female"},
//     {name:"Masha", age:28,sex:"female"},
//     {name:"Vanya", age:11,sex:"male"},
//     {name:"Alya", age:21,sex:"female"},
//     {name:"Fedor", age:50,sex:"male"},
//     {name:"Denis", age:32,sex:"male"},
// ]

// const newPeople = people
//     .filter(person=>person.age>18)
//     .reduce((total,person)=>{
//         return total + person.age
//     },0)


// console.log(newPeople)

// const obj = {
//     name: "Daniil",
//     age: 20,
//     sex: "male"
// }

// const entries = [
//     ["name","Daniil"],
//     ["age",20],
//     ["sex","male"]
// ]
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(arr))
// let map = new Map(entries)
// console.log(map.get("age"))
// map.set(true,"NaN ??")
// console.log(map)

// for(let [key,val] of map.entries()){
//     console.log(typeof key)
// }

// for(let key of map.keys()){
//     console.log(key)
// }

// map.forEach((val,key,m)=>{
//     console.log(val)
// })
// const user = [
//     { name: "Daniil", age: 20 },
//     { name: "Nastya", age: 19 },
//     { name: "Vanya", age: 24 }
// ]

// let visitors = new Map()
// visitors
//     .set(user[0], new Date())
//     .set(user[1], new Date().getTime() + 300 * 60)
//     .set(user[2], new Date().getTime() + 60)

// let visitorsCheck = (user) => {
//     return visitors.get(user)
// }

// console.log(visitorsCheck(user[2]))

// function validParentheses(parens) {
//   let arr = parens.split('')
//   while (true) {
//     if (arr.length == 0) return true
//     else if (arr[0] == ")" || arr[arr.length - 1] == "(") return false
//     else if (arr.includes("(") && arr.includes(")")) {
//       let itemLeft = arr.findIndex(item => item == "(")
//       arr.splice(itemLeft, 1)
//       let itemRight = arr.findIndex(item => item == ")")
//       arr.splice(itemRight, 1)
//     }
//   }
// }
// validParentheses("()")


// SET

// let set = [...new Set([0,1,2,4,4,5,6,6])]
// for(let key of set){
//   console.log(key*3)
// }
// console.log(set)


// let requestURL = "https://jsonplaceholder.typicode.com/users"


// function sendRequest(method,url,body=null) {//If we are working with "GET" - body = null
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest()

//         xhr.open(method, url)
//         xhr.responseType = "json"
//         xhr.setRequestHeader("Content-Type","application/json")//To display in console "body"

//         xhr.onload = () => {
//             if(xhr.status >= 400) reject(xhr.response)
//             else resolve(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))//JSON.stringify modify to string
//     })

// }
// sendRequest("GET",requestURL)
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.error(err)
// })
// let body = {name:"Daniil",age:20}
// sendRequest("POST",requestURL,body)
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.error(err)
// })

//////////FETCH


// let requestURL = "https://jsonplaceholder.typicode.com/users"


// function sendRequest(method,url,body=null) {//If we are working with "GET" - body = null
//     return fetch(url)// return Promise

// }
// sendRequest("GET",requestURL)
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.error(err)
// })
// let body = {name:"Daniil",age:20}
// sendRequest("POST",requestURL,body)
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.error(err)
// })

// function cakes(recipe, available) {
//     let temp
//     for(let ingridient in recipe){
//         if(ingridient in available){
//             let possibleCackes = Math.floor(available[ingridient]/recipe[ingridient])

//             if( possibleCackes < temp || !temp ){
//                 if(temp == 0) console.log(0)
//                 temp = possibleCackes
//                 console.log(temp)

//             } 
//         }else{
//             return console.log("Ноль "+0)
//         }
//     }
//     return console.log("temp"+temp)
// }
// cakes({ flour: 300, sugar: 150, milk: 100}, {sugar: 70, flour: 2000, milk: 2000})

// function orderWeight(strng) {
//     let arr = strng.split(" ")
//     let sum = (item) => {
//         let sum = 0
//         for (let i = 0; i < item.length; i++) {
//             sum += +item[i]
//         }
//         return sum
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let temp;
//             if (sum(arr[j]) < sum(arr[i])) {
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             } else if (sum(arr[j]) == sum(arr[i])) {
//                 if (arr[j] < arr[i]) {
//                     temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp
//                 }
//             }
//         }

//     }
//     return arr.join(",")
// }

// pickPeaks([1, 2, 3, 8, 7, 6, 5, 4, 1, 2, 3])//{pos[2,4], pick[3,5]}

// function validParentheses(parens) {
//   let arr = parens.split('')
//   while (true) {
//     if (arr.length == 0) return true
//     else if (arr[0] == ")" || arr[arr.length - 1] == "(") return false
//     else if (arr.includes("(") && arr.includes(")")) {
//       let itemLeft = arr.findIndex(item => item == "(")
//       arr.splice(itemLeft, 1)
//       let itemRight = arr.findIndex(item => item == ")")
//       arr.splice(itemRight, 1)
//     }
//   }
// }
// validParentheses("()")
///THE BEST WAY
// function orderWeight(strng) {
//     const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
//      function comp(a,b){

//         console.log("a "+a)
//        console.log("b "+b)
//        let sumA = sum(a);
//        let sumB = sum(b);
//        console.log("sumA "+sumA)
//        console.log("sumB "+sumB)
//        console.log(sumA === sumB ? a.localeCompare(b) : sumA - sumB)
//        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//       };
//     return console.log(strng.split(' ').sort(comp).join(' '));
//    }
// orderWeight("103 123 4444 99 2000")


// function gap(g, m, n) {

//     // your code
// }

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }

// isPrime()

// let citiesBelarus = ["Pinsk","Minsk","Grodno","Mogilev"]
// console.log(...citiesBelarus)
// let obj ={
//     city:"Pinsk",
//     population:133000,
// }

