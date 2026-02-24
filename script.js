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
    <button onclick="growThenExplode(this)">I love you ❤️</button>
    <button onclick="growThenExplode(this)">I love you more 💕</button>
    <button onclick="growThenExplode(this)">I love you so much more sayang 💖💐</button>
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

function growThenExplode(btn) {
    // ambil scale saat ini
    const style = window.getComputedStyle(btn);
    const matrix = new WebKitCSSMatrix(style.transform);
    let currentScale = matrix.a; // scaleX
    if (currentScale === 0) currentScale = 1;

    const maxScale = 5;
    const increment = 0.5;

    if (currentScale + increment < maxScale) {
        // tombol masih bisa dibesarkan
        const newScale = currentScale + increment;
        btn.style.transition = "transform 0.3s ease";
        btn.style.transform = `scale(${newScale})`;
    } else {
        // tombol sudah maksimum → meledak

        // HILANGKAN tombol
        btn.style.opacity = 0;
        btn.style.pointerEvents = "none";

        // ledakan shards di seluruh layar
        const shards = 50;
        for (let i = 0; i < shards; i++) {
            const shard = document.createElement('div');
            shard.className = 'shard';
            // random posisi awal di layar
            shard.style.left = `${Math.random() * window.innerWidth}px`;
            shard.style.top = `${Math.random() * window.innerHeight}px`;
            shard.style.setProperty('--x', `${(Math.random()-0.5)*400}px`);
            shard.style.setProperty('--y', `${(Math.random()-0.5)*400}px`);
            document.body.appendChild(shard);
            setTimeout(() => shard.remove(), 1000);
        }

        // teks cinta menempel di layar (tidak jatuh)
        const texts = 30;
        for (let i = 0; i < texts; i++) {
            const text = document.createElement('div');
            text.className = 'stuck-text';
            text.textContent = "I love you so much more 💗";
            text.style.left = `${Math.random()*window.innerWidth}px`;
            text.style.top = `${Math.random()*window.innerHeight}px`;
            text.style.fontSize = `${Math.random()*25 + 15}px`;
            text.style.color = `hsl(${Math.random()*360}, 80%, 60%)`;
            text.style.textShadow = `0 0 10px ${text.style.color}, 0 0 20px ${text.style.color}`;
            document.body.appendChild(text);
        }
    }
}
