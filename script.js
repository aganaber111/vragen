document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Sembolü değiştir
    const icon = document.getElementById('toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.innerHTML = '☀️'; // Koyu moddayken sembol güneş
    } else {
        icon.innerHTML = '🌙'; // Normal moddayken sembol ay
    }
});
