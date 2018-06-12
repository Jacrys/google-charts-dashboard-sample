google.charts.load('current', { 'packages': ['corechart', 'table']});

google.charts.setOnLoadCallback(retrieveData);

function retrieveData() {
	var URL = 'https://docs.google.com/spreadsheets/d/1Im6Z5ZOOsWlLvo4y4210dBUsiQlj23QTT7WkBlv6kHg/gviz/tq?gid=0';
	var query = new google.visualization.Query(URL);

	var queryString = 'select A, B, C, D, E';
	query.setQuery(queryString);

	query.send(gotResponse);
}

function gotResponse(response) {
	var dataTable = response.getDataTable();

	var chart = new google.visualization.Table(document.getElementById('divChart'));
	chart.draw(dataTable, {});
}
