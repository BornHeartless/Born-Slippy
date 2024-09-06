
let hp = 100 //Let-команда для создания переменной, hp-название переменной,100-значение переменной
let gold = 50
document.querySelector(".hp-text").innerText = hp
document.querySelector(".gold-text").innerText = gold
const button1 = document.querySelector("#button1") //Document-команда для доступа к html файлу, querySelector-команда для включения поиска,("#button1")-что конкретно искать
button1.onclick = goShop//onclick-событие нажатия,goShop-функция

function goShop() {//function-команда создания функции
    document.querySelector("#text").innerText = "Добро пожаловать в магазин"
    button1.style.backgroundImage = "url('img/покупка зелья здоровья.webp')"
    button1.onclick = buyHp
    button2.style.backgroundImage = "url('img/покупка оружия.webp')"
    // button2.onclick = buyHp
    button3.style.backgroundImage = "url(img/назад.webp)"
    // button3.onclick = buyHp
}
function buyHp() {
    if (gold >= 10) {

        if (hp >= 100) {
            document.querySelector("#text").innerText = "У вас полное здоровье"
        } else if (hp < 90 && gold >= 10) {
            hp += 10
            gold -= 10
        } else {
            hp = 100
            gold -= 10
        }

    }
    console.log(hp, gold)
    document.querySelector(".hp-text").innerText = hp
    document.querySelector(".gold-text").innerText = gold
}
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
button3.onclick = goBack
function goBack () {//function-команда создания функции
    document.querySelector("#text").innerText = "Добро пожаловать, храбрец, ты попал в дворец короля Ивана Ивановича. Тебя ждет серьезное задание, тебе нужно победить главного босса."
    button1.style.backgroundImage = "url(img/маазин.webp)"
    button1.onclick = goShop
    button2.style.backgroundImage = "url(img/атака.jpg)"
    // button2.onclick = buyHp
    button3.style.backgroundImage = "url('img/лавный босс.png')"
    // button3.onclick = buyHp
}
const shopGan = docment.querySelector("#shopgan")
function goGan () {
    shopGan.onclick = 
}
