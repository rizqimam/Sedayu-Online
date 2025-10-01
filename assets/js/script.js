// Konfigurasi Data
const config = {
    profile: {
        username: "Shortlink Sedayu",
        name: "Pemerintah Desa Sedayu",
        bio: "Nek bisa gampang, ngapa kudu angel",
        location: "Sedayu, Sapuran, Wonosobo, Jawa Tengah 56373",
        avatar: "https://pbb.wonosobokab.go.id/public/img/logo.png",
        website: "https://sedayu.desacantik.id"
    },
    socialLinks: [
        {name: "TikTok", icon: "fab fa-tiktok", username: "@SedayuSapuran", url: "https://tiktok.com/@SedayuSapuran", color: "tiktok"},
        {name: "YouTube", icon: "fab fa-youtube", username: "youtube.com/Sedayu", url: "https://youtube.com/Sedayu", color: "youtube"},
        {name: "Instagram", icon: "fab fa-instagram", username: "@PemdesSedayu", url: "https://instagram.com/PemdesSedayu", color: "instagram"},
        {name: "Facebook", icon: "fab fa-facebook-f", username: "Facebook.com/Pemdessedayu", url: "https://facebook.com/Pemdessedayu", color: "facebook"},
        {name: "WhatsApp", icon: "fab fa-whatsapp", username: "6289525555541", url: "https://wa.me/6289525555541", color: "whatsapp"},
        {name: "Website", icon: "fas fa-globe", username: "sedayu.desacantik.id", url: "https://sedayu.desacantik.id", color: "website"}
    ],
    posts: [
        {
            id: 1,
            image: "https://sedayu.desacantik.id/desa/upload/artikel/sedang_1753375519_Airbrush-OBJECT-REMOVER-1753375241512.png",
            title: "Desa Sedayu Ikut Meriahkan Peringatan Hari Jadi ke-200 Kabupaten Wonosobo",
            caption: "Desa Sedayu turut serta memeriahkan peringatan hari jadi ke-200 Kabupaten Wonosobo dengan berbagai kegiatan dan atraksi budaya",
            likes: "245",
            url: "https://sedayu.desacantik.id/index.php/artikel/2025/7/25/desa-sedayu-ikut-meriahkan-peringatan-hari-jadi-ke-200-kabupaten-wonosobo"
        },
        {
            id: 2,
            image: "https://sedayu.desacantik.id/desa/upload/artikel/sedang_1716876496_IMG-20240527-WA0015.jpg",
            title: "PKK Desa Sedayu Borong Prestasi di Jambore PKK Kecamatan Sapuran",
            caption: "Tim PKK Desa Sedayu berhasil meraih berbagai prestasi dalam Jambore PKK tingkat Kecamatan Sapuran",
            likes: "189",
            url: "https://sedayu.desacantik.id/index.php/artikel/2025/5/28/pkk-desa-sedayu-borong-prestasi-di-jambore-pkk-kecamatan-sapuran"
        }
    ]
};

// Load Stories
function loadStories() {
    const container = document.getElementById('storiesContainer');
    let html = '';
    config.socialLinks.slice(0, 6).forEach(story => {
        html += `<div class="story" onclick="window.open('${story.url}', '_blank')">
            <div class="story-avatar"><div class="story-avatar-inner"><i class="${story.icon}"></i></div></div>
            <div class="story-username">${story.name}</div>
        </div>`;
    });
    container.innerHTML = html;
}

// Load Posts
function loadPosts() {
    const feed = document.getElementById('feed');
    let html = '';
    config.posts.forEach(post => {
        html += `<div class="post" onclick="window.open('${post.url}', '_blank')">
            <div class="post-header">
                <div class="post-avatar"><img src="${config.profile.avatar}" alt="${config.profile.username}" loading="lazy"></div>
                <div class="post-username">${config.profile.username}</div>
            </div>
            <div class="post-image"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>
            <div class="post-actions">
                <div class="post-actions-left">
                    <i class="far fa-heart"></i><i class="far fa-comment"></i><i class="far fa-paper-plane"></i>
                </div>
                <i class="far fa-bookmark"></i>
            </div>
            <div class="post-likes">${post.likes} suka</div>
            <div class="post-caption"><strong>${config.profile.username}</strong> ${post.caption}</div>
        </div>`;
    });
    feed.innerHTML = html || '<div class="error">Belum ada postingan</div>';
}

