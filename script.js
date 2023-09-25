let tura = 0;
let yazi = 0;

let coin = document.querySelector(".coin");
let flipBtn =  document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener('click', ()=>{
    let i = Math.random() * 2;

    coin.style.animation = "none";

    if(i) {
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    } else {
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }

    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener('click', () => {
    coin.style.animation = "none";
    tura = 0;
    yazi = 0;
    updateStats();
});