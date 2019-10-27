var user = {
    "success": {
        "id": 1,
        "name": "Muhammad Farhan Hanif",
        "orgcode": null,
        "faculty": null,
        "studyprog": "Teknik CCIT",
        "eduprog": null,
        "email": "cv2lex@@gmail.com",
        "email_verified_at": null,
        "identitas": "Mahasiswa",
        "noidentitas": "09091999",
        "imgurl": "",
        "created_at": "2019-08-20 17:20:07",
        "updated_at": "2019-10-07 10:41:22",
        "ticketit_admin": 1,
        "ticketit_agent": 1
    },
    "surveyor": [
        {
            "category_id": 1,
            "user_id": 1,
            "details": {
                "id": 1,
                "name": "FACILITIES_AND_INFRASTRUCTURE",
                "color": "#000000"
            }
        },
        {
            "category_id": 2,
            "user_id": 1,
            "details": {
                "id": 2,
                "name": "BUILDINGS",
                "color": "#0000ff"
            }
        },
        {
            "category_id": 3,
            "user_id": 1,
            "details": {
                "id": 3,
                "name": "HUMAN_RESOURCE",
                "color": "#ff8000"
            }
        },
        {
            "category_id": 4,
            "user_id": 1,
            "details": {
                "id": 4,
                "name": "CLEANING_AND_GARDENING",
                "color": "#008000"
            }
        },
        {
            "category_id": 5,
            "user_id": 1,
            "details": {
                "id": 5,
                "name": "INCIDENT_AND_RULE_VIOLATION",
                "color": "#ff0000"
            }
        }
    ]
};

//Mocking API Call with static JS Object
var datum = [{'timestamp' : '2019-01', a : 122, b: 123, c: 166, d: 100, e: 189, f: 120},
    {'timestamp' : '2019-02', a : 100, b: 184, c: 112, d: 119, e: 87, f: 80},
    {'timestamp' : '2019-03', a : 180, b: 20, c: 8, d: 160, e: 54, f: 50},
    {'timestamp' : '2019-04', a : 34, b: 5, c: 46, d: 12, e: 4, f: 40},
    {'timestamp' : '2019-05', a : 100, b: 184, c: 112, d: 119, e: 87, f: 20},
    {'timestamp' : '2019-06', a : 76, b: 23, c: 45, d: 78, e: 66, f: 10},
    {'timestamp' : '2019-07', a : 12, b: 33, c: 65, d: 56, e: 72, f: 10}];

var perbulan_sarpras = [];
perbulan_sarpras['timestamp'] = [];
perbulan_sarpras['amount'] = [];
var perbulan_gedung = [];
perbulan_gedung['timestamp'] = [];
perbulan_gedung['amount'] = [];
var perbulan_pendidikan = [];
perbulan_pendidikan['timestamp'] = [];
perbulan_pendidikan['amount'] = [];
var perbulan_kebersihan = [];
perbulan_kebersihan['timestamp'] = [];
perbulan_kebersihan['amount'] = [];
var perbulan_insiden_tata_tertib = [];
perbulan_insiden_tata_tertib['timestamp'] = [];
perbulan_insiden_tata_tertib['amount'] = [];
var perbulan_lainnya = [];
perbulan_lainnya['timestamp'] = [];
perbulan_lainnya['amount'] = [];

datum.forEach(data => {
    perbulan_sarpras['timestamp'].push(data.timestamp);
    perbulan_sarpras['amount'].push(data.a);
    perbulan_gedung['timestamp'].push(data.timestamp);
    perbulan_gedung['amount'].push(data.b);
    perbulan_pendidikan['timestamp'].push(data.timestamp);
    perbulan_pendidikan['amount'].push(data.c);
    perbulan_kebersihan['timestamp'].push(data.timestamp);
    perbulan_kebersihan['amount'].push(data.d);
    perbulan_insiden_tata_tertib['timestamp'].push(data.timestamp);
    perbulan_insiden_tata_tertib['amount'].push(data.e);
    perbulan_lainnya['timestamp'].push(data.timestamp);
    perbulan_lainnya['amount'].push(data.f);
});

