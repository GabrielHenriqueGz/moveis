let banners = ["Os melhores do brasil !", "Qualidade e pre�o baixo !"];
let bannerAtual = 0;

function trocarBanner(){
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#msg').textContent = banners[bannerAtual];
}

setInterval(trocarBanner, 2000);