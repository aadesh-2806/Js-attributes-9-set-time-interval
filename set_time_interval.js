console.log("Hello!")
setTimeout( () => {
    console.log(".....are you still there")
},3000)     //3000 in ms

console.log("Bye!")     

/*
VM6516:1 Hello!
VM6516:6 Bye!
undefined
VM6516:3 .....are you still there           ------>after 3 sec
*/
const id =setInterval( () => {
    console.log(Math.random())
},1000)
//it goes infinite
//to stop it we need

// clearInterval(id)