const BASE="/ALAAZAMLY";
const CUT="/ALAAZAMLY/assets/img/cut.webp";
const P=[
["Manukora","E-commerce redesign",""],
["Pandatales","Mobile app for kids","246962943/Pandatales-E-learning-Mobile-App-for-Kids"],
["Serge de Nimes","E-commerce homepage",""],
["Hello Fresh","Food delivery app","195694241/Hello-Fresh-healthy-food-delivery-mobile-application"],
["CAC","Website UX/UI audit",""],
["Things of Media","Marketing agency website",""],
["PHM","Brand identity",""],
["Ovara","Brand identity",""],
["Barista Prime","E-commerce website",""],
["Luné","E-commerce website",""],
["Petopia","Pet care app","246718393/Petopia-Mobile-App-UI-UX-Case-Study"],
["Virtuart","Digital art gallery","246855355/Virtuart-Digital-Art-Gallery-Platform"],
["Foody","Mobile app","247307303/Foody-Mobile-Application"],
["Brandist","Branding agency website",""],
["Vanelia","E-commerce website",""]
];
// Project colours: replace with each project's image colour. Images: put a data URI at the same index in IMGS.
const COLORS=["#F2C230","#F2B84B","#DC2B2B","#8FD3A6","#1C64C6","#FF5A14","#E8DFD2","#C0593C","#EC5598","#F2FF5E","#6BB5E8","#E58AC0","#FF7F7F","#9B51A0","#8FA9CC"];
const IMG={"hello-fresh":"/ALAAZAMLY/assets/img/work/hello-fresh.webp","virtuart":"/ALAAZAMLY/assets/img/work/virtuart.webp","pandatales":"/ALAAZAMLY/assets/img/work/pandatales.webp","vanelia":"/ALAAZAMLY/assets/img/work/vanelia.webp","brandist": "/ALAAZAMLY/assets/img/work/brandist.webp","ovara": "/ALAAZAMLY/assets/img/work/ovara.webp","phm":"/ALAAZAMLY/assets/img/work/phm.webp", "things-of-media": "/ALAAZAMLY/assets/img/work/things-of-media.webp", "barista-prime": "/ALAAZAMLY/assets/img/work/barista-prime.webp", "serge-de-nimes": "/ALAAZAMLY/assets/img/work/serge-de-nimes.webp", "foody": "/ALAAZAMLY/assets/img/work/foody.webp", "manukora": "/ALAAZAMLY/assets/img/work/manukora.webp", "cac":"/ALAAZAMLY/assets/img/work/cac.webp","lune":"/ALAAZAMLY/assets/img/work/lune.webp","petopia": "/ALAAZAMLY/assets/img/work/petopia.webp"};
const DIM={"/ALAAZAMLY/assets/img/work/hello-fresh.webp":[900,1260],"/ALAAZAMLY/assets/img/work/virtuart.webp":[900,1260],"/ALAAZAMLY/assets/img/work/pandatales.webp":[900,1260],"/ALAAZAMLY/assets/img/work/vanelia.webp":[900,1260],"/ALAAZAMLY/assets/img/work/brandist.webp":[900,1260],"/ALAAZAMLY/assets/img/work/ovara.webp":[900,1260],"/ALAAZAMLY/assets/img/work/phm.webp":[900,1260],"/ALAAZAMLY/assets/img/work/things-of-media.webp":[900,1260],"/ALAAZAMLY/assets/img/work/barista-prime.webp":[900,1260],"/ALAAZAMLY/assets/img/work/serge-de-nimes.webp":[900,1260],"/ALAAZAMLY/assets/img/work/foody.webp":[900,1260],"/ALAAZAMLY/assets/img/work/manukora.webp":[1000,1400],"/ALAAZAMLY/assets/img/work/cac.webp":[900,1260],"/ALAAZAMLY/assets/img/work/lune.webp":[900,1260],"/ALAAZAMLY/assets/img/work/petopia.webp":[1000,1400],"/ALAAZAMLY/assets/img/work/hello-fresh-1.webp":[1440,6002],"/ALAAZAMLY/assets/img/work/hello-fresh-2.webp":[1440,4533],"/ALAAZAMLY/assets/img/work/virtuart-1.webp":[1800,9496],"/ALAAZAMLY/assets/img/work/pandatales-1.webp":[1440,767],"/ALAAZAMLY/assets/img/work/pandatales-2.webp":[1440,3867],"/ALAAZAMLY/assets/img/work/pandatales-3.webp":[1440,686],"/ALAAZAMLY/assets/img/work/pandatales-4.webp":[1440,6543],"/ALAAZAMLY/assets/img/work/vanelia-1.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/vanelia-2.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/vanelia-3.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/vanelia-4.webp":[1900,1370],"/ALAAZAMLY/assets/img/work/vanelia-5.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/phm-1.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/phm-2.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/phm-3.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/phm-4.webp":[1083,1625],"/ALAAZAMLY/assets/img/work/phm-5.webp":[1083,1625],"/ALAAZAMLY/assets/img/work/phm-6.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/ovara-1.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/ovara-2.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/ovara-3.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/ovara-4.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/ovara-5.webp":[1900,1425],"/ALAAZAMLY/assets/img/work/brandist-1.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/brandist-2.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/brandist-3.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/brandist-4.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/things-of-media-1.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/things-of-media-2.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/things-of-media-3.webp":[1800,2230],"/ALAAZAMLY/assets/img/work/things-of-media-4.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/things-of-media-5.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/barista-prime-1.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/barista-prime-2.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/barista-prime-3.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/barista-prime-4.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/serge-de-nimes-1.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/serge-de-nimes-2.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/serge-de-nimes-3.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/serge-de-nimes-4.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/serge-de-nimes-5.webp":[1095,1643],"/ALAAZAMLY/assets/img/work/serge-de-nimes-6.webp":[1095,1643],"/ALAAZAMLY/assets/img/work/foody-1.webp":[1800,7700],"/ALAAZAMLY/assets/img/work/foody-2.webp":[1800,6866],"/ALAAZAMLY/assets/img/work/petopia-1.webp":[1800,5424],"/ALAAZAMLY/assets/img/work/petopia-2.webp":[1800,7545],"/ALAAZAMLY/assets/img/work/petopia-3.webp":[1800,8506],"/ALAAZAMLY/assets/img/work/manukora-1.webp":[1440,5635],"/ALAAZAMLY/assets/img/work/cac-1.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/cac-2.webp":[1440,3299],"/ALAAZAMLY/assets/img/work/cac-3.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/cac-4.webp":[1800,1351],"/ALAAZAMLY/assets/img/work/cac-5.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/cac-6.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/lune-1.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/lune-2.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/lune-3.webp":[1800,1350],"/ALAAZAMLY/assets/img/work/lune-4.webp":[1800,1350]};
const wh=u=>DIM[u]?` width="${DIM[u][0]}" height="${DIM[u][1]}"`:"";
const slug=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
// Project types (used by the filter tabs and shown under each name)
const TYPES=["Mobile App","Web Design","E-commerce","Branding"];
const KIND=[["Web Design", "E-commerce"],["Mobile App", "Branding"],["Web Design", "E-commerce"],["Mobile App", "Branding"],["Web Design"],["Web Design"],["Web Design"],["Branding"],["Web Design", "E-commerce"],["Web Design", "E-commerce"],["Mobile App", "Branding"],["Web Design", "Branding"],["Mobile App"],["Web Design"],["Web Design", "E-commerce"]];
// Card size pattern (1 = tallest). Gives the staggered rhythm of the reference.
const SIZES=[1,.78,1,.58,1,.7];
// Work order: these six lead, in this order. Everything else follows in a fresh random order on each visit.
const FIRST=["Petopia","Serge de Nimes","Things of Media","Luné","Pandatales","Manukora"].map(n=>P.findIndex(p=>p[0]===n));
const ORD=(()=>{const r=P.map((_,i)=>i).filter(i=>!FIRST.includes(i));for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return[...FIRST,...r]})();
const tabsEl=document.getElementById("tabs"),gal=document.getElementById("gal"),qEl=document.getElementById("q");
let cat="Featured",term="";
const hit=(i,c)=>(c==="Featured"||KIND[i].includes(c))&&(!term||(P[i][0]+" "+P[i][1]+" "+KIND[i].join(" ")).toLowerCase().includes(term));
function drawTabs(){
  tabsEl.innerHTML=["Featured",...TYPES].map(c=>{const n=P.filter((_,i)=>hit(i,c)).length;
    return `<button class="tab" type="button" data-c="${c}" aria-pressed="${c===cat}"><i aria-hidden="true"><svg class="st" aria-hidden="true"><use href="#st"/></svg></i>${c}<sup>(${n})</sup></button>`}).join("")}
