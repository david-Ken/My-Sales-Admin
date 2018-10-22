/*
window.onload = function () {

    var chart_icome = new CanvasJS.Chart("chartContainer-icome", {
        animationEnabled: true,
        title: {
            text: "Weekly income"
        },
        axisY: {
            //	title: "Revenue in USD",
            valueFormatString: "#0,,.",
            suffix: " M$",
            //	prefix: "$ "
        },
        data: [{
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [{
                    x: new Date(2000, 0),
                    y: 2840000
                },
                {
                    x: new Date(2001, 0),
                    y: 2840000
                },
                {
                    x: new Date(2002, 0),
                    y: 2289000
                },
                {
                    x: new Date(2003, 0),
                    y: 2840000
                },
                {
                    x: new Date(2004, 0),
                    y: 3840000
                },
                {
                    x: new Date(2005, 0),
                    y: 3840000
                },
                {
                    x: new Date(2006, 0),
                    y: 2821000
                },
                {
                    x: new Date(2007, 0),
                    y: 4000000
                },
                {
                    x: new Date(2008, 0),
                    y: 4000000
                },
                {
                    x: new Date(2009, 0),
                    y: 4798000
                },
                {
                    x: new Date(2010, 0),
                    y: 4798000
                },
                {
                    x: new Date(2011, 0),
                    y: 3798000
                },
                {
                    x: new Date(2012, 0),
                    y: 4798000
                },
                {
                    x: new Date(2013, 0),
                    y: 6026000
                },
                {
                    x: new Date(2014, 0),
                    y: 6026000
                },
                {
                    x: new Date(2015, 0),
                    y: 6026000
                },
                {
                    x: new Date(2016, 0),
                    y: 8026000
                }
            ]
        }]
    });

    setTimeout(function () {
        chart_icome.render();
    }, 1000);

}
*/


/*

window.onload = function () {

    var options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            circle: {
                dataLabels: {
                    showOn: 'hover'
                }
            }
        },
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],

    }



    var chart_income = new ApexCharts(document.querySelector("#chartContainer-icome"), options);

    setTimeout(function () {
        chart_income.render();
    }, 000);

}

*/