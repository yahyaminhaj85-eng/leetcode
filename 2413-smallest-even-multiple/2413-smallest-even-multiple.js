/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let num =""
    for (let i=1000;i>0;i--) {
        if (i%2==0 && i%n==0){
            num = i;
        }
    }
    return num;
};