function loadVideo() {
    const videoContainer = document.getElementById('videoContainer');

    const videoUrl = 'https://www.youtube.com/embed/HYxR4E60Jww'; // URL del video de YouTube
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.width = '560';
    iframe.height = '315';
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
}