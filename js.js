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


                                // PROXY
// Objects
let person = {
    name:"Daniil",
    age: 20,
    job:"Js developer"
}

const op = new Proxy(person,{
    get(target,prop){
        console.log(target)
        console.log(prop)
        return target[prop]   
    }
})
console.log(op.age)