function drawGal(){
  const rows=ORD.filter(i=>hit(i,cat));
  gal.innerHTML=rows.length?rows.map((i,k)=>{const p=P[i];
    return `<a class="wk" style="--c:${COLORS[i%COLORS.length]};--s:${SIZES[k%SIZES.length]}" href="${BASE}/project/${slug(p[0])}/" aria-label="${p[0]}: ${KIND[i].join(", ")} case study"><span class="im">${IMG[slug(p[0])]?`<img alt="" decoding="async" src="${IMG[slug(p[0])]}"${wh(IMG[slug(p[0])])}>`:""}</span><span class="nm">${p[0]}</span><span class="ty">${KIND[i].join(" / ")}</span></a>`}).join(""):
    `<div class="none"><div class="nm">Nothing here yet</div><p>Try a different word, or switch to another type.</p><button class="pill" type="button" id="reset">Start over</button></div>`;
  gal.scrollLeft=0;
  const r=document.getElementById("reset");if(r)r.onclick=()=>{qEl.value="";term="";cat="Featured";draw()}}
function draw(){drawTabs();drawGal()}
tabsEl.addEventListener("click",e=>{const b=e.target.closest(".tab");if(!b)return;cat=b.dataset.c;draw()});
qEl.addEventListener("input",()=>{term=qEl.value.trim().toLowerCase();draw()});
qEl.addEventListener("keydown",e=>{if(e.key==="Escape"){qEl.value="";term="";draw()}});
// vertical mouse wheel scrolls the gallery sideways
gal.addEventListener("wheel",e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY))return;if(gal.scrollWidth<=gal.clientWidth)return;e.preventDefault();gal.scrollLeft+=e.deltaY},{passive:false});
draw();
// Project pages. Add real images per project: SHOTS["foody"]=[heroDataURI,leftDataURI,rightDataURI,wideDataURI]
const STACK={"hello-fresh":1,virtuart:1,pandatales:1,vanelia:1,phm:[1,1,1,2,1],ovara:1,brandist:1,"things-of-media":1,"barista-prime":1,petopia:1,foody:1,manukora:1,cac:1,lune:1,"serge-de-nimes":[1,1,1,1,2]};
const SHOTS={"hello-fresh":["/ALAAZAMLY/assets/img/work/hello-fresh-1.webp","/ALAAZAMLY/assets/img/work/hello-fresh-2.webp"],"virtuart":["/ALAAZAMLY/assets/img/work/virtuart-1.webp"],"pandatales":["/ALAAZAMLY/assets/img/work/pandatales-1.webp","/ALAAZAMLY/assets/img/work/pandatales-2.webp","/ALAAZAMLY/assets/img/work/pandatales-3.webp","/ALAAZAMLY/assets/img/work/pandatales-4.webp"],"vanelia":["/ALAAZAMLY/assets/img/work/vanelia-1.webp","/ALAAZAMLY/assets/img/work/vanelia-2.webp","/ALAAZAMLY/assets/img/work/vanelia-3.webp","/ALAAZAMLY/assets/img/work/vanelia-4.webp","/ALAAZAMLY/assets/img/work/vanelia-5.webp"],"phm":["/ALAAZAMLY/assets/img/work/phm-1.webp","/ALAAZAMLY/assets/img/work/phm-2.webp","/ALAAZAMLY/assets/img/work/phm-3.webp","/ALAAZAMLY/assets/img/work/phm-4.webp","/ALAAZAMLY/assets/img/work/phm-5.webp","/ALAAZAMLY/assets/img/work/phm-6.webp"],"ovara":["/ALAAZAMLY/assets/img/work/ovara-1.webp","/ALAAZAMLY/assets/img/work/ovara-2.webp","/ALAAZAMLY/assets/img/work/ovara-3.webp","/ALAAZAMLY/assets/img/work/ovara-4.webp","/ALAAZAMLY/assets/img/work/ovara-5.webp"],"brandist":["/ALAAZAMLY/assets/img/work/brandist-1.webp","/ALAAZAMLY/assets/img/work/brandist-2.webp","/ALAAZAMLY/assets/img/work/brandist-3.webp","/ALAAZAMLY/assets/img/work/brandist-4.webp"],"things-of-media":["/ALAAZAMLY/assets/img/work/things-of-media-1.webp","/ALAAZAMLY/assets/img/work/things-of-media-2.webp","/ALAAZAMLY/assets/img/work/things-of-media-3.webp","/ALAAZAMLY/assets/img/work/things-of-media-4.webp","/ALAAZAMLY/assets/img/work/things-of-media-5.webp"],"barista-prime":["/ALAAZAMLY/assets/img/work/barista-prime-1.webp","/ALAAZAMLY/assets/img/work/barista-prime-2.webp","/ALAAZAMLY/assets/img/work/barista-prime-3.webp","/ALAAZAMLY/assets/img/work/barista-prime-4.webp"],"serge-de-nimes":["/ALAAZAMLY/assets/img/work/serge-de-nimes-1.webp","/ALAAZAMLY/assets/img/work/serge-de-nimes-2.webp","/ALAAZAMLY/assets/img/work/serge-de-nimes-3.webp","/ALAAZAMLY/assets/img/work/serge-de-nimes-4.webp","/ALAAZAMLY/assets/img/work/serge-de-nimes-5.webp","/ALAAZAMLY/assets/img/work/serge-de-nimes-6.webp"],"foody":["/ALAAZAMLY/assets/img/work/foody-1.webp","/ALAAZAMLY/assets/img/work/foody-2.webp"],"petopia":["/ALAAZAMLY/assets/img/work/petopia-1.webp","/ALAAZAMLY/assets/img/work/petopia-2.webp","/ALAAZAMLY/assets/img/work/petopia-3.webp"],"manukora":["/ALAAZAMLY/assets/img/work/manukora-1.webp"],
"cac":["/ALAAZAMLY/assets/img/work/cac-1.webp","/ALAAZAMLY/assets/img/work/cac-2.webp","/ALAAZAMLY/assets/img/work/cac-3.webp","/ALAAZAMLY/assets/img/work/cac-4.webp","/ALAAZAMLY/assets/img/work/cac-5.webp","/ALAAZAMLY/assets/img/work/cac-6.webp"],
"lune":["/ALAAZAMLY/assets/img/work/lune-1.webp","/ALAAZAMLY/assets/img/work/lune-2.webp","/ALAAZAMLY/assets/img/work/lune-3.webp","/ALAAZAMLY/assets/img/work/lune-4.webp"]};
const WEB=/website|landing|commerce|company|dashboard|platform|gallery/i;
const INFO={vanelia:"Vanelia sells handbags and accessories, so I built a store where every tote and signature silhouette gets its moment, and the walk from browsing to buying feels effortless.",brandist:"Brandist is a branding and events agency in Dubai. Its website leans on bold, high-contrast visuals so the services, events and gallery speak up before anyone scrolls far.",ovara:"Ovara’s identity rests on a confident, repeated wordmark softened by warm floral touches: a brand that is loud and gentle at the same time.",phm:"PHM is a physiotherapy and advanced clinical recovery practice. Its identity is meant to feel like a good clinic does: capable, calm and reassuring.","things-of-media":"Things of Media is a digital marketing and influencer agency. The website puts its work, creators and case studies in the spotlight, with an energy that matches the team’s.","barista-prime":"Barista Prime is a specialty coffee shop online. I shaped the store so beans, gear and accessories are easy to find, compare and buy, no barista training required.","serge-de-nimes":"Serge de Nimes makes custom, hand-embellished denim jackets in Dubai. This homepage makes each piece feel personal, and shopping for one feel just as simple.",manukora:"Manukora’s Starter Kit page, redesigned for calm. Every step, from the first click to the final payment, is meant to feel clear and unhurried.",virtuart:"VirtuArt brings the gallery to your screen: virtual rooms, curated collections and a shop where discovering art and buying it happen in one smooth flow.",cac:"CAC is an audit and redesign of the Cairo Court of Appeal website, making legal services, news and information easier to find in both Arabic and English.",lune:"Luné is a gold-tone jewelry brand, and a bold yellow accent gives its bestsellers and collections a glow that is elegant yet easy to shop.",petopia:"Petopia is a mobile app for pet parents, with care management, appointment booking and shopping, all built around how people really look after their animals.","hello-fresh":"Hello Fresh is a mobile app for ordering healthy food. I reworked its navigation and ordering flow so choosing dinner takes less thinking and fewer taps."};
const pj=document.getElementById("p-proj"),pjin=document.getElementById("pj-in");
function renderProject(sl){const i=Math.max(0,P.findIndex(p=>slug(p[0])===sl)),p=P[i],n=P[ORD[(ORD.indexOf(i)+1)%ORD.length]],k=slug(p[0]),web=WEB.test(p[1]),c=COLORS[i%COLORS.length],sh=SHOTS[k]||[];
  const brand=KIND[i].includes("Branding"),L=brand?["Brand Research","Moodboards","Concepts"]:["UX Research","User Flows","Wireframing"],R=brand?["Logo Design","Visual Identity","Brand Guidelines"]:web?["Web Design","Responsive UI","Developer Handoff"]:["UI Design","Interactive Prototyping","Design Systems"];
  const big=INFO[k]||`${p[0]} is a ${p[1].toLowerCase()} shaped around one idea: every ${web?"click":"tap"} should feel obvious.`;
  const fig=(j,cl)=>sh.length&&!sh[j]?"":`<figure class="${cl}${sh[j]?" has":""}" style="--c:${c}">${sh[j]?`<img loading="lazy" decoding="async" alt="${p[0]}: ${KIND[i].join(" and ").toLowerCase()} case study by Alaa Zamly" src="${sh[j]}"${wh(sh[j])}>`:""}</figure>`;
  pjin.innerHTML=`<div class="hbg-s"><button class="hbg" type="button" aria-label="Open menu" aria-haspopup="dialog"><svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 7h12M3 11h12"/></svg></button></div>
<div class="pj-head"><span class="bk"><a href="${BASE}/work/">All work</a><span><svg class="st" aria-hidden="true"><use href="#st"/></svg> ${p[0]}</span></span><span class="pj-r">${p[2]?`<a class="pill" href="https://www.behance.net/gallery/${p[2]}" target="_blank" rel="noopener">Read the full case study</a>`:""}</span></div>
<div class="pj-top"><h1 class="pj-big">${big}</h1>
<div class="pj-meta"><div><h3>Type</h3><ul>${KIND[i].map(x=>`<li>${x}</li>`).join("")}</ul></div><div><h3>Research</h3><ul>${L.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><h3>Design</h3><ul>${R.map(x=>`<li>${x}</li>`).join("")}</ul></div></div></div>
${STACK[k]?`<div class="pj-stack">${(Array.isArray(STACK[k])?STACK[k]:sh.map(()=>1)).reduce((a,n)=>{const g=sh.slice(a.i,a.i+n).map(x=>`<figure class="pj-hero has" style="--c:${c}"><img loading="lazy" decoding="async" alt="${p[0]}: ${KIND[i].join(" and ").toLowerCase()} case study by Alaa Zamly" src="${x}"${wh(x)}></figure>`).join("");a.h+=n>1?`<div class="pj-row" style="--n:${n}">${g}</div>`:g;a.i+=n;return a},{i:0,h:""}).h}</div>`:`${fig(0,"pj-hero")}${sh.length&&!sh[1]&&!sh[2]?"":`<div class="pj-two">${fig(1,"")}${fig(2,"")}</div>`}
<section class="pj-txt"><h3><svg class="st" aria-hidden="true"><use href="#st"/></svg> The problem</h3><p>Every project starts with one question: where do people get stuck? I studied the audience, looked hard at the competition, and let what I found decide what to fix first.</p></section>
${fig(3,"pj-hero")}
<section class="pj-txt l"><h3><svg class="st" aria-hidden="true"><use href="#st"/></svg> How it came together</h3><p>I sketched the flows, built the wireframes, then moved into polished Figma screens, testing every step against a real task. What came out is a responsive, component-based interface, packed up neatly for developers.</p></section>${sh.slice(4).map(x=>`<figure class="pj-hero has" style="--c:${c}"><img loading="lazy" decoding="async" alt="${p[0]}: ${KIND[i].join(" and ").toLowerCase()} case study by Alaa Zamly" src="${x}"${wh(x)}></figure>`).join("")}`}
<a class="pj-next" href="${BASE}/project/${slug(n[0])}/"><small>Up next</small><span>${n[0]}</span></a>
<p class="pj-copy">© 2026 Alaa Zamly. All rights reserved.</p>`;
  pj.scrollTop=0;return p[0]}
