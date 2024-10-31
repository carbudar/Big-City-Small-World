document.addEventListener('DOMContentLoaded', () => {
    const fullscreen = document.querySelector('.overlayMap');
    const mapContainer = document.querySelector('.map');

    // Get the screenshot URL from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const mapUrl = urlParams.get('mapUrl');

    // If mapUrl exists, display it as an image inside .map div
    if (mapUrl) {
        const img = document.createElement('img');
        img.src = mapUrl;
        img.alt = "Screenshot Image";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover"; // Ensures the image covers the div without distortion
        mapContainer.appendChild(img);
    }

    // Redirect to index.html on click
    fullscreen.addEventListener('click', () => {
        window.location.href = "index.html#photoContainer";
    });

    
    
    const button = document.querySelector('.mapBtn');
    button.addEventListener('click',()=>{
        window.location.href = "https://maps.app.goo.gl/rcsiXoA9dvEuNKy67"
    })
});
