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
    var datum = [{'timestamp' : '2019-01', a : 122, b: 123, c: 166, d: 100, e: 189, f: 120},
        {'timestamp' : '2019-02', a : 100, b: 184, c: 112, d: 119, e: 87, f: 80},
        {'timestamp' : '2019-03', a : 180, b: 20, c: 8, d: 160, e: 54, f: 50},
        {'timestamp' : '2019-04', a : 34, b: 5, c: 46, d: 12, e: 4, f: 40},
        {'timestamp' : '2019-05', a : 100, b: 184, c: 112, d: 119, e: 87, f: 20},
        {'timestamp' : '2019-06', a : 76, b: 23, c: 45, d: 78, e: 66, f: 10},
        {'timestamp' : '2019-07', a : 12, b: 33, c: 65, d: 56, e: 72, f: 10}];

    var chart = new Morris.Line({
        element: "mingguan-chart-bar",
        data: datum,
        xkey: 'timestamp',
        ykeys: ['a', 'b', 'c', 'd', 'e', 'f'],
        labels: ['Sarpras', 'Gedung', 'HR', 'Kebersihan', 'Insiden/Tata tertib', 'Lainnya']
    });

    var perbulan_sarpras = [];
    var perbulan_gedung = [];
    var perbulan_pendidikan = [];
    var perbulan_kebersihan = [];
    var perbulan_insiden_tata_tertib = [];
    var perbulan_lainnya = [];

    datum.forEach(data => {
        perbulan_sarpras.push({'timestamp' : data.timestamp, 'amount': data.a});
        perbulan_gedung.push({'timestamp' : data.timestamp, 'amount': data.b});
        perbulan_pendidikan.push({'timestamp' : data.timestamp, 'amount': data.c});
        perbulan_kebersihan.push({'timestamp' : data.timestamp, 'amount': data.d});
        perbulan_insiden_tata_tertib.push({'timestamp' : data.timestamp, 'amount': data.e});
        perbulan_lainnya.push({'timestamp' : data.timestamp, 'amount': data.f});
    });

    var sarpras_chart = new Morris.Bar({
        element: "bulan-sarpras",
        data: perbulan_sarpras,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Sarpras'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

    var gedung_chart = new Morris.Bar({
        element: "bulan-gedung",
        data: perbulan_gedung,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Gedung'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

    var hr_chart = new Morris.Bar({
        element: "bulan-hr",
        data: perbulan_pendidikan,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Tenaga kependidikan'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

    var kebersihan_chart = new Morris.Bar({
        element: "bulan-kebersihan",
        data: perbulan_kebersihan,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Kebersihan'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

    var tata_tertib_chart = new Morris.Bar({
        element: "bulan-tatatertib",
        data: perbulan_insiden_tata_tertib,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Tata Tertib'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

    var lainnya_chart = new Morris.Bar({
        element: "bulan-lainnya",
        data: perbulan_lainnya,
        xkey: 'timestamp',
        ykeys: ['amount'],
        labels: ['Lainnya'],
        hideHover: false,
        barColors: [getRandomColor()]
    });

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