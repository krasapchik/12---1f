var name = prompt('Введите ваше имя')
var month = prompt('Введите месяц' )
var day = +prompt('Введите число')
 if( (day >31))
console.log('Произошла ошибка');

else if((month == 'Декабрь'  && day >= 22 ) || (month == 'Январь' && day <=19)){
   console.log ('Ваш знак зодиака Козерог', name);
}else if(( month == 'Январь' && day >= 20) || (month == 'Февраль' && day <=18)){ 
    console.log ('Ваш знак зодиака Водолей', name);
}else if((month == 'Февраль' && day >=19 && day !==29) || (month == 'Март' && day <=20)){
   console.log('Ваш знак зодиака Рыбы',name);
}else if((month == 'Март' && day >=21 ) || (month == 'Апрель' && day <=19)){
 console.log('Ваш знак зодиака  Овен', name);
}else if((month == 'Апрель' && day >= 20) || (month == 'Май' && day <=20)){
   console.log ('Ваш знак зодиака  Телец', name);
}
else{
    alert('Произошла ошибка пишите правильно');

}

