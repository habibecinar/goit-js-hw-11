import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();window.global=window;global.SimpleLightbox=d;const u="49383609-3f4a245e58475bbde73d484d3";let a;const c=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const t=document.getElementById("search").value.trim();if(t===""){l.show({title:"Error",message:"Lütfen bir kelime girin!",backgroundColor:"#FF6347",color:"white"});return}f(t)});debugger;c.style.display="none"});async function f(r){try{console.log(`API'ye istek yapılıyor: ${r}`),c.style.display="block";const t=await fetch(`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`,{mode:"cors"});if(console.log("HTTP Durumu:",t.status),!t.ok)throw new Error(`HTTP Hatası! Durum: ${t.status}`);const s=await t.json();if(console.log("Gelen Veri:",s),s.hits.length===0){l.show({title:"Sorry!",message:"No images found. Please try again!",backgroundColor:"#FF6347",color:"white"});return}const i=document.getElementById("gallery-list");i.innerHTML=s.hits.map(e=>`
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
          
        `).join(""),a?a.refresh():a=new d("#gallery-list a",{captions:!0,captionSelector:"img",captionType:"attr",overlayOpacity:.9,fadeSpeed:250})}catch(t){console.error("Hata:",t),l.show({title:"Error",message:"Bir hata oluştu. Lütfen tekrar deneyin.",backgroundColor:"#FF6347",color:"white"})}finally{c.style.display="none"}}
//# sourceMappingURL=index.js.map
