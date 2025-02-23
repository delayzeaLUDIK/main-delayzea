window.addEventListener("load", function () {
    const canvas = document.getElementById('canvas');
    if (typeof canvas.getContext === 'undefined') {
        return;
    }
    const ctx = canvas.getContext("2d");
    function fitCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    fitCanvasSize();
    window.onresize = fitCanvasSize;
    (function () {
        var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
    })();
    var mouse = {
        x: undefined,
        y: undefined
    }
    if (window.matchMedia("(min-width: 400px)").matches) {
        var maxRadius = 40;
        } else {
        var maxRadius = 24;
    }
    var colorArray = [
        '#def0ff',
        '#c2e3ff',
        '#9ed3ff',
        '#78c2ff',
        '#62a9e3'
    ]
    window.addEventListener('mousemove',
    function () {
        mouse.x = event.x;
        mouse.y = event.y;
    })
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        };
        this.update = function () {
            if (this.x + radius > canvas.width || this.x - radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + radius > canvas.height || this.y - radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                this.radius += 1;
                if (this.radius > maxRadius) {
                    this.radius -= 1;
                }
                } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }
            this.draw();
        }
    }
    var circleArray = [];
    for (var i = 0; i < 800; i++) {
        var x = Math.random() * (canvas.width - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var y = Math.random() * (canvas.height - radius * 2) + radius;
        var dy = (Math.random() - 0.5);
        var radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }
    animate();
})


document.addEventListener('DOMContentLoaded', function() {
    let gamesButton = document.querySelector('.tablinks.games-icon');
    openTab(new Event('click'), 'Games', gamesButton);
    showSlides(slideIndex);
});

const translations = {
    en: {
        startButton: "Start",
        game1Title: "Mines",
        game1Button: "Open",
        game2Title: "Lucky Jet",
        game2Button: "Open",
        game6Title: "Aviator",
        game6Button: "open"
    },
    ru: {
        startButton: "Начать",
        game1Title: "Mines",
        game1Button: "Открыть",
        game2Title: "Lucky Jet",
        game2Button: "Открыть",
        game6Title: "Aviator",
        game6Button: "открыть"
    },
    hi: {
        startButton: "शुरू करें",
        game1Title: "Mines",
        game1Button: "खोलें",
        game2Title: "Lucky Jet",
        game2Button: "खोलें",
        game6Title: "एवियेटर",
        game6Button: "खोलें"
    },
    br: {
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Lucky Jet",
        game2Button: "Abrir",
        game6Title: "Aviador",
        game6Button: "abrir"
    },
    es: {
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Lucky Jet",
        game2Button: "Abrir",
        game6Title: "Aviador",
        game6Button: "abrir"
    },
    uz: {
        startButton: "Boshlash",
        game1Title: "Mines",
        game1Button: "Ochish",
        game2Title: "Lucky Jet",
        game2Button: "Ochish",
        game6Title: "Aviator",
        game6Button: "ochish"
    },
    az: {
        startButton: "Başla",
        game1Title: "Mines",
        game1Button: "Aç",
        game2Title: "Lucky Jet",
        game2Button: "Aç",
        game6Title: "Aviator",
        game6Button: "aç"
    },
    tr: {
        startButton: "Başlat",
        game1Title: "Mines",
        game1Button: "Aç",
        game2Title: "Lucky Jet",
        game2Button: "Aç",
        game6Title: "Aviatör",
        game6Button: "aç"
    },
    pt: {
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Lucky Jet",
        game2Button: "Abrir",
        game6Title: "Aviador",
        game6Button: "abrir"
    },
    ar: {
        startButton: "ابدأ",
        game1Title: "Mines",
        game1Button: "فتح",
        game2Title: "Lucky Jet",
        game2Button: "فتح",
        game6Title: "أفييتر",
        game6Button: "فتح"
    }
};

function changeLanguage(lang) {
    console.log("Changing language to: ", lang);
    console.log("Translations for this language: ", translations[lang]);

    if (translations[lang]) {
        const elementsToChange = [
            { id: 'game-picker-title', text: translations[lang].gamePickerTitle },
            { id: 'game1-title', text: translations[lang].game1Title },
            { id: 'game1-button', text: translations[lang].game1Button },
            { id: 'game6-title', text: translations[lang].game6Title },
            { id: 'game6-button', text: translations[lang].game6Button },
            { id: 'game2-title', text: translations[lang].game2Title },
            { id: 'game2-button', text: translations[lang].game2Button },
        ];

        elementsToChange.forEach(({ id, text }) => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = text;
            } else {
                console.error(`Элемент с id "${id}" не найден`);
            }
        });
    } else {
        console.error("Translations not found for language: ", lang);
    }
}


// Создаем звезды
function createStars() {
  const stars = document.getElementById('stars');
  const count = 150; // количество звезд

  for(let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Рандомное положение
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Рандомный размер
    const size = Math.random() * 5;
    
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Рандомная задержка мерцания
    star.style.animationDelay = Math.random() * 2 + 's';
    
    stars.appendChild(star);
  }
}

// Запускаем создание звезд
createStars();






