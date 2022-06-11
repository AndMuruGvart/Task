const array1=[7, 17, 1, 9, 1, 17, 56, 56, 23];
const array2=[56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
let newArray=[];

function arraysCompare(array1, array2) {
   array1.map(el1 => {
    let countFirstArray=0;
    let countSecondArray=0;
    let conditionNewArray=true;
    let count=0;
    array1.map(el2 => {
        if (el1===el2) countFirstArray++;
    });
    array2.map(el3 => {
        if (el3===el1) countSecondArray++;

    });
    if (countFirstArray>1 && countSecondArray>1) 
    {
        newArray.map(elNew => {
            if (el1===elNew) conditionNewArray=false;
        });
        if (conditionNewArray) newArray.unshift(el1);
    }
    
   });
   
   console.log(newArray);
   return newArray;
}
    
    
    arraysCompare(array1, array2);
    