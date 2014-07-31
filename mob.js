$(window).resize(function(){
});


$( document ).ready(function() {

	$("blackness").click(closeDialog());

	$("#button1").click(function(){
		button1();
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {closeDialog();} 
	});
});

function openDialog(text){
	$("#text").html(text);
	$("#blackness").css("visibility", "visible");
	$("#dialog").css("visibility", "visible");

}

function closeDialog(){	
	$("#blackness").css("visibility", "hidden");
	$("#dialog").css("visibility", "hidden");
}


function button1(){
	openDialog("<b>Bij AEGEE kun jij alles</b> omtrent lekker eten, activiteiten organiseren, taal, cultuur, liften en gewoon goedkoop \
	 op reis gaan door Europa. Dat maakt dat wij d\u00E9 studentenreisvereniging van Delft zijn! Met minstens \u00E9\u00E9n reis per maand \
	  bieden wij de kans om op een goedkope, avontuurlijke manier Europa te leren kennen. Nu denk je misschien; \u2018een reisvereniging? \
	   Maar ik wil toch lekker dingen in Delft doen?\u2019. Niet getreurd, dat kan natuurlijk ook bij ons! AEGEE is een goede vereniging \
	   voor mensen die houden van ondernemen, die idee\u00EBn hebben en een gevoel voor grenzeloosheid. Bij AEGEE wordt er naar je\
	    geluisterd. Bovendien is bij AEGEE-Delft iedereen lekker zichzelf en dat zorgt voor een gezellige sfeer.<br /><br /><b>Wat kun je met ons\
	    doen in Delft?</b><br /><br />Elke dinsdagavond dineren en borrelen wij in club Ciccionina (Kromstraat 24). \u00C9\u00E9n keer per maand\
	    wordt er door onze kookcommissie een groot diner geserveerd met een internationaal thema! Daarnaast organiseren wij in Delft\
	     door het jaar heen feesten en activiteiten. Zoals een underground blacklightfeest door de kunst- en cultuurcommissie, een \
	     13-gangenkerstdiner en een nachtelijke fietstocht. Elke week is er naast de borrel nog wel iets extra\u2019s te doen. Dit \
	     varieert van bierbrouwen met ons dispuut Unibrouw tot buiten in de donkere Delftsche nachten met elkaar een film kijken of \
	     gewoon een avondje sporten. En er is nog veel meer! Deze activiteiten worden door onze eigen leden bedacht en georganiseerd.\
	      Heb jij een goede idee voor een groepsactiviteit? Grijp je kans!<br /><br /> <b>Waar reis jij straks heen?</b><br /><br />AEGEE is een netwerk \
	      van verenigingen met in totaal ruim 13.000 leden in meer dan 200 steden door heel Europa. Regelmatig reizen wij met het vliegtuig,\
	       de trein of liftend naar onze zusterverenigingen. Het gastvrije karakter van AEGEE zorgt ervoor dat we door heel Europa gehost \
	       kunnen worden bij andere AEGEE\u2019ers, die ons de leukste plekjes van hun stad laten zien. Met ons ga je niet zomaar reizen. \
	       Met ons leer je de wereld en haar mensen kennen. Zo zijn wij het afgelopen jaar naar onder andere Londen, Parijs, Budapest, \
	       Zaragoza, \u03A0\u03AC\u03C4\u03C1\u03B1 en Istanbul geweest en kwamen daar met de mooiste verhalen van terug. Daarnaast \
	       trokken de stoere leden van ons dispuut Caput Lupinum onverschrokken door de Oostenrijkse Alpen om het ultieme gevoel van\
	       vrijheid te ervaren.<br /><br /> <b>Summer University</b><br /><br />De Summer University is het grootste project van AEGEE. Op allerlei locaties\
	        in Europa worden zeer goedkope zomervakanties georganiseerd voor en door studenten. Je leert twee weken lang studenten uit\
	         heel Europa kennen door te sporten, feesten, rond te reizen of een taalcursus te volgen. Er valt jaarlijks te kiezen uit ruim\
	          80 bestemmingen.<br /><br />Kortom: de mooiste ervaringen van je leven doe je op bij AEGEE-Delft.");
}