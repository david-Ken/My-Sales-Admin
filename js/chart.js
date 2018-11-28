window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Monthly Expenses, 2016-17"
        },
        axisY: {
            includeZero: false,
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 13
        },
        data: [{
                type: "splineArea",
                color: "#FF8369",
                showInLegend: true,
                name: "Salaries",
                yValueFormatString: "$#,##0",
                xValueFormatString: "MMM YYYY",
                dataPoints: [{
                        x: new Date(2016, 2),
                        y: 40100
                    },
                    {
                        x: new Date(2016, 3),
                        y: 36000
                    },
                    {
                        x: new Date(2016, 4),
                        y: 34000
                    },
                    {
                        x: new Date(2016, 5),
                        y: 38000
                    },
                    {
                        x: new Date(2016, 6),
                        y: 38000
                    },
                    {
                        x: new Date(2016, 7),
                        y: 41000
                    },
                    {
                        x: new Date(2016, 8),
                        y: 42000
                    },
                    {
                        x: new Date(2016, 9),
                        y: 45000
                    },
                    {
                        x: new Date(2016, 10),
                        y: 43000
                    },
                    {
                        x: new Date(2016, 11),
                        y: 45000
                    },
                    {
                        x: new Date(2017, 0),
                        y: 46000
                    },
                    {
                        x: new Date(2017, 1),
                        y: 45000
                    }

                ]
            },
            {
                type: "splineArea",
                color: "#FFAE3B",
                showInLegend: true,
                name: "Office Cost",
                yValueFormatString: "$#,##0",
                dataPoints: [{
                        x: new Date(2016, 2),
                        y: 20100
                    },
                    {
                        x: new Date(2016, 3),
                        y: 16000
                    },
                    {
                        x: new Date(2016, 4),
                        y: 14000
                    },
                    {
                        x: new Date(2016, 5),
                        y: 18000
                    },
                    {
                        x: new Date(2016, 6),
                        y: 18000
                    },
                    {
                        x: new Date(2016, 7),
                        y: 21000
                    },
                    {
                        x: new Date(2016, 8),
                        y: 22000
                    },
                    {
                        x: new Date(2016, 9),
                        y: 25000
                    },
                    {
                        x: new Date(2016, 10),
                        y: 23000
                    },
                    {
                        x: new Date(2016, 11),
                        y: 25000
                    },
                    {
                        x: new Date(2017, 0),
                        y: 26000
                    },
                    {
                        x: new Date(2017, 1),
                        y: 25000
                    }
                ]
            },
            {
                type: "splineArea",
                color: "#76726F",
                showInLegend: true,
                name: "Entertainment",
                yValueFormatString: "$#,##0",
                dataPoints: [{
                        x: new Date(2016, 2),
                        y: 10100
                    },
                    {
                        x: new Date(2016, 3),
                        y: 6000
                    },
                    {
                        x: new Date(2016, 4),
                        y: 3400
                    },
                    {
                        x: new Date(2016, 5),
                        y: 4000
                    },
                    {
                        x: new Date(2016, 6),
                        y: 9000
                    },
                    {
                        x: new Date(2016, 7),
                        y: 3900
                    },
                    {
                        x: new Date(2016, 8),
                        y: 4200
                    },
                    {
                        x: new Date(2016, 9),
                        y: 5000
                    },
                    {
                        x: new Date(2016, 10),
                        y: 14300
                    },
                    {
                        x: new Date(2016, 11),
                        y: 12300
                    },
                    {
                        x: new Date(2017, 0),
                        y: 8300
                    },
                    {
                        x: new Date(2017, 1),
                        y: 6300
                    }
                ]
            },
            {
                type: "splineArea",
                showInLegend: true,
                yValueFormatString: "$#,##0",
                name: "Maintenance",
                dataPoints: [{
                        x: new Date(2016, 2),
                        y: 1700
                    },
                    {
                        x: new Date(2016, 3),
                        y: 2600
                    },
                    {
                        x: new Date(2016, 4),
                        y: 1000
                    },
                    {
                        x: new Date(2016, 5),
                        y: 1400
                    },
                    {
                        x: new Date(2016, 6),
                        y: 900
                    },
                    {
                        x: new Date(2016, 7),
                        y: 1000
                    },
                    {
                        x: new Date(2016, 8),
                        y: 1200
                    },
                    {
                        x: new Date(2016, 9),
                        y: 5000
                    },
                    {
                        x: new Date(2016, 10),
                        y: 1300
                    },
                    {
                        x: new Date(2016, 11),
                        y: 2300
                    },
                    {
                        x: new Date(2017, 0),
                        y: 2800
                    },
                    {
                        x: new Date(2017, 1),
                        y: 1300
                    }
                ]
            }
        ]
    });






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



    /*****  Apex Chart JS scetion   */

    // Apex Chart 1

    var options = {
        chart: {
            height: 230,
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
        labels: ['United States', 'Africa', 'Europe', 'Asia'],

    }


    // Apex Chart 2

    var options2 = {
        chart: {
            height: 230,
            type: 'radialBar',
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    showOn: 'always',
                    name: {
                        offsetY: -20,
                        show: true,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function (val) {
                            return 90 + ' %';
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            colors: ['#FD6F00']
        },
        series: [75],
        stroke: {
            lineCap: 'round'
        },
        labels: ['France'],
    }

    // Apex Chart 3

    var options3 = {
        chart: {
            height: 230,
            type: 'radialBar',
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    showOn: 'always',
                    name: {
                        offsetY: -20,
                        show: true,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function (val) {
                            return 75 + ' %';
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            colors: ['#FBA706']
        },
        series: [75],
        stroke: {
            lineCap: 'round'
        },
        labels: ['Russia'],

    }








    var options0 = {
        chart: {
            height: 350,
            type: 'line',
        },
        series: [{
            name: 'Clothes',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Electronics',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Products Sales'
        },
        //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Monthly',
            },

        }, {
            opposite: true,
            title: {
                text: 'Weekly'
            }
        }]

    }




    // Select charts div

    var apexchart0 = new ApexCharts(
        document.querySelector("#apexChart0"),
        options0
    );

    var apexchart1 = new ApexCharts(
        document.querySelector("#apexChart1"),
        options
    );

    var apexchart2 = new ApexCharts(
        document.querySelector("#apexChart2"),
        options2
    );


    var apexchart3 = new ApexCharts(
        document.querySelector("#apexChart3"),
        options3
    );







    //render charts

    setTimeout(function () {
        //chart.render();
        chart_icome.render();
        apexchart0.render();

    }, 1000);


    var chartIsVisible = false;


    $(window).scroll(function () {
        $('.fade-chart-on-scroll').each(function () {
            if (isScrolledIntoView($(this)) && chartIsVisible === false) {
                apexchart1.render();
                apexchart2.render();
                apexchart3.render();

                chartIsVisible = true;
            }
        });
    });

    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

}