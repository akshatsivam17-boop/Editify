// Play video on hover, pause when mouse leaves
const videos = document.querySelectorAll('.video-container video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // restart to beginning
    });
});
// Scroll-based reveal animation for videos
const videoContainers = document.querySelectorAll('.video-container');

const revealOnScroll = () => {
    videoContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        // Trigger only when the video enters the viewport
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                container.classList.add('visible');
            }, index * 200);
        }
    });
};

// Run only on scroll (not on page load)
window.addEventListener('scroll', revealOnScroll);

