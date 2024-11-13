
let hp = 100 //Let-команда для создания переменной, hp-название переменной,100-значение переменной
let gold = 50
document.querySelector(".hp-text").innerText = hp
document.querySelector(".gold-text").innerText = gold
const button1 = document.querySelector("#button1") //Document-команда для доступа к html файлу, querySelector-команда для включения поиска,("#button1")-что конкретно искать
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const enemies = document.querySelector("#enemies")
const back = document.querySelector("#back")
const fight_window = document.querySelector("#start-fight")
const me = document.querySelector("#me")
const enemy = document.querySelector("#enemy")
const play = document.querySelector("#play")
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
my_hero.onclick = choose_hero
enemies.onclick = start_fight
button1.onclick = goShop//onclick-событие нажатия,goShop-функция
button2.onclick = goFight
back.onclick = backFight

function goShop() {//function-команда создания функции
    document.querySelector("#text").innerText = "Добро пожаловать в магазин"
    button1.style.backgroundImage = "url('img/покупка зелья здоровья.webp')"
    button1.onclick = buyHp
    button2.style.backgroundImage = "url('img/покупка оружия.webp')"
    button2.onclick = goGan
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
    document.querySelector(".hp-text").innerText = hp
    document.querySelector(".gold-text").innerText = gold
}
button3.onclick = goBack
function goBack() {//function-команда создания функции
    document.querySelector("#text").innerText = "Добро пожаловать, храбрец, ты попал в дворец короля Ивана Ивановича. Тебя ждет серьезное задание, тебе нужно победить главного босса."
    button1.style.backgroundImage = "url(img/маазин.webp)"
    button1.onclick = goShop
    button2.style.backgroundImage = "url(img/атака.webp)"
    button2.onclick = goFight
    button3.style.backgroundImage = "url('img/лавный босс.webp')"
    // button3.onclick = buyHp
    shopGan.style.display = "none"
}
function goGan() {
    if (shopGan.style.display === "none") {
        shopGan.style.display = "block"
    } else {
        shopGan.style.display = "none"
    }
    gun_button1.style.backgroundImage = "url(img/оружие1.webp)"
    gun_button2.style.backgroundImage = "url(img/оружие2.webp)"
    gun_button3.style.backgroundImage = "url(img/оружие3.webp)"
    gun_button4.style.backgroundImage = "url(img/оружие4.webp)"
    gun_button5.style.backgroundImage = "url(img/оружие5.webp)"
    gun_button6.style.backgroundImage = "url(img/оружие6.webp)"
}
function goFight() {
    if (enemies.style.display === "none") {
        enemies.style.display = "block"
    } else {
        enemies.style.display = "none"
    }
    enemy_button1.style.backgroundImage = "url(img/Rajing.webp)"
    enemy_button2.style.backgroundImage = "url(img/Stobb.webp)"
    enemy_button3.style.backgroundImage = "url(img/Hermit.webp)"
    enemy_button4.style.backgroundImage = "url(img/Loomys.webp)"
    enemy_button5.style.backgroundImage = "url(img/Jeivzz.webp)"
    enemy_button6.style.backgroundImage = "url(img/Morro.webp)"
    enemy_button7.style.backgroundImage = "url(img/Rango.webp)"
    enemy_button8.style.backgroundImage = "url(img/Qweezly.webp)"
    enemy_button9.style.backgroundImage = "url(img/Hozuki.webp)"
    enemy_button10.style.backgroundImage = "url(img/Mad.webp)"

}
function closeFight() {
    enemies.style.display = "none"
}
function start_fight(e) {
    console.log(e.target)
    console.log(e.target.getAttribute("class"))
    let enemyimg = e.target.getAttribute("class")
    if (fight_window.style.display === "none" && e.target) {
        fight_window.style.display = "flex"
    } else {
        fight_window.style.display = "none"
    }
    me.style.backgroundImage = "url(img/Персонаж.jpg)"
    enemy.style.backgroundImage = `url(img/${enemyimg}.jpg)`
    play.style.backgroundImage = "url(img/play.png)"
    back.style.backgroundImage = "url(img/back.png)"
}
function backFight() {
    fight_window.style.display = "none"
}
function choose_hero(e) {
    console.log(e.target.getAttribute("id"))
    let enemyimg = e.target.getAttribute("id")
    if (start_game.style.oulineColor === "red" && e.target) {
        start_game.style.oulineColor = "green"
    } 
    
}