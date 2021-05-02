
//You'll be writing three functions:

//* `findMatching`- This function takes an array of drivers' names and a `string`
//  as arguments, and returns the matching list of drivers. The function should be
//  case insensitive.

function findMatching(drivernames, firstname){
    const names = drivernames.filter(function(item){
        return item.toLowerCase() === firstname.toLowerCase()
    })
    return names
}


//

//* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//  as arguments for querying the array, and returns all drivers whose names begin
//  with the provided letters.

function fuzzyMatch(drivernames, letters){
    const filteredArray =  drivernames.filter(function(name){  // This = Sally, Sammy, Sarah
        return name.substring(0, 2) === letters
    })
        return filteredArray
}



//* `matchName` - This function takes an array of `driver` objects and a `string`
//  as arguments. Each `driver` object has two properties: `name` and `hometown`.
//  The function should return each element whose `name` property matches the
//  provided `string` argument.

function matchName(drivernames, name){
    const filteredArray = drivernames.filter(function(list){  //{name: 'Bobby',hometown: 'Pittsburgh'},{name: 'Bobby',hometown: 'Tampa Bay'} 
        return list.name === name;
    })
        return filteredArray;
}

//expect(matchName(drivers, 'Bobby')