// assets/js/script.js - VERSION WITH FALLBACK IMAGES
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
        // ... (social links tetap sama)
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

// Fallback images
const fallbackImages = {
    profile: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwMDk1ZjYiLz4KPHN2Zz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDE1VjI1SDMwTTEwIDI1SDIwTTIyIDI1SDIyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K",
    post: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDA5NWY2Ii8+CjxwYXRoIGQ9Ik0yNTAgMTUwVjI1MEgzNTBNMTUwIDI1MEgyNTBNMjU1IDI1MEgyNTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyNTAiIHk9IjMwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSI+R2FtYmFyIHRpZGFrIGRhcGF0IGRpbXV0YWtrYW48L3RleHQ+Cjwvc3ZnPgo="
};

// Load Posts dengan fallback
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
                    <img src="${config.profile.avatar}" alt="${config.profile.username}" 
                         onerror="this.src='${fallbackImages.profile}'">
                </div>
                <div class="post-username">${config.profile.username}</div>
            </div>
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}" 
                     onerror="this.src='${fallbackImages.post}'">
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

// Load Profile dengan fallback  
function loadProfile() {
    const profile = document.getElementById('profile');
    profile.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${config.profile.avatar}" alt="${config.profile.name}" 
                     onerror="this.src='${fallbackImages.profile}'">
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

// ... (fungsi lainnya tetap sama)
