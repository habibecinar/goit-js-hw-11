// Gerekli kütüphaneleri içe aktar
import '/css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Vite'de global değişken tanımlama
window.global = window;
global.SimpleLightbox = SimpleLightbox;

// API anahtarı
const API_KEY = '49383609-3f4a245e58475bbde73d484d3';

// Lightbox değişkenini global tanımla
let lightbox;
const loader = document.querySelector('.loader');

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
  // Formu seç ve submit olayını dinle
  document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    // Arama terimini al
    const query = document.getElementById('search').value.trim();

    // Boşsa hata göster
    if (query === '') {
      iziToast.show({
        title: 'Error',
        message: 'Lütfen bir kelime girin!',
        backgroundColor: '#FF6347',
        color: 'white',
      });
      return;
    }

    // API'den görselleri çek
    fetchImages(query);
  });
  debugger;
  loader.style.display = 'none';
});

// API'den görselleri al ve galeriyi güncelle
async function fetchImages(query) {
  try {
     console.log(`API'ye istek yapılıyor: ${query}`);
    loader.style.display = 'block';
   
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`,
      { mode: 'cors' }
    );

    console.log('HTTP Durumu:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP Hatası! Durum: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gelen Veri:', data);

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'Sorry!',
        message: 'No images found. Please try again!',
        backgroundColor: '#FF6347',
        color: 'white',
      });
      return;
    }

    // Galeriye resimleri ekle
    const gallery = document.getElementById('gallery-list');
    gallery.innerHTML = data.hits
      .map(
        image => `
        <div class="image-card" >
          <a href="${image.largeImageURL}" target="_blank" data-lightbox="gallery">
            <img src="${image.webformatURL}" alt="${image.tags}" >
          </a>
          
          <div class="image-info">
            <div class="info-item">
                <p><strong>Likes: </strong>${image.likes}</p>
              </div>
            <div class="info-item">
              <p><strong>Views:</strong> ${image.views}</p>
            </div>
             <div class="info-item">
              <p><strong>Comments:</strong> ${image.comments}</p>
            </div>
              <div class="info-item">
              <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
            </div>
        </div>
          
        `
      )
      .join('');

    // Lightbox kontrolü: varsa refresh, yoksa yeni oluştur
    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('#gallery-list a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        overlayOpacity: 0.9,
        fadeSpeed: 250,
      });
    }
  } catch (error) {
    console.error('Hata:', error);
    iziToast.show({
      title: 'Error',
      message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      backgroundColor: '#FF6347',
      color: 'white',
    });
  } finally {
    loader.style.display = 'none';
  }
}
