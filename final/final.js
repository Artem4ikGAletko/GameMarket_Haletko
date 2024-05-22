//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    
    {
        email: "23b_bvo@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Башинська Вікторія",
        gameTitle: "Dudi 3",
        authorPhoto: "img2/Башинська.jpg",
        gamePhoto: "img2/Башинська-гра.jpg",
        githubRepo: "https://github.com/ViktoriaBashinska/Phaser2stGame",
        githubPages: "https://viktoriabashinska.github.io/Phaser2stGame/",
        documentationFolder: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        surveyForm: "https://forms.gle/jHMQsybKdMdUHXKA7",
        gameMarketRepo: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        gameMarketPages: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        marketPages: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        finalGameMarketPage: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html"
    },
    {
        email: "23b_bdo@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Біденко Дмитро",
        gameTitle: "виживання проти зомбаря",
        authorPhoto: "img2/Біденко.jpg",
        gamePhoto: "img2/Біденко-гра.jpg",
        githubRepo: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
        githubPages: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
        surveyForm: "https://forms.gle/RDawcnD98QcHnRZw7",
        gameMarketRepo: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
        gameMarketPages: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
        marketPages: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
        finalGameMarketPage: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html"
    },
    {
        email: "23b_bmv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Бовсуновського Максима",
        gameTitle: "дота 2",
        authorPhoto: "img2/Бовсуновський.jpg",
        gamePhoto: "img2/Бовсуновський-гра.jpg",
        githubRepo: "https://github.com/maksbovs/Phaser2ndGame",
        githubPages: "https://maksbovs.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
        surveyForm: "https://forms.gle/G2WLe25CYPCQjowTA",
        gameMarketRepo: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
        gameMarketPages: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
        marketPages: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
        finalGameMarketPage: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html"
    },
    {
        email: "23b_vvi@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Волинець Владислав",
        gameTitle: "Пес Патрон на завданні",
        authorPhoto: "img2/Волинець.jpg",
        gamePhoto: "img2/Волинець-гра.jpg",
        githubRepo: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
        githubPages: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
        documentationFolder: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
        surveyForm: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
        gameMarketRepo: "https://github.com/volynets-vlad/GameMarket_Volynets",
        gameMarketPages: "https://volynets-vlad.github.io/GameMarket_Volynets/",
        marketPages: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
        finalGameMarketPage: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html"
    },
    {
        email: "23b_gas@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Галетко Артем",
        gameTitle: "Стрибунець",
        authorPhoto: "img2/Галетко.jpg",
        gamePhoto: "",
        githubRepo: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        githubPages: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        documentationFolder: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
        surveyForm: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
        gameMarketRepo: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
        gameMarketPages: "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
        marketPages: "https://artem4ikgaletko.github.io/GameMarket_Haletko/market.html?authuser=0",
    finalGameMarketPage: "https://artem4ikgaletko.github.io/GameMarket_Haletko/final/final.html?authuser=0"
    },
    {
        email: "23b_gbs@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Гордійчук Богдан",
        gameTitle: "Zhytomur squad Snyok",
        authorPhoto: "img2/Гордійчук.jpg",
        gamePhoto: "img2/Гордійчук-гра.jpg",
        githubRepo: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
        githubPages: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
        documentationFolder: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
        surveyForm: "https://forms.gle/VaDXCem7gVuEvumQ9",
        gameMarketRepo: "https://github.com/malintovi/GameMarket_Hordiichuk",
        gameMarketPages: "https://malintovi.github.io/GameMarket_Hordiichuk/",
        marketPages: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
        finalGameMarketPage: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0"
    },
    {
        email: "23b_gai@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Гоцман Артем",
        gameTitle: "Run_Dude",
        authorPhoto: "img2/Гоцман.jpg",
        gamePhoto: "img2/Гоцман-гра.jpg",
        githubRepo: "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
        githubPages: "https://golden-ztu.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
        surveyForm: "https://forms.gle/NTmMk1yqBNhaoXzj9",
        gameMarketRepo: "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
        gameMarketPages: "https://golden-ztu.github.io/GameMarket_Hotsman/",
        marketPages: "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
        finalGameMarketPage: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html"
    },
    {
        email: "23b_dis@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Дєдух Ілля",
        gameTitle: "kozak_battleground",
        authorPhoto: "img2/Дєдух.jpg",
        gamePhoto: "img2/Дєдух-гра.jpg",
        githubRepo: "https://github.com/Dyeduh/Phaser2ndGame",
        githubPages: "https://dyeduh.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
        surveyForm: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
        gameMarketRepo: "https://github.com/Dyeduh/GameMarket_Dyeduh",
        gameMarketPages: "https://dyeduh.github.io/GameMarket_Dyeduh/",
        marketPages: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
        finalGameMarketPage: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0"
    },
    {
        email: "23b_dao@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Дідківський Андрій",
        gameTitle: "Баобаб",
        authorPhoto: "img2/Дідківський.jpg",
        gamePhoto: "img2/Дідківський-гра.jpg",
        githubRepo: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
        githubPages: "https://andriydidkivskij.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
        surveyForm: "https://forms.gle/WNDGSsahKLzHH7LW7",
        gameMarketRepo: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
        gameMarketPages: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
        marketPages: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
        finalGameMarketPage: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html"
    },
    {
        email: "23b_zbv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Заєць Богдан ",
        gameTitle: "Ніяк",
        authorPhoto: "img2/Заєць.jpg",
        gamePhoto: "img2/Заєць-гра.jpg",
        githubRepo: "https://github.com/niccer5/Phaser1stGame",
        githubPages: "https://niccer5.github.io/Phaser1stGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
        surveyForm: "https://forms.gle/EcWrBsp6jhMA78Kd9",
        gameMarketRepo: "https://github.com/niccer5/-GameMarket_Zayets",
        gameMarketPages: "https://niccer5.github.io/-GameMarket_Zayets/",
        marketPages: "Нєту ссилки нєту дєняк",
        finalGameMarketPage: "Нєту ссилки нєту дєняк"
    },
    {
        email: "23b_kav@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Кравчук Андрій ",
        gameTitle: "Ніяк",
        authorPhoto: "img2/Кравчук.jpg",
        gamePhoto: "img2/Кравчук-гра.jpg",
        githubRepo: "https://github.com/yawty1",
        githubPages: "https://yawty1.github.io/Phaser2ndGame1/",
        documentationFolder: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
        surveyForm: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
        gameMarketRepo: "https://github.com/yawty1/GameMarket_Kravchuk",
        gameMarketPages: "https://yawty1.github.io/GameMarket_Kravchuk/",
        marketPages: "Нєту ссилки нєту дєняк",
        finalGameMarketPage: "Нєту ссилки нєту дєняк"
    },
    {
        email: "23b_kmv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Кучер Максим",
        gameTitle: "Jfr",
        authorPhoto: "img2/Кучер.jpg",
        gamePhoto: "img2/Кучер-гра.jpg",
        githubRepo: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
        githubPages: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
        documentationFolder: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
        surveyForm: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
        gameMarketRepo: "https://github.com/KucherMaks/GameMarket_Kucher",
        gameMarketPages: "https://kuchermaks.github.io/GameMarket_Kucher/",
        marketPages: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
        finalGameMarketPage: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html"
    },
    {
        email: "23b_lkm@liceum.ztu.edu.ua",
        class: "10-Б 1",
        fullName: "Лавренко Каріна",
        gameTitle: "Dudi 2",
        authorPhoto: "img2/Лавренко.jpg",
        gamePhoto: "img2/Лавренко-гра(2).jpg",
        githubRepo: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
        githubPages: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
        documentationFolder: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
        surveyForm: "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
        gameMarketRepo: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
        gameMarketPages: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
        marketPages: "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
        finalGameMarketPage: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0"
    },
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
         <p>; ${item.fullName}</p>
         <p>;${item.email} </p>
         <p>;${item.class} </p>
         <p>;${item.gameTitle} </p>
         <p><img src = "${item.authorPhoto}" class = "item-image"></p>
         <p><img src =  "${item.gamePhoto}"class = "item-image"></p>
         <p><a href = "${item.githubRepo}" target = "_blank" class = "link-box bonus price">GitHub Repository</a></p> 
         <p><a href = "${item.githubPages}" target = "_blank" class = "link-box bonus price">GitHub Pages_Game</a></p> 
         <p><a href = "${item. documentationFolder}" target = "_blank" class = "link-box bonus price">GitHub Drive Documentation</a></p> 
         <p><a href = "${item. surveyForm}" target = "_blank" class = "link-box bonus price">Survey Form</a></p> 
         <p><a href = "${item.  gameMarketRepo}" target = "_blank" class = "link-box bonus price"> GitHub Repositoriy GameMarket</a></p> 
         <p><a href = "${item.  gameMarketPages}" target = "_blank" class = "link-box bonus price"> GitHub Pages Desing</a></p> 
         <p><a href = "${item. marketPages}" target = "_blank" class = "link-box bonus price"> GitHub  Market Pages 4 Products</a></p> 
         <p><a href = "${item.  finalGameMarketPage}" target = "_blank" class = "link-box bonus price"> Market Pages Final Products</a></p> 
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

