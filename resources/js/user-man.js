$(document).ready(function () {
    var table = $('#datatable').DataTable({
        ajax: {
            //emulate API Call with placeholder
            url: 'https://jsonplaceholder.typicode.com/posts/',
            dataSrc: ''
        },
        columns: [
            {data: 'userId'},
            {data: 'id'},
            {data: 'title'},
            {data: 'body'}
        ]
    });

    $('#datatable tbody').on('click', 'tr', function () {
        delete table.rows('.table-active').data()[0];
        table.rows().every(function () {
            this.nodes().to$().removeClass('table-active');
        });
        $(this).addClass('table-active');
        console.log(table.rows('.table-active').data());
    });

    $('#datatable').on('draw', function () {
        table.rows().every(function () {
            this.nodes().to$().removeClass('table-active');
        });
        swal.fire('event fired', 'fire!', 'info');
    });

    $('#surveyor-category-wrapper').hide();

    $('#select_role').on('change', function () {
       if(this.value === 'surveyor'){
           $('#surveyor-category-wrapper').show();
       }else{
           $('#surveyor-category-wrapper').hide();
       }
    });

    $('#change-role-btn').click(function () {
        //POST request to change role
    });

    $('#delete_attempt').on('click', function () {
        swal({
            title: 'Apakah Anda yakin ?',
            text: "Tindakan ini tidak dapat di batalkan",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal'
        }, function (isActionConfirmed) {
            if(isActionConfirmed){
                new noty({title: 'Sukses!', text: '<strong>Sukses!</strong> User Deleted', type: 'success', layout: 'topRight'})
            }
        })
    })
});