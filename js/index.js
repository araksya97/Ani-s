window.addEventListener('load', function () {

  const basicOptions = {
    series: [
      {
        name: 'Kopfzahl',
        data: [33, 19, 24, 32, 11],
      },
    ],
    chart: {
      type: 'bar',
      height: 400,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Maschinenbau',
        'Automatisierungstechnik',
        'Chemie',
        'Physik',
        'Mathematik',
      ],
      labels: {
        formatter: function (val) {
          return val
        },
      },
    },
  }

  const basicChart = new ApexCharts(document.querySelector('#basic-chart'), basicOptions)
  basicChart.render()


  const basic2ndOptions = {
    series: [
      {
        name: 'Kopfzahl',
        data: [34, 49, 17, 53],
      },
    ],
    chart: {
      type: 'bar',
      height: 500,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Professorinnen und Professoren',
        'Wissenschaftliche Mitarbeitende',
        'Lehrkräfte mit besonderen Aufgaben',
        'Wissenschaftsunterstützendes Personal',
      ],
      labels: {
        formatter: function (val) {
          return val
        },
      },
    },
  }

  const basic2ndChart = new ApexCharts(document.querySelector('#basic-2nd-chart'), basic2ndOptions)
  basic2ndChart.render()
});


