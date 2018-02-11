console.log('hey');

localStorage.clear();
console.log('localStorage is cleared')

// itemPillar is from server JSON file
var itemPillar = {
  pillar: [
    {
      'date': 'oct 1',
      'fill': 0.35
    },
    {
      'date': 'oct 2',
      'fill': 0.55
    },
    {
      'date': 'oct 3',
      'fill': 0.375
    },
    {
      'date': 'oct 4',
      'fill': 0.15
    },
    {
      'date': 'oct 5',
      'fill': 0.525
    },
    {
      'date': 'oct 6',
      'fill': 0.45
    },
    {
      'date': 'oct 7',
      'fill': 0.77
    },
    {
      'date': 'oct 8',
      'fill': 0.4
    },
    {
      'date': 'oct 9',
      'fill': 0.63
    },
    {
      'date': 'oct 10',
      'fill': 0.15
    },
    {
      'date': 'oct 11',
      'fill': 0.45
    },
    {
      'date': 'oct 12',
      'fill': 0.34
    },
    {
      'date': 'oct 13',
      'fill': 0.55
    }    
  ]
};

if (!localStorage.getItem('itemPillar')) {
  localStorage.setItem('itemPillar', JSON.stringify(itemPillar));
}

var localItemPillar = JSON.parse(localStorage.getItem('itemPillar'));


// weight = calc(100% * localItemPillar.pillar[#].fill)

localItemPillar.pillar.forEach( function(item) {
  console.log(item);
  document.querySelector('[data-date="' + item.date + '"]')
    .style.height = item.fill*100 + "%";
});


var ctx = document.getElementById('myChart');
var config = {
   'type': 'radar',
   'data': {
       'labels': ['Characteristic', 'Weight', 'Economy', 'Designing', 'Coding', 'Cycling', 'Running'],
       'datasets': [{
           'label': 'My First Dataset',
           'data': [65, 59, 90, 81, 56, 55, 40],
           'fill': true,
           'backgroundColor': 'rgba(255, 99, 132, 0.2)',
           'borderColor': 'rgb(255, 99, 132)',
           'pointBackgroundColor': 'rgb(255, 99, 132)',
           'pointBorderColor': '#fff',
           'pointHoverBackgroundColor': '#fff',
           'pointHoverBorderColor': 'rgb(255, 99, 132)'
       }]
   },
   'options': {
       'elements': {
           'line': {
               'tension': 0,
               'borderWidth': 3
           }
       }
   }
};
var myRadarChart = new Chart(ctx, config);
display.onclick = function(event){
    var label = event.target.value;
    if (event.target.checked) {
        if (config.data.labels.indexOf(label) !== -1){
            return;
        }
        config.data.labels.push(label);
        config.data.datasets[0].data.push(20);
    } else {
        var indexLabel = config.data.labels.indexOf(label);
        console.log(indexLabel);
        config.data.labels.splice(indexLabel, 1);
        config.data.datasets[0].data.splice(indexLabel, 1);
   }
    window.myRadarChart.update();
}