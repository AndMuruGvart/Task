let result;

function computerString(int) {
       
    let result;
    let count = int - Math.floor(int/100)*100;

    if ((count>10) && (count<20)) {
        result=`${int} компьютеров`;
    } else {
        const value = int - Math.floor(int/10)*10;
        switch (value) {
            case 0:
                result=`${int} компьютеров`;
                break;
            case 1:
                result=`${int} компьютер`;
                break;
            case 2:
            case 3:
            case 4:
                result=`${int} компьютера`;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                result=`${int} компьютеров`;
                break;
            default:
                break;
        }
    }

    console.log(result);
    return result;
}

computerString(1000);