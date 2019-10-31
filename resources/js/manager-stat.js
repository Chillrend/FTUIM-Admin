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

    var all_cat_status = {
        'FACILITIES_AND_INFRASTRUCTURE' : {
            'AWAITING_FOLLOWUP': 10,
            'IS_BEING_FOLLOWEDUP': 5,
            'FINISHED' :  10,
            'REOPENED' :  1
        },
        'BUILDINGS' :{
            'AWAITING_FOLLOWUP': 15,
            'IS_BEING_FOLLOWEDUP': 2,
            'FINISHED' :  2,
            'REOPENED' :  1
        },
        'HUMAN_RESOURCE': {
            'AWAITING_FOLLOWUP': 5,
            'IS_BEING_FOLLOWEDUP': 1,
            'FINISHED' :  2,
            'REOPENED' :  0
        },
        'CLEANING_AND_GARDENING': {
            'AWAITING_FOLLOWUP': 25,
            'IS_BEING_FOLLOWEDUP': 3,
            'FINISHED' :  18,
            'REOPENED' :  0
        },
        'INCIDENT_AND_RULE_VIOLATION': {
            'AWAITING_FOLLOWUP': 16,
            'IS_BEING_FOLLOWEDUP': 8,
            'FINISHED' :  10,
            'REOPENED' :  0
        },
        'TOTAL' :{
            'AWAITING_FOLLOWUP': 34,
            'IS_BEING_FOLLOWEDUP': 10,
            'FINISHED' :  250,
            'REOPENED' :  8
        }
    };

    $('#btn-go-export').on('click', function () {
        html2canvas(document.querySelector('#mingguan-chart-bar'), {useCORS: true}).then(canvas => {
            $('#test').append(canvas)
        })

    });

    //Mocking API Call with static JS Object
    var datum = [{'timestamp' : '2019-01', a : 122, b: 123, c: 166, d: 100, e: 189, f: 120},
        {'timestamp' : '2019-02', a : 100, b: 184, c: 112, d: 119, e: 87, f: 80},
        {'timestamp' : '2019-03', a : 180, b: 20, c: 8, d: 160, e: 54, f: 50},
        {'timestamp' : '2019-04', a : 34, b: 5, c: 46, d: 12, e: 4, f: 40},
        {'timestamp' : '2019-05', a : 100, b: 184, c: 112, d: 119, e: 87, f: 20},
        {'timestamp' : '2019-06', a : 76, b: 23, c: 45, d: 78, e: 66, f: 10},
        {'timestamp' : '2019-07', a : 12, b: 33, c: 65, d: 56, e: 72, f: 10}];

    var chart = new Morris.Line({
        element: 'mingguan-chart-bar',
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

    let alltime_chart = new Chart(document.getElementById('per-status-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: [all_cat_status.TOTAL.AWAITING_FOLLOWUP, all_cat_status.TOTAL.IS_BEING_FOLLOWEDUP, all_cat_status.TOTAL.FINISHED, all_cat_status.TOTAL.REOPENED],
                backgroundColor: ['#E52250', '#515FDB', '#22E59C', getRandomColor()]
            }],
            labels: ["Menunggu Tindaklanjut", "Sedang ditindaklanjuti", "Selesai", "Dibuka kembali"]
        },
        options: {
            legend: { display: true },
            title: {
                display: true,
                text: 'Jumlah total laporan berdasarkan status laporan'
            }
        }
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