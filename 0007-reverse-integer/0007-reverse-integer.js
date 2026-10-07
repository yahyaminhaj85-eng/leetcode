/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rvr = "";

    if (x < -(2**31) || x > 2**31) {
        return 0;
    }

    x = String(x).split("").reverse();
    if (x.at(-1)==="-") {
        rvr += "-" 
    }

    for (let value of x) {
        if (value.includes("-")) {
            rvr.at(-1)==="-"
        } else {
            rvr += value
        }
    } 

    rvr = Number(rvr);
    if (rvr < -(2**31) || rvr > 2**31 -1) {
        return 0;
    } else {
    return rvr;
    }
};