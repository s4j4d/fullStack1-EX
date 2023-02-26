function defer(a){
    setTimeout((a) => {
        console.log(a);
    }, 2000);
}

function F(){
    defer("salam");
    console.log("hello");
}
F();