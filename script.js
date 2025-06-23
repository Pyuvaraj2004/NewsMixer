// --- COMPLETE & CORRECTED SCRIPT ---

// RESTORED: Full list of newspapers with new properties for e-paper links and images.
const data = {
  telugu: [
    { title: 'ఈనాడు', desc: 'Leading Telugu daily', url: 'https://www.eenadu.net/', epaper_url_pattern: 'https://epaper.eenadu.net/Home/Index/{date}', img: 'https://placehold.co/600x400/007bff/white?text=Eenadu' },
    { title: 'ఆంధ్రజ్యోతి', desc: 'Popular Telugu news portal', url: 'https://www.andhrajyothy.com/', epaper_url_pattern: 'https://epaper.andhrajyothy.com/Home/Index/{date}', img: 'https://placehold.co/600x400/28a745/white?text=Andhrajyothy' },
    { title: 'సాక్షి', desc: 'Telugu news and entertainment', url: 'https://www.sakshi.com/', epaper_url_pattern: 'https://epaper.sakshi.com/Home/Index/{date}', img: 'https://placehold.co/600x400/ffc107/black?text=Sakshi' },
    { title: 'ప్రజాశక్తి', desc: 'Left-wing Telugu daily', url: 'https://www.prajasakti.com/', epaper_url_pattern: 'https://epaper.prajasakti.com/Home/Index/{date}', img: 'https://placehold.co/600x400/dc3545/white?text=Prajasakti' },
    { title: 'నమస్తే తెలంగాణ', desc: 'Telangana-based Telugu newspaper', url: 'https://www.ntnews.com/', epaper_url_pattern: 'https://epaper.ntnews.com/Home/Index/{date}', img: 'https://placehold.co/600x400/fd7e14/white?text=NT+News' }
  ],
  english: [
    { title: 'The Hindu', desc: 'National English daily', url: 'https://www.thehindu.com/', epaper_url_pattern: 'https://epaper.thehindu.com/ccidist-ws/th/th_delhi/issues/{date}/', img: 'https://placehold.co/600x400/dc3545/white?text=The+Hindu' },
    { title: 'Times of India', desc: 'Leading English newspaper', url: 'https://timesofindia.indiatimes.com/', epaper_url_pattern: 'https://epaper.timesgroup.com/TOI/Delhi/{date}/', img: 'https://placehold.co/600x400/007bff/white?text=TOI' },
    { title: 'Indian Express', desc: 'English news and analysis', url: 'https://indianexpress.com/', img: 'https://placehold.co/600x400/28a745/white?text=Indian+Express' },
    { title: 'Hindustan Times', desc: 'Popular English daily', url: 'https://www.hindustantimes.com/', epaper_url_pattern: 'https://epaper.hindustantimes.com/Home/ArticleView', img: 'https://placehold.co/600x400/17a2b8/white?text=HT' },
    { title: 'The Telegraph', desc: 'Kolkata-based English newspaper', url: 'https://www.telegraphindia.com/', epaper_url_pattern: 'https://epaper.telegraphindia.com/calcutta/{date}/', img: 'https://placehold.co/600x400/343a40/white?text=Telegraph' }
  ],
  hindi: [
    { title: 'दैनिक भास्कर', desc: 'Hindi daily newspaper', url: 'https://www.bhaskar.com/', epaper_url_pattern: 'https://epaper.bhaskar.com/delhi-main/{date}/', img: 'https://placehold.co/600x400/fd7e14/white?text=Bhaskar' },
    { title: 'अमर उजाला', desc: 'Popular Hindi news site', url: 'https://www.amarujala.com/', epaper_url_pattern: 'https://epaper.amarujala.com/delhi-city/{date}/', img: 'https://placehold.co/600x400/dc3545/white?text=Amar+Ujala' },
    { title: 'हिंदुस्तान', desc: 'Hindi national daily', url: 'https://www.livehindustan.com/', img: 'https://placehold.co/600x400/007bff/white?text=Hindustan' },
    { title: 'नवभारत टाइम्स', desc: 'Times Group’s Hindi daily', url: 'https://navbharattimes.indiatimes.com/', img: 'https://placehold.co/600x400/28a745/white?text=NBT' },
    { title: 'जनसत्ता', desc: 'Indian Express Group’s Hindi paper', url: 'https://www.jansatta.com/', img: 'https://placehold.co/600x400/6c757d/white?text=Jansatta' }
  ],
  tamil: [
    { title: 'தினமலர்', desc: 'Top Tamil newspaper', url: 'https://www.dinamalar.com/', img: 'https://placehold.co/600x400/007bff/white?text=Dinamalar' },
    { title: 'தினத்தந்தி', desc: 'Popular Tamil daily', url: 'https://www.dailythanthi.com/', img: 'https://placehold.co/600x400/ffc107/black?text=Daily+Thanthi' },
    { title: 'தினமணி', desc: 'Another leading Tamil daily', url: 'https://www.dinamani.com/', img: 'https://placehold.co/600x400/28a745/white?text=Dinamani' },
    { title: 'மலர் மலர்', desc: 'Local Tamil paper', url: 'https://www.malarnet.com/', img: 'https://placehold.co/600x400/dc3545/white?text=Maalai+Malar' },
    { title: 'விகடன்', desc: 'Magazine-style Tamil news', url: 'https://www.vikatan.com/', img: 'https://placehold.co/600x400/343a40/white?text=Vikatan' }
  ],
  urdu: [
    { title: 'Siasat', desc: 'Popular Urdu daily', url: 'https://www.siasat.com/epaper/', img: 'https://placehold.co/600x400/28a745/white?text=Siasat' },
    { title: 'Jang', desc: 'Top Urdu newspaper', url: 'https://jang.com.pk/', img: 'https://placehold.co/600x400/6c757d/white?text=Jang' },
    { title: 'Awami Awaz', desc: 'Urdu news from Pakistan', url: 'https://awamiawaz.pk/', img: 'https://placehold.co/600x400/007bff/white?text=Awami+Awaz' },
    { title: 'Munsif', desc: 'Indian Urdu newspaper', url: 'https://www.munsifdaily.com/', img: 'https://placehold.co/600x400/dc3545/white?text=Munsif' },
    { title: 'Aziz-ul-Hind', desc: 'Hyderabad-based Urdu paper', url: 'https://www.azizulhind.com/', img: 'https://placehold.co/600x400/17a2b8/white?text=Aziz-ul-Hind' }
  ]
};

