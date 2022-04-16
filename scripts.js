
//1335 x 520

for (let i = 0; i < 16; i++) {
    const divRow = document.createElement('div');
    divRow.id = 'divRow' + i.toString();
    divRow.style.display = 'flex';
    document.body.appendChild(divRow);
    console.log(divRow);
    for (let j = 0; j < 16; j++) {
        const divColumn = document.createElement('div');
        divColumn.width = 1335 / j; //j depends on userinput
        divColumn.height = 52 / j;
        divColumn.addEventListener("mouseover", e => {
            divColumn.style.backgroundColor = `rgba(0,0,0,1)`
        })
        document.getElementById('divRow' + i.toString()).appendChild(divColumn);
    }
}


