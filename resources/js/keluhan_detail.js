$('#image_input').on('change', function () {
    if($('#image_input')[0].files.length > 1){
        swal.fire('Error', 'Anda hanya bisa memasukkan 1 gambar', 'error');
    }
});