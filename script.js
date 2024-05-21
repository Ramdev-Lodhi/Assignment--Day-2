document.getElementById('changeContentButton').addEventListener('click', function() {
    const mainContent = document.querySelector('main .main-content p');
    mainContent.textContent = 'CodeLand offers tutorials on HTML, CSS, JavaScript, and more!';
});
