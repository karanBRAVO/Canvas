const showContent = document.getElementById("showContent");
const showArrow = document.getElementById("showArrow");
const ul = document.getElementById("ul");
let toggleShow = true;
const sizeContainer = document.getElementById("sizeContainer");
const showPixelResizer = document.getElementById("showPixelResizer");
const showResizeArrow = document.getElementById("showResizeArrow");
const resizeBox = document.getElementById("resizeBox");
let toggleResizer = true;
const decreaseSize = document.getElementById("decreaseSize");
const sizeCounter = document.getElementById("sizeCounter");
const increaseSize = document.getElementById("increaseSize");
let pixelSize = 2;
const toolBoxCont = document.getElementById("toolBoxCont");
const showToolBox = document.getElementById("showToolBox");
const showToolBoxArrow = document.getElementById("showToolBoxArrow");
const toolBox = document.getElementById("toolBox");
let toggleToolBox = true;

showContent.addEventListener("click", () => {
    if (!(toggleShow)) {
        ul.style.transform = "translateX(0px)";
        showArrow.style.transform = "rotateZ(90deg)";
        sizeContainer.style.transform = "translateY(0px)";
        toolBoxCont.style.transform = "translateY(0px)";
        toggleShow = true;
    }
    else if (toggleShow) {
        ul.style.transform = "translateX(-600px)";
        showArrow.style.transform = "rotateZ(0deg)";
        sizeContainer.style.transform = "translateY(-240px)";
        toolBoxCont.style.transform = "translateY(-240px)";
        toggleShow = false;
    }
})

showPixelResizer.addEventListener('click', () => {
    if (!(toggleResizer)) {
        resizeBox.style.transform = "translateX(0px)";
        showResizeArrow.style.transform = "rotateZ(90deg)";
        toggleResizer = true;
    }
    else if (toggleResizer) {
        resizeBox.style.transform = "translateX(-600px)";
        showResizeArrow.style.transform = "rotateZ(0deg)";
        toggleResizer = false;
    }
});

decreaseSize.addEventListener('click', () => {
    if (pixelSize > 2) {
        pixelSize--;
        sizeCounter.innerHTML = `${pixelSize}`;
    }
})

increaseSize.addEventListener('click', () => {
    if (pixelSize < 20) {
        pixelSize++;
        sizeCounter.innerHTML = `${pixelSize}`;
    }
})

showToolBox.addEventListener('click', () => {
    if (!(toggleToolBox)) {
        toolBox.style.transform = "translateX(0px)";
        showToolBoxArrow.style.transform = "rotateZ(90deg)";
        toggleToolBox = true;
    }
    else if (toggleToolBox) {
        toolBox.style.transform = "translateX(-600px)";
        showToolBoxArrow.style.transform = "rotateZ(0deg)";
        toggleToolBox = false;
    }
})

const VIOLET = document.getElementById("Violet");
const INDIGO = document.getElementById("Indigo");
const BLUE = document.getElementById("Blue");
const GREEN = document.getElementById("Green");
const YELLOW = document.getElementById("Yellow");
const ORANGE = document.getElementById("Orange");
const RED = document.getElementById("Red");
let colorVal = 'white';

function resetBg() {
    VIOLET.style.backgroundColor = "white";
    VIOLET.style.transform = "translateX(0px)";
    INDIGO.style.backgroundColor = "white";
    INDIGO.style.transform = "translateX(0px)";
    BLUE.style.backgroundColor = "white";
    BLUE.style.transform = "translateX(0px)";
    GREEN.style.backgroundColor = "white";
    GREEN.style.transform = "translateX(0px)";
    YELLOW.style.backgroundColor = "white";
    YELLOW.style.transform = "translateX(0px)";
    ORANGE.style.backgroundColor = "white";
    ORANGE.style.transform = "translateX(0px)";
    RED.style.backgroundColor = "white";
    RED.style.transform = "translateX(0px)";
}

function styleColorPalette(boxName, bg_color) {
    colorVal = bg_color;
    boxName.style.backgroundColor = bg_color;
    boxName.style.transform = "translateX(10px)";
}

VIOLET.addEventListener('click', () => {
    resetBg();
    styleColorPalette(VIOLET, "violet");
})

INDIGO.addEventListener('click', () => {
    resetBg();
    styleColorPalette(INDIGO, "indigo");
})

BLUE.addEventListener('click', () => {
    resetBg();
    styleColorPalette(BLUE, "blue");
})

GREEN.addEventListener('click', () => {
    resetBg();
    styleColorPalette(GREEN, "green");
})

YELLOW.addEventListener('click', () => {
    resetBg();
    styleColorPalette(YELLOW, "yellow");
})

ORANGE.addEventListener('click', () => {
    resetBg();
    styleColorPalette(ORANGE, "orange");
})

RED.addEventListener('click', () => {
    resetBg();
    styleColorPalette(RED, "red");
})

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("blur", () => {
    resetBg();
    colorVal = colorPicker.value;
})

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rmvAllBtn = document.getElementById("rmvAllBtn");
const eraser = document.getElementById("eraser");
const saveBtn = document.getElementById("saveBtn");

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
resizeCanvas();

function drawPixel(x, y, size) {
    ctx.fillStyle = colorVal;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

rmvAllBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

eraser.addEventListener('click', () => {
    colorVal = 'black';
})

saveBtn.addEventListener('click', (e) => {
    let val = confirm("Do you want to save canvas?");
    if (val) {
        const link = document.createElement('a');
        link.download = 'canvasDraw.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    }
})

canvas.addEventListener('mousemove', (event) => {
    if (event.buttons == 1) {
        let mouseX = event.x - 168;
        let mouseY = event.y;
        drawPixel(mouseX, mouseY, pixelSize);
    }
})
