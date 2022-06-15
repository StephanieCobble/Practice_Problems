//Is the string a palindrome?

arr = ['The quick brown fox jumped over the sleeping dog',
       "Oozy rat in a sanitary zoo",
       "Carla loves chocolate"]

function isPalindrome(arr){
    arr.forEach(element => {
        element = element.toLowerCase();
        element = element.replace(/\s/g, '');
        newElement = element.split('').reverse().join('');
        if(newElement == element) {
            console.log("This is a palindrome")
            return true
        }else{
            console.log("This is NOT a palindrome")
            return false
        }
    });
}

isPalindrome(arr)