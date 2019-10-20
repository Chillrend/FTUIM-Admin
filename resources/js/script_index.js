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
}

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
})

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

var data = [{day: "Senin", value: 1},
    {day: "Selasa", value: 3},
    {day: "Rabu", value: 5},
    {day: "Kamis", value: 1},
    {day: "Jumat", value: 1},
    {day: "Sabtu", value: 3},
    {day: "Minggu", value: 1}];

function appendHtml(elem, id, isActive) {
    $(elem).append("<div class='container app-content-tab " + isActive + "' id=" + id +">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-md-6\">\n" +
        "\n" +
        "                        <ul class=\"app-feature-gallery app-feature-gallery-noshadow margin-bottom-0\"\n" +
        "                            >\n" +
        "                            <li>\n" +
        "                                <!-- START WIDGET -->\n" +
        "                                <div class=\"app-widget-tile app-widget-highlight\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-sm-4\">\n" +
        "                                            <div class=\"icon icon-lg\">\n" +
        "                                                <span class=\"icon-inbox\"></span>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-sm-8\">\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"title\">Jumlah seluruh laporan keluhan</div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"intval text-left\">25</div>\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"subtitle\"><a href=\"keluhan-list.html\">Lihat seluruh keluhan</a></div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <!-- END WIDGET -->\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-md-6\">\n" +
        "\n" +
        "                        <ul class=\"app-feature-gallery app-feature-gallery-noshadow margin-bottom-0\"\n" +
        "                            >\n" +
        "                            <li>\n" +
        "                                <!-- START WIDGET -->\n" +
        "                                <div class=\"app-widget-tile app-widget-highlight\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-sm-4\">\n" +
        "                                            <div class=\"icon icon-lg\">\n" +
        "                                                <span class=\"icon-warning text-danger\"></span>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-sm-8\">\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"title\">Jumlah keluhan Belum ditangani</div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"intval text-left\">12</div>\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"subtitle\"><a href=\"keluhan-list.html\">Lihat keluhan</a></div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <!-- END WIDGET -->\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-md-4\">\n" +
        "\n" +
        "                        <ul class=\"app-feature-gallery app-feature-gallery-noshadow margin-bottom-0\"\n" +
        "                            >\n" +
        "                            <li>\n" +
        "                                <!-- START WIDGET -->\n" +
        "                                <div class=\"app-widget-tile app-widget-highlight\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-sm-4\">\n" +
        "                                            <div class=\"icon icon-lg\">\n" +
        "                                                <span class=\"icon-hourglass text-info\"></span>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-sm-8\">\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"title\">keluhan sedang ditangani</div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"intval text-left\">12</div>\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"subtitle\"><a href=\"keluhan-list.html\">Lihat keluhan</a></div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <!-- END WIDGET -->\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-md-4\">\n" +
        "\n" +
        "                        <ul class=\"app-feature-gallery app-feature-gallery-noshadow margin-bottom-0\"\n" +
        "                            >\n" +
        "                            <li>\n" +
        "                                <!-- START WIDGET -->\n" +
        "                                <div class=\"app-widget-tile app-widget-highlight\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-sm-4\">\n" +
        "                                            <div class=\"icon icon-lg\">\n" +
        "                                                <span class=\"icon-warning text-success\"></span>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-sm-8\">\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"title\">Keluhan sudah ditangani</div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"intval text-left\">5</div>\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"subtitle\"><a href=\"keluhan-list.html\">Lihat keluhan</a></div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <!-- END WIDGET -->\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-md-4\">\n" +
        "\n" +
        "                        <ul class=\"app-feature-gallery app-feature-gallery-noshadow margin-bottom-0\"\n" +
        "                            >\n" +
        "                            <li>\n" +
        "                                <!-- START WIDGET -->\n" +
        "                                <div class=\"app-widget-tile app-widget-highlight\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-sm-4\">\n" +
        "                                            <div class=\"icon icon-lg\">\n" +
        "                                                <span class=\"icon-undo text-danger\"></span>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-sm-8\">\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"title\">Keluhan dibuka kembali</div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"intval text-left\">3</div>\n" +
        "                                            <div class=\"line\">\n" +
        "                                                <div class=\"subtitle\"><a href=\"keluhan-list.html\">lihat keluhan</a></div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <!-- END WIDGET -->\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>\n" +
        "            </div>")
}