const T={home:"Alaa Zamly | UI/UX Designer in Cairo for Websites & Mobile Apps",work:"UI/UX Case Studies & Projects | Alaa Zamly",about:"About Alaa Zamly | UI/UX Designer in Cairo",contact:"Hire a UI/UX Designer | Contact Alaa Zamly"};
const MD={home:"Alaa Zamly is a Cairo-based UI/UX designer shaping clear, human websites, mobile apps and online stores. Browse the case studies, then say hello.",work:"Mobile apps, e-commerce stores, brand identities and websites designed by Alaa Zamly. Explore each UI/UX case study from first sketch to final screen.",about:"Meet Alaa Zamly, a UI/UX designer with 3+ years of experience in web and mobile design, user research, prototyping and design systems.",contact:"Have a website, app or online store in mind? Tell Alaa Zamly, a UI/UX designer in Cairo, what you’re building and get the conversation started."};
const ORIGIN=(()=>{try{return new URL(document.querySelector('link[rel="canonical"]').href).origin}catch(e){return location.origin}})();
const PATHS={home:BASE+"/",work:BASE+"/work/",about:BASE+"/about/",contact:BASE+"/contact/"};
const relOf=p=>p.startsWith(BASE)?p.slice(BASE.length):p;
const toPath=(h,sl)=>h==="project"?BASE+"/project/"+sl+"/":PATHS[h];
// old #hash links (shared before the move to real URLs) are forwarded to the clean URL
(function(){const x=location.hash.slice(1).split("/");if(!x[0])return;
  if(x[0]==="project"&&x[1]&&P.some(p=>slug(p[0])===x[1]))history.replaceState(null,"",toPath("project",x[1]));
  else if(x[0]!=="home"&&PATHS[x[0]])history.replaceState(null,"",PATHS[x[0]])})();
