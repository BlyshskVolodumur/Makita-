var TOOLS = [
  {id:"breaker", name:"Відбійний молоток Bosch GSH 11 E Professional", img:"https://www.bosch-professional.com/binary/ocsmedia/optimized/750x422/o379703v54_GSH_11_E_sos_F4_0611316703_08_32_41_50.png", fb:"assets/tools/breaker.svg", specs:[["Потужність", "1500 Вт"], ["Енергія удару", "16,8 Дж"], ["Частота ударів", "900–1890 уд/хв"], ["Патрон", "SDS max"], ["Вага", "10,1 кг"]]},
  {id:"perforator", name:"Перфоратор Makita HR2470", img:"https://cdn.27.ua/799/ce/0f/249359_3.jpeg", fb:"assets/tools/perforator.svg", specs:[["Потужність", "780 Вт"], ["Енергія удару", "2,7 Дж"], ["Частота ударів", "4500 уд/хв"], ["Свердління в бетоні", "до 24 мм"], ["Патрон", "SDS-plus"], ["Вага", "2,6 кг"]]},
  {id:"plate", name:"Віброплита бензинова Кентавр ВП 90-1КБ", img:"https://kentavr.ua/image/cache/catalog/demo/vibroplity/vibroplita-benzinovaya-kentavr-vp-90-1kb-00/kentavr-vp-90-1kb-01-1000x765.jpg", fb:"assets/tools/plate.svg", specs:[["Двигун", "Loncin, 196 см³, 6,5 к.с."], ["Відцентрова сила", "14 кН"], ["Частота вібрації", "5500 об/хв"], ["Розмір плити", "540×420 мм"], ["Макс. швидкість руху", "15 м/хв"], ["Паливний бак", "13 л"], ["Вага", "81,9 кг"]]},
  {id:"rammer", name:"Вібротрамбовка електрична Кентавр ВТ95Е", img:"https://kentavr.ua/image/cache/catalog/demo/vibrotrambovki/vibrotrambovka-elektricheskaya-kentavr-vt95e/vibrotrambovka-elektricheskaya-kentavr-vt95e-1-1000x765.jpg", fb:"assets/tools/rammer.svg", specs:[["Потужність", "2,2 кВт, 220 В"], ["Відцентрова сила", "12 кН"], ["Частота ударів", "600–640 уд/хв"], ["Розмір плити", "330×280 мм"], ["Макс. глибина ущільнення", "450 мм"], ["Швидкість руху", "9–12 м/хв"], ["Вага", "83 кг"]]},
  {id:"welder", name:"Зварювальний апарат IGBT Dnipro-M SAB-15", img:"https://static.dnipro-m.ua/cache/products/6287/catalog_product_main_322810.jpg", fb:"assets/tools/welder.svg", specs:[["Макс. зварювальний струм", "150 А"], ["Електроди", "діаметром до 4 мм"], ["Напруга підпалу дуги", "65 В"], ["Габарити", "275×112×187 мм"], ["Вага", "3,1 кг"]]},
  {id:"genergy", name:"Генератор бензиновий Genergy Limited 7000 RC V2", img:"https://220volt.com.ua/storage/catalog_products/174218/image/1-25.jpg", fb:"assets/tools/generator.svg", specs:[["Номінальна потужність", "6,5 кВт"], ["Максимальна потужність", "7 кВт"], ["Двигун", "420 см³, 15 к.с., бензиновий"], ["Паливний бак", "25 л"], ["Запуск", "ручний / електростартер"], ["Вага", "94 кг"]]},
  {id:"mitre", name:"Торцювальна пила Metabo KGS 216 M", img:"https://www.metabo.com/ua/out/pictures/generated/product/1/1200_800_70/kgs-216-m-1321600s_51.jpg", fb:"assets/tools/mitresaw.svg", specs:[["Потужність", "1200 Вт"], ["Пиляльний диск", "216×30 мм"], ["Макс. ширина різу 90°/45°", "305 / 215 мм"], ["Макс. глибина різу 90°/45°", "70 / 40 мм"], ["Обороти холостого ходу", "5000 об/хв"], ["Вага", "13,4 кг"]]},
  {id:"scheppach", name:"Генератор бензиновий Scheppach SG3200", img:"https://shop.scheppach.com/imgproxy/s:1200:1200/media/62/97/fc/1721509037/443245_5906220903_keyfact.jpeg", fb:"assets/tools/generator.svg", specs:[["Номінальна потужність", "2500 Вт"], ["Максимальна потужність", "2800 Вт"], ["Двигун", "196 см³, 4-тактний"], ["Паливний бак", "15 л"], ["Розетки", "2×230 В, 12 В"], ["Вага", "44 кг"]]},
  {id:"sander", name:"Шліфувальна машина для стін Stark DWS-801", img:"https://stark-tools.com.ua/wp-content/gallery/product_gallery_6403/stark-dws80128429-500x500-1.jpg", fb:"assets/tools/wallsander.svg", specs:[["Потужність", "800 Вт"], ["Діаметр диска", "225 мм"], ["Обороти", "700–1700 об/хв"], ["Вага", "7 кг"]]},
  {id:"heater", name:"Газова теплова гармата Vitals GH-154t + газовий балон 20 л", img:"https://vitals.ua/image/cache/catalog/demo/obogrevateli/obogrevatelygazovi/obigrivach-gazovij-vitals-gh-154t/obigrivach-gazovij-vitals-gh-154t-01-1000x765.jpg", fb:"assets/tools/heater.svg", specs:[["Теплова потужність", "15 кВт"], ["Витрата повітря", "320 м³/год"], ["Витрата газу", "1,09 кг/год"], ["Запалювання", "п’єзо"], ["Вага", "4,3 кг"]]},
  {id:"vacuum", name:"Пилосос будівельний Makita VC2512L", img:"https://si.makitamedia.com/images/1_Makita/101_machines/10108_PNG_Web/VC2512L.png", fb:"assets/tools/vacuum.svg", specs:[["Потужність", "1000 Вт"], ["Макс. розрідження", "21 кПа"], ["Макс. об’єм повітря", "3,6 м³/хв"], ["Бак для пилу / води", "21 / 18 л"], ["Клас захисту від пилу", "L"], ["Вага", "8 кг"]]},
  {id:"vibrator", name:"Глибинний вібратор для бетону Stark CV-850 Industrial", img:"https://stark-tools.com.ua/wp-content/uploads/2016/10/cv-850pic-s.png", fb:"assets/tools/vibrator.svg", specs:[["Потужність", "850 Вт, 220 В"], ["Частота вібрації", "13 000 вібр/хв"], ["Вага", "2,3 кг"]]}
];
var $ = function(id){return document.getElementById(id)};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function card(t){
  return '<a class="card hv" href="#'+t.id+'"><div class="photo"><img src="'+t.img+'" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=\''+t.fb+'\'"></div><div class="name">'+esc(t.name)+'</div><div class="price"><div><span>Ціна</span><span class="red">Уточнюйте</span></div></div></a>';
}
$('grid').innerHTML = TOOLS.map(card).join('');

