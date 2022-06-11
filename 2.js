let result;
function rounding(float) {
       
    count = Math.floor(float/5);
    if (float - count*5>2.5) result=count*5+5; else result=count*5; 
    console.log(result);
    return result;
}

rounding(41.5);