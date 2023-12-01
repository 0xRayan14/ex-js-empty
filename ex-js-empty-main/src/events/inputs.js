/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    const inputText = document.getElementById("write-some-text");

    inputText.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const inputValue = inputText.value.trim();

            if (inputValue !== "") {
                alert(inputValue);
            }
        }
    });
}


/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    const inputElement = document.getElementById('list-input');
    const listElement = document.getElementById('list');

    inputElement.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();

            const inputValue = inputElement.value;

            if (inputValue.trim() !== '') {

                const listItem = document.createElement('li');
                listItem.textContent = inputValue;
                listElement.appendChild(listItem);
                inputElement.value = '';
            }
        }
    });

    inputElement.addEventListener('blur', function () {
        const inputValue = inputElement.value;

        if (inputValue.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;
            listElement.appendChild(listItem);
            inputElement.value = '';
        }
    });
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    const liste = document.getElementById('list');

    liste.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'li') {
            event.target.remove();
        }
    });
}
