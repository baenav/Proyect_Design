<html>
 <head>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript">
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);
   function drawChart()
   {
   var jsonData = $.ajax({
         url: "Get_Data.php",
         dataType: "json",
         async: false
         }).responseText;
    var data = new google.visualization.DataTable(jsonData);

    var options = {
     title:'Potencia[W/h]',
     legend:{position:'bottom'},
     chartArea:{width:'90%', height:'65%'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
   }
  </script>

  <script type="text/javascript">

          $(document).ready(function(){
            
              setInterval(drawChart, 5000);
              });
  </script>
  <style>
  .page-wrapper
  {
   width: auto;
   margin: auto;
  }
  </style>
 </head>
 <body>
  <div class="page-wrapper">
   <br />
   <h2 align="center">Potencia Generada - Nodo 611</h2>
   <div id="curve_chart" style="width: 100%; height: 500px"></div>
  </div>
 </body>
</html>
