
function receivesAFunction(callback){
    callback()
    return "Hey!"
}

function returnsANamedFunction() {
    return function iAmAFunction() {
        console.log("I am a function!")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am anonymous");
      }
}