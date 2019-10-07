//mock api data using defined JS Object

var laporan_list = [
    {
        pelapor: "Johan O'Brian",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "FACILITIES_AND_INFRASTRUCTURE",
        subjek: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Jumat, 20-Agustus-2019",
        day_since_last_update: 3
    },
    {
        pelapor: "Eva Braun",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "BUILDINGS",
        subjek: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Senin, 1-Agustus-2019",
        day_since_last_update: 2
    },
    {
        pelapor: "Heinrich Himmler",
        pp_url: "https://i.pravatar.cc/128",
        kategori_laporan: "FACILITIES_AND_INFRASTRUCTURE",
        subjek: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        status: "AWAITING_FOLLOWUP",
        tanggal_lapor: "Rabu, 12-Agustus-2019",
        day_since_last_update: 7
    }
    ];

$(document).ready(function () {
    laporan_list.forEach(obj => {
        let status_class;
        let kategori_class = util.getTypeClassandHumanReadableString(obj.kategori_laporan);
        $('#table-blyat').append(' <tr>\n' +
            '                                            <td>\n' +
            '                                                <div class="app-checkbox">\n' +
            '                                                    <label><input type="checkbox" /> &nbsp; </label>\n' +
            '                                                </div>\n' +
            '                                            </td>\n' +
            '                                            <td>\n' +
            '                                                <a href="#" class="contact contact-bordered contact-rounded">\n' +
            '                                                    <img src="'+ obj.pp_url +'">' + obj.pelapor +
            '                                                </a>\n' +
            '                                            </td>\n' +
            '                                            <td>\n' +
            '                                                ' + kategori_class[0] + ' <a href="#" class="text-bold text-primary">Aliquam in vestibulum nibh, cras eu nisi felis</a>\n' +
            '                                            </td>\n' +
            '                                            <td>'+ obj.tanggal_lapor +'</td>\n' +
            '                                            <td class="text-muted text-bold">'+ obj.day_since_last_update +'</td>\n' +
            '                                        </tr>')
    })
});

var util = {
    getStatusClass : function (type) {
        switch (type){
            case "AWAITING_FOLLOWUP" :
                return "Menunggu Tindaklanjut";
            case "IS_BEING_FOLLOWED_UP" :
                return "Sedang Ditindaklanjuti";
            case "FINISHED":
                return "Selesai";
            case "REOPENED" :
                return "Dibuka Kembali";
            default:
                return "Menunggu Tindaklanjut";
        }
    },
    getTypeClassandHumanReadableString: function (type) {
        switch (type){
            case "FACILITIES_AND_INFRASTRUCTURE" :
                return ['<span class="label label-primary label-bordered label-ghost margin-right-10">S</span>', 'Sarana & Prasarana'];
            case "BUILDINGS" :
                return ['<span class="label label-success label-bordered label-ghost margin-right-10">B</span>', 'Bangunan'];
            case "HUMAN_RESOURCE" :
                return ['<span class="label label-info label-bordered label-ghost margin-right-10">T</span>', 'Tenaga Kependidikan'];
            case "CLEANING_AND_GARDENING" :
                return ['<span class="label label-warning label-bordered label-ghost margin-right-10">K</span>', 'Kebersihan'];
            case "INCIDENT_AND_RULE_VIOLATION" :
                return ['<span class="label label-danger label-bordered label-ghost margin-right-10">I</span>', 'Insiden & Pelanggaran Tata Tertib']
            case "OTHERS" :
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">L</span>', 'Lainnya'];
            default:
                return ['<span class="label label-default label-bordered label-ghost margin-right-10">L</span>', 'Lainnya'];
        }


    }
}