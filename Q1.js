//Find most frequent item in an array

arr1 = [2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3,2];

function mostFrequent(arr1){
    var mF = 1; //most freq occurrence
    var m = 0; //current count
    var item;

    for (var i=0; i<arr1.length; i++){
        for (var j=i; j<arr1.length; j++){
            if (arr1[i] == arr1[j]){
                m++
            }
            if (mF<m){
                mF = m;
            }
            item = arr1[i];
        }
        m=0;
    }
    // console.log(item + " " + mF + " times");
    console.log(`${item} appears ${mF} times`)
}

mostFrequent(arr1)