const credits = 23580;
const pricePerDroid = 3000;


let droids = prompt('Введите необходимое количество товара');
const totalPrice = droids * pricePerDroid;

if (droids===null) {
    console.log('Отменено пользователем!'); 

} else if (credits>=totalPrice) { 
    droids = Number(droids);
    const residualCredits = credits - totalPrice;

    console.log(`Вы купили ${droids} дроидов, на счету осталось ${residualCredits} кредитов.`);

} else { 
    console.log('Недостаточно средств на счету!');
}