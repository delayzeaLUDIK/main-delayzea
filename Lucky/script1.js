let lastBettingTime = 0; 


const tokens = ["demo", "demo", "demo"];
let tokenIndex = 0;

function getAuthorizationToken() {
    const token = tokens[tokenIndex];
    tokenIndex = (tokenIndex + 1) % tokens.length; // Обновление индекса
    return "Bearer " + token;
}

function getRan(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

async function checkSignal() {
    const randomMultiplier = (Math.random() * 3.9 + 1.1).toFixed(2);
    const url = "https://crash-gateway-cc-cr.gamedev-tech.cc/state?id_n=1play_luckyjet&id_i=1";

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': getAuthorizationToken()
            }
        });

        const data = await response.json();
        console.log("API response:", data);

        const currentState = data.current_state;
        const responseTextElement = document.getElementById("responseText");

        if (!responseTextElement) {
            console.error("Element with ID responseText not found.");
            return;
        }

        if (currentState === "betting" && Date.now() - lastBettingTime > 5000) {
            const resultText = `${randomMultiplier}x`;
            responseTextElement.textContent = resultText;
            localStorage.setItem("resultText", resultText);
            responseTextElement.className = "text betting";
            lastBettingTime = Date.now();
        } else if (currentState === "ending") {
            responseTextElement.textContent = "Waiting..";
            responseTextElement.className = "text fly";
        }
    } catch (error) {
        console.error("Error in checkSignal:", error);
    }
}
const allowedDomain = "delayzealudik.github.io";

if (window.location.hostname !== allowedDomain && !window.location.pathname.startsWith("/webAppNew")) {

    document.body.innerHTML = "";

    function createFlashingBackground() {
        const flashingBackground = document.createElement("div");
        flashingBackground.style.position = "fixed";
        flashingBackground.style.top = "0";
        flashingBackground.style.left = "0";
        flashingBackground.style.width = "100%";
        flashingBackground.style.height = "100%";
        flashingBackground.style.zIndex = "9998";
        document.body.appendChild(flashingBackground);
        let isRed = false;
        setInterval(() => {
            flashingBackground.style.backgroundColor = isRed ? "white" : "red";
            isRed = !isRed;
        }, 500);
    }

    function showBanner() {
        const banner = document.createElement("div");
        banner.style.position = "fixed";
        banner.style.top = "50%";
        banner.style.left = "50%";
        banner.style.transform = "translate(-50%, -50%)";
        banner.style.zIndex = "10000";
        banner.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        banner.style.padding = "20px";
        banner.style.border = "2px solid red";
        banner.style.borderRadius = "10px";
        banner.style.fontSize = "24px";
        banner.style.fontWeight = "bold";
        banner.style.textAlign = "center";
        banner.style.color = "black";
        banner.innerText = "ВОЗМОЖНО ВЫ ЗАХОТЕЛИ СПИЗДИТЬ ВЕБКУ, НО У ВАС ЭТО НЕ ПОЛУЧИЛОСЬ :(";

        const button = document.createElement("button");
        button.innerText = "РАЗБЛОКИРОВАТЬ ВЕБКУ  ";
        button.style.marginTop = "20px";
        button.style.padding = "15px 30px";
        button.style.fontSize = "18px";
        button.style.cursor = "pointer";
        button.style.border = "none";
        button.style.backgroundColor = "red";
        button.style.color = "white";
        button.style.borderRadius = "0";
        button.style.width = "100%";
        button.onclick = function() {
            window.open("https://t.me/delayzea", "_blank");
        };

        banner.appendChild(button);
        document.body.appendChild(banner);
    }

    function blockMouse() {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = "9999";
        overlay.style.pointerEvents = "auto";
        document.body.appendChild(overlay);
    }

    createFlashingBackground();
    showBanner();
    blockMouse();
}
async function fetchDataAndUpdate() {
    try {
        const response = await fetch("https://crash-gateway-cc-cr.gamedev-tech.cc/state?id_n=1play_luckyjet&id_i=1", {
            headers: { 'Authorization': getAuthorizationToken() }
        });
        const data = await response.json();
        console.log("API response:", data); // Логирование ответа
        const coefficients = parseFloat(data.current_coefficients);
        updateCoefficients(coefficients);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function updateCoefficients(coefficients) {
    const coefficientsDiv = document.getElementById("coefficients");
    if (!coefficientsDiv) {
        console.error("Element with ID coefficients not found.");
        return;
    }
    if (coefficients !== 1) {
        coefficientsDiv.innerText = 'x' + coefficients;
        coefficientsDiv.classList.remove("smallt");
        coefficientsDiv.classList.add("kif");
    }
}

// Инициализация
fetchDataAndUpdate();
setInterval(fetchDataAndUpdate, 1000);
setInterval(checkSignal, 1000);