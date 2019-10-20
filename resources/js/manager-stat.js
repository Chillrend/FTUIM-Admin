$(document).ready(function () {
    var elementHandler = {
        '#ignore-sidebar': function (element, renderer) {
            return true;
        },
        '#ignore-main-heading': function (element, renderer) {
            return true;
        },
        '#ignore-heading-1': function (element, renderer) {
            return true;
        },
        '#ignore-heading-2': function (element, renderer) {
            return true;
        },
    };

    $('#btn-go-export').on('click', function () {
        html2canvas(document.querySelector('#mingguan-chart-bar'), {useCORS: true}).then(canvas => {
            $('#test').append(canvas)
        })

    });

    var data = [{day: "Senin", value: 1},
        {day: "Selasa", value: 3},
        {day: "Rabu", value: 5},
        {day: "Kamis", value: 1},
        {day: "Jumat", value: 1},
        {day: "Sabtu", value: 3},
        {day: "Minggu", value: 1}];


    //Mocking API Call with static JS Object
    var datum = [{'timestamp' : '2019-01', a : 122, b: 123, c: 166, d: 100, e: 189},
        {'timestamp' : '2019-02', a : 100, b: 184, c: 112, d: 119, e: 87},
        {'timestamp' : '2019-03', a : 180, b: 20, c: 8, d: 160, e: 54},
        {'timestamp' : '2019-04', a : 34, b: 5, c: 46, d: 12, e: 4},
        {'timestamp' : '2019-05', a : 100, b: 184, c: 112, d: 119, e: 87},
        {'timestamp' : '2019-06', a : 76, b: 23, c: 45, d: 78, e: 66},
        {'timestamp' : '2019-07', a : 12, b: 33, c: 65, d: 56, e: 72}];

    var chart = new Morris.Line({
        element: "mingguan-chart-bar",
        data: datum,
        xkey: 'timestamp',
        ykeys: ['a', 'b', 'c', 'd', 'e'],
        labels: ['Sarpras', 'Gedung', 'HR', 'Kebersihan', 'Insiden/Tata tertib']
    })

    var top_cat_chart = new Chart(document.getElementById('top-kategori-chart'), {
        type: 'pie',
        data: {
            datasets: [{data: [150,120,50,100,30,100], backgroundColor: generate6randomcolor()}],
            labels: ['Sarpras', 'Gedung', 'HR', 'Kebersihan', 'Insiden/Tata tertib', 'Lainnya']
        }
    });

    console.log(top_cat_chart.data.datasets[0].backgroundColor);

    // var chart = new Morris.Bar({
    //     element: "mingguan-chart-bar",
    //     data: data,
    //     xkey: "day",
    //     ykeys: ["value"],
    //     labels: ["Laporan"]
    // });


});

function generate6randomcolor(){
    let color = [];

    for (let j = 0; j < 6; j++) {
        color[j] = getRandomColor();
    }

    return color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}