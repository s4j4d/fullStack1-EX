function findSubstr(subStr, str){
    const len= subStr.length;

    for(let index=0; index <= str.length - len ; index++){
        console.log(str.slice(index, index+len) );
        if(str.slice(index,index+len) === subStr)
            return true
    }
    return false
}
console.log(findSubstr("worldd", "helloworlds"));
// console.log("helo");