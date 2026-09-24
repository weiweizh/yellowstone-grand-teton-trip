const tripPlan = [
  {
    date: 'Oct 7 (Wed)', dateZh: '10月7日 (周三)',
    route: 'Boston → Jackson (JAC) → Grand Teton National Park', routeZh: '波士顿 → 杰克逊 (JAC) → 大提顿国家公园',
    overnight: "Elk's Country Inn, Jackson", overnightZh: '杰克逊 Elk\'s Country Inn',
    overnightMap: 'https://www.google.com/maps/search/?api=1&query=480%20W%20Pearl%20Ave%2C%20Jackson%2C%20WY%2083001',
    plan: [
      { time: '6:00 AM – 11:21 AM', title: '✈️ Flight: Boston → Jackson (JAC) · Delta · 7h 21m', titleZh: '✈️ 航班：波士顿 → 杰克逊 (JAC) · Delta · 7小时21分', tag: 'Flight' },
      { time: 'Midday', title: 'Arrive around noon, pick up rental car, and drive into Grand Teton National Park.', titleZh: '中午抵达，提取租车，开往大提顿国家公园。', tag: 'Logistics' },
      { time: '30 min', title: 'Mormon Row ⭐ Iconic barn with Teton backdrop', titleZh: '摩门教徒街 ⭐ 标志性木屋与提顿山脉背景', tag: 'Photo', image: 'https://www.nps.gov/grte/planyourvisit/images/IMG_3485_1.jpg' },
      { time: '45 min', title: 'Schwabacher Landing ⭐ Reflection photography', titleZh: '施瓦巴赫高地 ⭐ 经典倒影摄影点', tag: 'Photo', image: 'https://www.nps.gov/grte/planyourvisit/images/IMG_3545_1.jpg' },
      { time: '20 min', title: 'Snake River Overlook', titleZh: '蛇河观景点', tag: 'Viewpoint', image: 'https://www.nps.gov/grte/planyourvisit/images/Snake-River-Overlook-Ceremony-Location-1.jpg' },
      { time: '45–60 min', title: 'Oxbow Bend ⭐ Sunset & wildlife viewing', titleZh: '牛轭弯 ⭐ 日落与野生动物观赏', tag: 'Wildlife', image: 'https://www.nps.gov/grte/planyourvisit/images/oxbow_10_1.jpg' },
      { time: '30 min', title: 'Optional: Jackson Lake Lodge viewpoint', titleZh: '选游：杰克逊湖山庄观景点', tag: 'Optional' }
    ]
  },
  {
    date: 'Oct 8 (Thu)', dateZh: '10月8日 (周四)',
    route: 'Grand Teton → Yellowstone South Entrance → West Yellowstone', routeZh: '大提顿 → 黄石南门 → 西黄石',
    overnight: "Tao's Inn, West Yellowstone", overnightZh: "Tao's Inn，西黄石",
    overnightMap: 'https://www.google.com/maps/search/?api=1&query=102%20S%20Electric%20St%2C%20West%20Yellowstone%2C%20MT%2059758',
    plan: [
      { time: 'Morning', title: 'Drive north into Yellowstone National Park.', titleZh: '向北驶入黄石国家公园。', tag: 'Drive' },
      { time: '20 min', title: 'Lewis Falls', titleZh: '刘易斯瀑布', tag: 'Waterfall', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lewis%20Falls%20(44754598755).jpg' },
      { time: '45–60 min', title: 'West Thumb Geyser Basin ⭐ Geysers along Yellowstone Lake', titleZh: '西拇指间歇泉盆地 ⭐ 湖畔间歇泉', tag: 'Geyser', image: 'https://www.nps.gov/yell/planyourvisit/images/688_west_thumb.jpg' },
      { time: '30 min', title: 'Lake Yellowstone viewpoints', titleZh: '黄石湖观景点', tag: 'Viewpoint', image: 'https://www.nps.gov/yell/planyourvisit/images/688_lake_shore.jpg' },
      { time: '45 min', title: 'Mud Volcano Area', titleZh: '泥火山景区', tag: 'Geyser', image: 'https://www.nps.gov/yell/learn/nature/images/688_mudvolcano.jpg' },
      { time: '2–3 hrs', title: 'Hayden Valley ⭐ Excellent wildlife viewing: bison, elk, coyotes, possible bears & wolves', titleZh: '海登谷 ⭐ 绝佳野生动物观赏区：野牛、麋鹿、郊狼，可能看到熊和狼', tag: 'Wildlife', image: 'https://www.nps.gov/yell/planyourvisit/images/688_wolfalum.jpg' },
      { time: 'After sunset', title: 'Drive to West Yellowstone after sunset.', titleZh: '日落后驾车前往西黄石。', tag: 'Drive' }
    ]
  },
  {
    date: 'Oct 9 (Fri)', dateZh: '10月9日 (周五)',
    route: 'West Yellowstone → Old Faithful → Grand Prismatic → Norris → West Yellowstone', routeZh: '西黄石 → 老忠实 → 大棱镜 → 诺里斯 → 西黄石',
    overnight: "Tao's Inn, West Yellowstone", overnightZh: "Tao's Inn，西黄石",
    overnightMap: 'https://www.google.com/maps/search/?api=1&query=102%20S%20Electric%20St%2C%20West%20Yellowstone%2C%20MT%2059758',
    plan: [
      { time: '2–3 hrs', title: 'Old Faithful & Upper Geyser Basin', titleZh: '老忠实喷泉及上间歇泉盆地', tag: 'Must-See', details: 'Old Faithful eruption · Morning Glory Pool · Castle & Grand Geysers if timing allows', detailsZh: '老忠实喷发 · 牵牛花池 · 如时间允许参观城堡和大间歇泉', image: 'https://www.nps.gov/yell/planyourvisit/images/beehive.jpg' },
      { time: '1.5–2 hrs', title: 'Grand Prismatic Spring ⭐ Boardwalk & Overlook Trail', titleZh: '大棱镜泉 ⭐ 栈道与俯瞰步道', tag: 'Must-See', details: 'The Overlook Trail offers the best panoramic view.', detailsZh: '俯瞰步道提供最佳全景视角。', image: 'https://www.nps.gov/yell/planyourvisit/images/gp.jpg' },
      { time: '1.5–2 hrs', title: 'Norris Geyser Basin', titleZh: '诺里斯间歇泉盆地', tag: 'Geyser', details: 'Porcelain Basin · Back Basin', detailsZh: '白瓷盆地 · 后盆地', image: 'https://www.nps.gov/yell/planyourvisit/images/688_norris_boardwalk.jpg' },
      { time: 'Evening', title: 'Return to West Yellowstone.', titleZh: '返回西黄石。', tag: 'Drive' }
    ]
  },
  {
    date: 'Oct 10 (Sat)', dateZh: '10月10日 (周六)',
    route: 'West Yellowstone → Madison → Canyon → West Yellowstone', routeZh: '西黄石 → 麦迪逊 → 峡谷区 → 西黄石',
    overnight: "Tao's Inn, West Yellowstone", overnightZh: "Tao's Inn，西黄石",
    overnightMap: 'https://www.google.com/maps/search/?api=1&query=102%20S%20Electric%20St%2C%20West%20Yellowstone%2C%20MT%2059758',
    plan: [
      { time: 'Day plan', title: 'Scenic canyon day.', titleZh: '峡谷风景日。', tag: 'Overview' },
      { time: '20 min', title: 'Gibbon Falls (Optional)', titleZh: '吉本瀑布（选游）', tag: 'Waterfall', image: 'https://www.nps.gov/yell/planyourvisit/images/688_gibbon.jpg' },
      { time: '3–4 hrs', title: 'Grand Canyon of the Yellowstone ⭐', titleZh: '黄石大峡谷 ⭐', tag: 'Must-See', details: 'Artist Point · Lookout Point · Brink of Lower Falls · Upper Falls viewpoint. Enjoy sunset if weather is favorable.', detailsZh: '艺术家点 · 观景点 · 下瀑布边缘 · 上瀑布观景点。天气允许时欣赏日落。', image: 'https://www.nps.gov/yell/planyourvisit/images/688_artistspoint.jpg' },
      { time: 'Evening', title: 'Return to West Yellowstone.', titleZh: '返回西黄石。', tag: 'Drive' }
    ]
  },
  {
    date: 'Oct 11 (Sun)', dateZh: '10月11日 (周日)',
    route: 'West Yellowstone → Norris → Mammoth → Lamar Valley → Gardiner', routeZh: '西黄石 → 诺里斯 → 猛犸温泉 → 拉马尔谷 → 加德纳',
    overnight: "Yellowstone Gateway Inn, Gardiner", overnightZh: '加德纳 Yellowstone Gateway Inn',
    overnightMap: 'https://www.google.com/maps/search/?api=1&query=103%20Bigelow%20Ln%2C%20Gardiner%2C%20MT%2059030%2C%20USA',
    plan: [
      { time: '6:30 AM', title: 'Early departure. Optional Norris area stop if missed previously.', titleZh: '早出发。若之前错过，可选游诺里斯区域。', tag: 'Drive' },
      { time: '1.5–2 hrs', title: 'Mammoth Hot Springs', titleZh: '猛犸温泉', tag: 'Geyser', details: 'Lower Terrace Boardwalk · Upper Terrace Drive', detailsZh: '下台地栈道 · 上台地环路', image: 'https://www.nps.gov/yell/planyourvisit/images/688sunrise.jpg' },
      { time: '3–4 hrs', title: "Lamar Valley ⭐ Yellowstone's premier wildlife area", titleZh: '拉马尔谷 ⭐ 黄石顶级野生动物观测区', tag: 'Wildlife', details: 'Bison herds · Elk · Pronghorn · Coyotes · Possible wolves & bears', detailsZh: '野牛群 · 麋鹿 · 叉角羚 · 郊狼 · 可能看到狼和熊', image: 'https://www.nps.gov/common/uploads/structured_data/29EB105C-BCE3-4859-9B83F22E1091AA2F.jpg' },
      { time: 'After sunset', title: 'Drive to Gardiner after sunset.', titleZh: '日落后驾车前往加德纳。', tag: 'Drive' }
    ]
  },
  {
    date: 'Oct 12 (Mon)', dateZh: '10月12日 (周一)',
    route: 'Gardiner → Bozeman (BZN) ✈️ → Boston', routeZh: '加德纳 → 博兹曼 (BZN) ✈️ → 波士顿',
    overnight: 'Fly Home', overnightZh: '返程航班',
    plan: [
      { time: 'Morning', title: "Relaxed morning. Optional Mammoth Hot Springs (1 hr) or wildlife viewing near Gardiner / North Entrance.", titleZh: '轻松的早晨。可选游猛犸温泉（1小时）或加德纳 / 北门附近的野生动物。', tag: 'Optional' },
      { time: '11:00–11:30 AM', title: 'Leave Gardiner and drive to Bozeman Airport (~1.5 hrs).', titleZh: '11:00–11:30 离开加德纳，开往博兹曼机场（约1.5小时）。', tag: 'Logistics' },
      { time: '2:30 PM', title: 'Recommended airport arrival: allow time for gas, rental car return, and check-in.', titleZh: '建议 2:30 PM 到达机场：预留加油、还车和办理登机手续的时间。', tag: 'Logistics' },
      { time: '4:15 PM – 1:15 AM', title: '✈️ Flight: Bozeman (BZN) → Boston · Southwest · Oct 13 arrival', titleZh: '✈️ 航班：博兹曼 (BZN) → 波士顿 · Southwest · 10月13日抵达', tag: 'Flight' }
    ]
  }
];

let savedState = {};
try { savedState = JSON.parse(localStorage.getItem('yellowstone-state') || '{}'); } catch { savedState = {}; }
let language = savedState.language || 'en';
let selectedDay = Number.isInteger(savedState.selectedDay) ? Math.min(Math.max(savedState.selectedDay, 0), tripPlan.length - 1) : 0;
let expanded = savedState.expanded ?? false;
const cardVariant = 'journal';
const visited = savedState.visited || {};
const openActivities = savedState.openActivities || {};
const $ = selector => document.querySelector(selector);
const copy = {
  en: { brand: 'Yellowstone & Grand Teton Trip', routeKicker: 'THE BIG LOOP', routeDistance: 'JACKSON → BOZEMAN', route: 'YOUR ROUTE', expand: 'Show details', collapse: 'Hide details', overnight: 'OVERNIGHT', visited: count => `${count} / ${tripPlan.reduce((total, day) => total + day.plan.length, 0)} VISITED`, details: 'Details', closeDetails: 'Hide', maps: 'Maps', jackson: 'Jackson', westYellowstone: 'West Yellowstone', gardiner: 'Gardiner', bozeman: 'Bozeman', westNights: '3 NIGHTS', gardinerNights: '1 NIGHT', fieldNote: 'FIELD NOTE', packingTitle: 'Leave room<br><em>for the unexpected.</em>', fieldCopy: 'Wildlife moves on its own schedule. Give yourself time between the points on the map, pull over often, and keep your camera ready.', footerTitle: 'FIELD NOTES / YELLOWSTONE 2026', footerTagline: 'MADE FOR THE ROAD' },
  zh: { brand: '黄石与大提顿之旅', routeKicker: '大环线旅程', routeDistance: '杰克逊-大提顿国家公园 → 博兹曼', route: '你的路线', expand: '显示详情', collapse: '隐藏详情', overnight: '住宿', visited: count => `已完成 ${count} / ${tripPlan.reduce((total, day) => total + day.plan.length, 0)}`, details: '详情', closeDetails: '收起', maps: '地图', jackson: '杰克逊-大提顿国家公园', westYellowstone: '西黄石', gardiner: '加德纳', bozeman: '博兹曼', westNights: '3晚', gardinerNights: '1晚', fieldNote: '荒野笔记', packingTitle: '为意外<br><em>留一点空间。</em>', fieldCopy: '野生动物有自己的节奏。给景点之间留出余地，常常靠边停车，也别忘了随时准备好相机。', footerTitle: '旅行手记 / 黄石 2026', footerTagline: '为旅途而作' }
};
const tagCopy = { Photo: '摄影', Viewpoint: '观景点', Wildlife: '野生动物', Optional: '选游', Logistics: '行程', Flight: '航班', Drive: '驾车', Geyser: '间歇泉', 'Must-See': '必看', Waterfall: '瀑布', Overview: '概览' };
const timeCopy = { Flight: '航班', Midday: '中午', Morning: '早晨', Evening: '晚上', 'After sunset': '日落后', 'Day plan': '全天', '30 min': '30分钟', '45 min': '45分钟', '20 min': '20分钟', '45–60 min': '45–60分钟', '2–3 hrs': '2–3小时', '1.5–2 hrs': '1.5–2小时', '3–4 hrs': '3–4小时', '1 hr': '1小时', '6:00 AM – 11:21 AM': '上午6:00 – 11:21', '6:30 AM': '早上6:30', '11:00–11:30 AM': '上午11:00–11:30', '2:30 PM': '下午2:30', '4:15 PM – 1:15 AM': '下午4:15 – 凌晨1:15' };

function persistState() { try { localStorage.setItem('yellowstone-state', JSON.stringify({ language, selectedDay, expanded, cardVariant, visited, openActivities })); } catch {} }

function selectDay(index, moveFocus = false) {
  selectedDay = index;
  persistState();
  render();
  const target = $('#itinerary');
  target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  if (moveFocus) requestAnimationFrame(() => document.querySelector(`[data-day="${index}"]`)?.focus());
}

function renderDayButtons() {
  $('#dayTabs').innerHTML = tripPlan.map((day, index) => `<div class="day-tab-wrap"><button class="day-tab ${selectedDay === index ? 'active' : ''}" id="day-tab-${index}" type="button" data-day="${index}" role="tab" aria-selected="${selectedDay === index}" aria-controls="itinerary-panel" tabindex="${selectedDay === index ? '0' : '-1'}"><b>${language === 'en' ? `DAY ${String(index + 1).padStart(2, '0')}` : `第${index + 1}天`}</b><span>${language === 'en' ? day.date : day.dateZh}</span><small>${language === 'en' ? day.overnight : day.overnightZh}</small></button></div>`).join('');
  document.querySelectorAll('[data-day]').forEach(button => {
    button.addEventListener('click', () => selectDay(Number(button.dataset.day)));
    button.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = Number(button.dataset.day);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tripPlan.length - 1 : (current + (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1) + tripPlan.length) % tripPlan.length;
      selectDay(next, true);
    });
  });
}

