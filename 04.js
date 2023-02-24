function sumCities(cityArr){
    result = 0
    for (let item of cityArr){
        let isConnected = 0
        for (let each of item){
            if (each == 1){
                isConnected += 1
            }
        }
        if (isConnected != 1) {
            result += isConnected
        }

    }
    return result/2

}


const cities = [[1,1,0],[1,1,0],[0,0,1]];
amountOfCities = cities.length
// newCityArr = clearCities()
console.log(sumCities(cities))
