document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets.json');
        const data = await response.json();

        // Set video background source
        const videoBG = document.querySelector('#videoBG');
        const videoSource = document.querySelector('#videoBG source');
        videoSource.src = data.videos.video1.source;
        videoBG.load();

        const historyDirectory = document.querySelector('.historyDir');
        historyDirectory.addEventListener('click',()=>{
            window.location.href = '#historyContainer'
        })

        const photoDirectory = document.querySelector('.photoDir');
        photoDirectory.addEventListener('click',()=>{
            window.location.href = '#photoContainer'
        })

        const obsDirectory = document.querySelector('.obsDir');
        obsDirectory.addEventListener('click',()=>{
            window.location.href = '#dataContainer'
        })
        // Create the first photo gallery with items from "data.photos"
        const gallery = document.querySelector('.gallery');
        Object.entries(data.photos).forEach(([key, photo]) => {
            const img = document.createElement('img');
            img.src = photo.source;
            img.alt = photo.name || "Gallery Image";

    
            // Add click event to redirect to fullscreen.html with screenshot URL as parameter
            img.addEventListener('click', () => {
                window.location.href = `fullscreen.html?mapUrl=${encodeURIComponent(photo.map)}`;
            });

            gallery.appendChild(img); // Append to gallery container
        });

        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const startScroll = 50; // Adjust this value to control when the horizontal animation starts
        
            // Get the title elements for left/right movement
            const firstH1 = document.querySelector('.firstH1');
            const secondH1 = document.querySelector('.secondH1');
        
            if (scrollPosition > startScroll) {
                // Calculate translation based on scroll position, starting only after `startScroll`
                const translateAmountX = Math.min((scrollPosition - startScroll) / 2, 400); // Limit to 400px
        
                // Apply horizontal transformations
                firstH1.style.transform = `translateX(-${translateAmountX}px)`;
                secondH1.style.transform = `translateX(${translateAmountX}px)`;
            }
        
            // Animation for history container
            const historyStartScroll = 100; // Adjust this value to control when the vertical animation starts
            const historyEndScroll = 700; // Adjust this value to control when the animation ends
            const historyTitle = document.querySelector('.historyTitle');
            const historyContent = document.querySelector('.historyContent');
        
            if (scrollPosition > historyStartScroll && scrollPosition < historyEndScroll) {
                // Calculate smooth translation based on scroll position
                const progress = (scrollPosition - historyStartScroll) / (historyEndScroll - historyStartScroll);
        
                // Apply transformations based on scroll progress
                historyTitle.style.opacity = progress;
                historyTitle.style.transform = `translateY(${(1 - progress) * 200}px)`; // Moves from 200px down to 0px
        
                historyContent.style.opacity = progress;
                historyContent.style.transform = `translateY(${(1 - progress) * 800}px)`; // Moves from 250px down to 0px
            } else if (scrollPosition <= historyStartScroll) {
                // Reset to initial position when scrolling up past the threshold
                historyTitle.style.opacity = '0';
                historyTitle.style.transform = 'translateY(200px)';
        
                historyContent.style.opacity = '0';
                historyContent.style.transform = 'translateY(250px)';
            } else if (scrollPosition >= historyEndScroll) {
                // Lock the position when scrolling past the end threshold
                historyTitle.style.opacity = '1';
                historyTitle.style.transform = 'translateY(0)';
        
                historyContent.style.opacity = '1';
                historyContent.style.transform = 'translateY(0)';
            }
        });
        
        
        
        
        
        
        
       // Create the second photo gallery with items from "data.sequences"
const sequence = document.querySelector('.sequence');
Object.entries(data.sequences).forEach(([key, photo]) => {
    const img2 = document.createElement('img');
    img2.src = photo.source;
    img2.alt = photo.name || "Gallery Image";


    sequence.appendChild(img2); // Append to sequence container
});

    } catch (error) {
        console.error('Error loading gallery:', error);
    }
});
