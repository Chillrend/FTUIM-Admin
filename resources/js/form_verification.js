$(document).ready(function () {
   $('#pwd_aftr_ver_inpt').on('keyup', fn => {
       if($('#pwd_aftr_inpt').val() !== $('#pwd_aftr_ver_inpt').val() && !$('#pwd_aftr').hasClass('has-error')){
           $('#pwd_aftr').addClass('has-error');
           $('#pwd_aftr').append('<span class="help-block">Password baru tidak sama dengan password verifikasi</span>');

           $('#pwd_aftr_ver').addClass('has-error');
           $('#pwd_aftr_ver').append('<span class="help-block">Password baru tidak sama dengan password verifikasi</span>');

       }else if($('#pwd_aftr_inpt').val() == $('#pwd_aftr_ver_inpt').val()){
           $('#pwd_aftr').removeClass('has-error');
           $('#pwd_aftr').find('span').remove();

           $('#pwd_aftr_ver').removeClass('has-error');
           $('#pwd_aftr_ver').find('span').remove();
       }
   });
});
