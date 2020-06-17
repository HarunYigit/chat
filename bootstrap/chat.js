//setTimeout(islem,100);

var sonkişi="";
var kisimesaj=0;
var mesajindex=0;


function işlem(div,kisi1,kisi2,mesajlar1,mesajlar2){

try{
//var div=document.getElementById("chatdiv");
var a =document.getElementById(div);
var f =document.createElement("div");
var toplam=mesajlar1.lenght + mesajlar2.lenght;
}
catch(ex){
    alert(ex);
}
}

//zaman,mesajtipi
function mesajekle(div,profilfoto,ism,mesaj,zaman,mesajtipi){
    try{

         
        
        if ( mesajtipi=="kisi")
{

    kisimesaj+=1;

let a =document.createElement("div");



a.className="message-blue";
let p =document.createElement("p");
p.className="message-content";

let çöp = document.createElement("img");
çöp.src="çöp.png";
çöp.className="çöp";
çöp.style.visibility="hidden";
çöp.onclick=function (){
    if (confirm('Bu mesajı silmek istediğinize emin misiniz?')) {
        // Save it!
        p.style.color="gray";
        p.innerHTML="@Bu mesaj silindi";
        a.className="message-blue-animasyonsuz";
        if (a.outerHTML.indexOf("<img") > -1){
            a.children[1].style.visibility="hidden";
            a.style.height=(50 )+"px";
        }
        document.getElementById(div).removeChild(a);
      } else {
        // Do nothing!
      }
}
let resimvarmı=0;
a.onmousemove=function () {
    if(p.style.color!="gray"){

a.children[1].style.visibility="visible";
    }
};
a.onmouseleave=function () {
    a.children[1].style.visibility="hidden";
 };
if (mesaj.indexOf("*-/img-/:") > -1){
    a.onmousemove=function () {
        if(p.style.color!="gray"){
    
    a.children[3].style.visibility="visible";
        }
    };
    a.onmouseleave=function () {
        a.children[3].style.visibility="hidden";
     };
     p.style.marginTop= "5px";
   let yenisekme=document.createElement("a");
     yenisekme.innerHTML="Resmi aç";
    let resim = document.createElement("img");
    resim.className="mesajresim";
    let git= mesaj.substring(9,mesaj.indexOf("%"));
    resim.src= mesaj.substring(9,mesaj.indexOf("%"));
    resim.style.width="280px";
    yenisekme.style.marginLeft="36%";
    yenisekme.style.marginTop="40%";
    yenisekme.style.color="white";
    yenisekme.style.visibility="hidden";
    resim.style.borderRadius="5px";
    resim.onmouseover = function (){
        yenisekme.style.visibility="visible";
    }
    resim.onpointerleave = function (){
    yenisekme.style.visibility="hidden";
    }
 a.style.height=(300+(mesaj.length*1.1) )+"px";
resim.style.height="280px";
yenisekme.style.position="absolute";
yenisekme.style.zIndex="5500";
resimvarmı=300;
yenisekme.style.textShadow="1px 1px black";
a.appendChild(yenisekme);
yenisekme.onclick= function (){
    var windowObjectReference;
    var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    
      windowObjectReference = window.open(git, "fotoğraf", windowFeatures);
}
resim.onclick= function (){
   // window.location= git;
    var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";


  windowObjectReference = window.open(git, "fotoğraf", windowFeatures);
}
    a.appendChild(resim);
    mesaj=mesaj.replace("*-/img-/:"+ mesaj.substring(9,mesaj.indexOf("%")+1) ,"");
    
}
p.innerHTML= mesaj;
if(mesaj.length > 70){
a.style.height=(resimvarmı+(mesaj.length*1.1) )+"px";
}
else if(mesaj.length > 60 ){
    a.style.height=(resimvarmı+(mesaj.length*1.2) )+"px";
}
else{
 //   a.style.height=(resimvarmı+(mesaj.length*1.3) )+"px";
}

let tarih=document.createElement("div");
tarih.innerHTML=zaman;
tarih.className="message-timestamp-left";
let img = document.createElement("img");
img.id= "kisi" + kisimesaj.toString();
console.log(" aaa=   kisi" + kisimesaj.toString());
img.className="mesajimg-blue";

console.log("top " +260)
img.src=profilfoto;
tarih.appendChild(img);
a.appendChild(p);
a.appendChild(çöp);
a.appendChild(tarih);

  //  <div class="message-blue">
    //<p class="message-content">This is an awesome message!</p>
    //<div class="message-timestamp-left">SMS 13:37</div>
//</div>

    document.getElementById(div).appendChild(a);
    sonkişi="kisi";
}else{
    sonkişi="";
    mesajindex+=1;

    var a =document.createElement("div");
    a.className="message-orange";


    var p =document.createElement("p");
    p.className="message-content";



    var tarih=document.createElement("div");
    tarih.innerHTML=zaman;
    tarih.className="message-timestamp-right";
    var img = document.createElement("img");
    img.id= "mesaj" + mesajindex.toString();
    img.className="mesajimg-orange";
    img.src=profilfoto;
    let resimvarmı=0;
    if (mesaj.indexOf("*-/img-/:") > -1){
        a.onmousemove=function () {
            if(p.style.color!="gray"){
        
        a.children[4].style.visibility="visible";
            }
        };
        a.onmouseleave=function () {
            a.children[4].style.visibility="hidden";
         };
         p.style.marginTop= "5px";
       let yenisekme=document.createElement("a");
         yenisekme.innerHTML="Resmi aç";
        let resim = document.createElement("img");
        resim.className="mesajresim";
        let git= mesaj.substring(9,mesaj.indexOf("%"));
        resim.src= mesaj.substring(9,mesaj.indexOf("%"));
        resim.style.width="280px";
        yenisekme.style.marginLeft="36%";
        yenisekme.style.marginTop="40%";
        yenisekme.style.color="white";
        yenisekme.style.visibility="hidden";
        resim.onmouseover = function (){
            yenisekme.style.visibility="visible";
        }
        resim.onpointerleave = function (){
        yenisekme.style.visibility="hidden";
        }
     a.style.height=(300+(mesaj.length*1.1) )+"px";
    resim.style.height="280px";
    yenisekme.style.position="absolute";
    resim.style.borderRadius="5px";
    yenisekme.style.zIndex="5500";
    resimvarmı=300;
    yenisekme.style.textShadow="1px 1px black";
    a.appendChild(yenisekme);
    yenisekme.onclick= function (){
        var windowObjectReference;
        var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        
          windowObjectReference = window.open(git, "fotoğraf", windowFeatures);
    }
    resim.onclick= function (){
       // window.location= git;
        var windowObjectReference;
    var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    
    
      windowObjectReference = window.open(git, "fotoğraf", windowFeatures);
    }
        a.appendChild(resim);
        mesaj=mesaj.replace("*-/img-/:"+ mesaj.substring(9,mesaj.indexOf("%")+1) ,"");
        
    }

    if(mesaj.length > 70){
        a.style.height=(resimvarmı+(mesaj.length*1.1) )+"px";
        }
        else if(mesaj.length > 60 ){
            a.style.height=(resimvarmı+(mesaj.length*1.2) )+"px";
        }
        else{
            a.style.height=(resimvarmı + 70 )+"px";
        }
    a.appendChild(p);
    if(mesaj.length > 45){
        a.style.height=(mesaj.length)+"px";
        }
        p.innerHTML=mesaj;
tarih.append(img);
    a.appendChild(tarih);

    document.getElementById(div).appendChild(a);
}
    }
    catch(ex){
alert(ex + "\n" + kisimesaj.toString());
    }
    document.getElementById(div).scrollTop= document.getElementById(div).scrollHeight;
}
var eklenen=0;
function mesajac(list){
    eklenen=0;
    try{
        if (list.length>15){
            var a =document.createElement("button");
            a.onclick=function (){
 document.getElementById("chatdiv").innerHTML="";
 
                for(i=list.length-(eklenen + 15);i<(list.length);i++){
                    try{
                        var a = list[i];
                        mesajekle(a.chatdiv,a.profilfoto,a.isim,a.mesj,a.zaman,a.kisi);
                        console.log("oldu =) "  + i);
                    }
                    catch(ex){
                        console.log(" i = " + i + " oldu döngüden çıkılıyor")
                        
                    }
        
                }
                document.getElementById("chatdiv").scrollTop= 0;
                eklenen+=15;
            }
            a.id="artısohbet";
            
            a.innerHTML="<b>+</b>";
            document.getElementById("chatdiv").appendChild(a);
            eklenen+=15;
            for(i=(list.length-15);i<list.length;i++){
                try{
                    var a = list[i];
                    mesajekle(a.chatdiv,a.profilfoto,a.isim,a.mesj,a.zaman,a.kisi);
                    console.log("oldu =) "  + i);
                }
                catch(ex){
                    console.log(" i = " + i + " oldu döngüden çıkılıyor")
                    
                }
    
            }

        }
        else{
            for(i=0;i<list.length;i++){
                try{
                    var a = list[i];
                    mesajekle(a.chatdiv,a.profilfoto,a.isim,a.mesj,a.zaman,a.kisi);
                    console.log("oldu =) "  + i);
                }
                catch(ex){
                    console.log(" i = " + i + " oldu döngüden çıkılıyor")
                    
                }
    
            }
        }
       
    }
    catch(ex){
console.log(ex);
    }
}


// mesajekle("chatdiv","profilfoto.jpg","harun","selam","18.01","kisi");

