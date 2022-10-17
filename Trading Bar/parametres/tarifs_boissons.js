var recreate = true;

if(localStorage.getItem("restaurer_sauvegarde")=="true"){
	boissons = JSON.parse(localStorage.getItem("boissons"));
	var nombre_boissons = parseInt(localStorage.getItem("nombre_boissons"));
	if(boissons !== null){
		recreate = false;
	}
}

if(recreate){
	var boissons = {
		"cdt" : {"prix_initial" : 1.1, "prix_krach" : 0.6, "volatilité" : 1, "nom_complet":"Cuvée des Trolls"},
		"pil" : {"prix_initial" : 0.5, "prix_krach" : 0.3, "volatilité" : 1, "nom_complet":"Pils d'Or"},
		"csr" : {"prix_initial" : 1.2, "prix_krach" : 0.6, "volatilité" : 1, "nom_complet":"Castel Rouge"},
		"vdk" : {"prix_initial" : 0.7, "prix_krach" : 0.4, "volatilité" : 1, "nom_complet":"Vodka Redbull"},
		"wky" : {"prix_initial" : 0.7, "prix_krach" : 1.4, "volatilité" : 1, "nom_complet":"Wiskey Coca"},
	}

	var nombre_boissons = 0

	for(let i in boissons){
		boissons[i]["ventes"] = [0];
		boissons[i]["prix"] = [boissons[i]["prix_initial"]];
		nombre_boissons += 1;
	}

	var compteur = 0
	for(let i in boissons){
		if(!boissons[i]["couleur"]){
			boissons[i]["couleur"] = "hsl(" + Math.ceil(compteur * 360 / (nombre_boissons+1)) + ", 56%, 60%)";
		}
		compteur += 1
	}
}
