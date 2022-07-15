
function findMissingInteger(arr,min,max){
    var res = []
    var obj = {};
    for(var i = min; i <= max; i++)
        obj[i] = 0;
    for(var i = 0; i < arr.length; i++)
        obj[arr[i]]++;
    for(var i = min; i <= max; i++)
        if(obj[i] == 0)
            res.push(i)
    return res;
}
console.log(findMissingInteger([-3, -1, 0, 1, 2] , -3, 3))