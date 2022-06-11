
function simpleValue(value) {
let i=2;
let count = 0;
while (i<value) {
    if (value % i==0) count++;
    i++;
}

if (count>0) {console.log('Число не простое'); return false;}
 else {console.log('Число простое'); return true};
}


simpleValue(23);
