
function findMissingInteger(arr,n){
    var myArr = [];
    for(var i = 0; i < n; i++)
        myArr.push(0);
    for(var i = 0; i < arr.length; i++){
        myArr[arr[i]]++;
    }
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] == 0) return i;
    }
}
console.log(findMissingInteger([0, 1, 4, 3],4))