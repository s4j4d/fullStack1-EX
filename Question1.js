
// const checkInclusion = (mainStr,subStr)=> mainStr.includes(subStr);



const checkInclusion = (mainStr, subStr) => {
    let len = subStr.length;
    for (let index = 0; index < mainStr.length; index++) {
        if (mainStr.slice(index, index + len) == subStr) return true;
    }
    return false;
}
console.log(checkInclusion("hello world", "o "))