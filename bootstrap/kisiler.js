var mesjlar=[];
var mesjlartoplu=[];
var mesajuzunluklar=[];
class mesaj{

    constructor(div,profilfoto,ism,mesaj,zaman,mesajtipi){
        this.chatdiv=div;
    this.profilfoto=profilfoto;
    this.isim=ism;
    this.mesj=mesaj;
    this.zaman=zaman;
    this.kisi=mesajtipi;

    }


    }
    class resimmesaj{

        constructor(div,profilfoto,ism,mesaj,resimyolu,zaman,mesajtipi){
            this.chatdiv=div;
        this.profilfoto=profilfoto;
        this.isim=ism;
        this.resimyol=resimyolu;
        this.mesj=mesaj;
        this.zaman=zaman;
        this.kisi=mesajtipi;
    
        }
    
    
        }
var seçili="";
function sec(div){
seçili=div;
}
var fasd=0;
function kisiekle(profilfoto,ism,sonmesj,m){
    var div=document.getElementById(seçili);
   fasd+=1;
var kisi=document.createElement("div");


//tamamdır
kisi.setAttribute("onclick",'yaptir('+ m +  ',"' +  profilfoto + '","' + ism +'");');

kisi.id="kis"  + fasd.toString();
kisi.className="kisi";
var img=document.createElement("img");
img.className="kisiimg";
img.src=profilfoto;
var isim=document.createElement("span");
isim.innerHTML=ism;
isim.className="kisiisim";
var sonmesaj=document.createElement("p");
sonmesaj.className="sonmesaj";
if(sonmesj.length>25){
    sonmesj=sonmesj.substring(0,23) + "...";
}
let mesj = mesjlartoplu[m];
let f = mesj[mesj.length-1].kisi;
//mesjlartoplu[m][mesjlartoplu[m].length].mesajtipi
if(f !="kisi"){
    let bildirim =document.createElement("div");
    bildirim.style.width="10px";
    bildirim.style.height="10px";
    bildirim.style.borderRadius="50%";
    bildirim.style.backgroundColor="rgb(203,150,124)";

    bildirim.style.position="relative";
    bildirim.style.zIndex="55";
    bildirim.style.top="-35px";
    bildirim.style.marginLeft="93%";
    //    left:5px;
    sonmesaj.style.top="-35px";
bildirim.style.position="relative";
 isim.appendChild(bildirim);
  //  sonmesaj.style.color="rgb(203,150,124)";
   // kisi.style.backgroundColor="white";
    }
sonmesaj.innerHTML=sonmesj;
kisi.appendChild(img);
kisi.appendChild(isim);
kisi.appendChild(sonmesaj);
kisi.style.marginBottom="10px";
div.appendChild(kisi);
//div.innerHTML+="<br>";

}

function yaptir(id,profilfoto,isim){
    tık=false;
   document.getElementById("chatdiv").innerHTML="";
   document.getElementById("menüimg").src=profilfoto;
   document.getElementById("altmenüp").innerHTML=isim + '<span style="font-size:13px;position: absolute;top:22px;left:-1px;">+90 533 564 51 26</span>';
var a = document.getElementsByClassName("kisi");
for(i=0;i<a.length;i++){
    var ü =a[i];
    if (i==id){
        document.getElementsByClassName("kisi")[i].style.backgroundColor="rgb(80, 152, 166)";
    }
    else{
        document.getElementsByClassName("kisi")[i].style.backgroundColor="rgb(41, 90, 100)";
    }
}
mesajac(mesjlartoplu[id]);
} 



setTimeout(yap,100);

   function yap(){
   var f=[];
   f.push(new mesaj("chatdiv","profilfoto.jpg","mehmet","selam","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","naber","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","iyidir senden naber?\n nasıl gidiyor hiç sormuyorum","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","bendende iyi sağol napıyorsun?","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","hiiç yani öyle oturuyorum sen napıyorsun?","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","bende oturuyorum yani normal halim :D ","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","yani bu aralar genel","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","evet korona var bu aralar","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","aynen öyle","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","Hay Allahım yarasa yenir mi","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","harbiden ya ne yarasası","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","evet işte ben de çok sinirliyim çinlilere","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","evet gerçekten çok sinirler","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","neyse görüşürüz","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","nereye?","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","Nasa'da ki işlerimi bitireyim konuşuruz","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","he tamamdır onları bitir öyle gel","18.02","asdasd"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","tamamdır görüşürüüüüüüüüüüüüüüüüzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","görüşürüüüüüüüüüüüüüüüüzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto.jpg","harun","*-/img-/:mesajfoto1.jpg%Ablacım bak nasıl olmuş kendi ellerimle çizdim","18.01","kisi"));
   f.push(new mesaj("chatdiv","profilfoto2.jpg","mehmet","*-/img-/:mesajfoto2.jpg%Böyle daha iyi sanki?","18.01",""));
  
   var g =[];
   g.push(new mesaj("chatdiv","profilfoto3.jpg","Ahmet","söyle abi","18.02","asdasd"));
   g.push(new mesaj("chatdiv","profilfoto.jpg","Ahmet","neyi?","18.02","kisi"));
   var h =[];
   h.push(new mesaj("chatdiv","profilfoto4.jpg","Ahmet","napıyon niye bakmıyon mesajlarıma","18.02","asdasd"));
  // h.push(new mesaj("chatdiv","profilfoto.jpg","Ahmet","cevaplamışım oğlum daha ne","18.02","kisi"));
   mesajuzunluklar.push[20];
   mesajuzunluklar.push[1];
   mesajuzunluklar.push[1];
   mesjlartoplu.push(f);
   mesjlartoplu.push(g);
   mesjlartoplu.push(h);
   mesajac(f,20);
   sec("asilkisiler");
   tümkisileriekleme();
   document.getElementById("menüimg").src="profilfoto2.jpg";
   document.getElementsByClassName("kisi")[0].style.backgroundColor="rgb(70, 142, 156)";

//bu şekilde kllanılyor
}
function gonderme(){
    if(  document.getElementById("mesajtxt").value != ""){
    mesajekle("chatdiv","profilfoto.jpg","Ahmet",document.getElementById("mesajtxt").value, "18.02","kisi")   ; 
    document.getElementById("mesajtxt").value="";
}
}
var menüacık=false;
function menükapat(){
if(menüacık==false){
    document.getElementById("menüasagi").style.transform="rotate(180deg)";
    document.getElementById("üstmenü").style.borderBottomRightRadius="0px";
    document.getElementById("altmenü").style.visibility="visible";
    menüacık=true;
}
else{
    document.getElementById("menüasagi").style.transform="rotate(0deg)";
    document.getElementById("üstmenü").style.borderBottomRightRadius="5px";
    document.getElementById("altmenü").style.visibility="hidden";
    menüacık=false;
}


console.log("menüacık =  " +  menüacık);
}
function tümkisileriekleme(){
    fasd=0;
    document.getElementById("asilkisiler").innerHTML="";
    kisiekle("profilfoto2.jpg","Ayşe Yazıcı","neyi?",0);
    kisiekle("profilfoto3.jpg","Aleyna Çatal","cevaplamışım oğlum daha ne",1);
    kisiekle("profilfoto4.jpg","Ahmet Alıcı","cevaplamışım oğlum daha ne",2);
}