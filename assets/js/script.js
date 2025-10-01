// Konfigurasi Data Desa Sedayu
const config = {
    profile: {
        username: "Shortlink Sedayu",
        name: "Pemerintah Desa Sedayu",
        bio: "Nek bisa gampang, ngapa kudu angel",
        location: "Sedayu, Sapuran, Wonosobo, Jawa Tengah 56373",
        avatar: "assets/images/profile/logo-sedayu.png",
        website: "https://sedayu.desacantik.id"
    },
    socialLinks: [
        {
            name: "TikTok",
            icon: "fab fa-tiktok",
            username: "@SedayuSapuran",
            url: "https://tiktok.com/@SedayuSapuran",
            color: "tiktok"
        },
        {
            name: "YouTube",
            icon: "fab fa-youtube",
            username: "youtube.com/Sedayu",
            url: "https://youtube.com/Sedayu",
            color: "youtube"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            username: "@PemdesSedayu",
            url: "https://instagram.com/PemdesSedayu",
            color: "instagram"
        },
        {
            name: "Facebook",
            icon: "fab fa-facebook-f",
            username: "Facebook.com/Pemdessedayu",
            url: "https://facebook.com/Pemdessedayu",
            color: "facebook"
        },
        {
            name: "WhatsApp",
            icon: "fab fa-whatsapp",
            username: "6289525555541",
            url: "https://wa.me/6289525555541",
            color: "whatsapp"
        },
        {
            name: "Website",
            icon: "fas fa-globe",
            username: "sedayu.desacantik.id",
            url: "https://sedayu.desacantik.id",
            color: "website"
        }
    ],
    posts: [
        {
            id: 1,
            image: "assets/images/posts/post1.jpg",
            title: "Desa Sedayu Ikut Meriahkan Peringatan Hari Jadi ke-200 Kabupaten Wonosobo",
            caption: "Desa Sedayu turut serta memeriahkan peringatan hari jadi ke-200 Kabupaten Wonosobo dengan berbagai kegiatan dan atraksi budaya",
            likes: "245",
            url: "https://sedayu.desacantik.id/index.php/artikel/2025/7/25/desa-sedayu-ikut-meriahkan-peringatan-hari-jadi-ke-200-kabupaten-wonosobo",
            date: "25 Juli 2025"
        },
        {
            id: 2,
            image: "assets/images/posts/post2.jpg",
            title: "PKK Desa Sedayu Borong Prestasi di Jambore PKK Kecamatan Sapuran",
            caption: "Tim PKK Desa Sedayu berhasil meraih berbagai prestasi dalam Jambore PKK tingkat Kecamatan Sapuran",
            likes: "189",
            url: "https://sedayu.desacantik.id/index.php/artikel/2025/5/28/pkk-desa-sedayu-borong-prestasi-di-jambore-pkk-kecamatan-sapuran",
            date: "28 Mei 2025"
        }
    ]
};

// Load Stories
function loadStories() {
    const storiesContainer = document.getElementById('storiesContainer');
    const socialStories = config.socialLinks.slice(0, 6); // Max 6 stories
    
    storiesContainer.innerHTML = socialStories.map(story => `
        <div class="story" onclick="window.open('${story.url}', '_blank')">
            <div class="story-avatar">
                <div class="story-avatar-inner" style="background: ${getStoryColor(story.color)};">
                    <i class="${story.icon}" style="color: white;"></i>
                </div>
            </div>
            <div class="story-username">${story.name}</div>
        </div>
    `).join('');
}

// Get color for story circle
function getStoryColor(platform) {
    const colors = {
        tiktok: '#000000',
        youtube: '#ff0000',
        instagram: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
        facebook: '#1877f2',
        whatsapp: '#25d366',
        website: '#7c4dff'
    };
    return colors[platform] || '#0095f6';
}

