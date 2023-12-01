/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

export function getElementFromDomAndChangeColorToRed() {
    const element = document.getElementById("change-my-color");
    element.style.color = "red"
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
    const paragraphe1 = document.getElementById("add-your-elements-in-this-element")
    paragraphe1.innerHTML = 'Salut je mappelle aaa et aussi Bonjour <br/>' + "Jai mon petit frèree qui sappelle Toto"
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
    const liste = document.getElementById("add-list-here");

    if (liste) {
        const ulElement = document.createElement("ul");

        listElements.forEach((element) => {
            const liElement = document.createElement("li");
            liElement.innerText = element.name;
            liElement.style.backgroundColor = element.color;
            ulElement.appendChild(liElement);
        });
        liste.appendChild(ulElement);

    } else {
        console.error("Container element not found with the specified id");
    }
}
