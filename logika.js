// Menampilkan pop-up saat halaman dimuat
window.onload = function() {
    document.getElementById('popupOverlay').style.display = 'block';
};

// Menutup pop-up saat tombol tutup diklik
document.getElementById('closePopup').onclick = function() {
    document.getElementById('popupOverlay').style.display = 'none';
};

// Menutup pop-up saat tombol "Saya Memahami" diklik
document.getElementById('understandButton').onclick = function() {
    document.getElementById('popupOverlay').style.display = 'none';
};