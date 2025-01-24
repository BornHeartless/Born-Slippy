
let hp = 100 //Let-команда для создания переменной, hp-название переменной,100-значение переменной
let gold = 50
document.querySelector(".hp-text").innerText = hp
document.querySelector(".gold-text").innerText = gold
// получение доступа к html
const button1 = document.querySelector("#button1") //Document-команда для доступа к html файлу, querySelector-команда для включения поиска,("#button1")-что конкретно искать
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const enemies = document.querySelector("#enemies")
const back = document.querySelector("#back")
const fight_window = document.querySelector("#start-fight")
const me = document.querySelector("#me")
const enemy = document.querySelector("#enemy")
const play = document.querySelector("#play")
const menu = document.querySelector("#menu")
const shopGan = document.querySelector("#shopgan")
const gun_button1 = document.querySelector("#gun-button1")
const gun_button2 = document.querySelector("#gun-button2")
const gun_button3 = document.querySelector("#gun-button3")
const gun_button4 = document.querySelector("#gun-button4")
const gun_button5 = document.querySelector("#gun-button5")
const gun_button6 = document.querySelector("#gun-button6")
const enemy_button1 = document.querySelector("#enemy-button1")
const enemy_button2 = document.querySelector("#enemy-button2")
const enemy_button3 = document.querySelector("#enemy-button3")
const enemy_button4 = document.querySelector("#enemy-button4")
const enemy_button5 = document.querySelector("#enemy-button5")
const enemy_button6 = document.querySelector("#enemy-button6")
const enemy_button7 = document.querySelector("#enemy-button7")
const enemy_button8 = document.querySelector("#enemy-button8")
const enemy_button9 = document.querySelector("#enemy-button9")
const enemy_button10 = document.querySelector("#enemy-button10")
const start_game = document.querySelector("#start-game")
const my_hero = document.querySelector("#my-hero")
const archer = document.querySelector("#archer")
const warrior = document.querySelector("#warrior")
const mage = document.querySelector("#mage")
const enginner = document.querySelector("#enginner")
const enemiesBook = document.querySelector("#enemiesBook")
// создание переенных
let playerName
let heroName = document.querySelector(".my-hero-name")
const save = document.querySelector("#save")
let playerClass
let heroClass = document.querySelector(".my-hero-class")
// привязка функции
button3.onclick = goBook
my_hero.onclick = choose_hero
enemies.onclick = start_fight
button1.onclick = goShop//onclick-событие нажатия,goShop-функция
button2.onclick = goFight
back.onclick = backFight
shopGan.onclick = buyGun
save.onclick = saveMyStats
menu.onclick = backBook
localStorage.setItem("gold", gold)
localStorage.setItem("heroname", playerName)
// функция отвечающая за вход в магазин
function goShop() {//function-команда создания функции
    document.querySelector("#text").innerText = "Welcome to shop"
    button1.style.backgroundImage = "url('img/покупка зелья здоровья.webp')"
    button1.onclick = buyHp
    button2.style.backgroundImage = "url('img/покупка оружия.webp')"
    button2.onclick = createShopgan
    button3.style.backgroundImage = "url(img/назад.webp)"
    button3.onclick = goBack
    // button3.onclick = buyHp
}
// функция для покупки здоровья в магазине
function buyHp() {
    if (gold >= 10) {

        if (hp >= 100) {
            document.querySelector("#text").innerText = "You have a full HP"
        } else if (hp < 90 && gold >= 10) {
            hp += 10
            gold -= 10
        } else {
            hp = 100
            gold -= 10
        }
    }
    document.querySelector(".hp-text").innerText = hp
    document.querySelector(".gold-text").innerText = gold
}
// функция для выхода в меню из магазина
function goBack() {//function-команда создания функции
    document.querySelector("#text").innerText = ""
    button1.style.backgroundImage = "url(img/маазин.webp)"
    button1.onclick = goShop
    button2.style.backgroundImage = "url(img/атака.webp)"
    button2.onclick = goFight
    button3.style.backgroundImage = "url('img/Book.jpg')"
    button3.onclick = goBook
    shopGan.style.display = "none"
}
console.log(enemies.style.display)
// функция для открытия меню выбора врага
function goFight() {
    if (enemies.style.display === "none" || enemies.style.display === "") {
        enemies.style.display = "block"
    } else {
        enemies.style.display = "none"
    }
    createEnemyList()
}
// функция для закрытия меню выбора врага
function closeFight() {
    enemies.style.display = "none"
}
// функция для открытия меню перед боем
function start_fight(e) {
    let enemyimg = e.target.getAttribute("class")
    console.log(e.target)
    console.log(e.target.getAttribute("class"))
    if (fight_window.style.display === "none" || fight_window.style.display === "") {
        fight_window.style.display = "flex"
    } else {
        fight_window.style.display = "none"
    }

    enemy.style.backgroundImage = `url(img/${enemyimg}.jpg)`
    play.style.backgroundImage = "url(img/play.png)"
    back.style.backgroundImage = "url(img/back.png)"
}
// функция для закрытия меню перед боем
function backFight() {
    fight_window.style.display = "none"
}
// функция для выбора класса персонажа
function choose_hero(e) {
    let enemyimg = e.target.getAttribute("id")
    document.querySelector("#img-archer").style.outline = ""
    document.querySelector("#img-warrior").style.outline = ""
    document.querySelector("#img-mage").style.outline = ""
    document.querySelector("#img-engineer").style.outline = ""
    me.style.backgroundImage = `url(img/${enemyimg}.jpg)`
    if (enemyimg.slice(0, 3) === "img") {
        e.target.style.outline = "5px solid green"
        console.log(`img/${enemyimg}.jpg`)
        playerClass = `img/${enemyimg}.jpg`
    }
}
// функция для сохранения выбранного имени и класса
function saveMyStats() {
    playerName = document.querySelector("#hero-name-imput").value
    console.log(playerName, playerClass)
    heroName.innerText = playerName
    heroClass.innerText = playerClass.slice(8, -4)
    localStorage.setItem("heroname", playerName)
    localStorage.setItem("heroclass", playerClass.slice(8, -4))
    console.log(localStorage.getItem("heroname"), localStorage.getItem("heroclass"))
    start_game.style.display = "none"
}
if (localStorage.getItem("heroname") && localStorage.getItem("heroclass")) {
    start_game.style.display = "none"
    heroName.innerText = localStorage.getItem("heroname")
    heroClass.innerText = localStorage.getItem("heroclass")
}

