// Named Function
function hello () {
    
};
//undefined

function hello () {
    console.log("Hello World!!!");    
};
//undefined

hello();
//VM174:2 Hello World!!!
//undefined

// Annonymous Function
let helloEle = function hello() {
    console.log("Hello World!!!");    
};
//undefined

helloEle;
/*
ƒ hello() {
    console.log("Hello World!!!");    
} */


// Arrow Function
let helloEle = () => {
     console.log("Hello World!!!");   
};
//undefined

helloEle;
/* () => {
     console.log("Hello World!!!");   
} */