function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        var slidesContainer = document.querySelector(".slides");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slidesContainer.style.transform = `translateX(${-(slideIndex - 1) * 100 / slides.length}%)`;
        dots[slideIndex - 1].className += " active";
    }

    function openTab(evt, tabName, button) {
        var i, tabcontent, tablinks;
        var miniModal = document.getElementById('miniModal');
        var aboutGif = document.getElementById('aboutGif');
    
        // Скрываем все вкладки и удаляем класс 'active'
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove('active');
        }
    
        // Удаляем класс 'active' у всех кнопок
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
    
        // Показываем текущую вкладку и добавляем класс 'active'
        document.getElementById(tabName).style.display = "flex";
        document.getElementById(tabName).classList.add('active');
        button.classList.add("active");
    
        // Скроллим страницу
        if (tabName === 'Games') {
            window.scrollTo({ top: 45, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
        // Обрабатываем вкладку 'About'
        if (tabName === 'About') {
            var newAboutGif = aboutGif.cloneNode(true);
            aboutGif.parentNode.replaceChild(newAboutGif, aboutGif);
            aboutGif = newAboutGif; // обновляем ссылку на новый элемент
            aboutAudio.play();
        } else {
            aboutAudio.pause();
            aboutAudio.currentTime = 0;
        }
    
        // Обрабатываем вкладку 'Contact'
        if (tabName === 'Contact') {
            miniModal.style.display = 'none';
        }
    }



    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1);
                i--;
                particlesArray.push(new Particle());
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });



    init();
    animate();
    const typingText = document.querySelector('.typing-text');
    const phrases = [

    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let delay = 60;

    function type() {
        if (isDeleting && currentPhrase.length === 0) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            letterIndex = 0;
            isDeleting = false;
            if (phraseIndex === 0) {
                setTimeout(type, 2000);
                return;
            }
        } else if (!isDeleting && currentPhrase.length === phrases[phraseIndex].length) {
            isDeleting = true;
            delay = 2500;
        }

        if (isDeleting) {
            currentPhrase.pop();
            delay = 30;
        } else {
            currentPhrase.push(phrases[phraseIndex][letterIndex++]);
            delay = 120;
        }

        typingText.textContent = currentPhrase.join('');
        typingText.style.opacity = isDeleting ? 0.5 : 1;
        setTimeout(type, delay);
    }

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(type, 2000);
    });
        $(document).ready(function () {
        for (i = 0; i < 5; i++) {
            $(".list li").clone().appendTo(".list");
        }
        $('.button').click(function () {
            $('.window').css({
                right: "0"
            });
            $('.list li').css({
                border: '4px solid transparent'
            });
            function selfRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var x = selfRandom(50, 100);
            $('.list li:eq('+x+')').css({
                border: '4px solid #00ba00'
            });

            var itemWidth = 100;
            var itemMargin = 8;
            $('.window').animate({
                right: ((x * itemWidth) + (x * itemMargin) - 119)
            }, 10000);
        });
    });
    function detectDevice() {
        var ua = navigator.userAgent;
        var deviceType;
        var deviceModel = "";

        if (/android/i.test(ua)) {
            deviceType = "Android";
            var match = ua.match(/Android.*?; (\w+)\s(\w+)\s/);
            deviceModel = match ? match[1] + " " + match[2] : "";
        } else if (/iPhone|iPad|iPod/i.test(ua)) {
            deviceType = "iOS";
            if (/iPhone/i.test(ua)) {
                deviceModel = "iPhone";
            } else if (/iPad/i.test(ua)) {
                deviceModel = "iPad";
            } else if (/iPod/i.test(ua)) {
                deviceModel = "iPod";
            }
        } else {
            deviceType = "Desktop";
        }

        var output = deviceModel ? deviceType + " (" + deviceModel + ")" : deviceType;
        var deviceOutput = document.getElementById("device-output");
        deviceOutput.classList.remove("visible");
        setTimeout(function() {
            deviceOutput.textContent = output;
            deviceOutput.classList.add("visible");
        }, 10);
    }
    function triggerHapticFeedback() {
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }
     function startGame() {
        console.log(document.getElementById("device-output").textContent);
        if (document.getElementById("device-output").textContent.trim() === "Device not detected") {
            showModal();
        } else {
            const now = new Date().getTime();
            const lastGameTime = localStorage.getItem('lastGameTime');
            if (lastGameTime && now - lastGameTime < 60000) {
                showMiniModal();
                return;
            }
            var randomNumber = Math.floor(Math.random() * 5) + 1;
            var probability = Math.floor(Math.random() * 12) + 85;
            localStorage.setItem('lastGameTime', now);
            localStorage.setItem('lastGameImage', randomNumber);
            localStorage.setItem('lastProbability', probability);

            var imgContainer = document.querySelector('.image-container');
            var oldImage = imgContainer.querySelector('img');
            oldImage.style.display = 'none';

            var loaderDiv = document.createElement('div');
            loaderDiv.className = 'loader';
            imgContainer.appendChild(loaderDiv);

            setTimeout(function() {
                loaderDiv.remove();
                oldImage.style.display = 'block';
                oldImage.src = randomNumber + '.png';
                oldImage.style.marginLeft = "25px";
            }, 3000);
        }
    }


    function closeMiniModal() {
        var miniModal = document.getElementById('miniModal');
        miniModal.style.display = 'none';
    }


    function showModal() {
        var modal = document.getElementById("modal");
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modal.classList.add("show");
        });
    }

    function closeModal() {
        var modal = document.getElementById("modal");
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // 500ms - время вашей CSS transition
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
function openGame(game) {
triggerHapticFeedback();
var ua = navigator.userAgent;
var isIOS = /iPhone|iPad|iPod/i.test(ua);

var links = {
    mines: {
        ios: 'newMines/index.html',
        other: 'newMines/index.html'
    },
    minesSpibe: {
        ios: 'Lucky/index.html',
        other: 'Lucky/index.html'
    },
    Aviator: {
        ios: 'avi/index.html',
        other: 'avi/index.html'
    }

};
        var url = isIOS ? links[game].ios : links[game].other;
        window.location.href = url;
    }
