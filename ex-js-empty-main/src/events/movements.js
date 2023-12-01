/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    const mouseMov = document.getElementById('mouse-coordinates');

    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        mouseMov.textContent = `x: ${mouseX}, y: ${mouseY}`;
    });
}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
    const inputElement = document.getElementById("focus-me");
    const labelElement = document.querySelector('label[for="focus-me"]');
    const defaultBorderColor = inputElement.style.borderColor || getComputedStyle(inputElement).borderColor;
    const usedColors = new Set();
    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF"];
        let color = colors[Math.floor(Math.random() * colors.length)];

        while (usedColors.has(color) || color === defaultBorderColor) {
            color = colors[Math.floor(Math.random() * colors.length)];
        }

        usedColors.add(color);
        return color;
    }

    inputElement.addEventListener("mouseover", () => {
        labelElement.textContent = "Yes, you hover me!";
    });

    inputElement.addEventListener("mouseout", () => {
        labelElement.textContent = "";
    });

    inputElement.addEventListener("focus", () => {
        inputElement.style.borderColor = getRandomColor();
    });

    inputElement.addEventListener("blur", () => {
        inputElement.style.borderColor = defaultBorderColor;
    });
}


/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    const input = document.getElementById("focus-me")
    input.addEventListener("input", () => {
        const newColor = getRandomColor()
        input.style.borderColor = newColor
        const labels = document.querySelectorAll(`label[for='${input.id}']`)
        labels.forEach((label) => {
            label.style.color = newColor
        })
    })
}
function getRandomColor() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    return `rgb(${x},${y},${z})`
}