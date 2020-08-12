// Callback Functions
function helloCdac(fun) {
  fun();   
};
//undefined

helloCdac(function () {
 console.log("Hello CDACians!!!");
});
//VM664:2 Hello CDACians!!!
//undefined

// Case 1 : 

helloCdac( () => {
 console.log("Hello CDACians!!!")
} );
//VM768:2 Hello CDACians!!!
//undefined

helloCdac(function() {
 console.log("Callback fun using annonymous.")
});
//VM900:2 Callback fun using annonymous.
//undefined

// Case 2 :

helloCdac( () => {
 console.log("Callback fun using arrow fun.")
});
//VM955:2 Callback fun using arrow fun.
//undefined

// Case 3 : via variable.

let callBackFun = function () {
 console.log("Callback fun using annonymous; via variable.")
};
//undefined

helloCdac(callBackFun);
/* VM1108:2 Callback fun using annonymous; via variable.
undefined */

// Case 4 :

let arwcallbackFun = () => {
 console.log("callback fun using arrow fun; via variable.")
};
//undefined

helloCdac(arwcallbackFun);
/* VM1332:2 callback fun using arrow fun; via variable.
undefined */