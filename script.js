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
    const reactions = ['❤️', '🚀', '😂', '🤯'];
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
    
    omniPosts[postId].likes++;
    
    // Visual feedback
    const postElement = document.querySelectorAll('.post')[postId];
    postElement.style.transform = 'scale(1.05)';
    setTimeout(() => postElement.style.transform = 'scale(1)', 200);
    
    // Update display
    renderOmniFeed();
    
    console.log(`User reacted ${randomReaction} to post ${postId}`);
}

// Initialize Cosmic Interface
renderOmniFeed();
// 1. Make all text pink
document.body.style.color = 'hotpink';

// 2. Create a popup alert
alert('Welcome to OmniSphere!');

// 3. Add a cosmic border
document.body.style.border = '10px solid #00ffff';
function editProfile() {
    const newName = prompt("Enter your name:", "Cosmic User");
    const newBio = prompt("Enter your bio:", "Exploring the OmniVerse!");
    
    document.getElementById('username').textContent = newName;
    document.getElementById('bio').textContent = newBio;
    
    // Simple "database" using localStorage
    localStorage.setItem('userName', newName);
    localStorage.setItem('userBio', newBio);
}

// Load saved profile
if(localStorage.getItem('userName')) {
    document.getElementById('username').textContent = localStorage.getItem('userName');
    document.getElementById('bio').textContent = localStorage.getItem('userBio');
}
function createPost() {
    const postText = document.getElementById('newPost').value;
    
    if(postText) {
        omniPosts.push({
            type: 'social',
            user: localStorage.getItem('userName') || 'Anonymous',
            content: postText,
            likes: 0,
            timestamp: new Date()
        });
        
        renderOmniFeed();
        document.getElementById('newPost').value = ''; // Clear input
    }
}
