// Core Cosmic Engine
const omniPosts = [
    {
        type: 'social',
        user: 'CosmicCreator',
        content: 'First post in the OmniVerse! 🚀',
        likes: 0,
        timestamp: new Date()
    },
    {
        type: 'market',
        user: 'TechTrader',
        content: 'Selling Quantum Processor 💻 - $1500',
        price: 1500,
        likes: 0
    }
];

function renderOmniFeed() {
    const container = document.getElementById('posts');
    
    container.innerHTML = omniPosts.map(post => `
        <div class="post" data-type="${post.type}">
            <div class="post-header">
                <span class="user-badge">${post.user}</span>
                ${post.price ? `<span class="price-tag">🪙 $${post.price}</span>` : ''}
            </div>
            <p>${post.content}</p>
            <div class="post-actions">
                <button onclick="handleOmniReaction(${omniPosts.indexOf(post)})">
                    ⚛️ ${post.likes}
                </button>
                <button onclick="showOmniMenu(${omniPosts.indexOf(post)})">
                    ⋯
                </button>
            </div>
        </div>
    `).join('');
}

function handleOmniReaction(postId) {
    omniPosts[postId].likes++;
    renderOmniFeed();
}

// Initialize Cosmic Interface
renderOmniFeed();
// 1. Make all text pink
document.body.style.color = 'hotpink';

// 2. Create a popup alert
alert('Welcome to OmniSphere!');

// 3. Add a cosmic border
document.body.style.border = '10px solid #00ffff';
