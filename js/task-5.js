const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";
let country;


let deliveryCountry = prompt('Введите страну');

if (deliveryCountry === null) { console.log('Пользователь отменил ввод'); }

else {deliveryCountry = deliveryCountry.toLowerCase(); 

    switch (deliveryCountry) {
        case CHINA:
        country='Китай'    
        console.log(`Доставка в ${country} будет стоить 100 кредитов`);
            break;
    
            case CHILIE:
        country='Чили'    
        console.log(`Доставка в ${country} будет стоить 250 кредитов`);
            break;
    
            case AUSTRALIA:
        country='Австралия'    
        console.log(`Доставка в ${country} будет стоить 170 кредитов`);
            break;
    
            case INDIA:
        country='Индия'    
        console.log(`Доставка в ${country} будет стоить 180 кредитов`);
            break;
    
            case JAMAICA:
        country='Ямайка'    
        console.log(`Доставка в ${country} будет стоить 120 кредитов`);
            break;
    
        default:
            alert('В вашей стране доставка не доступна');
    }
}