// --- GLOBAL STATE & API KEY ---
const apiKey = "AIzaSyAO1n0c91hAwOrSFWQLWmKOsuqNY9quzKQ";
let currentLanguage = 'telugu';
let favorites = [];

// --- CORE DISPLAY FUNCTIONS ---

function showNews(lang, clickedButton) {
  currentLanguage = lang;
  if (clickedButton) {
    setActiveButton(clickedButton);
  }

  const container = document.getElementById('newsContainer');
  const selectedDate = document.getElementById('newsDate').value;
  
  showSkeletons(); 

  setTimeout(() => { // Use a small delay to ensure skeletons are visible before content loads
    container.innerHTML = '';
    const newsList = data[lang];
    if (!newsList) return; // Safety check

    newsList.forEach(news => {
      let finalUrl = news.url;
      let description = news.desc;
      if (selectedDate && news.epaper_url_pattern) {
        const formattedDate = selectedDate.replace(/-/g, ''); // Common format YYYYMMDD
        finalUrl = news.epaper_url_pattern.replace('{date}', formattedDate);
        description = `E-paper for ${selectedDate}`;
      } else if (selectedDate) {
        description = `(E-paper link for this date not available)`;
      }

      const cardLink = document.createElement('a');
      cardLink.className = 'news-card-link';
      cardLink.href = finalUrl;
      cardLink.target = '_blank';
      cardLink.innerHTML = `
        <div class="news-card">
          <div class="news-image">
            <img src="${news.img || 'https://placehold.co/600x400/cccccc/ffffff?text=News'}" alt="${news.title}" loading="lazy">
          </div>
          <div class="news-content">
            <h3>${news.title}</h3>
            <div class="news-meta">${description}</div>
          </div>
        </div>
      `;
      container.appendChild(cardLink);
    });
  }, 100); // 100ms is enough

  loadYouTubeVideos(lang);
}

function showFavorites(clickedButton) {
  currentLanguage = 'favorites';
  setActiveButton(clickedButton);
  
  const container = document.getElementById('newsContainer');
  container.innerHTML = '';
  
  if (favorites.length === 0) {
    container.innerHTML = `<p style="text-align: center; width: 100%;">You haven't added any favorites yet. Click the "+ Add Favorite" button to start!</p>`;
    return;
  }
  
  favorites.forEach((fav, index) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'news-card-link';
    cardLink.href = fav.url;
    cardLink.target = '_blank';
    cardLink.innerHTML = `
      <div class="news-card">
        <button class="delete-favorite-btn" onclick="event.preventDefault(); event.stopPropagation(); deleteFavorite(${index});">×</button>
        <div class="news-image">
            <img src="${fav.img || 'https://placehold.co/600x400/007bff/ffffff?text=Favorite'}" alt="${fav.name}" loading="lazy">
        </div>
        <div class="news-content">
          <h3>${fav.name}</h3>
          <div class="news-meta">${fav.url}</div>
        </div>
      </div>
    `;
    container.appendChild(cardLink);
  });
}