const setAttr=(sel,attr,val)=>{const el=document.querySelector(sel);if(el)el.setAttribute(attr,val)};
function route(){const parts=relOf(location.pathname).replace(/index\.html$/,"").split("/").filter(Boolean);let h=parts[0]||"home";if(h!=="project"&&!T[h])h="home";
  document.querySelectorAll(".page").forEach(p=>p.hidden=p.id!=="p-"+h);
  document.querySelectorAll(".dock a").forEach(a=>a.classList.toggle("on",a.dataset.p===(h==="project"?"work":h)));
  document.body.dataset.p=h;
  const pn=h==="project"?renderProject(parts[1]):"",sl=pn?slug(pn):"";
  const title=h==="project"?pn+" — UI/UX Case Study | Alaa Zamly":T[h];
  const desc=h==="project"?(INFO[sl]||pn+" is a UI/UX case study by Alaa Zamly, covering research, design decisions and the final screens."):MD[h];
  const url=ORIGIN+(h==="project"?toPath("project",sl):PATHS[h]);
  document.title=title;document.getElementById("md").content=desc;
  setAttr('link[rel="canonical"]',"href",url);
  setAttr('meta[property="og:url"]',"content",url);
  setAttr('meta[property="og:title"]',"content",title);setAttr('meta[name="twitter:title"]',"content",title);
  if(h!=="home"){setAttr('meta[property="og:description"]',"content",desc);setAttr('meta[name="twitter:description"]',"content",desc)}
  dispatchEvent(new Event("navigated"))}