// функция создает окно с выбором врагов из списка из базы данных
function createEnemyList() {
    const enemies_box = document.querySelector("#enemies-box")
    enemies_box.innerHTML = ""
    for (let i = 0; i < enemiesData.length; i++) {
        const div = document.createElement("div")
        const button = document.createElement("button")
        button.id = `enemy-button${i}`
        button.className = enemiesData[i].css_class
        button.style.backgroundImage = `url(${enemiesData[i].enemy_img})`
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        span1.textContent = enemiesData[i].f_name
        span2.textContent = enemiesData[i].s_name
        div.appendChild(button)
        div.appendChild(span1)
        div.appendChild(span2)
        enemies_box.appendChild(div)
    }
}

// функция для открытия библиотеки врагов
function goBook() {
    console.log(9)
    enemiesBook.style.display = "flex"
    const enemies_img_and_text = document.querySelector(".enemies-img-and-text")
    enemies_img_and_text.innerHTML = ""
    menu.style.backgroundImage = "url(img/back.png)"
    for (let i = 0; i < enemiesData.length; i++) {
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        const br1 = document.createElement("br")
        const br2 = document.createElement("br")
        const br3 = document.createElement("br")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        const span3 = document.createElement("span")
        const span4 = document.createElement("span")
        div.id = `${enemiesData[i].f_name}Book`
        div.className = `enemies-card`
        h2.textContent = `${enemiesData[i].f_name} ${enemiesData[i].s_name}`
        img.src = enemiesData[i].enemy_img_big
        span1.textContent = `${enemiesData[i].enemy_descr}`
        span1.className = `enemy-description`
        span2.textContent = `${enemiesData[i].enemy_ab1}`
        span3.textContent = `${enemiesData[i].enemy_ab2}`
        span4.textContent = `${enemiesData[i].enemy_dmg} ${enemiesData[i].enemy_dmg} ${enemiesData[i].enemy_hp} ${enemiesData[i].enemy_def} ${enemiesData[i].enemy_exp}`
        div.appendChild(img)
        div.appendChild(div2)
        div2.appendChild(h2)
        div2.appendChild(span1)
        div2.appendChild(br1)
        div2.appendChild(span2)
        div2.appendChild(br2)
        div2.appendChild(span3)
        div2.appendChild(br3)
        div2.appendChild(span4)
        enemies_img_and_text.appendChild(div)
        //appendChild добавляет элемент в конец другого элемента
    }
}
console.log(localStorage.getItem("heroclass"))
// функция для открытия библиотеки врагов
function backBook() {
    enemiesBook.style.display = "none"
}
// функция для открытия магазина оружия
function createShopgan() {
    shopGan.style.display = "block"
    const gun_box = document.querySelector("#gun-box")
    gun_box.innerHTML = ""
    for (let w = 0; w < shopganData.length; w++) {
        // const element = shopganData[w];
        const div = document.createElement("div")
        const button = document.createElement("button")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        const span3 = document.createElement("span")
        button2.onclick = closeGun
        // проверка выбранного класса для формирования списка оружия в магазине
        if (localStorage.getItem("heroclass") === "archer") {
            if (shopganData[w].gun_class === "gun_archer") {
                button.style.backgroundImage = `${shopganData[w].gun_image}`
                button.id = `${shopganData[w].id}`
                span1.textContent = `${shopganData[w].gun_name}`
                span2.textContent = `${shopganData[w].gun_damage}`
                span3.textContent = `${shopganData[w].gun_price}`
                div.appendChild(button)
                div.appendChild(span1)
                div.appendChild(span2)
                div.appendChild(span3)
                gun_box.appendChild(div)
            }
        }
        if (localStorage.getItem("heroclass") === "warrior") {
            if (shopganData[w].gun_class === "gun_warrior") {
                span1.textContent = `${shopganData[w].gun_name}`
                span2.textContent = `${shopganData[w].gun_damage}`
                span3.textContent = `${shopganData[w].gun_price}`
                button.id = `${shopganData[w].id}`
                button.style.backgroundImage = `${shopganData[w].gun_image}`
                div.appendChild(button)
                div.appendChild(span1)
                div.appendChild(span2)
                div.appendChild(span3)
                gun_box.appendChild(div)
            }
        }
        if (localStorage.getItem("heroclass") === "mage") {
            if (shopganData[w].gun_class === "gun_mage") {
                span1.textContent = `${shopganData[w].gun_name}`
                span2.textContent = `${shopganData[w].gun_damage}`
                span3.textContent = `${shopganData[w].gun_price}`
                button.id = `${shopganData[w].id}`
                button.style.backgroundImage = `${shopganData[w].gun_image}`
                div.appendChild(button)
                div.appendChild(span1)
                div.appendChild(span2)
                div.appendChild(span3)
                gun_box.appendChild(div)
            }
        }
        if (localStorage.getItem("heroclass") === "engineer") {
            if (shopganData[w].gun_class === "gun_engineer") {
                span1.textContent = `${shopganData[w].gun_name}`
                span2.textContent = `${shopganData[w].gun_damage}`
                span3.textContent = `${shopganData[w].gun_price}`
                button.id = `${shopganData[w].id}`
                button.style.backgroundImage = `${shopganData[w].gun_image}`
                div.appendChild(button)
                div.appendChild(span1)
                div.appendChild(span2)
                div.appendChild(span3)
                gun_box.appendChild(div)
            }
        }
    }
}
function closeGun() {
    shopGan.style.display = "none"
    button2.onclick = createShopgan
}
localStorage.clear()
function buyGun() {
    let gunImg = e.target.getAttribute("id")
    
}