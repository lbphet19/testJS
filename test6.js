function findMinMax(arr){
    var min_val = arr[0];
    var max_val = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max_val)
            max_val = arr[i];
        if(arr[i] < min_val)
            min_val = arr[i];
    }
    return [min_val,max_val]
}
function findMissingInteger(arr){
    var res = []
    var obj = {};
    var minMax = findMinMax(arr);
    for(var i = minMax[0]; i <= minMax[1]; i++)
        obj[i] = 0;
    for(var i = 0; i < arr.length; i++)
        obj[arr[i]]++;
    for(var i = minMax[0]; i <= minMax[1]; i++)
        if(obj[i] == 0)
            res.push(i)
    return res;
}
console.log(findMissingInteger([-3, -5, 3, 2]))
// console.log(findMinMax([-3,-5, -1, 0, 1, 10]));