// internal links move between pages without a reload
document.addEventListener("click",e=>{
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target.closest("a[href]");if(!a||a.target||a.hasAttribute("download"))return;
  const u=new URL(a.href,location.href);
  if(u.origin!==location.origin||!/^\/((work|about|contact|project\/[a-z0-9-]+)\/?)?$/.test(relOf(u.pathname)))return;
  e.preventDefault();
  if(u.pathname!==location.pathname){history.pushState(null,"",u.pathname);route()}});
addEventListener("popstate",route);route();
const mm=document.getElementById("mm"),mainEl=document.querySelector("main");let opener=null;
const setMenu=o=>{mm.hidden=!o;mainEl.inert=o;if(o)mm.querySelector(".mp-list a").focus()};
const closeMenu=()=>{setMenu(false);if(opener&&opener.isConnected)opener.focus();opener=null};
pjin.addEventListener("click",e=>{const b=e.target.closest(".hbg");if(b){opener=b;setMenu(true)}});
mm.querySelector(".mp-x").addEventListener("click",closeMenu);
addEventListener("keydown",e=>{if(e.key==="Escape"&&!mm.hidden)closeMenu()});
addEventListener("navigated",()=>{if(!mm.hidden){setMenu(false);opener=null}});
const dk=document.querySelector(".dock"),ms=document.getElementById("msr");
function fit(){const w=Math.max(ms.offsetWidth,300);dk.style.width=Math.min(w,innerWidth-28)+"px"}
fit();addEventListener("resize",fit);if(document.fonts)document.fonts.ready.then(fit);
document.addEventListener("contextmenu",e=>{if(e.target.closest("img,figure,.im"))e.preventDefault()});
document.addEventListener("dragstart",e=>{if(e.target.tagName==="IMG")e.preventDefault()});
document.getElementById("f").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.target);
  location.href="mailto:alaamohsensa@gmail.com?subject="+encodeURIComponent("Hello from your portfolio, "+d.get("n"))+"&body="+encodeURIComponent(d.get("m")+"\n\n"+d.get("n")+" — "+d.get("e"))});
