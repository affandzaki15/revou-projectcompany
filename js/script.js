let nama = prompt("masukkan nama kamu:")

if (nama === null || nama === ""){
    nama = "Guest"
}
document.getElementById("name").innerText= nama;


const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar tidak reload halaman

  // ambil nilai input
  const nama = document.getElementById("namma").value;
  const tanggal = document.getElementById("date").value;
  const pesan = document.getElementById("pesan").value;

  // ambil radio yang dicentang
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "-";

  // tampilkan ke kolom hasil
  document.getElementById("hasil-namma").innerText = nama;
  document.getElementById("hasil-date").innerText = tanggal;
  document.getElementById("hasil-gender").innerText = gender;
  document.getElementById("hasil-pesan").innerText = pesan;

  // waktu sekarang
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleString();
});
