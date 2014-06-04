(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      
      
  // build Highcharts object
      $('#container').highcharts({
          chart: {
              type: 'heatmap',
              marginTop: 40,
              marginBottom: 40
          },
          title: {
              text: 'National Sentiment of Petitions'
          },
          xAxis: {
              categories: ['January','February','March','April','May','June'],
              labels: {
                  rotation: 60
              }
          },
          yAxis: {
              categories: ['Agriculture','Arts and Humanities','Budget and Taxes','Civil Rights and Liberties','Climate Change','Consumer Protections','Criminal Justice and Law Enforcement','Defense','Disabilities','Economy','Education','Energy','Environment','Family','Firearms','Foreign Policy','Government Reform','Health Care','Homeland Security and Disaster Relief','Housing','Human Rights','Immigration','Innovation','Job Creation','Labor','Natural Resources','Postal Service','Poverty','Regulatory Reform','Rural Policy','Science and Space Policy','Small Business','Social Security','Technology and Telecommunications','Trade','Transportation and Infrastructure','Urban Policy','Veterans and Military Families','Womens Issues'],
              title: null,
              reversed: true
          },
          colorAxis: {
              min: 0,
              minColor: '#FFFFFF',
              maxColor: '#002a77'
          },
          legend: {
              align: 'right',
              layout: 'vertical',
              margin: 0,
              verticalAlign: 'top',
              y: 25,
              symbolHeight: 320,
              reversed: true
          },
          tooltip: {
              formatter: function () {
                  return '<b>' + this.point.value + '</b> petitions were created in <b>' + this.series.xAxis.categories[this.point.x] + '</b> about <b>' +
                      this.series.yAxis.categories[this.point.y] + '</b>';
              }
          },
          series: [{
              name: 'Number of Petitions per Month',
              borderWidth: 1,
              data: Drupal.settings.wtp_viz_data, 
              dataLabels: {
                  enabled: false
                }
        }]
      });  
      
    }
  };
})(jQuery);
 