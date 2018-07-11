// Un bouton de type bascule pour afficher/cacher l'intro
// il s'agit d'une Id #
document.getElementById("boutonAffichage").addEventListener(
	"click",
	function(event) {
	
		// est-ce que le tableau de contrôle est masqué ?
		var tableauControlesMasque = (TableauControles.style.display === "none");

		// si le tableau de contrôle est masqué,
		if (tableauControlesMasque === true) {
			// je l'affiche
			TableauControles.style.display = "";
		}
		else {
			// si le tableau de contrôle est affiché : je le masque
			TableauControles.style.display = "none";
		}

	}
);


// Un bouton pour masquer définitivement Chantal Picot
// Il s'agit d'une classe .
// FONCTIONNE
/*document.getElementById("MasquerChantalPicot").addEventListener(
	"click",
	function VisibiliteChantalPicot() {
		var a = document.getElementsByClassName("VendeurChantalPicot");
		for (i=0; i<a.length; i++){
  			a[i].style.display='none';
			console.log(i);
		}
	}
);*/

// Une case à cocher pour afficher ma maison sur sa classe
// reste sans effet sur le bien 0008 Axo
// le message coucou n'apparait pas : la fonction n'est pas activée
// NE FONCTIONNE PAS
/*function check() {
	console.log("coucou");
	if (document.getElementById("CheckboxAxo").checked = true) {
		// je l'affiche
			var a = document.getElementsByClassName("VendeurAxo");
			for (i=0; i<a.length; i++){
  			a[i].style.display='';
  			console.log(i);
			}	
		}
		else {
			// je le masque
			var a = document.getElementsByClassName("VendeurAxo");
			for (i=0; i<a.length; i++){
  			a[i].style.display='none';
  			console.log(i);
		}
	}
;*/

/* Je parcours tous les inputs de type checkbox qui sont cochés et j'affiche dans la console leur identifiant */
/*$("input[type='checkbox']:checked").each(
          function() {
          	console.log("Je cause");
           console.log($(this).attr('id'));
          }); */         
 
/*Le code suivant permet de repérer si l'utilisateur clique à l'extérieur ou sur un élément d'identifiant 
'id_de_mon_element'.event.target correspond à l'élément qui a déclenché l'événement, où est le paramètre passé à la fonction
*/
$('html').click(function(event){
     if(event.target.id == 'CheckboxMaisons') {
/*       alert ("j'ai cliqué Maisons");*/
       $('.Maison').toggleClass('hidden');
/*     } else {
       alert ("j'ai cliqué à l'extérieur de Maisons");*/
     }
 });

$('html').click(function(event){
     if(event.target.id == 'CheckboxAppartements') {
     	$('.Appartement').toggleClass('hidden');
     }
 });

$('html').click(function(choixDuQuartier){
     if(choixDuQuartier.target.id == 'CheckboxBussatte') {
     	$('.Bussatte').toggleClass('hidden');
     }

     if(choixDuQuartier.target.id == 'CheckboxHoumeau') {
     	$('.Houmeau').toggleClass('hidden');
     }

     if(choixDuQuartier.target.id == 'CheckboxPlateau') {
     	$('.Plateau').toggleClass('hidden');
     }

     if(choixDuQuartier.target.id == 'CheckboxRemparts') {
     	$('.Remparts').toggleClass('hidden');
     }

     if(choixDuQuartier.target.id == 'CheckboxVictorHugo') {
     	$('.VictorHugo').toggleClass('hidden');
     }

     if(choixDuQuartier.target.id == 'CheckboxAutresQuartiers') {
     	$('.AutresQuartiers').toggleClass('hidden');
     }
 });

$('html').click(function(choixDuVendeur){
     if(choixDuVendeur.target.id == 'CheckboxAxo') {
     	$('.VendeurAxo').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxBellesDemeures') {
     	$('.VendeurBellesDemeures').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxChantalPicot') {
     	$('.VendeurChantalPicot').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxCentury') {
     	$('.VendeurCentury').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxCityA') {
     	$('.VendeurCityA').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxPdC') {
     	$('.VendeurPdC').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxPichet') {
     	$('.VendeurPichet').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxSaintAndre') {
     	$('.VendeurSaintAndre').toggleClass('hidden');
     }

     if(choixDuVendeur.target.id == 'CheckboxAutresVendeurs') {
     	$('.VendeurAutres').toggleClass('hidden');
     }
 });

$('html').click(function(event){
     if(event.target.id == 'CheckboxVendu') {
     	$('.Vendu').toggleClass('visible');
     }
 });


/*function gBox(nbCheck){
    if(document.getElementById(nbCheck).checked == true){
        document.getElementById('formulaire1').submit();
        alert('Checkbox cochée mais elle va repasser dans son état initial !');
    }
    else{
        alert('Checkbox non cochée !');
    }
}*/

/*$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});*/

/*$('#Intro').html("Ce texte remplacera tout le contenu de la balise tr portant l'Id Intro ");*/

/* TOUT EFFACER
document.body.innerHTML = "";
*/

//Fonction de rappel pour effacement progressif de la plupart des maisons
//FONCTIONNE
/*$(function() {
    $(".PasBonAccueil").fadeOut("slow",function(){
      $(this).fadeIn("slow");
    }); 
});*/

//Fonction d'effacement / affichage sur plusieurs critères
//FONCTIONNE
/*$(function() {
    $(".PasBonAccueil").hide();
    $(".Vendu").hide();
    $(".VendeurSaintAndre").hide();
    $(".VendeurPdC").hide();
    $(".VendeurPdC").show();
});*/

