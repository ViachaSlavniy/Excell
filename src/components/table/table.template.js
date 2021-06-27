const CODES = {
    A: 65,
    Z: 90,
}

function createCell() {
    return `<div class="cell" contentEditable></div>`
}

function createCol(colLetter) {
    return (
        `
         <div class="column">
           ${colLetter}
          </div>
        `
    )
}

function createRow(content = '', rowNum = '') {
    return (
        `
        <div class="row">
            <div class="row-info">${rowNum}</div>
            <div class="row-data">
                ${content}
            </div>
        </div>
        `
    )
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
    const columsCounts = CODES.Z - CODES.A + 1;

    const cols = new Array(columsCounts)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')

    const cells = new Array(columsCounts)
        .fill('')
        .map((_) => createCell())
        .join('');

    const rows = []
    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, i + 1))
    }
    return rows.join('')
}