// --- FAVORITES (localStorage) FUNCTIONS ---

function loadFavorites() {
  const savedFavorites = localStorage.getItem('newsMixerFavorites');
  if (savedFavorites) favorites = JSON.parse(savedFavorites);
}

function saveFavorites() {
  localStorage.setItem('newsMixerFavorites', JSON.stringify(favorites));
}

function addFavorite(event) {
  event.preventDefault();
  const nameInput = document.getElementById('favName');
  const urlInput = document.getElementById('favUrl');
  favorites.push({ name: nameInput.value, url: urlInput.value });
  saveFavorites();
  closeAddModal();
  document.querySelector('.tabs button:nth-child(6)').click(); // Programmatically click "My Favorites"
}

function deleteFavorite(index) {
  if (confirm(`Are you sure you want to delete "${favorites[index].name}"?`)) {
    favorites.splice(index, 1);
    saveFavorites();
    document.querySelector('.tabs button:nth-child(6)').click(); // Refresh view
  }
}

// --- MODAL FUNCTIONS ---

function openAddModal() {
  document.getElementById('addFavoriteModal').style.display = 'block';
}

function closeAddModal() {
  document.getElementById('addFavoriteModal').style.display = 'none';
  document.getElementById('addFavoriteModal').querySelector('form').reset();
}

// --- UTILITY & EVENT HANDLERS ---

function dateFilterChanged() {
  if (currentLanguage !== 'favorites') {
    const activeButton = document.querySelector('.tabs button.active');
    showNews(currentLanguage, activeButton);
  }
}

function setActiveButton(buttonEl) {
  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  buttonEl.classList.add('active');
}

// --- UNCHANGED "WOW" FUNCTIONS ---

function showSkeletons() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `<div class="skeleton skeleton-image"></div><div class="news-content"><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text"></div></div>`;
        newsContainer.appendChild(card);
    }
}
function switchLayout(layout) {
    const container = document.getElementById('newsContainer');
    document.getElementById('grid-btn').classList.toggle('active', layout === 'grid-view');
    document.getElementById('list-btn').classList.toggle('active', layout === 'list-view');
    container.classList.toggle('grid-view', layout === 'grid-view');
    container.classList.toggle('list-view', layout === 'list-view');
}
function toggleDarkMode(is_checked) {
    document.body.classList.toggle('dark-mode', is_checked);
}

// RESTORED: The complete, working YouTube function.
async function loadYouTubeVideos(lang) {
  const sidebar = document.querySelector('.youtube-sidebar');
  const youtubeContainer = document.getElementById('youtubeVideos');
  youtubeContainer.innerHTML = ''; // Clear previous videos/skeletons
  
  // You can create skeletons for youtube here as well if you like
  
  const query = `${lang} latest news`;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&q=${encodeURIComponent(query)}&key=${apiKey}`
    );

    if (!response.ok) throw new Error("Quota error or network error");
    const result = await response.json();
    if (result.items.length === 0) throw new Error("No items");

    result.items.forEach(item => {
      const videoId = item.id.videoId;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.allowFullscreen = true;
      youtubeContainer.appendChild(iframe);
    });

  } catch (error) {
    youtubeContainer.innerHTML = `<p style="padding: 0 10px; color: #888;">Showing default videos.</p>`;
    const fallbackVideos = ["VYOjWnS4cMY", "5qap5aO4i9A", "tgbNymZ7vqY"];
    fallbackVideos.forEach(videoId => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.allowFullscreen = true;
      youtubeContainer.appendChild(iframe);
    });
  }
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("newsDate").value = today;
  
  loadFavorites();
  
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const toggle = document.querySelector('.dark-toggle-switch input');
  if (prefersDark) {
    toggle.checked = true;
    toggleDarkMode(true);
  }
  
  const firstButton = document.querySelector('.tabs button');
  if (firstButton) {
    firstButton.click(); // Programmatically click the first button to load initial state
  }
});
