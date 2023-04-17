/* *********************************************** responsive *********************************************** */
const addResponsiveToAllTables = (): void => {
	const tables = getAllTables();
	tables.forEach( table => {
		const tableHeaders = getAllTableHeadersFromTable( table );
		const tableHeaderTexts = getAllTextFromTableHeaders( tableHeaders );
		const tableRows = getAllTableRowsFromTable( table );
		const allTableCells = [ ...getAllTableData(), ...getAllTableHeaders() ];
		allTableCells.forEach( tc => { getStyleAttributesAndRewrite( tc ); } );
		tableRows.forEach( tr => {
			const tableData = getAllTableDataFromTableRows( tr );
			tableData.forEach( ( td, i ) => {
				td.setAttribute( "data-label", tableHeaderTexts[ i ] );
			} );
		} );
	} );
};

const fullWidthTables = (): void => {
	const tables = getAllTables();
	tables.forEach( table => {
		table.style.width = table.parentElement.clientWidth - 20 + "px";
	} );
};

/* *********************************************** functions *********************************************** */
const getAllTables = (): NodeListOf<HTMLTableElement> => {
	return document.querySelectorAll( "table" );
};

const getAllTableHeadersFromTable = ( table: HTMLTableElement ): NodeListOf<HTMLTableCellElement> => {
	return table.querySelectorAll( "th" );
};

const getAllTableRowsFromTable = ( table: HTMLTableElement ): NodeListOf<HTMLTableRowElement> => {
	return table.querySelectorAll( "tr" );
};

const getAllTextFromTableHeaders = ( tableHeaderArr: NodeListOf<HTMLTableCellElement> ): string[] => {
	const tableHeaderTextArr = [];
	tableHeaderArr.forEach( th => {
		tableHeaderTextArr.push( th.innerText );
	} );
	return tableHeaderTextArr;
};

const getAllTableDataFromTableRows = ( tableRow: HTMLTableRowElement ): NodeListOf<HTMLTableCellElement> => {
	return tableRow.querySelectorAll( "td" );
};

const getStyleAttributesAndRewrite = ( tc: HTMLTableCellElement ): void => {
	const styleAttr = tc.getAttribute( "style" ).split( ": " )[ 1 ].split( ";" )[ 0 ];
	if ( styleAttr ) {
		tc.setAttribute( "data-text-align", styleAttr );
	}
	tc.setAttribute( "style", "" );
};

/* *********************************************** styling *********************************************** */
const loadStyles = (): void => {
	loadTableStyles();
};

const loadTableStyles = (): void => {
	const tableCells = [ ...getAllTableData(), ...getAllTableHeaders() ];
	tableCells.forEach( td => {
		const textAlign = td.dataset.textAlign;
		if ( textAlign ) {
			td.setAttribute( "class", "text-align-" + textAlign );
		}
	} );

};

const getAllTableData = (): NodeListOf<HTMLTableCellElement> => {
	return document.querySelectorAll( "td" );
};
const getAllTableHeaders = (): NodeListOf<HTMLTableCellElement> => {
	return document.querySelectorAll( "th" );
};
/* *********************************************** load *********************************************** */
addResponsiveToAllTables();
fullWidthTables();
loadStyles();

// if window is resized, reload the styles
onresize = ( event ) => {
	fullWidthTables();
};