// Load Posts
function loadPosts() {
    const feed = document.getElementById('feed');
    
    if (config.posts.length === 0) {
        feed.innerHTML = '<div class="error">Belum ada postingan</div>';
        return;
    }
    
    feed.innerHTML = config.posts.map(post => `
        <div class="post" onclick="window.open('${post.url}', '_blank')">
            <div class="post-header">
                <div class="post-avatar">
                    <img src="${config.profile.avatar}" alt="${config.profile.username}">
                </div>
                <div class="post-username">${config.profile.username}</div>
            </div>
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik0yNTAgMTUwVjI1MEgzNTBNMTUwIDI1MEgyNTBNMjU1IDI1MEgyNTUiIHN0cm9rZT0iIzhFOEU4RSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM4RThFOEUiPkdhbWJhciB0aWRhayBkYXBhdCBkaW11dGFra2FuPC90ZXh0Pgo8L3N2Zz4K'">
            </div>
            <div class="post-actions">
                <div class="post-actions-left">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <i class="far fa-bookmark"></i>
            </div>
            <div class="post-likes">${post.likes} suka</div>
            <div class="post-caption">
                <strong>${config.profile.username}</strong> ${post.caption}
            </div>
        </div>
    `).join('');
}

// Load Explorer
function loadExplorer() {
    const explorer = document.getElementById('explorer');
    explorer.innerHTML = `
        <div style="padding: 16px;">
            <h3 style="margin-bottom: 15px; font-size: 18px;">Jelajahi Sedayu</h3>
            <div class="profile-links">
                <a href="https://sedayu.desacantik.id" class="profile-link" target="_blank">
                    <i class="fas fa-newspaper website"></i>
                    <span>Berita Terbaru Desa</span>
                </a>
                <a href="https://sedayu.desacantik.id" class="profile-link" target="_blank">
                    <i class="fas fa-info-circle link-icon"></i>
                    <span>Informasi Layanan</span>
                </a>
                <a href="https://sedayu.desacantik.id" class="profile-link" target="_blank">
                    <i class="fas fa-images website"></i>
                    <span>Galeri Kegiatan</span>
                </a>
            </div>
            <div class="explorer-grid" style="margin-top: 20px;">
                <div class="explorer-item">Wisata</div>
                <div class="explorer-item">UMKM</div>
                <div class="explorer-item">Budaya</div>
                <div class="explorer-item">Pemerintahan</div>
                <div class="explorer-item">Pendidikan</div>
                <div class="explorer-item">Kesehatan</div>
            </div>
        </div>
    `;
}

// Load Profile
function loadProfile() {
    const profile = document.getElementById('profile');
    profile.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${config.profile.avatar}" alt="${config.profile.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGMEYwRjAiLz4KPHBhdGggZD0iTTQwIDIwVjQwTTIwIDQwSDQwTTQyIDQwSDQyIiBzdHJva2U9IiM4RThFOEUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K'">
            </div>
            <div class="profile-stats">
                <div class="stat">
                    <div class="stat-value">${config.posts.length}</div>
                    <div class="stat-label">Postingan</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${Math.floor(Math.random() * 500) + 800}</div>
                    <div class="stat-label">Pengikut</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${Math.floor(Math.random() * 100) + 50}</div>
                    <div class="stat-label">Mengikuti</div>
                </div>
            </div>
        </div>
        <div class="profile-info">
            <div class="profile-name">${config.profile.name}</div>
            <div class="profile-bio">${config.profile.bio}</div>
            <div class="profile-location">${config.profile.location}</div>
            <a href="${config.profile.website}" class="profile-website" target="_blank">${config.profile.website}</a>
            
            <div class="profile-links">
                ${config.socialLinks.map(link => `
                    <a href="${link.url}" class="profile-link" target="_blank">
                        <i class="${link.icon} ${link.color}"></i>
                        <span>${link.name} - ${link.username}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// Tab Navigation
function setupTabNavigation() {
    document.querySelectorAll('.tab, .nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update tabs
            document.querySelectorAll('.tab, .nav-item').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.content-area').forEach(area => {
                area.classList.remove('active');
            });
            
            this.classList.add('active');
            document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadStories();
    loadPosts();
    loadExplorer();
    loadProfile();
    setupTabNavigation();
    
    console.log('🔄 Shortlink Sedayu loaded successfully!');
    console.log('📊 Total Posts:', config.posts.length);
    console.log('🔗 Total Social Links:', config.socialLinks.length);
});