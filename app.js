const entries=[{"name": "Cycle weather", "sequence": ["D", "R", "U", "D", "R", "U", "R"], "status": "Press report", "source": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/"}, {"name": "Raise wanted level", "sequence": ["L", "D", "R", "D", "U", "R", "U"], "status": "Press report", "source": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/"}, {"name": "Drunk", "sequence": ["U", "L", "R", "U", "U", "L", "R", "U", "L", "R"], "status": "Press report", "source": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/"}, {"name": "Cash $250,000", "sequence": ["U", "R", "D", "L", "U", "L", "D", "R"], "status": "Press report", "source": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/"}];

const q=document.getElementById("q"),filter=document.getElementById("filter"),results=document.getElementById("results");
for(const category of new Set(entries.map(e=>e.status)))filter.add(new Option(category));
function draw(){const rows=entries.filter(e=>(filter.value==="All"||e.status===filter.value)&&(e.name+" "+(e.detail||"")).toLowerCase().includes(q.value.trim().toLowerCase()));
 results.replaceChildren();document.getElementById("count").textContent=rows.length+" results";
 for(const e of rows){const card=document.createElement("article"),title=document.createElement("strong"),detail=document.createElement("p"),source=document.createElement("a");
 title.textContent=e.name;detail.textContent=e.sequence?e.sequence.map(k=>({U:"↑",D:"↓",L:"←",R:"→"})[k]).join(" "):e.detail;
 source.href=e.source;source.textContent=e.status+" · Open source";card.append(title,detail,source);results.append(card);}}
q.oninput=filter.onchange=draw;draw();
