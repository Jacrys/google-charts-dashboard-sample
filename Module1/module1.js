google.charts.load('current', { 'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var daysPerMonth = [
			[new Date(2016, 0, 1), 31],
			[new Date(2016, 1, 1), 29],
			[new Date(2016, 2, 1), 31],
			[new Date(2016, 3, 1), 30],
			[new Date(2016, 4, 1), 31],
			[new Date(2016, 5, 1), 30],
			[new Date(2016, 6, 1), 31],
			[new Date(2016, 7, 1), 31],
			[new Date(2016, 8, 1), 30],
			[new Date(2016, 9, 1), 31],
			[new Date(2016, 10, 1), 30],
			[new Date(2016, 11, 1), 31]
		];

		var data = google.visualization.arrayToDataTable(daysPerMonth, true)

		var options = {
				title: 'Number of Days Per Month in 2016',
				animation: { startup: true, duration: 2000 },
				legend: { position: 'none' }
		}

		var chart = new google.visualization.AreaChart(document.getElementById('divAreaChart'));
		chart.draw(data, options);
}
