const e=document.getElementById("startButton"),t=document.getElementById("stopButton");let d;function n(){const e=getRandomColor();document.body.style.backgroundColor=e}e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval(n,1e3)})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.dfbb3f96.js.map
