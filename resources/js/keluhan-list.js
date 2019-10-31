//mock api data using defined JS Object

var laporan_list = [
    {
        pelapor: "Johan O'Brian",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "FACILITIES_AND_INFRASTRUCTURE",
        judul: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Jumat, 20-Agustus-2019",
        day_since_submited_or_completed: 5
    },
    {
        pelapor: "Eva Braun",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "BUILDINGS",
        judul: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Senin, 1-Agustus-2019",
        day_since_submited_or_completed: 7
    },
    {
        pelapor: "Heinrich Himmler",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "FACILITIES_AND_INFRASTRUCTURE",
        judul: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Rabu, 12-Agustus-2019",
        day_since_submited_or_completed: 10
    }
    ];

$(document).ready(function () {
    // laporan_list.forEach(obj => {
    //     let kategori_class = util.getTypeClassandHumanReadableString(obj.kategori_laporan);
    //     let status_class = util.getStatusClass(obj.status);
    //     var template = document.querySelector("#keluhan-row");
    //     var tbody = document.querySelector("#table-blyat");
    //
    //     let clone = document.importNode(template.content, true);
    //     let td = clone.querySelectorAll("td");
    //
    //     td[0].insertAdjacentHTML("beforeend", "<div class=\"app-checkbox\">\n" +
    //         "                <label><input type=\"checkbox\"> &nbsp; <span></span></label>\n" +
    //         "            </div>");
    //     td[1].textContent = obj.pelapor;
    //     td[2].insertAdjacentHTML("beforeend", "<a href=\"keluhan-detail.html\" class=\"text-bold text-primary\">" + obj.subjek + "</a>");
    //     td[3].insertAdjacentHTML("beforeend", "<span class=\"label label-default\">" + kategori_class[1] + "</span>");
    //     td[4].insertAdjacentHTML("beforeend", "<span class=\"label " + status_class[1]  + "\">" + status_class[0] + "</span>");
    //     td[5].textContent = obj.tanggal_lapor;
    //     td[6].insertAdjacentHTML("beforeend", "<div class=\"btn-group btn-group-vertical btn-group-xs\" role=\"group\">\n" +
    //         "                <button type=\"button\" class=\"btn btn-default\">Edit</button>\n" +
    //         "                <button type=\"button\" class=\"btn btn-danger\">Hapus</button>\n" +
    //         "                <button type=\"button\" class=\"btn btn-info\">Naikkan</button>\n" +
    //         "            </div>");
    //
    //     tbody.appendChild(clone);
    // })

    for (let i = 0; i < laporan_list.length ; i++) {
        laporan_list[i].kategori_laporan = util.getTypeClassandHumanReadableString(laporan_list[i].kategori_laporan)[1];
        laporan_list[i].status = util.getStatusClass(laporan_list[i].status)[0];
    }

    $('#tabul').DataTable({
        data: laporan_list,
        columns: [
            {"data": "pelapor", "title": "Pelapor", "width": "10%"},
            {"data": "judul", "title": "Judul", "width": "20%"},
            {"data": "kategori_laporan", "title": "Kategori", "width": "10%"},
            {"data": "status", "title": "Status", "width": "15%"},
            {"data": "tanggal_lapor", "title": "Tanggal Lapor", "width": "20%"},
            {"data": "day_since_submited_or_completed", "title": "Hari setelah tanggal lapor", "width": "10%"},
            {
                mRender: function (data, type, row) {
                    return '<p class="button-inline"><button class="btn btn-sm btn-info btn-icon" data-id=edit"' + row[0] + '"><span class="icon-pencil"></span></button><button class="btn btn-sm btn-danger btn-icon" data-id="delete-' + row[0] + '"><span class="icon-trash"></span></button><a href="keluhan-detail.html" class="btn btn-sm btn-default btn-icon" data-id="process-' + row[0] + '"><span class="icon-exit-up"></span></a></p>'
                }, "title": "Actions", "width": "15%"
            }
        ]
    })
});


var util = {
    getStatusClass : function (type) {
        switch (type){
            case "AWAITING_FOLLOWUP" :
                return ["Menunggu Tindaklanjut", "label-danger"];
            case "IS_BEING_FOLLOWED_UP" :
                return ["Sedang Ditindaklanjuti", "label-info"];
            case "FINISHED":
                return ["Selesai", "label-success"];
            case "REOPENED" :
                return ["Dibuka Kembali", "label-danger"];
            default:
                return ["Menunggu Tindaklanjut", "label-danger"];
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
    },
    getTypeClassandHumanReadableString: function (type) {
        switch (type){
            case "FACILITIES_AND_INFRASTRUCTURE" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Sarana & Prasarana</span>', 'Sarana & Prasarana'];
            case "BUILDINGS" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Gedung</span>', 'Gedung'];
            case "HUMAN_RESOURCE" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Tenaga Kependidikan</span>', 'Tenaga Kependidikan'];
            case "CLEANING_AND_GARDENING" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Kebersihan</span>', 'Kebersihan'];
            case "INCIDENT_AND_RULE_VIOLATION" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Insiden & Pelanggaran Tata Tertib</span>', 'Insiden & Pelanggaran Tata Tertib']
            case "OTHERS" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Lainnya</span>', 'Lainnya'];
            default:
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">Lainnya</span>', 'Lainnya'];
        }


    }
}