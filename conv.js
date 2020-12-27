
function cvt(a){
    while(a>0){
        var b = a % 2 + b;
        a = a / 2; 
    }
    return b;
}

module.exports = cvt;