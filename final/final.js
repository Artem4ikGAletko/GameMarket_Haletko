//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    {
    email: "23b_lox",
    group: "10 b",
    fullName: "Artem ",
    gameTitle: "",
    authorPhoto: "img2/Біденко.jpg",
    gamePhoto: "img2/Башинська.jpg",
    githubRepo: "",
    githubPages: "",
    documentationFolder: "",
    surveyForm: "",
    gameMarketRepo: "",
    gameMarketPages: "",   
    marketPages: "",
    finalGameMarketPage: ""
    }
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
         
         <p>;${item.group} ${item.fullName}</p>
         <p>;${item.email} </p>
         
         <p><img src = "${item.authorPhoto}" class = "item-image"></p>
         <p><img src =  "${item.gamePhoto}"class = "item-image"></p>
         <p><a href = "${item.githubRepo}" target = "_blank" class = "bonus price">GitHub Repository</a></p> 
         <p><a href = "${item.githubPages}" target = "_blank" class = "bonus price">GitHub Pages_Game</a></p> 
         <p><a href = "${item. documentationFolder}" target = "_blank" class = "bonus price">GitHub Drive Documentation</a></p> 
         <p><a href = "${item. surveyForm}" target = "_blank" class = "bonus price">Survey Form</a></p> 
         <p><a href = "${item.  gameMarketRepo}" target = "_blank" class = "bonus price"> GitHub Repositoriy GameMarket</a></p> 
         <p><a href = "${item.  gameMarketPages}" target = "_blank" class = "bonus price"> GitHub Pages Desing</a></p> 
         <p><a href = "${item. marketPages}" target = "_blank" class = "bonus price"> GitHub  Market Pages 4 Products</a></p> 
         <p><a href = "${item.  finalGameMarketPage}" target = "_blank" class = "bonus price"> Market Pages Final Products</a></p> 

         
     
         
         
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

