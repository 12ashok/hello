document.getElementById('colorBtn').addEventListener('click', function() {
    // Change the card color randomly
    const colors = ['rgba(255,255,255,0.2)', 'rgba(0,0,0,0.4)', 'rgba(35,166,213,0.4)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.querySelector('.glass-card').style.background = randomColor;
    
    alert("Environment: AWS EC2\nStatus: Healthy 🚀");
});
