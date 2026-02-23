let currentSlide = 0;

const slides = [

{
background: "foto1.jpeg",
text: `
Halooo ayang atuuu yang paling cantik sejagat raya 🌍💖<br>  
yang termanis di dunia ini, dan wanita yang paling kuat...<br>

tunggu yaa, just let it slide itself ✨
`,
scrap: ["small1.jpeg", "small2.jpeg"]
},

{
background: "foto2.jpeg",
text: `
Sayang,  

since the day I met you again from so many years  
I felt my heart was pounding very hard,  
and my eyes were glazing with so many stars,  
and my mouth was so numb because I was shocked  
how lovely you are.  

gak sia-sia aku nungguin kamu dari  kita kecil ❤️
`,
scrap: ["small2.jpeg", "small3.jpeg"]
},

{
background: "foto3.jpeg",
text: `
Kita jalanin bareng-bareng ya sayang,<br>
jangan merasa sendirian di dunia ini ya sayang.<br>

I'm always gonna choose you  
in every multiverse 💫
`,
scrap: ["small1.jpeg", "small3.jpeg"]
},

{
    background: "foto4.jpeg",
    text: `
    Will you choose me<br>
    to be the one who always stay by your side? 💍<br><br>
    
    <div class="btn-container">
    <button id="noBtn" onclick="noClicked()">No</button>
    <button id="yesBtn" onclick="yesClicked()">Yes</button>
    </div>
    `,
    scrap: []
    },
    
    {
    background: "foto5.jpeg",
    text: `
    <div class="btn-container">
    <button onclick="loveMessage()">I love you ❤️</button>
    <button onclick="loveMessage()">I love you more 💕</button>
    <button onclick="loveMessage()">I love you so much more sayang 💖💐</button>
    </div>
    `,
    scrap: []
    }

];

function startExperience() {

    const intro = document.getElementById("intro");
    const music = document.getElementById("bgMusic");

    intro.style.display = "none";
    music.play();
    showSlide();
}

function showSlide() {

    const slideDiv = document.getElementById("slide");

    slideDiv.style.display = "flex";
    slideDiv.style.pointerEvents = "auto"; // INI PENTING

    slideDiv.style.backgroundImage = `url(${slides[currentSlide].background})`;

    let scrapImages = "";
    slides[currentSlide].scrap.forEach(img => {
        scrapImages += `<img src="${img}" class="scrap-photo">`;
    });

    slideDiv.innerHTML = `
        ${scrapImages}
        <div class="slide-content">${slides[currentSlide].text}</div>
    `;

    currentSlide++;

    if (currentSlide === 4) return;

    if (currentSlide < slides.length) {
        setTimeout(showSlide, 10000);
    }
}

/* === BUTTON FUNCTIONS HARUS DI LUAR === */

function yesClicked() {
    showSlide();
}

function noClicked() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.style.transition = "all 0.6s ease";
    noBtn.style.opacity = "0";
    noBtn.style.transform = "scale(0.3)";

    yesBtn.style.transform = "scale(1.8)";
}

function loveMessage() {
    alert("AAAA MAAACIIIII CAYANG ATUUUU 😭💖 YOU'RE THE LOVE OF MY LIFE");
}

