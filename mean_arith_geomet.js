function sum_arith_geo(x, y){
    arithmetic=(x+y)/2;
    geometric=Math.sqrt(x*y);
    return arithmetic+geometric;
}

alert('Сумма среднего арифметического и среднего геометрического двух чисел');
var number_1=prompt('Введите первое число','');
var number_2=prompt('Введите второе число','');
if (number_1=='' || number_2=='' || isNaN(Number(number_1)) || isNaN(Number(number_2)) || Number(number_1)<0 || Number(number_2)<0){
    alert('Числа введены неправильно');
} else{
    var result=sum_arith_geo(Number(number_1), Number(number_2));
    alert('Сумма среднего арифметического и среднего геометрического: '+result);
}