var panda;

$(function() {

var options = {

chart:{

renderTo:"hvacChart",
defaultSeriesType: "column",

        spacingBottom: 15,
        spacingTop: 60,
        spacingLeft: 60,
        spacingRight: 60,
        zoomType: "xy",

scrollablePlotArea:{

    minWidth:450,
},
style: {

            fontFamily:"Consolas",
            fontSize: 12,
            fontWeight:"bold"

           },



},

title: {
            text: 'Number and percent time zones not reaching target temperature'
        },

subtitle: {

    text: "<span style='font-family: Arial'> Here goes <i>every</i> zone to be evaluated ",
    align:"right",
    x:-20,
},
        xAxis: {
            id:"zone",
           categories: ["Zone 1","Zone 2","Zone 3","Zone 4","Zone 5","Zone 6"],
          crosshair: true,  
        
        },
        yAxis: {

            min:0,
            max:100,
            title: {
                text: '% time',
            style:{
                fontWeight:'bold',
            },
            },

            
        },

        renderTo: 'hvacChart',
        legend: {
            reversed: true
        },
        credits: {
            enabled: false
        },

         responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'left',
                    verticalAlign: 'bottom',
                    layout: 'vertical'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    },
                },
            }
        }],
    },
 tooltip:{

          animation: 'true',
            hover: 'true',
        borderWidth: 2,
        borderColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                    ]
            },
        backgroundColor: '#fff5ee'

        },
    plotOptions: {
            serial: {
                stacking: 'percent',
            },

          series: {

            pointPadding: 0,
            //groupPadding: 0.1,
          }, 
        },

    series: [{name: "Hot",id:"hot-1", data: [1,2,3,4,5], color : "#e53935"}, { name: "Cold",id:"cold-1", data:[2,4,6,8,10], color: "#64b5f6" }], 

};


panda = new Highcharts.chart(options);
//panda.showLoading();

$("#Veterans").click(function() {

    panda.get("hot-1").remove();
    panda.get("cold-1").remove();

panda.addSeries({
        color:  "#e53935",
        name: "Hot",
        data: [2,6,10,12,16,18]
});
    panda.addSeries({
        color:  "#64b5f6",
        name: "Cold",
        data: [1,7,9,11,13,15]
});

panda.setTitle(null, { text: "Veterans Hall", align: "right"});

//panda.get("zone").remove();

// lo siguiente funciona solo con yAxis, necesito cambiar el XAxis

//panda.yAxis[0].update({categories:['some','new','categories']}, true);

     $(this).attr('disabled', false);
});

panda = new Highcharts.chart(options);

$("#CIEE").click(function() {

    panda.get("hot-1").remove();
    panda.get("cold-1").remove();

panda.addSeries({
        color:  "#e53935",
        name: "Hot",
        data: [20,22,24,26,28]
});
    panda.addSeries({
        color:  "#64b5f6",
        name: "Cold",
        data: [21,23,25,27,29]
});
panda.setTitle(null, { text: "CIEE Buildings", align: "right"});
     $(this).attr('disabled', false);
});


panda = new Highcharts.chart(options);

$("#Movie").click(function() {

    panda.get("hot-1").remove();
    panda.get("cold-1").remove();

panda.addSeries({
        color:  "#e53935",
        name: "Hot",
        data: [30,32,34,36,38]
});
    panda.addSeries({
        color:  "#64b5f6",
        name: "Cold",
        data: [31,33,35,37,39]
});

panda.setTitle(null, { text: "Avenal Movie Theatre", align: "right"});
 
     $(this).attr('disabled', false);
});


//panda = new Highcharts.chart(options);

$('#hvac-reset').click(function() { 
    //panda.xAxis[0].setExtremes(20, 40);
    alert('no way');
    $(this).slideUp("slow");

 });

//panda = new Highcharts.chart(options);
//var chart = new Highcharts.Chart(options);
 });
