window.addEventListener('load', function () {


//CHART radialBar

  const radial_options = {
    series: [76, 67, 61, 90],
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: '16px',
          formatter: function (seriesName, opts) {
            return (
              seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] + '%'
            )
          },
        },
      },
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Email', 'Push', 'In-App', 'SMS'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  }



  const radialBar = new ApexCharts(document.querySelector("#radialBar"), radial_options);
  radialBar.render();


  const multipleBand_options = {
    series: [68, 82, 54, 91],
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Average',
            formatter: function (w) {
              // custom formatter: rounded average across all series, with a unit
              var total = w.globals.seriesTotals.reduce(function (a, b) {
                return a + b
              }, 0)
              return Math.round(total / w.globals.series.length) + '%'
            },
          },
        },
      },
    },
    labels: ['North', 'South', 'East', 'West'],
  }

  const multipleBand = new ApexCharts(document.querySelector('#multipleBand'), multipleBand_options)
  multipleBand.render()

  const bar_options = {
    series: [
      {
        name: 'Visitors',
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
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
    title: {
      text: 'Monthly Visitors by Country',
      align: 'left',
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
      labels: {
        formatter: function (val) {
          return val + 'k'
        },
      },
    },
  }

  const bar = new ApexCharts(document.querySelector('#bar'), bar_options)
  bar.render()

  const column_colors = [
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#546E7A',
    '#26a69a',
    '#3F51B5',
  ]

  const column_options = {
    series: [
      {
        name: 'Deals closed',
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: column_colors,
    title: {
      text: 'Deals Closed by Sales Rep',
      align: 'left',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      title: {
        text: 'Deals closed',
      },
    },
    xaxis: {
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'],
      ],
      labels: {
        style: {
          colors: column_colors,
          fontSize: '12px',
        },
      },
    },
  }

  const columnBar = new ApexCharts(document.querySelector('#columnBar'), column_options)
  columnBar.render()


  const depts = {
    hq: {bg: '#F8FAFC', border: '#94A3B8', borderHover: '#64748B', accent: '#475569'},
    finance: {bg: '#EFF6FF', border: '#93C5FD', borderHover: '#3B82F6', accent: '#2563EB'},
    hr: {bg: '#FDF2F8', border: '#F9A8D4', borderHover: '#EC4899', accent: '#DB2777'},
    marketing: {bg: '#FFF7ED', border: '#FDBA74', borderHover: '#F97316', accent: '#EA580C'},
    product: {bg: '#F0FDF4', border: '#86EFAC', borderHover: '#22C55E', accent: '#16A34A'},
    sales: {bg: '#EEF2FF', border: '#A5B4FC', borderHover: '#6366F1', accent: '#4F46E5'},
  };

  const makeOpts = (dept) => ({
    nodeBGColor: depts[dept].bg,
    nodeBGColorHover: depts[dept].bg,
    borderColor: depts[dept].border,
    borderColorHover: depts[dept].borderHover,
  });

  const nodeTemplate = (c) => `
  <div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 10px 8px 8px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
  ">
    <img src="${c.img}" alt=""
      style="
        width: 40px; height: 40px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
        border: 2px solid ${c.accent};
        margin-bottom: 6px;
      " />
    <div style="font-weight: 600; font-size: 11px; color: #1e293b; line-height: 1.3;">${c.name}</div>
    <div style="font-size: 9px; color: #64748b; margin-top: 2px;">${c.title}</div>
    <div style="font-size: 8px; color: ${c.accent}; margin-top: 2px; font-weight: 500;">${c.dept}</div>
  </div>`;

  const data = {
    id: 'ceo',
    data: {
      name: 'Alexandra Whitfield',
      title: 'Chief Executive Officer',
      dept: 'Headquarters',
      img: 'https://api.dicebear.com/9.x/initials/svg?seed=Alexandra%20Whitfield',
      accent: depts.hq.accent,
    },
    options: makeOpts('hq'),
    children: [
      {
        id: 'cfo',
        data: {
          name: 'Robert Cheng',
          title: 'VP Finance',
          dept: 'Finance',
          img: 'https://api.dicebear.com/9.x/initials/svg?seed=Robert%20Cheng',
          accent: depts.finance.accent,
        },
        options: makeOpts('finance'),
        children: [
          {
            id: 'accounting',
            data: {
              name: 'Julia Becker',
              title: 'Accounting Lead',
              dept: 'Accounting',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Julia%20Becker',
              accent: depts.finance.accent,
            },
            options: makeOpts('finance'),
          },
          {
            id: 'treasury',
            data: {
              name: 'Patrick Doyle',
              title: 'Treasury Manager',
              dept: 'Treasury',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Patrick%20Doyle',
              accent: depts.finance.accent,
            },
            options: makeOpts('finance'),
          },
        ],
      },
      {
        id: 'chro',
        data: {
          name: 'Maria Santos',
          title: 'VP Human Resources',
          dept: 'Human Resources',
          img: 'https://api.dicebear.com/9.x/initials/svg?seed=Maria%20Santos',
          accent: depts.hr.accent,
        },
        options: makeOpts('hr'),
        children: [
          {
            id: 'talent',
            data: {
              name: 'Lily Nguyen',
              title: 'Talent Acquisition',
              dept: 'Recruiting',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Lily%20Nguyen',
              accent: depts.hr.accent,
            },
            options: makeOpts('hr'),
          },
          {
            id: 'people_ops',
            data: {
              name: 'Andre Wilson',
              title: 'People Ops Lead',
              dept: 'People Ops',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Andre%20Wilson',
              accent: depts.hr.accent,
            },
            options: makeOpts('hr'),
          },
        ],
      },
      {
        id: 'cmo',
        data: {
          name: 'Jake Morrison',
          title: 'VP Marketing',
          dept: 'Marketing',
          img: 'https://api.dicebear.com/9.x/initials/svg?seed=Jake%20Morrison',
          accent: depts.marketing.accent,
        },
        options: makeOpts('marketing'),
        children: [
          {
            id: 'brand',
            data: {
              name: 'Chloe Dumont',
              title: 'Brand Strategist',
              dept: 'Brand',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Chloe%20Dumont',
              accent: depts.marketing.accent,
            },
            options: makeOpts('marketing'),
          },
          {
            id: 'growth',
            data: {
              name: 'Ryan Torres',
              title: 'Growth Manager',
              dept: 'Growth',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Ryan%20Torres',
              accent: depts.marketing.accent,
            },
            options: makeOpts('marketing'),
          },
          {
            id: 'comms',
            data: {
              name: 'Ines Ferreira',
              title: 'Comms Manager',
              dept: 'Communications',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Ines%20Ferreira',
              accent: depts.marketing.accent,
            },
            options: makeOpts('marketing'),
          },
        ],
      },
      {
        id: 'cpo',
        data: {
          name: 'Kenji Tanaka',
          title: 'VP Product',
          dept: 'Product',
          img: 'https://api.dicebear.com/9.x/initials/svg?seed=Kenji%20Tanaka',
          accent: depts.product.accent,
        },
        options: makeOpts('product'),
        children: [
          {
            id: 'design',
            data: {
              name: 'Eva Lindgren',
              title: 'Design Lead',
              dept: 'Product Design',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Eva%20Lindgren',
              accent: depts.product.accent,
            },
            options: makeOpts('product'),
          },
          {
            id: 'research',
            data: {
              name: 'Omar Farouk',
              title: 'Research Lead',
              dept: 'User Research',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Omar%20Farouk',
              accent: depts.product.accent,
            },
            options: makeOpts('product'),
          },
        ],
      },
      {
        id: 'cro',
        data: {
          name: 'Sarah Mitchell',
          title: 'VP Sales',
          dept: 'Sales',
          img: 'https://api.dicebear.com/9.x/initials/svg?seed=Sarah%20Mitchell',
          accent: depts.sales.accent,
        },
        options: makeOpts('sales'),
        children: [
          {
            id: 'enterprise',
            data: {
              name: 'Derek Chang',
              title: 'Enterprise Lead',
              dept: 'Enterprise Sales',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Derek%20Chang',
              accent: depts.sales.accent,
            },
            options: makeOpts('sales'),
          },
          {
            id: 'partnerships',
            data: {
              name: 'Amina Diallo',
              title: 'Partnerships Lead',
              dept: 'Partnerships',
              img: 'https://api.dicebear.com/9.x/initials/svg?seed=Amina%20Diallo',
              accent: depts.sales.accent,
            },
            options: makeOpts('sales'),
          },
        ],
      },
    ],
  };

  const options = {
    contentKey: 'data',
    nodeTemplate,
    width: '100%',
    viewPortWidth: 1000,
    viewPortHeight: 700,
    nodeWidth: 140,
    nodeHeight: 120,
    childrenSpacing: 70,
    siblingSpacing: 12,
    direction: 'top',
    edgeStyle: 'orthogonal',
    edgeWidth: 1,
    enableExpandCollapse: false,
    enableToolbar: true,
    edgeColorMode: 'node',
    canvasStyle: 'border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;',
  };

  const tree = new ApexTree(document.getElementById('tree'), options);
  tree.render(data);

});


