const data = {
  telugu: [
    { title: 'ఈనాడు', desc: 'Leading Telugu daily newspaper', url: 'https://www.eenadu.net/' },
    { title: 'ఆంధ్రజ్యోతి', desc: 'Popular Telugu news portal', url: 'https://www.andhrajyothy.com/' },
    { title: 'సాక్షి', desc: 'Telugu news and entertainment', url: 'https://www.sakshi.com/' },
    { title: 'ప్రజాశక్తి', desc: 'Left-wing Telugu daily', url: 'https://www.prajasakti.com/' },
    { title: 'నమస్తే తెలంగాణ', desc: 'Telangana-based Telugu newspaper', url: 'https://www.ntnews.com/' }
  ],
  english: [
    { title: 'The Hindu', desc: 'National English daily', url: 'https://www.thehindu.com/' },
    { title: 'Times of India', desc: 'Leading English newspaper', url: 'https://timesofindia.indiatimes.com/' },
    { title: 'Indian Express', desc: 'English news and analysis', url: 'https://indianexpress.com/' },
    { title: 'Hindustan Times', desc: 'Popular English daily', url: 'https://www.hindustantimes.com/' },
    { title: 'The Telegraph', desc: 'Kolkata-based English newspaper', url: 'https://www.telegraphindia.com/' }
  ],
  hindi: [
    { title: 'दैनिक भास्कर', desc: 'Hindi daily newspaper', url: 'https://www.bhaskar.com/' },
    { title: 'अमर उजाला', desc: 'Popular Hindi news site', url: 'https://www.amarujala.com/' },
    { title: 'हिंदुस्तान', desc: 'Hindi national daily', url: 'https://www.livehindustan.com/' },
    { title: 'नवभारत टाइम्स', desc: 'Times Group’s Hindi daily', url: 'https://navbharattimes.indiatimes.com/' },
    { title: 'जनसत्ता', desc: 'Indian Express Group’s Hindi paper', url: 'https://www.jansatta.com/' }
  ],
  tamil: [
    { title: 'தினமலர்', desc: 'Top Tamil newspaper', url: 'https://www.dinamalar.com/' },
    { title: 'தினத்தந்தி', desc: 'Popular Tamil daily', url: 'https://www.dailythanthi.com/' },
    { title: 'தினமணி', desc: 'Another leading Tamil daily', url: 'https://www.dinamani.com/' },
    { title: 'மலர் மலர்', desc: 'Local Tamil paper', url: 'https://www.malarnet.com/' },
    { title: 'விகடன்', desc: 'Magazine-style Tamil news', url: 'https://www.vikatan.com/' }
  ],
  urdu: [
    { title: 'روزنامہ سیاست', desc: 'Popular Urdu daily', url: 'https://www.siasat.com/epaper/' },
    { title: 'جنگ', desc: 'Top Urdu newspaper', url: 'https://jang.com.pk/' },
    { title: 'عوامی آواز', desc: 'Urdu news from Pakistan', url: 'https://awamiawaz.pk/' },
    { title: 'منصف', desc: 'Indian Urdu newspaper', url: 'https://www.munsifdaily.com/' },
    { title: 'عزیز الہند', desc: 'Hyderabad-based Urdu paper', url: 'https://www.azizulhind.com/' }
  ]
};

function showNews(lang) {
  const container = document.getElementById('newsContainer');
  container.innerHTML = '';
  data[lang].forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.desc}</p>
      <a href="${news.url}" target="_blank">Read Now →</a>
    `;
    container.appendChild(card);
  });
  loadYouTubeVideos(lang);
}

const apiKey = "YOUR_YOUTUBE_API_KEY"; // Replace with your real API key

async function loadYouTubeVideos(lang) {
  const sidebar = document.querySelector('.youtube-sidebar');
  sidebar.innerHTML = '<h2>Related YouTube Videos</h2>';

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
      iframe.width = "100%";
      iframe.height = "200";
      iframe.style.borderRadius = '10px';
      iframe.style.marginBottom = '15px';
      sidebar.appendChild(iframe);
    });

  } catch (error) {
    // Fallback to hardcoded videos
    const message = document.createElement('p');
    message.textContent = "🔁 Showing default videos (API quota exceeded)";
    message.style.color = "#777";
    sidebar.appendChild(message);

    const fallbackVideos = [
      "VYOjWnS4cMY", // Example 1
      "5qap5aO4i9A", // Example 2
      "tgbNymZ7vqY"  // Example 3
    ];

    fallbackVideos.forEach(videoId => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.allowFullscreen = true;
      iframe.width = "100%";
      iframe.height = "200";
      iframe.style.borderRadius = '10px';
      iframe.style.marginBottom = '15px';
      sidebar.appendChild(iframe);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("newsDate").value = today;
});

showNews('telugu');
