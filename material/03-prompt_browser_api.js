// Prompt (BrowserAPI)
var inputPassword = prompt("Silahkan input password?");

// If-Else
if (inputPassword != 'password') {
    alert("Password anda salah, anda akan terlempar ke halaman tokopedia untuk belanja.");
    window.location = "http://tokopedia.com";
} else {
    document.write("Selamat datang di sini");
}

// Gender Custom
var inputName = prompt("Siapa nama anda?");
var inputGender = prompt("Apa jenis kelamin anda? [L/P]");

if (inputGender == "L") {
    document.write("Halo, Mas " + inputName);
} else if (inputGender == "P") {
    document.write("Halo, Mba " + inputName);
} else {
    document.write("Halo, ??? " + inputName);
}
