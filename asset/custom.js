$(document).ready(function () {
    $("#pemberitahuan").modal({
            show: true,
            backdrop: 'static'
        });
    // Custom method to validate username
    $.validator.addMethod("usernameRegex", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
    }, "Username must contain only letters, numbers");

    $(".next").click(function () {
        if (document.getElementById('pengguna_rutin3').checked || document.getElementById('pengguna_ot2').checked){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
            });
            pengguna_ot = document.querySelector('input[name="pengguna_ot"]:checked').value;
            // pengguna_ot = document.getElementsByName('pengguna_ot').value;
            pengguna_rutin = document.querySelector('input[name="pengguna_rutin"]:checked').value;
            // pengguna_rutin = document.getElementsByName('pengguna_rutin').value; 
            if(document.getElementById('nama_produk_val')){
                nama_produk = document.getElementById('nama_produk_val').value
            } else {
                nama_produk = ""
            }
            if(document.getElementById('c_pengguna_rutin')){
                c_pengguna_rutin = document.getElementById('c_pengguna_rutin').value;
            } else {
                c_pengguna_rutin = ""
            }
            console.log(nama_produk);
            $.ajax({
                type: "POST",
                async: false,
                url: "{{ route('surveiumum-store') }}",
                data: { 
                    pengguna_ot:pengguna_ot, 
                    pengguna_rutin:pengguna_rutin, 
                    nama_produk:nama_produk, 
                    c_pengguna_rutin:c_pengguna_rutin 
                    }, 
                success: function( msg ) {
                    console.log(msg)
                    if(msg == 'success'){
                        window.location.href = "{{ route('surveiumum-success') }}";
                    }
                }
            });
            return;
        }

        // navigation steps / progress steps
        var parent_fieldset = $(this).parents('fieldset');
        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
        var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');

        var form = $("#myform");
        form.validate({
            invalidHandler: function(event, validator) {
                // 'this' refers to the form
                var errors = validator.numberOfInvalids();
                if (errors) {
                    var message = errors == 1
                        ? 'Kamu telah melewatkan 1 pertanyaan.'
                        : 'Kamu telah melewatkan ' + errors + ' pertanyaan.';
                    document.getElementById("notif-msg").innerHTML = '';
                    document.getElementById("notif-msg").innerHTML = message;
                    $("#notif").modal({
                        show: true,
                        backdrop: 'static'
                    });
                    //alert(message);
                }
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
            },
            rules: {
                pengguna_rutin: {
                    required: true
                },
                pengguna_ot: {
                    required: true
                },
                nama_produk: {
                    required: true
                },
                c_pengguna_rutin: {
                    required: true
                },
                "b_sediaan[]": {
                    required: true
                },
                "tujuan_ot[]": {
                    required: true
                },
                nama: {
                    required: true,
                    minlength: 5,
                },
                email: {
                    required: true,
                    minlength: 5,
                    email: true
                },
                gender: {
                    required: true
                },
                usia: {
                    required: true
                },
                provinsi: {
                    required: true
                },
                pendidikan: {
                    required: true
                }, 
                telepon: {
                    required: true,
                    minlength: 5,
                },
                p31: {
                    required: true,
                },
                p32: {
                    required: true,
                },
                p33: {
                    required: true,
                },
                p41: {
                    required: true,
                },
                p42: {
                    required: true,
                },
                p51: {
                    required: true,
                },
                p52: {
                    required: true,
                },
                p53: {
                    required: true,
                },
                p54: {
                    required: true
                },
                p55: {
                    required: true
                },
                p56: {
                    required: true
                },
                p57: {
                    required: true
                },
                p61: {
                    required: true,
                },
                p62: {
                    required: true,
                },
            },
            messages: {
                sosialisasi: {
                    required: "Mohon isi opsi diatas",
                },
                password: {
                    required: "Password required",
                },
                conf_password: {
                    required: "Password required",
                    equalTo: "Password don't match",
                },
                pengguna_rutin: {
                    required: "Mohon isi opsi diatas",
                },
                pengguna_ot: {
                    required: "Mohon isi opsi diatas",
                },
                nama_produk: {
                    required: "Mohon isi nama produk",
                },
                c_pengguna_rutin: {
                    required: "Mohon isi seberapa rutin meminum obat tradisional",
                },
                "tujuan_ot[]": {
                    required: "Mohon isi opsi diatas. Anda dapat memilih lebih dari 1 opsi",
                },
                "b_sediaan[]": {
                    required: "Mohon isi opsi diatas. Anda dapat memilih lebih dari 1 opsi",
                },
                nama: {
                    required: "Mohon isi nama anda",
                    minlength: "Mohon isi minimal 5 karakter"
                },
                email: {
                    required: "Mohon isi Email Anda",
                    email: "Mohon gunakan email yang valid"
                },
                gender: {
                    required: true
                },
                usia: {
                    required: "Mohon isi Usia Anda",
                },
                provinsi: {
                    required: "Mohon isi Provinsi anda tinggal",
                },
                pendidikan: {
                    required: "Mohon isi opsi diatas",
                }, 
                telepon: {
                    required: "Mohon isi nomor telpon/handphone anda",
                },
                p31: {
                    required: "Mohon isi opsi diatas",
                },
                p32: {
                    required: "Mohon isi opsi diatas",
                },
                p33: {
                    required: "Mohon isi opsi diatas",
                },
                p41: {
                    required: "Mohon isi opsi diatas",
                },
                p42: {
                    required: "Mohon isi opsi diatas",
                },
                p51: {
                    required: "Mohon isi opsi diatas",
                },
                p52: {
                    required: "Mohon isi opsi diatas",
                },
                p53: {
                    required: "Mohon isi opsi diatas",
                },
                p54: {
                    required: "Mohon isi opsi diatas",
                },
                p55: {
                    required: "Mohon isi opsi diatas",
                },
                p56: {
                    required: "Mohon isi opsi diatas",
                },
                p57: {
                    required: "Mohon isi opsi diatas",
                },
                p61: {
                    required: "Mohon isi opsi diatas",
                },
                p62: {
                    required: "Mohon isi opsi diatas",
                },
            }
        });
        if (form.valid() === true) {
            if ($('#media_information').is(":visible")) {
                current_fs = $('#media_information');
                next_fs = $('#account_information');
            } else if ($('#account_information').is(":visible")) {
                current_fs = $('#account_information');
                next_fs = $('#company_information');
            } else if ($('#company_information').is(":visible")) {
                current_fs = $('#company_information');
                next_fs = $('#personal_information');
            }
            current_active_step.removeClass('active').addClass('activated').next().addClass(
                'active');
            // progress bar
            bar_progress(progress_line, 'right');
            next_fs.show();
            current_fs.hide();
            var show_ele = document.getElementById("show_ele");
            show_ele.scrollIntoView(); 
        }
    });

    $('.previous').click(function () {
        // navigation steps / progress number_of_steps
        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
        var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
        if ($('#account_information').is(":visible")) {
            current_fs = $('#account_information');
            next_fs = $('#media_information');
        } else if ($('#company_information').is(":visible")) {
            current_fs = $('#company_information');
            next_fs = $('#account_information');
        } else if ($('#personal_information').is(":visible")) {
            current_fs = $('#personal_information');
            next_fs = $('#company_information');
        }
        current_active_step.removeClass('active').prev().removeClass('activated').addClass(
            'active');
        // progress bar
        bar_progress(progress_line, 'left');
        next_fs.show();
        current_fs.hide();
    });

    $('input[id=pengguna_ot1]').change(function(){
        document.getElementById('nama_produk').innerHTML = '';
        // document.getElementById('rutin').innerHTML = '';
        var form_produk = document.getElementById('form_nama_produk').innerHTML;
        document.getElementById('nama_produk').innerHTML = form_produk;
        // var form_rutin = document.getElementById('form_rutin').innerHTML;
        // document.getElementById('rutin').innerHTML = form_rutin;
        // document.getElementById("custom_rutin").innerHTML = '';
    });
    $('input[id=pengguna_ot2]').change(function(){
        document.getElementById('nama_produk').innerHTML = '';
        // document.getElementById('rutin').innerHTML = '';
    });
    $('input[name=pengguna_rutin]').change(function(){
        document.getElementById("custom_rutin").innerHTML = '';
        if (document.getElementById('pengguna_rutin2').checked) {
            var form_custom_rutin = document.getElementById('form_custom_rutin').innerHTML;
            document.getElementById("custom_rutin").innerHTML = form_custom_rutin;
        }
    });
    $('input[id=tujuan7]').change(function(){
        document.getElementById("custom_tujuan").innerHTML = '';
        if (document.getElementById('tujuan7').checked) {
            var div = document.getElementById('form_custom_tujuan').innerHTML;
            document.getElementById("custom_tujuan").innerHTML = div;
        }
    });
});
$('.select2bs4').select2().change(function () {
    $(this).valid();
});