function renderActivity(activity, dayIndex, activityIndex) {
  const key = `${dayIndex}-${activityIndex}`;
  const isVisited = Boolean(visited[key]);
  const title = language === 'en' ? activity.title : activity.titleZh;
  const details = language === 'en' ? activity.details : activity.detailsZh;
  const isOpen = expanded || Boolean(openActivities[key]);
  const time = language === 'zh' ? (timeCopy[activity.time] || activity.time) : activity.time;
  const tag = language === 'zh' ? (tagCopy[activity.tag] || activity.tag) : activity.tag;
  return `<div class="timeline-item"><span class="sequence" aria-label="${language === 'zh' ? `第${activityIndex + 1}站` : `Stop ${activityIndex + 1}`}" >${String(activityIndex + 1).padStart(2, '0')}</span><div class="item ${activity.image ? '' : 'no-image'} ${isOpen ? 'is-open' : ''}"><div class="item-content"><span class="item-time">${time}</span><div class="item-text">${title}${details && isOpen ? `<small class="item-details">${details}</small>` : ''}</div><span class="tag">${tag}</span><div class="item-actions"><button class="icon-btn detail-toggle" type="button" data-detail="${key}" aria-expanded="${isOpen}"><i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}"></i>${isOpen ? copy[language].closeDetails : copy[language].details}</button><button class="icon-btn ${isVisited ? 'visited' : ''}" type="button" data-visit="${key}"><i data-lucide="${isVisited ? 'check-circle-2' : 'circle'}"></i>${isVisited ? (language === 'en' ? 'Visited' : '已去过') : (language === 'en' ? 'Mark visited' : '标记已去')}</button><a class="icon-btn" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.title.replace('⭐', ''))}"><i data-lucide="map"></i>${copy[language].maps}</a></div></div>${activity.image ? `<img class="item-image" loading="lazy" src="${activity.image}" alt="${title}" onerror="this.remove()" />` : ''}</div></div>`;
}

