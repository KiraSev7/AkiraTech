// Menonaktifkan fungsi seleksi teks
document.addEventListener("keydown", function (e) {
  // Menonaktifkan Ctrl + A untuk memilih semua teks
  if (e.ctrlKey && e.keyCode === 65) {
    e.preventDefault();
  }
});

// Menampilkan pesan jika pengguna mencoba untuk menyalin teks
document.addEventListener("copy", function (e) {
  alert("Tidak diperbolehkan menyalin teks!");
  e.preventDefault();
});