function route(){
  var id = location.hash.slice(1);
  var i = -1;
  TOOLS.forEach(function(t,n){ if(t.id===id) i = n; });
  if(i >= 0){
    var t = TOOLS[i];
    $('list').hidden = true; $('detail').hidden = false;
    $('dName').textContent = t.name;
    $('dPhoto').innerHTML = '<img src="'+t.img+'" alt="'+esc(t.name)+'" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=\''+t.fb+'\'">';
    $('dSpecs').innerHTML = t.specs.map(function(s){return '<div class="row"><span>'+esc(s[0])+'</span><span>'+esc(s[1])+'</span></div>'}).join('');
    var others = TOOLS.filter(function(x){return x.id!==t.id});
    $('others').innerHTML = others.map(card).join('');
    document.title = t.name + ' · Makita+ оренда';
    window.scrollTo(0,0);
  } else {
    $('list').hidden = false; $('detail').hidden = true;
    document.title = 'Makita+ Оренда інструменту';
    if(id === 'contacts'){ $('contacts').scrollIntoView({block:'center'}); }
    else { window.scrollTo(0,0); }
  }
}
window.addEventListener('hashchange', route);
route();

var root = document.documentElement, btn = $('theme');
function setTheme(d){
  root.setAttribute('data-theme', d ? 'dark' : 'light');
  btn.setAttribute('aria-label', d ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
  try{ localStorage.setItem('theme', d ? 'dark' : 'light'); }catch(e){}
}
var saved = null; try{ saved = localStorage.getItem('theme'); }catch(e){}
setTheme(saved === 'dark');
btn.onclick = function(){ setTheme(root.getAttribute('data-theme') !== 'dark'); };
var menuEl = document.querySelector('.menu'), menuBtn = $('menuBtn');
menuBtn.onclick = function(){ var o = menuEl.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); };
menuEl.addEventListener('click', function(e){ if(e.target.closest('.nav')){ menuEl.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); } });
