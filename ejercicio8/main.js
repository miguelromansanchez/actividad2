//socialistas
let aa = 0;
socialistas.onclick = () => {
const updatevote = myChart.data.datasets[0].data[0] + 1;
myChart.data.datasets[0].data[0] = updatevote;
myChart.update();
}
//liberales
let bb = 0;
liberales.onclick = () => {
const updatevote = myChart.data.datasets[0].data[1] + 1;
myChart.data.datasets[0].data[1] = updatevote;
myChart.update();
}
//animalistas
let cc = 0;
animalistas.onclick = () => {
const updatevote = myChart.data.datasets[0].data[2] + 1;
myChart.data.datasets[0].data[2] = updatevote;
myChart.update();
}
//centristas
let dd = 0;
centristas.onclick = () => {
const updatevote = myChart.data.datasets[0].data[3] + 1;
myChart.data.datasets[0].data[3] = updatevote;
myChart.update();
}
//ecologistas
let ee = 0;
ecologistas.onclick = () => {
const updatevote = myChart.data.datasets[0].data[4] + 1;
myChart.data.datasets[0].data[4] = updatevote;
myChart.update();
}


var datavar = [aa, bb, cc, dd, ee];    

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
    datasets: [{
        label: '# of Votes',
        data: datavar,
        backgroundColor: [
            'rgba(238, 110, 133, 1)',
            'rgba(85, 162, 229, 1)',
            'rgba(248, 206, 107, 1)',
            'rgba(148, 109, 181, 1)',
            'rgba(168, 228, 78, 1)'
            
        ],
        borderColor: [
            'rgba(238, 110, 133, 1)',
            'rgba(85, 162, 229, 1)',
            'rgba(248, 206, 107, 1)',
            'rgba(148, 109, 181, 1)',
            'rgba(168, 228, 78, 1)'
        ],
        borderWidth: 4
    }]
  },
  options: {}
  });
  // myChart.update();

  function updateChart(){
    myChart.data.datasets[0].data = [0, 0, 0, 0, 0];
    myChart.update();
  };
