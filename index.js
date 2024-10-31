import Table from './src/components/Table/Table.js';
import callTable from './src/components/Table/callTable.js';

function _Table(data) {
    Table();
    console.log(`Table from GitHub`);
}

function _callTable(data) {
    callTable();
    console.log(`callTable from GitHub`);
}

module.exports = {
	Table: _Table,
	callTable: _callTable
};
