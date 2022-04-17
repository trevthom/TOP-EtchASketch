
//1335 x 520

let newGrid = document.getElementById('newGrid');
let shade = 0.1;

newGrid.addEventListener('click', e => {
    let gridSize = '';
    gridSize = prompt('How many rows/columns?');
    createNewGrid(gridSize);
    }
);

function createNewGrid(gridSize) {
    document.querySelectorAll('.gridRow').forEach(e => e.remove());

    //create grid rows (container divs for columns)
    for (let i = 0; i < parseInt(gridSize); i++) {
        const divRow = document.createElement('div');
        divRow.className = 'gridRow';
        document.getElementById('container').appendChild(divRow);
        for (let j = 0; j < parseInt(gridSize); j++) {
            const divColumn = document.createElement('div');
            divRow.id = 'divRow' + i.toString();
            divColumn.style.backgroundColor = 'rgba(0,0,0,0)';
            divColumn.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = changeOpacity(e.target.style.backgroundColor);
                
            })
            document.getElementById('divRow' + i.toString()).appendChild(divColumn);
        }
    }
}

function changeOpacity(alpha) {
    if (alpha.endsWith('.9)') || alpha.endsWith(', 1)')) {
        return 'rgba(0, 0, 0, 1)';
    } else if(parseInt(alpha.charAt(16)) < 9) {
        let newAlpha = parseInt(alpha.charAt(16)) + 1;
        return alpha.replace(alpha.charAt(16), newAlpha);
    } else if (alpha.startsWith('rgb(')) {
        return 'rbg(0, 0, 0)';
    } else if (alpha.endsWith(', 0)')) {
        console.log("here");
        return 'rgba(0, 0, 0, 0.1)';
    }  
}