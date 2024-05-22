//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    {
        firstName:"Мотокоса",
        lastName:"43",
        price:" 4545 ",
        donusprice:"123",
        Ox:"1567",
        
        
        photo:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_315131.jpg",
    },
    {
        firstName:"Електричний",
        lastName:"Тример 110",
        price:" 4 497 ",
        donusprice:"3 498",
        Ox:"3000",
        
        
        photo:"https://static.dnipro-m.ua/cache/products/6564/catalog_origin_315127.jpg",
    },
    {
        firstName:"Електрична",
        lastName:"Газонокос",
        price:" 3 200 ",
        donusprice:"3 000",
        Ox:"2000",
        
        
        photo:"https://static.dnipro-m.ua/cache/products/6567/catalog_origin_300709.jpg",
    },
    {
        firstName:"Акумуляторний ",
        lastName:"Оприск",
        price:" 4012 ",
        donusprice:"3 500",
        Ox:"2999",
        
        
        photo:"https://static.dnipro-m.ua/cache/products/6642/catalog_origin_302851.jpg",
    },

    /*{
        firstName:"Віталій",
        lastName:"Шатківський",
        subject:"Інформатика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firstName:"Вікторія",
        lastName:"Нелипович",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firstName:"Марія",
        lastName:"Медведєва",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    },
    {
        firstName:"Василь",
        lastName:"Бабій",
        subject:"Фіз-ра",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firstName:"Ірина",
        lastName:"Боровська-Карандюк",
        subject:"Українська Література",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
    {
        firstName:"Тарас",
        lastName:"Савінков",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firstName:"Наталія",
        lastName:"Гончарук",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
    },
    {
        firstName:"Наталія",
        lastName:"Кучер",
        subject:"Фізика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firstName:"Олена",
        lastName:"Геча",
        subject:"Історія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
    {
        firstName:"Лариса",
        lastName:"Забелло",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
    {
        firstName:"Наталія",
        lastName:"Венцедь",
        subject:"Директор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firstName:"Наталія",
        lastName:"Зинюк",
        subject:"Хімія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",

        url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    },
*/
    ]
    
// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

if(itemsDiv) {
    itemsArray
    
    .forEach((item, index) => {
        //itemsDiv.innerText += item
        itemsDiv.innerHTML +=
         `
         <div class = "item">
         <h2>Товар № ${index + 1} з ${itemsArray.length}</h2>
         <p>;${item.firstName} ${item.lastName}</p>
         
         <p><img src = "${item.photo}" class = "item-image"></p>
         <div class="price">
         <div class="donusprice">
         <p>${item.price}<span></span><sup>грн</sup></p>
         <p>${item.donusprice}<span></span><sup>грн</sup>
         </div>
         <class="bon"
         <p>${item.Ox}<sup>грн</sup></p></p> 
        
     
         
         
         </div>
         `
    })
    
    //Вивід знайденого елементу
    //console.log(itemsDiv)
    //вИВІД ЗНАЧЕННЯ ПОЛЯ знайденого елементу
    //console.log('Поле classList',itemsDiv.classList)
    //console.log('Поле iid',itemsDiv.id)
    //console.log('Поле clientWidth',itemsDiv.clientWidth)
    //console.log('Поле innerHTML:',itemsDiv.innerHTML)

    //Додавання тексту в блок
   // itemsDiv.innerText = 'Перший Програмно доданий текст'
    //itemsDiv.innerText += 'Другий Програмно доданий текст'
//Додавання відформатованого HTML коду в блок
    //itemsDiv.innerText = '<h1>Відформатований HTML код</h1>'
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не занйдено')
}


//сортування масиву 
//itemsArray = itemsArray.sort()
itemsArray.forEach((item) => {
    console.log(item)
})

//console.log(itemsArray)

for (let i = 0; i < itemsArray.length; i++){
    console.log(i + '-й елемент' , itemsArray[i])
}
//виведення елементів відсовкового масиву
itemsArray.sort().forEach((item) =>{
    console.log(item)
} )

//Сортування масиву
//itemsArray = itemsArray.sort()
//чтпалорпш6п48
// for (let i = 0; < itemsArray.legth; i++) {
    //console.log(itemsArray[i])
//}

//Виведення в консоль номерів та значеннь елементів масиву
// for (let i = 0; < itemsArray.legth; i++) {
    //console.log(i + '-й елемент',itemsArray[i])
//}




if(itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)
//Додавання відформатованого HTML коду в блок
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
for (let i = 0; i < 11; i++) {
    itemsDiv.innerHTML += '<div class = "item"></div>'
}

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не занйдено')
}