$(document).ready(function () {
    let surveyor_specialties = "";
    for (let j = 0; j < user.surveyor.length; j++) {
        let isActive = j == 0 ? "active" : "";
        let obj = user.surveyor;
        surveyor_specialties += util.getUserReadableTypeString(obj[j].details.name) + ", ";
        $('#tabs').append("<li><a class='"+ isActive +"' href='#" + obj[j].details.name +  "'><i class='material-icons'>" + util.getDrawableType(obj[j].details.name) + "</i>"+ util.getUserReadableTypeString(obj[j].details.name) +"</a></li>");
        appendHtml($('#append_main'), obj[j].details.name, isActive);
    }
    $('#username_header').text(user.success.name);
    $('#specialities').append(surveyor_specialties.replace(/(^\s*,)|(,\s*$)/g, ''));
});

var util = {
    getUserReadableTypeString: function (type) {
        switch (type) {
            case "FACILITIES_AND_INFRASTRUCTURE" :
                return "Sarana dan Prasarana";
            case "BUILDINGS" :
                return "Gedung";
            case "HUMAN_RESOURCE":
                return "Tenaga Kependidikan";
            case "CLEANING_AND_GARDENING" :
                return "Kebersihan";
            case "INCIDENT_AND_RULE_VIOLATION" :
                return "Pelanggaran Tata Tertib";
            case "OTHER" :
                return "Lainnya";
            default:
                return "Lainnya";
        }
    },
    getDrawableType: function (type) {
        switch (type) {
            case "FACILITIES_AND_INFRASTRUCTURE" :
                return "event_seat";
            case "BUILDINGS" :
                return "apartment";
            case "HUMAN_RESOURCE":
                return "school";
            case "CLEANING_AND_GARDENING" :
                return "local_florist";
            case "INCIDENT_AND_RULE_VIOLATION" :
                return "warning";
            case "OTHER" :
                return "category";
            default:
                return "category";
        }
    }
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
};

// '<div class="container app-content-tab '+ isActive +'" id="'+ id +'">\n' +

function appendHtml(elem, id, isActive) {
    $(elem).append('<div class="container app-content-tab '+ isActive +'" id="'+ id +'">\n' +
        '                <!-- BLOCK -->\n' +
        '                <div class="block">\n' +
        '                    <!-- START HEADING -->\n' +
        '                    <div class="app-heading app-heading-small">\n' +
        '                        <div class="icon">\n' +
        '                            <span class="icon-cube"></span>\n' +
        '                        </div>\n' +
        '                        <div class="title">\n' +
        '                            <h2>Statistik kategori ' + util.getUserReadableTypeString(id) + '</h2>\n' +
        '                            <p>Statistik jumlah keluhan/bulan dan persentase penyelesaian</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <!-- END START HEADING -->\n' +
        '\n' +
        '                    <div class="row">\n' +
        '                        <div class="col-md-6">\n' +
        '                            <canvas id="bulanan-chart-bar-'+ id + '" style="height: 300px;"></canvas>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="col-md-6">\n' +
        '                            <canvas id="alltime-chart-bar-'+ id +'" style="height: 300px;"></canvas>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                </div>\n' +
        '                <!-- END BLOCK -->\n' +
        '\n' +
        '            </div>');

    let bulanan_chart_elem = document.getElementById('bulanan-chart-bar-' + id);
    let alltime_chart_elem = document.getElementById('alltime-chart-bar-' + id);

    let dater = switchForChartVariable(id);

    let bulanan_chart = new Chart(bulanan_chart_elem, {
        type: 'bar',
        data: {
            labels: dater.timestamp,
            datasets: [
                {
                    label: "Jumlah keluhan",
                    backgroundColor: getRandomColor(),
                    data: dater.amount
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Jumlah total laporan keluhan perbulan'
            }
        }
    });

    let alltime_chart = new Chart(alltime_chart_elem, {
        type: 'pie',
        data: {
            datasets: [{
                data: [all_cat_status[id].AWAITING_FOLLOWUP, all_cat_status[id].IS_BEING_FOLLOWEDUP, all_cat_status[id].FINISHED, all_cat_status[id].REOPENED],
                backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
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
}

function switchForChartVariable(category){
    switch (category) {
        case "FACILITIES_AND_INFRASTRUCTURE" :
            return perbulan_sarpras;
        case "BUILDINGS" :
            return perbulan_gedung;
        case "HUMAN_RESOURCE":
            return perbulan_pendidikan;
        case "CLEANING_AND_GARDENING" :
            return perbulan_kebersihan;
        case "INCIDENT_AND_RULE_VIOLATION" :
            return perbulan_insiden_tata_tertib;
        default:
            return perbulan_lainnya;
    }
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generate6randomcolor(){
    let color = [];

    for (let j = 0; j < 6; j++) {
        color[j] = getRandomColor();
    }

    return color;
}


