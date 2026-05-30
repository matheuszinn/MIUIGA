// MIUIGA Framework Logic

document.addEventListener('DOMContentLoaded', () => {
    // 0. Welcome Alert (Authentic Web 1.0 Entry)
    if (!localStorage.getItem('miuiga_welcomed')) {
        alert("WELCOME TO MY SLICE OF CYBERSPACE! \n\nClick OK to enter the MIUIGA Framework Experience!");
        localStorage.setItem('miuiga_welcomed', 'true');
    }

    // Restore persistent modern mode if selected
    if (localStorage.getItem('miuiga_modern_mode') === 'true') {
        document.body.classList.add('mode-modern');
    }

    initVisitorCounter();
    initMediaPlayer();
    initGuestbook();
    initBackgroundSwitcher();
    
    // Initialize new Web 1.0 extensions
    initDraggableWindows();
    initCursorTrail();
    initWebring();
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
            mainFrame.classList.remove('bg-stars', 'bg-paper', 'bg-clouds', 'bg-marble', 'bg-nebula');
            // Add new one
            if (bgClass) mainFrame.classList.add(bgClass);
        });
    });
}

// 5. Spacer GIF Emulation Custom Element
class SpacerGif extends HTMLElement {
    static get observedAttributes() { return ['x', 'y', 'width', 'height']; }
    
    connectedCallback() {
        this.style.display = 'inline-block';
        this.style.background = 'transparent';
        this.style.border = 'none';
        this.style.margin = '0';
        this.style.padding = '0';
        this.style.flexShrink = '0';
        this.updateDimensions();
    }
    
    attributeChangedCallback() {
        this.updateDimensions();
    }
    
    updateDimensions() {
        const x = this.getAttribute('x') || this.getAttribute('width') || '1';
        const y = this.getAttribute('y') || this.getAttribute('height') || '1';
        this.style.width = `${x}px`;
        this.style.height = `${y}px`;
    }
}
customElements.define('spacer-gif', SpacerGif);

// 6. Draggable OS-Style Popup Windows Logic
function initDraggableWindows() {
    const windows = document.querySelectorAll('.retro-window');
    windows.forEach(win => {
        const titleBar = win.querySelector('.window-title-bar');
        if (!titleBar) return;
        
        let isDragging = false;
        let startX, startY;
        let initialX, initialY;
        
        titleBar.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-close-btn')) return;
            
            isDragging = true;
            win.style.transform = 'none';
            
            const rect = win.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            
            win.style.left = `${initialX}px`;
            win.style.top = `${initialY}px`;
            
            startX = e.clientX;
            startY = e.clientY;
            
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
        
        function onMouseMove(e) {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            win.style.left = `${initialX + dx}px`;
            win.style.top = `${initialY + dy}px`;
        }
        
        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.display = 'none';
    }
}

function openWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.display = 'block';
        win.style.transform = 'translate(-50%, -50%)';
        win.style.left = '50%';
        win.style.top = '50%';
    }
}

window.closeWindow = closeWindow;
window.openWindow = openWindow;

// 7. High-Performance Canvas Cursor Trail
function initCursorTrail() {
    const canvas = document.createElement('canvas');
    canvas.id = 'cursor-trail-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 3; i++) {
            particles.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3 - 1,
                size: Math.floor(Math.random() * 3) + 2, // 2 to 5 pixels
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1.0,
                decay: 0.02 + Math.random() * 0.02
            });
        }
    });

    function drawPixelCross(ctx, x, y, size, color) {
        ctx.fillStyle = color;
        if (document.body.classList.contains('mode-modern')) {
            // Web 2.0 bubble glow trail
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Classic pixelated cross trail
            ctx.fillRect(x - size, y, size, size);
            ctx.fillRect(x + size, y, size, size);
            ctx.fillRect(x, y - size, size, size);
            ctx.fillRect(x, y + size, size, size);
            ctx.fillRect(x, y, size, size);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.globalAlpha = p.alpha;
            drawPixelCross(ctx, p.x, p.y, p.size, p.color);
        }
        ctx.globalAlpha = 1.0;
        requestAnimationFrame(animate);
    }
    animate();
}

// 8. Algorithmic Webrings Routing
const WEBRING_SITES = [
    { url: 'http://localhost:3000/', name: 'MIUIGA Hub (Local)' },
    { url: 'https://miuiga.com/', name: 'MIUIGA Main Cyber-Portal' },
    { url: 'https://retro-web.org/', name: 'Retro Web Preservation Guild' },
    { url: 'https://geocities.restoration/', name: 'Geocities Restoration Project' },
    { url: 'https://space-jam.com/', name: 'Space Jam 96 Archive' },
    { url: 'https://cameronsworld.net/', name: 'Camerons World' }
];

function initWebring() {
    const currentNameEl = document.getElementById('webring-current-name');
    const prevLink = document.getElementById('webring-prev');
    const nextLink = document.getElementById('webring-next');
    const randomLink = document.getElementById('webring-random');

    if (!prevLink || !nextLink || !randomLink) return;

    const currentUrl = window.location.href;

    let currentIndex = WEBRING_SITES.findIndex(site => {
        try {
            const siteUrl = new URL(site.url);
            const docUrl = new URL(currentUrl);
            return siteUrl.hostname === docUrl.hostname;
        } catch (e) {
            return false;
        }
    });

    if (currentIndex === -1) {
        currentIndex = WEBRING_SITES.findIndex(site => currentUrl.includes(site.url) || site.url.includes(currentUrl));
    }

    let isGuest = false;
    if (currentIndex === -1) {
        currentIndex = 0;
        isGuest = true;
    }

    const currentSite = WEBRING_SITES[currentIndex];
    if (currentNameEl) {
        currentNameEl.textContent = isGuest ? `Guest Node (Viewing from ${window.location.hostname || 'Local File'})` : currentSite.name;
    }

    const prevIndex = (currentIndex - 1 + WEBRING_SITES.length) % WEBRING_SITES.length;
    const nextIndex = (currentIndex + 1) % WEBRING_SITES.length;

    prevLink.href = WEBRING_SITES[prevIndex].url;
    prevLink.title = `Go to ${WEBRING_SITES[prevIndex].name}`;
    
    nextLink.href = WEBRING_SITES[nextIndex].url;
    nextLink.title = `Go to ${WEBRING_SITES[nextIndex].name}`;

    let randomIndex = currentIndex;
    if (WEBRING_SITES.length > 1) {
        while (randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * WEBRING_SITES.length);
        }
    }
    randomLink.href = WEBRING_SITES[randomIndex].url;
    randomLink.title = `Jump to ${WEBRING_SITES[randomIndex].name}`;
}

// 9. Table Emulation Debug Toggler
function toggleTableDebug() {
    const layout = document.querySelector('.retro-table-layout');
    if (layout) {
        layout.classList.toggle('debug-tables');
    }
}
window.toggleTableDebug = toggleTableDebug;

// 10. Modern Mode Theme Toggler
function toggleModernMode() {
    document.body.classList.toggle('mode-modern');
    const isModern = document.body.classList.contains('mode-modern');
    localStorage.setItem('miuiga_modern_mode', isModern ? 'true' : 'false');
}
window.toggleModernMode = toggleModernMode;
