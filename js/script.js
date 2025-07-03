for (let img of document.querySelectorAll("img")){
    img.addEventListener("click", ()=>{
        window.open(img.src, '_blank');
    })
}

//TODO au clic sur aaron_scans afficher le .hide dans une modale
document.querySelector(".aaron_scans").addEventListener("click", (e)=>{
    e.preventDefault();
    const hide = document.querySelector(".hide");
    hide.classList.toggle("show");
    if (hide.classList.contains("show")){
        hide.style.display = "block";
    } else {
        hide.style.display = "none";
    }
});


const soundCloud = document.querySelector(".SoundCloud");
const soundCloudToggle = document.querySelector(".SoundCloudToggle");
soundCloudToggle.addEventListener("click", (e)=>{
    e.preventDefault();
    soundCloud.classList.toggle("hide");
    if (soundCloud.classList.contains("hide")){
        soundCloud.style.display = "none";
    } else {
        soundCloud.style.display = "block";
    }
});

// redirection immédiate vers le déploiement vercel pour que le client puisse utiliser l'ancien url
// window.location.href = "https://piano-jet.vercel.app/";
 
