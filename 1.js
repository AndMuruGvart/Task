const array=['Москва', 'Санкт-Петербург', 'Воронеж'];

function cities(array) {
    let string='';
    array.map (arr => {
    if (string) {
        string=string+', '+arr;
    } else string=arr;
})
string=string+'.';

console.log(string);
return string;
}


cities(array);
