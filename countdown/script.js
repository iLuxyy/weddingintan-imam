const weddingDate = new Date("August 2, 2026 09:00:00").getTime();

const countdownFunction = setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "On Ceremony";
    }
}, 1000);
        const toggleButton = document.getElementById('toggleButton');
        const hiddenContent = document.getElementById('hiddenContent');
        const simplelistexample = document.getElementById('simplelistexample');
        const playButton = document.getElementById('playButton');
        const pauseButton = document.getElementById('pauseButton');
        const audio = document.getElementById('audio');

        
        toggleButton.addEventListener('click', () => {
            hiddenContent.style.display = 'block';
            simplelistexample.classList.toggle('hidden');         
            audio.play();
    });

// audio
        playButton.addEventListener('click', () => {
            audio.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        });
// menu
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('section');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const target = document.getElementById(button.getAttribute('data-target'));
                    target.scrollIntoView({ behavior: 'smooth' });
                });
            });

            window.addEventListener('scroll', () => {
                let currentSection = '';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 60) {
                        currentSection = section.getAttribute('id');
                    }
                });

                buttons.forEach(button => {
                    button.classList.remove('active');
                    if (button.getAttribute('data-target') === currentSection) {
                        button.classList.add('active');
                    }
                });
            });
        });