// Load Explorer
function loadExplorer() {
    const explorer = document.getElementById('explorer');
    explorer.innerHTML = `<div style="padding:16px">
        <h3 style="margin-bottom:15px;font-size:18px">Jelajahi Sedayu</h3>
        <div class="explorer-grid">
            <a href="404.html" class="explorer-item">🏞️ Wisata</a>
            <a href="404.html" class="explorer-item">🛍️ UMKM</a>
            <a href="404.html" class="explorer-item">🎭 Budaya</a>
            <a href="404.html" class="explorer-item">🏛️ Pemerintahan</a>
            <a href="404.html" class="explorer-item">📚 Pendidikan</a>
            <a href="404.html" class="explorer-item">🏥 Kesehatan</a>
        </div>
        <div style="margin-top:20px">
            <h4 style="margin-bottom:10px;font-size:16px">Layanan Cepat</h4>
            <div class="profile-links">
                <a href="404.html" class="profile-link">
                    <i class="fas fa-newspaper website"></i>
                    <span>Semua Berita & Artikel</span>
                </a>
                <a href="404.html" class="profile-link">
                    <i class="fas fa-images link-icon"></i>
                    <span>Galeri Foto & Video</span>
                </a>
                <a href="404.html" class="profile-link">
                    <i class="fas fa-phone website"></i>
                    <span>Kontak & Layanan</span>
                </a>
            </div>
        </div>
        <div style="margin-top:20px;padding:15px;background:#f8f9fa;border-radius:8px;border-left:4px solid #0095f6">
            <h4 style="margin-bottom:8px;font-size:14px;color:#0095f6">💡 Informasi</h4>
            <p style="font-size:12px;color:#666;margin:0;line-height:1.4">Fitur ini sedang dalam pengembangan. Klik kategori apa saja akan mengarah ke halaman informasi.</p>
        </div>
    </div>`;
}

// Load Profile
function loadProfile() {
    const profile = document.getElementById('profile');
    let linksHTML = '';
    config.socialLinks.forEach(link => {
        linksHTML += `<a href="${link.url}" class="profile-link" target="_blank">
            <i class="${link.icon} ${link.color}"></i><span>${link.name} - ${link.username}</span>
        </a>`;
    });
    
    profile.innerHTML = `<div class="profile-header">
        <div class="profile-avatar"><img src="${config.profile.avatar}" alt="${config.profile.name}" loading="lazy"></div>
        <div class="profile-stats">
            <div class="stat"><div class="stat-value">${config.posts.length}</div><div class="stat-label">Postingan</div></div>
            <div class="stat"><div class="stat-value">${800+Math.floor(Math.random()*500)}</div><div class="stat-label">Pengikut</div></div>
            <div class="stat"><div class="stat-value">${50+Math.floor(Math.random()*100)}</div><div class="stat-label">Mengikuti</div></div>
        </div>
    </div>
    <div class="profile-info">
        <div class="profile-name">${config.profile.name}</div>
        <div class="profile-bio">${config.profile.bio}</div>
        <div class="profile-location">${config.profile.location}</div>
        <a href="${config.profile.website}" class="profile-website" target="_blank">${config.profile.website}</a>
        <div class="profile-links">${linksHTML}</div>
    </div>`;
}

// Tab Navigation
function setupTabNavigation() {
    document.querySelectorAll('.tab, .nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab, .nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.content-area').forEach(area => area.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadStories();
    loadPosts();
    loadExplorer();
    loadProfile();
    setupTabNavigation();
});
