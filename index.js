import Table from './src/components/Table/Table';

function callTable(data) {
    console.log(`callTable from GitHub`);
}

module.exports = {
	presets: [
		'@babel/preset-react',
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	Table,
	callTable
}
