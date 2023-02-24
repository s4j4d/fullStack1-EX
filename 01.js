const myString = 'Hello this is my first exam'
const findObj = 'first'



let myStringArr = myString.split(' ')
console.log(myStringArr)

for (let item of myStringArr){
    if (findObj === item){
        console.log(`this is my item: ${item}`)
    }else{
        console.log('could not find an object');
    }
}

