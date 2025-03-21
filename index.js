import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();window.global=window;global.SimpleLightbox=c;const d="49383609-3f4a245e58475bbde73d484d3";let a;document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const t=document.getElementById("search").value.trim();if(t===""){l.show({title:"Error",message:"Lütfen bir kelime girin!",backgroundColor:"#FF6347",color:"white"});return}u(t)})});async function u(r){try{console.log(`API'ye istek yapılıyor: ${r}`);const t=await fetch(`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`,{mode:"cors"});if(console.log("HTTP Durumu:",t.status),!t.ok)throw new Error(`HTTP Hatası! Durum: ${t.status}`);const i=await t.json();if(console.log("Gelen Veri:",i),i.hits.length===0){l.show({title:"Sorry!",message:"No images found. Please try again!",backgroundColor:"#FF6347",color:"white"});return}const s=document.getElementById("gallery-list");s.innerHTML=i.hits.map(e=>`
        <div class="image-card" >
          <a href="${e.largeImageURL}" target="_blank" data-lightbox="gallery">
            <img src="${e.webformatURL}" alt="${e.tags}" >
          </a>
          
          <div class="image-info">
            <div class="info-item">
                <p><strong>Likes: </strong>${e.likes}</p>
              </div>
            <div class="info-item">
              <p><strong>Views:</strong> ${e.views}</p>
            </div>
             <div class="info-item">
              <p><strong>Comments:</strong> ${e.comments}</p>
            </div>
              <div class="info-item">
              <p><strong>Downloads:</strong> ${e.downloads}</p>
            </div>
            </div>
        </div>
          
        `).join(""),a?a.refresh():a=new c("#gallery-list a",{captions:!0,captionSelector:"img",captionType:"attr",overlayOpacity:.9,fadeSpeed:250})}catch(t){console.error("Hata:",t),l.show({title:"Error",message:"Bir hata oluştu. Lütfen tekrar deneyin.",backgroundColor:"#FF6347",color:"white"})}}
//# sourceMappingURL=index.js.map
