document.addEventListener("DOMContentLoaded", function () {
  const _0x268285 = document.querySelector(".cells-board");
  if (!_0x268285) {
    console.error("Element .cells-board not found.");
    return;
  }
  const _0x2b12a1 = [1, 3, 5, 7];
  const _0x5c4f35 = {
    '1': 0x7,
    '3': 0x5
  };
  _0x5c4f35['5'] = 0x4;
  _0x5c4f35['7'] = 0x3;
  let _0x592d7b = 0;
  const _0x1ff3fa = document.getElementById("trapsAmount");
  const _0x12c5b1 = document.getElementById("prev_preset_btn");
  const _0x27524f = document.getElementById("next_preset_btn");
  const _0x2fb055 = document.getElementById("modeButton");
  let _0x4164a2 = "nesk";
  function _0x2b03c9() {
    if (_0x1ff3fa) {
      _0x1ff3fa.textContent = _0x2b12a1[_0x592d7b];
    }
  }
  if (_0x12c5b1) {
    _0x12c5b1.addEventListener("click", function () {
      if (_0x592d7b > 0) {
        _0x592d7b--;
        _0x2b03c9();
      }
    });
  }
  if (_0x27524f) {
    _0x27524f.addEventListener("click", function () {
      if (_0x592d7b < _0x2b12a1.length - 1) {
        _0x592d7b++;
        _0x2b03c9();
      }
    });
  }
  if (_0x2fb055) {
    _0x2fb055.addEventListener("click", function () {
      _0x4164a2 = _0x4164a2 === "nesk" ? "all" : "nesk";
      _0x2fb055.textContent = _0x4164a2 === "nesk" ? "Switch to All" : "Switch to multiple";
    });
  }
  _0x2b03c9();
  function _0x420064() {
    const _0x592eb7 = document.querySelectorAll(".cells-board .cell");
    _0x592eb7.forEach(_0x3bb21e => {
      _0x3bb21e.addEventListener("click", () => {
        _0x3bb21e.style.transform = "scale(0.7)";
        setTimeout(() => {
          _0x3bb21e.style.transform = "scale(1)";
        }, 200);
      });
    });
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
  let _0x1f72a5 = true;
  const _0x2ed119 = document.getElementById("playButton");
  if (_0x2ed119) {
    _0x2ed119.addEventListener("click", function () {
      _0x2ed119.disabled = true;
      let _0x22da4d = document.querySelectorAll(".cells-board .cell");
      if (!_0x1f72a5) {
        _0x268285.innerHTML = '';
        _0x29fdb1();
        _0x22da4d = document.querySelectorAll(".cells-board .cell");
      }
      
      const _0x3e78b8 = parseInt(_0x1ff3fa.textContent);
      const _0xb250a1 = _0x22da4d.length;
      
      const _0x340ed9 = new Set();
      while (_0x340ed9.size < _0x3e78b8) {
        const _0x5e9008 = Math.floor(Math.random() * _0xb250a1);
        _0x340ed9.add(_0x5e9008);
      }
      if (_0x4164a2 === "nesk") {
        const _0x58287f = _0x5c4f35[_0x3e78b8] || 0;
        const _0x513063 = [];
        while (_0x513063.length < _0x58287f) {
          const _0x66affa = Math.floor(Math.random() * _0x22da4d.length);
          if (!_0x513063.includes(_0x66affa)) {
            _0x513063.push(_0x66affa);
          }
        }
        let _0x5cafdb = 0;
        
        function _0x388332() {
          if (_0x5cafdb < _0x513063.length) {
            const _0x4fb7ae = _0x513063[_0x5cafdb];
            const _0x2468e9 = _0x22da4d[_0x4fb7ae];
            _0x2468e9.classList.add("cell-fade-out");
            setTimeout(async () => {
              _0x2468e9.innerHTML = '';
              try {
                const _0x458d12 = await fetch("img/stars.svg");
                const _0x408ccc = await _0x458d12.text();
                const _0x1a3c2d = document.createElement("div");
                _0x1a3c2d.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    position: relative;\n                                ";
                _0x1a3c2d.innerHTML = _0x408ccc;
                _0x2468e9.appendChild(_0x1a3c2d);
                const _0x3b6e1e = _0x1a3c2d.querySelector("svg");
                if (_0x3b6e1e) {
                  _0x3b6e1e.style.cssText = "\n                                        width: 56px;\n                                        height: 56px;\n                                        max-width: 100%;\n                                        max-height: 100%;\n                                        display: block;\n                                        opacity: 0;\n                                        transform: scale(0);\n                                        transition: opacity 0.3s, transform 0.3s;\n                                    ";
                  const _0x19b622 = _0x3b6e1e.getAttribute("viewBox");
                  if (!_0x19b622) {
                    const _0x5ad039 = _0x3b6e1e.getAttribute("width") || "100";
                    const _0x31796f = _0x3b6e1e.getAttribute("height") || "100";
                    _0x3b6e1e.setAttribute("viewBox", "0 0 " + _0x5ad039 + " " + _0x31796f);
                  }
                  _0x3b6e1e.setAttribute("preserveAspectRatio", "xMidYMid meet");
                  _0x3b6e1e.classList.add("star-animation");
                  requestAnimationFrame(() => {
                    _0x3b6e1e.style.opacity = '1';
                    _0x3b6e1e.style.transform = "scale(1)";
                  });
                }
                
              } catch (_0x2adc0c) {
                const _0x5ed1be = document.createElement("img");
                _0x5ed1be.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: block;\n                                    will-change: transform, opacity;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                _0x5ed1be.src = "img/stars.svg";
                _0x2468e9.appendChild(_0x5ed1be);
                requestAnimationFrame(() => {
                  _0x5ed1be.style.opacity = '1';
                  _0x5ed1be.style.transform = "scale(1)";
                });
              }
              _0x2468e9.classList.remove("cell-fade-out");
              _0x5cafdb++;
              setTimeout(_0x388332, 700);
            }, 400);
          } else {
            _0x2ed119.disabled = false;
            if (_0x1f72a5) {
              _0x1f72a5 = false;
            }
          }
        }
        _0x388332();
      } else {
        Promise.all([..._0x22da4d].map((_0x5a2840, _0x19beff) => {
          return new Promise(async _0x4ae06c => {
            _0x5a2840.classList.add("cell-fade-out");
            _0x5a2840.innerHTML = '';
            try {
              const _0x35f6e6 = await fetch(_0x340ed9.has(_0x19beff) ? "img/krest.svg" : "img/stars.svg");
              const _0x253df0 = await _0x35f6e6.text();
              const _0xf28c7a = document.createElement("div");
              _0xf28c7a.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                position: relative;\n                            ";
              _0xf28c7a.innerHTML = _0x253df0;
              _0x5a2840.appendChild(_0xf28c7a);
              const _0x5b9bca = _0xf28c7a.querySelector("svg");
              if (_0x5b9bca) {
                _0x5b9bca.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    max-width: 100%;\n                                    max-height: 100%;\n                                    display: block;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                const _0x551653 = _0x5b9bca.getAttribute("viewBox");
                if (!_0x551653) {
                  const _0x16e794 = _0x5b9bca.getAttribute("width") || "100";
                  const _0x2ffdd0 = _0x5b9bca.getAttribute("height") || "100";
                  _0x5b9bca.setAttribute("viewBox", "0 0 " + _0x16e794 + " " + _0x2ffdd0);
                }
                _0x5b9bca.setAttribute("preserveAspectRatio", "xMidYMid meet");
                _0x5b9bca.classList.add("star-animation");
                _0x5b9bca.style.opacity = '0';
                _0x5b9bca.style.transform = "scale(0)";
                requestAnimationFrame(() => {
                  _0x5b9bca.style.opacity = '1';
                  _0x5b9bca.style.transform = "scale(1)";
                });
              }
            } catch (_0x481677) {
              const _0x3f3178 = document.createElement("img");
              _0x3f3178.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: block;\n                                will-change: transform, opacity;\n                                opacity: 0;\n                                transform: scale(0);\n                                transition: opacity 0.3s, transform 0.3s;\n                            ";
              _0x3f3178.src = _0x340ed9.has(_0x19beff) ? "img/krest.svg" : "img/stars.svg";
              _0x5a2840.appendChild(_0x3f3178);
              requestAnimationFrame(() => {
                _0x3f3178.style.opacity = '1';
                _0x3f3178.style.transform = "scale(1)";
              });
            }
            _0x5a2840.classList.remove("cell-fade-out");
            _0x4ae06c();
          });
        })).then(() => {
          _0x2ed119.disabled = false;
          if (_0x1f72a5) {
            _0x1f72a5 = false;
          }
        });
      }
    });
  }
  function _0x29fdb1() {
    const _0xa418e7 = ["output_svgs/image_5450.svg", "output_svgs/image_11641.svg", "output_svgs/image_18337.svg", "output_svgs/image_24493.svg", "output_svgs/image_31201.svg", "output_svgs/image_37357.svg", "output_svgs/image_44065.svg", "output_svgs/image_50221.svg", "output_svgs/image_56929.svg", "output_svgs/image_63085.svg", "output_svgs/image_69793.svg", "output_svgs/image_75949.svg", "output_svgs/image_82645.svg", "output_svgs/image_89353.svg", "output_svgs/image_95509.svg", "output_svgs/image_102217.svg", "output_svgs/image_108373.svg", "output_svgs/image_115081.svg", "output_svgs/image_121237.svg", "output_svgs/image_127381.svg", "output_svgs/image_134077.svg", "output_svgs/image_140221.svg", "output_svgs/image_146917.svg", "output_svgs/image_153061.svg", "output_svgs/image_159757.svg"];
    _0xa418e7.forEach(_0x44200d => {
      const _0x5a80e3 = document.createElement("button");
      _0x5a80e3.type = "button";
      _0x5a80e3.className = "cell";
      _0x5a80e3.innerHTML = "<img width=\"56\" height=\"56\" src=\"" + _0x44200d + "\">";
      _0x268285.appendChild(_0x5a80e3);
    });
    _0x420064();
  }
  _0x29fdb1();
});