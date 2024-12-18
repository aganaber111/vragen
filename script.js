// script.js

// Koyu/aydınlık mod düğmesine tıklama olayını dinle
document.querySelector('.toggle-button').addEventListener('click', () => {
    // body etiketine "dark-mode" sınıfını ekle veya kaldır
    document.body.classList.toggle('dark-mode');
    
    // Buton metnini değiştir
    const button = document.querySelector('.toggle-button');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Aydınlık Modu Aç';
    } else {
        button.textContent = 'Koyu Modu Aç';
    }
});
