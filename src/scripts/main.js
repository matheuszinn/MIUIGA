// MIUIGA Framework Logic

document.addEventListener('DOMContentLoaded', () => {
    // 0. Welcome Alert (Authentic Web 1.0 Entry)
    if (!localStorage.getItem('miuiga_welcomed')) {
        alert("WELCOME TO MY SLICE OF CYBERSPACE! \n\nClick OK to enter the MIUIGA Framework Experience!");
        localStorage.setItem('miuiga_welcomed', 'true');
    }

    initVisitorCounter();
    initMediaPlayer();
    initGuestbook();
    initBackgroundSwitcher();
});

// 1. Visitor Counter Logic
function initVisitorCounter() {
    const counterEl = document.getElementById('visitor-counter');
    const visitText = document.getElementById('visit-text');
    if (!counterEl) return;

    // Simulate persistent counter with localStorage
    let visits = localStorage.getItem('miuiga_visits') || 42;
    visits = parseInt(visits) + 1;
    localStorage.setItem('miuiga_visits', visits);

    // Format to 6 digits
    const formatted = visits.toString().padStart(6, '0');
    counterEl.textContent = formatted;
    
    if (visitText) {
        visitText.textContent = `${visits} times`;
    }
}

// 2. Media Player Logic
function initMediaPlayer() {
    const playBtn = document.getElementById('player-play');
    const stopBtn = document.getElementById('player-stop');
    const playerBox = document.querySelector('.player-box');
    const statusText = document.getElementById('player-status');

    if (!playBtn || !stopBtn) return;

    // Use a royalty-free retro-style track for demonstration
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;

    playBtn.addEventListener('click', () => {
        audio.play().catch(e => console.log("Audio playback failed: ", e));
        playerBox.classList.add('playing');
        statusText.textContent = 'PLAYING: retro_beat.mp3';
        statusText.classList.add('blink');
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0; // Reset to start like a classic stop button
        playerBox.classList.remove('playing');
        statusText.textContent = 'STOPPED';
        statusText.classList.remove('blink');
    });
}

// 3. Guestbook (Scratchbook) Logic
function initGuestbook() {
    const form = document.getElementById('guestbook-form');
    const list = document.getElementById('guestbook-entries');
    const nameInput = document.getElementById('gb-name');
    const msgInput = document.getElementById('gb-msg');

    if (!form || !list) return;

    // Load existing
    const loadEntries = () => {
        const entries = JSON.parse(localStorage.getItem('miuiga_guestbook') || '[]');
        list.innerHTML = entries.map(e => `
            <div class="retro-inset" style="margin-bottom: 10px;">
                <b>${e.name}</b> says: <br>
                ${e.msg}
                <div style="font-size: 10px; color: gray;">${e.date}</div>
            </div>
        `).join('');
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEntry = {
            name: nameInput.value || 'Anonymous',
            msg: msgInput.value,
            date: new Date().toLocaleString()
        };

        const entries = JSON.parse(localStorage.getItem('miuiga_guestbook') || '[]');
        entries.unshift(newEntry);
        localStorage.setItem('miuiga_guestbook', JSON.stringify(entries));

        nameInput.value = '';
        msgInput.value = '';
        loadEntries();
    });

    loadEntries();
}

// 4. Background Switcher Logic
function initBackgroundSwitcher() {
    const mainFrame = document.querySelector('.frame-main');
    const buttons = document.querySelectorAll('.bg-toggle');
    
    if (!mainFrame) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const bgClass = btn.getAttribute('data-bg');
            // Remove old bg classes
            mainFrame.classList.remove('bg-stars', 'bg-paper', 'bg-clouds', 'bg-marble');
            // Add new one
            if (bgClass) mainFrame.classList.add(bgClass);
        });
    });
}
