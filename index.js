let random = Math.random()

let a = prompt("enter the value ")
let c = prompt("enter the operation")
let b = prompt("enter the value")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random < 0.1) {
    // console.log=(`the ans is ${a} ${c} ${b}`)
    console.log(random)
    alert(`the ans is ${eval(`${a} ${c} ${b}`)}`)

}
else {
    c = obj[c];
    console.log(random)

    alert(`the ans is ${eval(`${a} ${c} ${b}`)}`)

}