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

// function doors(n){
//   let status = []
//   let count = 0
//   for(let i = 0;i<n;i++){
//     status.push("closed")
//   }

//   for(let i=0;i<n;i++){
//     for(let j=i;j<n;j=j+i+1){
//         if(status[j]=="closed"){
//             status[j]="open"
//             count++
//         }else{
//             status[j]="closed"
//             count--
//         }
//     }
//   } 
// }
// doors(100)


// let citiesBelarus = ["Pinsk","Minsk","Grodno","Mogilev"]
// console.log(...citiesBelarus)
// let obj ={
//     city:"Pinsk",
//     population:133000,
// }

// function toUnderscore(string) {
//   let result =''
//   let arr = [1,2,3,4,5,6,7,8,9,0]
//   for(let i=1;i<string.length;i++){
//     if(string[i] == string[i].toUpperCase() && !arr.includes(Number(string[i]))){
//         result +="_"+string[i].toLowerCase()
//     }else{
//       result+=string[i]
//     }
//   }
//   // console.log((result+string.slice(pos,string.length)).toLowerCase())
//   console.log(string[0].toLowerCase()+result)
// }
// toUnderscore("App7Test")

// function alphabetPosition(text) {
//   let temp = text.toLowerCase().split('').map(el => {
//     return (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122 ) ? null : el.charCodeAt(0) - 96
//   })

//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] == null) {
//       temp.splice(i, 1)
//       i--
//     }
//   }
//   // console.log(temp.join(","))
//   return temp.join(",")

// }
// alphabetPosition("The sunset sets at twelve o' clock.")
//   function firstNonRepeatingLetter(s) {
//     let result = s.toLowerCase().split("").filter((el, index, arr) => {
//       if (arr.indexOf(el) != index) {
//       console.log(el)
//         return el
//       }
//     })
//     let a = ""
//     for (let i = 0; i < s.length; i++) {
//       if (!result.includes(s[i].toLowerCase())) {
//         a = s[i]
//         break
//       }
//     }
//     console.log(a)
//   }
// firstNonRepeatingLetter("A,ahh")
// function sumTwoSmallestNumbers(numbers) {  
//   function comper(a,b){
//     return a-b
//   }
//   let newArr = numbers.sort(comper)
//   return newArr[0]+newArr[1]
// }

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage
        this.a = Math.floor(this.collection.length/this.itemsPerPage)

    }
    itemCount() {
       
        return this.collection.length
    }
    pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage)  
    }
    pageItemCount(pageIndex) {
        if(this.collection.length == 0 || pageIndex < 0 || pageIndex >this.collection.length || pageIndex === this.collection.length/this.itemsPerPage) return -1
        if(pageIndex>this.a) return -1

         return (pageIndex<this.a)?this.itemsPerPage:this.collection.length%this.itemsPerPage
    }
    pageIndex(itemIndex) {
        if(this.collection.length == 0 || itemIndex<0 || itemIndex>this.collection.length ||itemIndex===this.collection.length) return -1 
        if(itemIndex == this.collection.length/this.itemsPerPage) return -1

        return Math.floor((itemIndex-1)/this.itemsPerPage)

    }
}
let helper = new PaginationHelper([3,3], 2)

console.log(helper.itemCount())
console.log(helper.pageCount())
console.log(helper.pageItemCount(6))
console.log(helper.pageIndex(1))

// let birdsData = [
//     [
//         {name:"Danik",image:"https://quizizz.com/_media/questions/eb37e25a-4e9a-4c5d-b607-7fc4e168d6cb_900_900"},
//         {name:"Dan",image:"https://quizizz.com/_media/questions/eb37e25a-4e9a-4c5d-b607-7fc4e168d6cb_900_900"},
//         {name:"D",image:"https://quizizz.com/_media/questions/eb37e25a-4e9a-4c5d-b607-7fc4e168d6cb_900_900"}
//     ],
//     [
//         {name:"Danik"},
//         {name:"Dan"},
        
//     ]
    
// ]

// let _createQuetion = (bird)=>{
//     let quetion = document.createElement("div")
//     quetion.classList.add("quetion_block")
//     quetion.insertAdjacentHTML("afterbegin",`
//         <img src="${bird.image}" alt="">
//         <div class="quetion_content">
//             <h2 class="quetion_bird_name">${bird.name}</h2>
//             <hr>
//             <div class="audio"></div>
//         </div>
//     `)
//     return quetion
// }

// let createRandomNumber = number => {
//     let rend = Math.floor(Math.random() * number)
//     return rend
// }

// let n = createRandomNumber(birdsData[0].length)
// console.log(birdsData[0][n])

// let quetionBlock = _createQuetion(birdsData[0][n])
// document.body.prepend(quetionBlock)

// console.log(quetionBlock)



