// JavaScript Document
// $(document).ready(function(){
//   loadArea();
//   loadPie();
//   loadDataView();
//   loadDataQuery();
// });

$(function(){ $("#tab-areachart").click(function() {
  $('#areachart').load('Module1/AreaChart.html');
});

});

$(function(){ $("#tab-piechart").click(function() {
  $('#piechart').load('Module1/PieChart.html');
  });

});

$(function(){ $("#tab-dataview").click(function() {
  $('#dataview').load('Module1/DataView.html');
  });

});

$(function(){ $("#tab-dataquery").click(function() {
  $('#dataquery').load('Module1/DataQuery.html');
  });

});

$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
