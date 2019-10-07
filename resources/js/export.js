//Please find a way to transfer this object to this page, either via ajax or maybe some php via EL
//I Recommend writing special API to get this object from the data, and then do ajax call at this script
//Mocking API Request with JS Object
var massive_data = {
    laporan_masuk_minggu_ini: 102,
    laporan_masuk_minggu_ini_not_done: 12,
    laporan_masuk_minggu_ini_done: 90,
    alltime_laporan_masuk: 1350,
    alltime_laporan_ditangani: 1050,
    kategori_laporan_paling_banyak: 'FACILITIES_AND_INFRASTRUCTURE',
    laporan_per_kategori: [
        //a: Laporan diterima, b: Laporan terselesaikan, c: Laporan belum terselesaikan
        {kategori: 'FACILITIES_AND_INFRASTRUCTURE', a: 567, b: 497, c: 90},
        {kategori: 'BUILDINGS', a: 567, b: 497, c: 90},
        {kategori: 'HUMAN_RESOURCE', a: 567, b: 497, c: 90},
        {kategori: 'CLEANING_AND_GARDENING', a: 567, b: 497, c: 90},
        {kategori: 'INCIDENT_AND_RULE_VIOLATION', a: 567, b: 497, c: 90},
        {kategori: 'OTHERS', a: 567, b: 497, c: 90},
    ],

    laporan_diterima_per_bulan:[
        //a : sarpras, b: Gedung, c: HR, d: Kebersihan, e: Insiden/Pelanggaran Tata Tertib, please add f: Lainnya.
        {'timestamp' : '2019-01', a : 122, b: 123, c: 166, d: 100, e: 189},
        {'timestamp' : '2019-02', a : 100, b: 184, c: 112, d: 119, e: 87},
        {'timestamp' : '2019-03', a : 180, b: 20, c: 8, d: 160, e: 54},
        {'timestamp' : '2019-04', a : 34, b: 5, c: 46, d: 12, e: 4},
        {'timestamp' : '2019-05', a : 100, b: 184, c: 112, d: 119, e: 87},
        {'timestamp' : '2019-06', a : 76, b: 23, c: 45, d: 78, e: 66},
        {'timestamp' : '2019-07', a : 12, b: 33, c: 65, d: 56, e: 72}
    ],

    top_kategori_ranking: {
        //data value ordering is according to the label
        data: [150,120,50,100,30,100],
        labels: ['Sarpras', 'Gedung', 'HR', 'Kebersihan', 'Insiden/Tata Tertib', 'Lainnya']
    }
};

function getHumanReadableKategoriString(kategori){
    switch (kategori){
        case "FACILITIES_AND_INFRASTRUCTURE" :
            return 'Sarana dan Prasarana';
        case "BUILDINGS" :
            return 'Gedung';
        case "HUMAN_RESOURCE" :
            return 'Tenaga Kependidikan';
        case "CLEANING_AND_GARDENING" :
            return 'Kebersihan';
        case "INCIDENT_AND_RULE_VIOLATION" :
            return 'Pelanggaran Tata Tertib';
        case "OTHERS" :
            return 'Lainnya';
        default:
            return 'Lainnya';
    }
}

function calculatePercentage(totalValue, givenValue){
    var pPos = totalValue;
    var pEarned = givenValue;
    var perc="";
    if(isNaN(pPos) || isNaN(pEarned)){
        perc="Math Error";
    }else{
        perc = ((pEarned/pPos) * 100).toFixed(2);
    }

    return perc;
}


$(document).ready(function () {

    let e = ' Laporan';
    let f = ' Laporan Minggu Ini';
    $('#weekly-report').append(massive_data.laporan_masuk_minggu_ini + e);
    $('#weekly-not-done').append(massive_data.laporan_masuk_minggu_ini_not_done + f);
    $('#weekly-done').append(massive_data.laporan_masuk_minggu_ini_done + f);
    $('#alltime-report').append(massive_data.alltime_laporan_masuk + e);
    $('#alltime-done').append(massive_data.alltime_laporan_ditangani + e);
    $('#alltime-done-percentage').append(calculatePercentage(massive_data.alltime_laporan_masuk, massive_data.alltime_laporan_ditangani) + '% Terselesaikan');
    $('#alltime-most-reported').append(getHumanReadableKategoriString(massive_data.kategori_laporan_paling_banyak));

    massive_data.laporan_per_kategori.forEach(object => {
        let tr = document.createElement('TR');
        let td = [];
        td[0] = tr.appendChild(document.createElement('TD'));
        td[0].innerHTML = getHumanReadableKategoriString(object.kategori);

        td[1] = tr.appendChild(document.createElement('TD'));
        td[1].innerHTML = object.a;

        td[2] = tr.appendChild(document.createElement('TD'));
        td[2].innerHTML = object.b;

        td[3] = tr.appendChild(document.createElement('TD'));
        td[3].innerHTML = object.c;

        td[4] = tr.appendChild(document.createElement('TD'));
        td[4].innerHTML = calculatePercentage(object.a, object.b) + '%';

        $('#per-cat-table-body').append(tr);
    });

    var chart = new Morris.Line({
        element: "mingguan-chart-bar",
        //data laporan per bulan
        data: massive_data.laporan_diterima_per_bulan,
        xkey: 'timestamp',
        //please add F for Lainnya
        ykeys: ['a', 'b', 'c', 'd', 'e'],
        labels: ['Sarpras', 'Gedung', 'HR', 'Kebersihan', 'Insiden/Tata tertib']
    });

    var top_cat_chart = new Chart(document.getElementById('top-kategori-chart'), {
        type: 'pie',
        data: {
            datasets: [{data: massive_data.top_kategori_ranking.data, backgroundColor: generate6randomcolor()}],
            labels: massive_data.top_kategori_ranking.labels
        }
    });
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