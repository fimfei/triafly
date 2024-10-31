import Table from './src/components/Table/Table';

function callTable(data) {
    console.log(`callTable from GitHub`);
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	Table,
	callTable,
};
