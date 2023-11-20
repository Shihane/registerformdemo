var nama = document.forms['form']['nama'];
var nim = document.forms['form']['nim'];

var nama_error = document.getElementById('nama_error');
var nim_error = document.getElementById('nim_error');

nama.addEventListener('textInput', nama_Verify);
nim.addEventListener('textInput', nim_Verify);

function validated(){
	if (nama.value.length < 2) {
		nama.style.border = "1px solid red";
		nama_error.style.display = "block";
		nama.focus();
		return false;
	}
	if (nim.value.length < 6) {
		nim.style.border = "1px solid red";
		nim_error.style.display = "block";
		nim.focus();
		return false;
	}

}
function nama_Verify(){
	if (nama.value.length >= 2) {
		nama.style.border = "1px solid silver";
		nama_error.style.display = "none";
		return true;
	}
}
function nim_Verify(){
	if (nim.value.length >= 4) {
		nim.style.border = "1px solid silver";
		nim_error.style.display = "none";
		return true;
	}
}