function localizeStatic() {
  const textKeys = ['routeKicker', 'yourRoute', 'expand', 'fieldNote', 'fieldCopy', 'jackson', 'westYellowstone', 'gardiner', 'bozeman'];
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (copy[language][key]) element.textContent = copy[language][key];
  });
  $('#brandTitle').textContent = copy[language].brand;
  $('#routeDistance').textContent = copy[language].routeDistance;
  $('#westNights').textContent = copy[language].westNights;
  $('#gardinerNights').textContent = copy[language].gardinerNights;
  $('#packingTitle').innerHTML = copy[language].packingTitle;
  $('#footerTitle').textContent = copy[language].footerTitle;
  $('#footerTagline').textContent = copy[language].footerTagline;
  $('#expandToggle span').textContent = expanded ? copy[language].collapse : copy[language].expand;
}

function render() {
  document.documentElement.lang = language;
  localizeStatic();
  renderDayButtons();
  const day = tripPlan[selectedDay];
  const route = language === 'en' ? day.route : day.routeZh;
  const overnight = language === 'en' ? day.overnight : day.overnightZh;
  const overnightMarkup = day.overnightMap ? `<a class="overnight-link" href="${day.overnightMap}" target="_blank" rel="noreferrer"><i data-lucide="map-pin"></i><strong>${overnight}</strong><i data-lucide="external-link"></i></a>` : `<strong>${overnight}</strong>`;
  $('#itinerary').innerHTML = `<article class="day-card variant-${cardVariant}" id="itinerary-panel" role="tabpanel" aria-labelledby="day-tab-${selectedDay}" tabindex="-1"><div class="day-card-head"><div><div class="day-index">DAY ${String(selectedDay + 1).padStart(2, '0')} / 06</div><h2 class="day-title">${route}<small>${language === 'en' ? day.routeZh : day.route}</small></h2></div><div class="overnight"><span>${copy[language].overnight}</span>${overnightMarkup}${day.flight ? `<div class="flight">✈ ${day.flight}</div>` : ''}</div></div><div class="day-items timeline">${day.plan.map((activity, index) => renderActivity(activity, selectedDay, index)).join('')}</div></article>`;
  const visitedCount = Object.keys(visited).filter(key => visited[key]).length;
  $('#visitedSummary').textContent = copy[language].visited(visitedCount);
  $('#expandToggle span').textContent = expanded ? copy[language].collapse : copy[language].expand;
  $('#langToggle').innerHTML = language === 'en' ? '<span class="lang-active">EN</span><span> / </span><span>中</span>' : '<span>EN</span><span> / </span><span class="lang-active">中</span>';
  document.querySelector('[data-i18n="yourRoute"]').textContent = copy[language].route;
  if (window.lucide) lucide.createIcons();
  persistState();
}

document.addEventListener('click', event => {
  const detailButton = event.target.closest('[data-detail]');
  if (detailButton) {
    const key = detailButton.dataset.detail;
    openActivities[key] = !openActivities[key];
    persistState();
    render();
    return;
  }
  const button = event.target.closest('[data-visit]');
  if (!button) return;
  const key = button.dataset.visit;
  if (visited[key]) delete visited[key]; else visited[key] = true;
  persistState();
  render();
});

$('#expandToggle').addEventListener('click', () => { expanded = !expanded; persistState(); render(); });
$('#langToggle').addEventListener('click', () => { language = language === 'en' ? 'zh' : 'en'; document.documentElement.lang = language; persistState(); render(); });
window.addEventListener('online', () => $('#offlineStatus').setAttribute('hidden', ''));
window.addEventListener('offline', () => { $('#offlineStatus').textContent = language === 'en' ? 'Offline mode: itinerary text is still available.' : '离线模式：行程文字仍可使用。'; $('#offlineStatus').removeAttribute('hidden'); });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=21').catch(() => {});
if (!navigator.onLine) window.dispatchEvent(new Event('offline'));
render();
