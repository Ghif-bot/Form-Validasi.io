function validateForm() {
    if (document.forms["formValidasi"]["nama"].value == "") {
        alert("Nama Harus Diisi.");
        document.forms["formValidasi"]["nama"].focus();
        return false;
    }

    if (document.forms["formValidasi"]["nrp"].value == "") {
        alert("NRP Harus Diisi.");
        document.forms["formValidasi"]["nrp"].focus();
        return false;
    }


    if (document.forms["formValidasi"]["alamat"].value == "") {
        alert("Email Harus Diisi.");
        document.forms["formValidasi"]["alamat"].focus();
        return false;
    }


    if (document.forms["formValidasi"]["email"].value == "") {
        alert("Email Harus Diisi.");
        document.forms["formValidasi"]["email"].focus();
        return false;
    }

    if (document.forms["formValidasi"]["domisili"].value == "") {
        alert("Domisili Harus Diisi.");
        document.forms["formValidasi"]["domisili"].focus();
        return false;
    }

    if (document.forms["formValidasi"]["jurusan"].selectedIndex < 1) {
        alert("Harap Pilih Jurusan.");
        document.forms["formValidasi"]["jurusan"].focus();
        return false;
    }

    if (document.forms["formValidasi"]["status_vaksin"].selectedIndex < 1) {
        alert("Harap Pilih Status Vaksin");
        document.forms["formValidasi"]["status_vaksin"].focus();
        return false;
    }
    if (document.forms["formValidasi"]["Kesediaan"].selectedIndex < 1) {
        alert("Harap isi bagian Kesediaan");
        document.forms["formValidasi"]["Kesediaan"].focus();
        return false;
    }
    if (isNaN(document.forms["formValidasi"]["No_HP"].value)) {
        alert("No. HP Harus Angka.");
        document.forms["formValidasi"]["No_HP"].focus();
        return false;
    }
    alert("Data telah disubmit");
}