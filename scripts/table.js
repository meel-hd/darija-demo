/**
 * Code related to the table displaying
 * mappings of physical keyboard keys to the alphabet
 */
const tableView = document.getElementById('table');

// Build and display the table of mappings
for (const letter in arabicArray) {
    const asset = `assets/${arabicArray[letter]}.png`
    tableView.innerHTML +=
        `
        <div id="item">
            <div>
            <p id="item-ar" style="font-size: 18px">${arabicArray[letter]}</p>
            <p style="font-size: 18px">${letter}</p>
            </div>
            <img src="${asset}" width="30" />
        </div>
        </br>
    `
}

// Show/Hide the table
function toggleTable() {
    tableView.classList.toggle('hidden')
}

function hideTable(){
    tableView.classList.add('hidden')
}