/* LOADER logic: cards fall, the laptop follows the mouse to collect them, progress follows real readiness */
(function(){
const ld=document.getElementById("ld");if(!ld)return;
if(matchMedia("(prefers-reduced-motion:reduce)").matches){ld.remove();return}
const main=document.querySelector("main"),dock=document.querySelector(".dock"),mnu=document.querySelector(".mnu");
let unlocked=false;const unlock=()=>{if(unlocked)return;unlocked=true;main.inert=false;dock.inert=false;mnu.inert=false};
try{
main.inert=true;dock.inert=true;mnu.inert=true;
const $=id=>document.getElementById(id);
const fall=$("ldfall"),lap=$("ldlap"),lapi=$("ldlapi"),nEl=$("ldn"),lbl=$("ldlbl"),dots=$("lddots"),fill=$("ldfill"),pct=$("ldpct");
const N=P.length,pad=n=>String(n).padStart(2,"0"),rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
dots.innerHTML="<i></i>".repeat(N);const dotEls=dots.children;nEl.textContent=pad(0)+" / "+pad(N);
// card order: projects with a real thumbnail appear early; a missed card goes back in the queue
const queue=[...P.keys()],pi=P.findIndex(p=>p[0]==="Petopia");if(pi>2){queue.splice(pi,1);queue.splice(2,0,pi)}

// ---- real loading progress: fonts, project/hero images decoded, window load ----
const prog={dom:1,fonts:0,imgs:0,load:0},W={dom:.1,fonts:.25,imgs:.4,load:.25};
const real=()=>Object.keys(W).reduce((a,k)=>a+W[k]*prog[k],0);
const failsafe=(k,ms)=>setTimeout(()=>{prog[k]=1},ms);
(document.fonts?Promise.all([document.fonts.load('500 24px "Canela Condensed"'),document.fonts.ready]):Promise.resolve()).catch(()=>{}).then(()=>{prog.fonts=1});failsafe("fonts",4000);
const srcs=[...Object.values(IMG),typeof CUT!=="undefined"?CUT:0].filter(Boolean);
let decoded=0;if(!srcs.length)prog.imgs=1;
srcs.forEach(src=>{const im=new Image();im.src=src;(im.decode?im.decode():Promise.resolve()).catch(()=>{}).then(()=>{decoded++;prog.imgs=decoded/srcs.length})});failsafe("imgs",5000);
if(document.readyState==="complete")prog.load=1;else addEventListener("load",()=>{prog.load=1},{once:true});failsafe("load",6000);

// ---- mouse control ----
let mx=null;const onMove=e=>{mx=e.clientX};addEventListener("pointermove",onMove,{passive:true});addEventListener("pointerdown",onMove,{passive:true});

// ---- falling cards ----
let curWant=0,cards=[],collected=0,landing=0,sinceSpawn=0,gap=.3,lastX=null,pd=0,lx=0,finished=false,forceTimer=null;
const retrigger=(el,cls)=>{el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls)};
function spawn(idx){
  const p=P[idx],img=IMG[slug(p[0])],s=rnd(.82,1.2),w=(innerWidth<900?clamp(innerWidth*.21,72,120):clamp(innerWidth*.095,110,170))*s,h=w*1.4;
  const el=document.createElement("div");el.className="ldc";
  el.style.cssText=`--w:${w}px;--c:${COLORS[idx%COLORS.length]};width:${w}px;height:${h}px;z-index:${Math.round(s*10)};`+(s<.9?"filter:blur(.5px)":"");
  el.innerHTML=img?`<img alt="" src="${img}">`:`<span>${p[0]}</span>`;
  fall.appendChild(el);
  let x;for(let i=0;i<6;i++){x=clamp(innerWidth/2+curWant+rnd(-lap.offsetWidth*.38,lap.offsetWidth*.38),w,innerWidth-w);if(lastX===null||Math.abs(x-lastX)>w*.9)break}
  lastX=x;
  cards.push({el,idx,w,h,x0:x,x,y:-h,t:0,vy:rnd(300,400)*(.8+.3*s),A:rnd(6,18),om:rnd(1.2,2.4),ph:rnd(0,6.28),r0:rnd(-14,14),rv:rnd(-9,9),done:false,missed:false});
}
function collect(c){            // the moment a card touches the laptop it disappears and counts
  c.done=true;c.el.remove();
  collected++;
  nEl.textContent=pad(collected)+" / "+pad(N);retrigger(nEl,"tick");
  if(dotEls[collected-1])dotEls[collected-1].classList.add("on");
  lapi.style.setProperty("--k",(collected/N).toFixed(3));
  retrigger(lapi,"bump");retrigger(lapi,"hit");lapi.classList.add("proc");
}
function finish(){
  if(finished)return;
  finished=true;
  if(forceTimer!==null)clearTimeout(forceTimer);
  removeEventListener("pointermove",onMove);removeEventListener("pointerdown",onMove);
  pct.textContent="100%";lbl.textContent="Everything’s here. Welcome.";lapi.classList.remove("proc");retrigger(lapi,"hit");
  setTimeout(()=>{
    ld.classList.add("out");document.body.classList.add("ld-out");unlock();
    setTimeout(()=>{ld.remove();document.body.classList.remove("ld-out")},500);
  },260);
}
forceTimer=setTimeout(finish,6500); // Never keep the portfolio locked behind the intro animation.
let last=performance.now();
function frame(now){
  if(finished)return;
  const dt=Math.min(.05,(now-last)/1000)*2.6;last=now;
  const rr=real(),cx0=innerWidth/2;
  cards=cards.filter(c=>!c.done);
  sinceSpawn+=dt;
  if(queue.length&&collected+landing+cards.length<Math.min(N,Math.floor(rr*N)+4)&&sinceSpawn>=gap){sinceSpawn=0;gap=rnd(.27,.36);spawn(queue.shift())}
  const lr=lap.getBoundingClientRect(),lidTop=lr.top+lr.height*.03,lcx=cx0+lx,sy=lr.top+lr.height*.3,maxX=Math.max(0,cx0-lr.width*.42);
  let lead=null;
  for(const c of cards){
    c.t+=dt;c.y+=c.vy*(1+.16*c.t)*dt;c.x=c.x0+c.A*Math.sin(c.om*c.t+c.ph);
    c.el.style.transform=`translate3d(${c.x-c.w/2}px,${c.y-c.h/2}px,0) rotate(${c.r0+c.rv*c.t*.3}deg)`;
    if(!c.missed){
      if(!lead||c.y>lead.y)lead=c;
      if(c.y+c.h/2>=lidTop){if(Math.abs(c.x-lcx)<=lr.width*.45)collect(c);else{c.missed=true;c.el.style.zIndex=1}}
    }else if(c.y-c.h/2>innerHeight+20){c.el.remove();c.done=true;queue.push(c.idx)}
  }
  // the laptop moves only with the mouse (it rests in the centre until the mouse moves)
  const want=mx===null?0:clamp(mx-cx0,-maxX,maxX);curWant=want;
  lx+=(want-lx)*(1-Math.exp(-dt*9));
  const ry=mx===null?0:clamp((mx-cx0)/cx0,-1,1)*-6;
  lap.style.transform=`translate3d(${lx.toFixed(1)}px,0,0) perspective(1300px) rotateY(${ry.toFixed(2)}deg) rotateZ(${clamp((want-lx)*.025,-4,4).toFixed(2)}deg)`;
  // progress: never ahead of real readiness or of what was actually collected
  const cf=collected/N,ready=rr>=.999&&collected===N;
  let target=Math.min(rr,cf);if(!ready)target=Math.min(target,.99);else target=1;
  pd+=(target-pd)*Math.min(1,dt*7);if(ready&&1-pd<.003)pd=1;
  fill.style.transform=`scaleX(${pd.toFixed(4)})`;pct.textContent=Math.floor(pd*100)+"%";
  if(pd>=1){finish();return}
  requestAnimationFrame(frame);
}
requestAnimationFrame(t=>{last=t;frame(t)});
}catch(e){console.error(e);unlock();ld.remove()}
})();

