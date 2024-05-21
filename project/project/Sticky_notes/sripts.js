document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("btn-1");
    const textarea = document.getElementById("textarea");
    const colorPicker = document.getElementById("color");
    // const outputContainer = document.querySelector(".notes-container");
    const outputContainer = document.getElementById("notesContainer")

    addButton.addEventListener("click", function () {
        const noteText = textarea.value.trim();
        const noteColor = colorPicker.value;

        if (noteText !== "") {
            const noteElement = document.createElement("div");
            noteElement.classList.add("output");
            noteElement.style.backgroundColor = noteColor;
            noteElement.innerHTML = `<p>${noteText}</p>`;
            outputContainer.appendChild(noteElement);
            textarea.value = ""; // Clear the textarea after adding the note
        } else {
            alert("Please enter some text before adding a note.");
        }
    });
});
