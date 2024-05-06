//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скриптів market.js')

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

if(itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)
    //вИВІД ЗНАЧЕННЯ ПОЛЯ знайденого елементу
    console.log('Поле classList',itemsDiv.classList)
    console.log('Поле iid',itemsDiv.id)
    console.log('Поле clientWidth',itemsDiv.clientWidth)
    console.log('Поле innerHTML:',itemsDiv.innerHTML)

    //Додавання тексту в блок
    itemsDiv.innerText = 'Перший Програмно доданий текст'
    itemsDiv.innerText += 'Другий Програмно доданий текст'
//Додавання відформатованого HTML коду в блок
    itemsDiv.innerText = '<h1>Відформатований HTML код</h1>'
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не занйдено')
}


if(itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)
//Додавання відформатованого HTML коду в блок
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
//itemsDiv.innerHTML += '<div class = "item"></div>'
for (let i = 0; i < 100; i++) {
    itemsDiv.innerHTML += '<div class = "item"></div>'
}

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не занйдено')
}

