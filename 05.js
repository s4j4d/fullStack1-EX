
function myDefer(){
    setTimeout(() => {
        console.log("Delayed for 0 second.");
        //// new function pass to myDefer
    }, "1")

}


function doSmthing(){
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
    console.log('6');
}



console.log('this is first')
myDefer()
doSmthing()
console.log('hiiii')