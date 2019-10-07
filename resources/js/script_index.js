

var data = [{day: "Senin", value: 1},
    {day: "Selasa", value: 3},
    {day: "Rabu", value: 5},
    {day: "Kamis", value: 1},
    {day: "Jumat", value: 1},
    {day: "Sabtu", value: 3},
    {day: "Minggu", value: 1}];

var chart = new Morris.Bar({
    element: "mingguan-chart-bar",
    data: data,
    xkey: "day",
    ykeys: ["value"],
    labels: ["Laporan"]
});

console.log(chart);