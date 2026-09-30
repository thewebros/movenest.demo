
const PHONE="919876543210";
function wa(msg="Hello, I want a quotation for your packers and movers service."){open("https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg),"_blank")}
function callNow(){location.href="tel:+91"+PHONE}
function calc(){
 let s=document.querySelector("#service")?.value||"house",km=Number(document.querySelector("#distance")?.value||0),q=Math.max(1,Number(document.querySelector("#quantity")?.value||1));
 let r={house:[1800,22],office:[2800,30],car:[4500,18],bike:[1800,9],goods:[3200,26],industrial:[6500,42],storage:[1500,12],local:[1400,16]}[s];
 let box=document.querySelector("#result"); if(!box)return;
 if(!km){box.style.display="none";return}
 let n=r[0]+km*r[1]+(q-1)*650;if(km>1000)n*=.94;n=Math.round(n/100)*100;
 document.querySelector("#amount").textContent="₹"+n.toLocaleString("en-IN")+" approx.";box.style.display="block"
}
function sendQuote(e){
 e.preventDefault();let f=new FormData(e.target);
 let msg=`Hi, I am ${f.get("name")}. I need ${f.get("service")}. Pickup: ${f.get("from")}. Destination: ${f.get("to")}. Distance: ${f.get("distance")} km. Date: ${f.get("date")||"Not fixed"}. Details: ${f.get("notes")||"None"}.`;
 wa(msg)
}
