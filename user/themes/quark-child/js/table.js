const addResponsiveToAllTables = () => {
    const tables = getAllTables();
    tables.forEach(table => {
        const tableHeaders = getAllTableHeadersFromTable(table);
        const tableHeaderTexts = getAllTextFromTableHeaders(tableHeaders);
        const tableRows = getAllTableRowsFromTable(table);
        const allTableCells = [...getAllTableData(), ...getAllTableHeaders()];
        allTableCells.forEach(tc => { getStyleAttributesAndRewrite(tc); });
        tableRows.forEach(tr => {
            const tableData = getAllTableDataFromTableRows(tr);
            tableData.forEach((td, i) => {
                td.setAttribute("data-label", tableHeaderTexts[i]);
            });
        });
    });
};
const fullWidthTables = () => {
    const tables = getAllTables();
    tables.forEach(table => {
        table.style.width = table.parentElement.clientWidth - 20 + "px";
    });
};
const getAllTables = () => {
    return document.querySelectorAll("table");
};
const getAllTableHeadersFromTable = (table) => {
    return table.querySelectorAll("th");
};
const getAllTableRowsFromTable = (table) => {
    return table.querySelectorAll("tr");
};
const getAllTextFromTableHeaders = (tableHeaderArr) => {
    const tableHeaderTextArr = [];
    tableHeaderArr.forEach(th => {
        tableHeaderTextArr.push(th.innerText);
    });
    return tableHeaderTextArr;
};
const getAllTableDataFromTableRows = (tableRow) => {
    return tableRow.querySelectorAll("td");
};
const getStyleAttributesAndRewrite = (tc) => {
    const styleAttr = tc.getAttribute("style").split(": ")[1].split(";")[0];
    if (styleAttr) {
        tc.setAttribute("data-text-align", styleAttr);
    }
    tc.setAttribute("style", "");
};
const loadStyles = () => {
    loadTableStyles();
};
const loadTableStyles = () => {
    const tableCells = [...getAllTableData(), ...getAllTableHeaders()];
    tableCells.forEach(td => {
        const textAlign = td.dataset.textAlign;
        if (textAlign) {
            td.setAttribute("class", "text-align-" + textAlign);
        }
    });
};
const getAllTableData = () => {
    return document.querySelectorAll("td");
};
const getAllTableHeaders = () => {
    return document.querySelectorAll("th");
};
addResponsiveToAllTables();
fullWidthTables();
loadStyles();
onresize = (event) => {
    fullWidthTables();
};
