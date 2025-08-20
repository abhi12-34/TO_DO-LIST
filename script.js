





document.getElementById("add").onclick = function () {
    // Step 1: Get input text and trim (ignore space from both ends)
    let input = document.getElementById("txt").value.trim();
    if (input === "") return;

    // Step 2: Create outer div.write
    let writeDiv = document.createElement("div");
    writeDiv.className = "write";

    // Step 3: Create inner div.ul
    let ulDiv = document.createElement("div");
    ulDiv.className = "ul";

    // Step 4: Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    // Step 5: Create label
    let label = document.createElement("label");
    label.innerText = input;
    
    
    // Strike-through on check
    checkbox.onchange = function () {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.opacity = "0.7";
        } 
        else {
            label.style.textDecoration = "none";
        }
    };

    // Step 6: Put checkbox and label into ulDiv
    ulDiv.appendChild(checkbox);
    ulDiv.appendChild(label);

    // Step 7: Create delete button with icon
    let delBtn = document.createElement("button");
    let delImg = document.createElement("img");
    delImg.src = "icon/delete-svgrepo-com.svg"; // your delete icon path
    delImg.alt = "delete";
    delBtn.appendChild(delImg);

    // Delete function
    delBtn.onclick = function () {
        writeDiv.remove();
    };

    // Step 8: Add ulDiv and button to writeDiv
    writeDiv.appendChild(ulDiv);
    writeDiv.appendChild(delBtn);

    // Step 9: Add writeDiv to notes
    document.getElementById("notes").appendChild(writeDiv);

    // Step 10: Clear input box
    document.getElementById("txt").value = "";
    
};






    

