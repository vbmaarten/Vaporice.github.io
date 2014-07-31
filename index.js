window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }

if(mobilecheck()){
	window.location = "http://owee2014.maartenvb.org/mob.html"
}

$(window).resize(function(){
    $('#dialog').css({
        position:'absolute',
        left: ($(window).width() - $('#dialog').width())/2,
        top: ($(window).height() - $('#dialog').height())/2
    });

    $("#label1").css("height", $("#koffer").height());
    $("#label1").css("width", $("#koffer").width());

    $('#text').css("max-height", ($(window).height())*0.8 );
    imgsize("#koffer");
    imgsize("#label1");
    imgsize("#label2");
    imgsize("#label3");
    imgsize("#label4");
    imgsize("#label5");
    imgsize("#label6");
});

function imgsize(id){
	aspect = 1024/768;
	aswin = $(window).width()/$(window).height();

	if(aswin < aspect){
		$(id).css("width", String($(window).width())+"px");
		$(id).css("height", String($(window).width()/aspect)+"px");	
		$(id).css("padding-top", String(($(window).height()-$(id).height())/2)+"px");
		$(id).css("padding-left", "0px");
	} else {	
		$(id).css("width", String($(window).height()*aspect)+"px");		
		$(id).css("padding-left", String(($(window).width()-$(id).width())/2)+"px");
		$(id).css("padding-top", "0px");	

	}
}

$(window).load(function() {
    $(window).resize();
	/*$("img").mousemove(function(e){
	  	if(isclicked("#label1", e)){$("#label1").css("opacity", "0.5")}else{$("#label1").css("opacity", "0.1")}
	  	if(isclicked("#label2", e)){$("#label2").css("opacity", "0.5")}else{$("#label2").css("opacity", "0.1")}
	  	if(isclicked("#label3", e)){$("#label3").css("opacity", "0.5")}else{$("#label3").css("opacity", "0.1")}
	  	if(isclicked("#label4", e)){$("#label4").css("opacity", "0.5")}else{$("#label4").css("opacity", "0.1")}
	  	if(isclicked("#label5", e)){$("#label5").css("opacity", "0.5")}else{$("#label5").css("opacity", "0.1")}
	  	if(isclicked("#label6", e)){$("#label6").css("opacity", "0.5")}else{$("#label6").css("opacity", "0.1")}
 	});*/

});

$( document ).ready(function() {
	$(window).resize();
	$(window).resize();
	$("#close").click(function(){closeDialog()})
	$("#black").click(function(){closeDialog()})
  	$("img").click(function(e){
	  	if(isclicked("#label1", e)){label1(e)}
	  	if(isclicked("#label2", e)){label2(e)}
	  	if(isclicked("#label3", e)){label3(e)}
	  	if(isclicked("#label4", e)){label4(e)}
	  	if(isclicked("#label5", e)){label5(e)}
	  	if(isclicked("#label6", e)){label6(e)}
 	});

 	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {closeDialog();} 
	});

	$(window).resize();
});


function isclicked(id, eventObj){
  	var img = $(id)[0];
	var canvas = $('<canvas/>')[0];
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	offX = eventObj.offsetX;
	offY = eventObj.offsetY;
	if (!eventObj.offsetX){
		// FireFox Fix
		offX = eventObj.originalEvent.layerX - $(eventObj.currentTarget).offset().left;
		offY = eventObj.originalEvent.layerY - $(eventObj.currentTarget).offset().top;
	}

	var pl = $("#koffer").css("padding-left");
	pl = parseFloat(pl.substring(0, pl.length-2));
	var pt = $("#koffer").css("padding-top");
	pt = parseFloat(pt.substring(0, pt.length-2));

	offX = offX - pl;
	offY = offY - pt;

	var pixelData = canvas.getContext('2d').getImageData(offX, offY, 1, 1).data;
	if(pixelData[0] == 68){
		return true;
	} else {
		return false;
	}
}

function label1(e){
	$("#dialog").css("width", "50%")
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

function label2(e){	
	$("#dialog").css("width", "60%")
	$(window).resize();
	openDialog("Van 3 t/m 5 oktober organiseert AEGEE-Delft een introductieliftreis naar Berlijn! \
		Voor de nog onervaren lifter organiseren wij vooraf aan deze reis een liftworkshop. Dus of\
		 je nu al heel de wereld rondgelift bent, of nog nooit met je duim omhoog langs de weg hebt\
		  gestaan, iedereen kan meedoen! Tijdens deze trip zullen wij een bezoek brengen aan\
		   AEGEE-Berlijn en aan hun hand alle voor toeristen onbekende plekjes in de stad ontdekken!\
		    De reis is open voor leden en niet-leden.");	
}

function label3(e){
	$("#dialog").css("width", "40%")
	$(window).resize();
	openDialog("Tijdens de Owee zijn wij elke avond te vinden in caf\u00E9 de Bonte Os.\
		<br /><br /><b>Adres:</b> Voldersgracht 10, 2611 ET Delft")
}

function label4(e){	
	$("#dialog").css("width", "50%")	
	$(window).resize();
	openDialog("Maandag<br />\
<br />\
19.00 - 19.30 - Escalator AAN<br />\
19.30 - 20.30 - Eerste hulp bij buitenlanders<br />\
20.30 - 21.30 - Into the wild<br />\
21.30 - 23.00 - (Lift)reisverhalen<br />\
23.00 - 00.00 - Bouw een biertje met Unibrouw<br />\
00.00 - 01.00 - VOEDERTIJD<br />\
<br />\
Dinsdag<br />\
<br />\
19.00 - 21.00 - Portret painting night<br />\
20.00 - 22.00 - Open podium<br />\
22.00 - 00.00 - AEGEE on stage<br />\
00.00 - 01.00 - VOEDERTIJD<br />\
<br />\
Woensdag<br />\
<br />\
19.00 - 22.00 - Get dressed<br />\
20.00 - 23.00 - Barspelen<br />\
22.00 - 23.00 - Pubquiz<br />\
23.00 - 01.00 - DJ's<br />\
00.00 - 01.00 - VOEDERTIJD<br />\
<br />\
Donderdag<br />\
<br />\
18.00-20.00 - Kookt<br />\
20.00-01.00 - De nulste borrel")
}

function label5(e){	
	$("#dialog").css("width", "40%")	
	$(window).resize();
	openDialog("Leuk dat je lid wilt worden! Ga naar het <a href='https://docs.google.com/spreadsheet/viewform?formkey=dFRySXptcVFHeGpjNXZsekRjcl9VQ1E6MA#gid=0'>Inschrijfformulier</a> om je in te schrijven!");
}

function label6(e){
	window.location = "http://www.aegee-delft.nl";
}

function openDialog(text){
	$("#text").html(text);
	$(window).resize();
	$("#black").css("visibility", "visible");
	$("#close").css("visibility", "visible");
	$("#dialog").css("visibility", "visible");
}

function closeDialog(){
	$("#black").css("visibility", "hidden");
	$("#close").css("visibility", "hidden");
	$("#dialog").css("visibility", "hidden");
}
