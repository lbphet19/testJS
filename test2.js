
function findMissingInteger(arr){
    var myArr = [];
    for(var i = 0; i < 9; i++)
        myArr.push(0);
    for(var i = 0; i < arr.length; i++){
        myArr[arr[i]]++;
    }
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] == 0) return i;
    }
}
console.log(findMissingInteger([0, 3, 2, 1, 5, 6, 7, 8, 9]))