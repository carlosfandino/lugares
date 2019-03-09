//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#00FF40";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="Felicitaciones!!! :)"; messageTime="Se acabó el tiempo :("; messageError="Intentalo otra vez"; messageErrorG="Intentalo otra vez"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bHVnYXJlcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QWVyb3B1ZXJ0bw", "QWlycG9ydA"],["QmFuY28", "QmFuaw"],["SWdsZXNpYQ", "Q2h1cmNo"],["Q2luZQ", "Q2luZW1h"],["QmlibGlvdGVjYQ", "TGlicmFyeQ"],["U3VwZXIgTWVyY2Fkbw", "U3VwZXIgTWFya2V0"],["SG9zcGl0YWw", "SG9zcGl0YWw"],["R2ltbmFjaW8", "R3lt"],["UmVzdGF1cmFudGU", "UmVzdGF1cmFudA"],["UGFycXVl", "UGFyaw"]];
var c=[[10,7],[5,4],[7,6],[4,6],[10,7],[13,12],[8,8],[8,3],[11,10],[6,4]];
var con1=["Aeropuerto","Banco","Iglesia","Cine","Biblioteca","Super Mercado","Hospital","Gimnacio","Restaurante","Parque"];
var con2=["Airport","Bank","Church","Cinema","Library","Super Market","Hospital","Gym","Restaurant","Park"];
var sel1=""; join1=[]; join2=[];
