/* 小樱魔法阵 + 塔罗手势/翻牌/高亮逻辑 */

/**
 * 父页面预请求摄像头协议：
 * play.js 在用户点全屏时发送 cygame-request-camera，
 * iframe 在非全屏状态下弹出 getUserMedia 权限窗，
 * 成功后缓存 stream 并回复 cygame-camera-granted，
 * 后续 _initCamera 检测到缓存 stream 直接复用，不再弹窗。
 */
var __preCameraStream = null;
window.addEventListener('message', function (ev) {
  var d = ev && ev.data;
  if (!d || typeof d !== 'object') return;
  if (d.type === 'cygame-request-camera' && !__preCameraStream) {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 320, max: 480 }, height: { ideal: 240, max: 360 }, frameRate: { ideal: 20, max: 24 } },
      audio: false
    }).then(function (stream) {
      __preCameraStream = stream;
      try { window.parent.postMessage({ type: 'cygame-camera-granted' }, '*'); } catch (_) {}
    }).catch(function () {
      try { window.parent.postMessage({ type: 'cygame-camera-denied' }, '*'); } catch (_) {}
    });
  }
});

// 注意：这里的卡池严格以「小樱卡片/」文件夹内真实存在的卡面为准，
// 避免出现“卡面是 SHIELD 但文案/标题是 WINDY”的错配。
const SAKURA_CARDS = [
  { id: 'shield', name: '盾', nameEn: 'THE SHIELD', image: '小樱卡片/1774582442715.png', color: '#ffd700', element: 'shield', spell: 'THE SHIELD', spellSub: '守护之盾' },
  { id: 'power', name: '力', nameEn: 'THE POWER', image: '小樱卡片/1774582448138.png', color: '#ff6b9d', element: 'power', spell: 'THE POWER', spellSub: '力量之源' },
  { id: 'loop', name: '轮', nameEn: 'THE LOOP', image: '小樱卡片/1774582452433.png', color: '#ff8a50', element: 'loop', spell: 'THE LOOP', spellSub: '循环之轮' },
  { id: 'mirror-a', name: '镜', nameEn: 'THE MIRROR', image: '小樱卡片/1774582457953.png', color: '#7c4dff', element: 'mirror1', spell: 'THE MIRROR', spellSub: '镜·壹' },
  { id: 'mirror-b', name: '镜', nameEn: 'THE MIRROR', image: '小樱卡片/1774582462348.png', color: '#6f6cff', element: 'mirror2', spell: 'THE MIRROR', spellSub: '镜·贰' },
  { id: 'big', name: '大', nameEn: 'THE BIG', image: '小樱卡片/1774582466893.png', color: '#f48fb1', element: 'big', spell: 'THE BIG', spellSub: '放大之力' },
  { id: 'change', name: '替', nameEn: 'THE CHANGE', image: '小樱卡片/1774582472949.png', color: '#ffca28', element: 'change', spell: 'THE CHANGE', spellSub: '变化之机' },
  { id: 'firey', name: '火', nameEn: 'THE FIREY', image: '小樱卡片/1774582477793.png', color: '#ff7043', element: 'firey', spell: 'THE FIREY', spellSub: '烈焰之灵' },
  { id: 'voice', name: '声', nameEn: 'THE VOICE', image: '小樱卡片/1774582486777.png', color: '#ce93d8', element: 'voice', spell: 'THE VOICE', spellSub: '言灵之声' },
  { id: 'lock', name: '锁', nameEn: 'THE LOCK', image: '小樱卡片/1774582491394.png', color: '#80deea', element: 'lock', spell: 'THE LOCK', spellSub: '封印之锁' },
  { id: 'cloud', name: '云', nameEn: 'THE CLOUD', image: '小樱卡片/1774582495411.png', color: '#29b6f6', element: 'cloud', spell: 'THE CLOUD', spellSub: '云雾之幕' },
  { id: 'rain', name: '雨', nameEn: 'THE RAIN', image: '小樱卡片/1774582504273.png', color: '#4fc3f7', element: 'rain', spell: 'THE RAIN', spellSub: '雨落之息' },
  { id: 'watery', name: '水', nameEn: 'THE WATERY', image: '小樱卡片/1774582508431.png', color: '#29b6f6', element: 'watery', spell: 'THE WATERY', spellSub: '水之精灵' },
  { id: 'jump', name: '跳', nameEn: 'THE JUMP', image: '小樱卡片/1774582512090.png', color: '#ffd700', element: 'jump', spell: 'THE JUMP', spellSub: '跃动之翼' },
  { id: 'silent', name: '静', nameEn: 'THE SILENT', image: '小樱卡片/1774582515925.png', color: '#b388ff', element: 'silent', spell: 'THE SILENT', spellSub: '静默之域' },
  { id: 'time', name: '时', nameEn: 'THE TIME', image: '小樱卡片/1774582526216.png', color: '#ce93d8', element: 'time', spell: 'THE TIME', spellSub: '时之精灵' },
  { id: 'return', name: '戻', nameEn: 'THE RETURN', image: '小樱卡片/1774582530351.png', color: '#80deea', element: 'return', spell: 'THE RETURN', spellSub: '归还之刻' },
  { id: 'erase', name: '消', nameEn: 'THE ERASE', image: '小樱卡片/1774582534383.png', color: '#ff6b9d', element: 'erase', spell: 'THE ERASE', spellSub: '抹消之印' },
];
const CARD_BACKS = ['小樱卡片/背面1.jpeg', '小樱卡片/背面2.jpeg'];
// 牌阵展示数量保持适中（不一次铺满18张），但抽取卡池仍来自 SAKURA_CARDS 全量
const NUM_CARDS = 8;

/** 命运解读（仅保留"解读"一句） */
const CARD_MEANINGS = {
  shield: '这张牌出现时，说明你正需要自我保护。守好边界没有错，但也别忘了让温暖进来。',
  power: '愿望正在靠近你。你比自己以为的更有力量——但接受帮助不是软弱，而是更大的力量。',
  loop: '最近是不是觉得生活在原地打转？别急——每一圈你都在变得更成熟。螺旋也是上升。',
  mirror1: '不要害怕被看穿。那些真正懂你的人，爱的就是真实的你——不完美才最动人。',
  mirror2: '试着站在他人的镜中看看自己——你在别人眼中，比你想象的好得多。给自己多些认可吧。',
  big: '是时候把格局打开了。别被眼前的小框框限住——你的舞台远比你看到的更广阔。',
  change: '换个角度，世界就不一样了。困扰你的事，站到对面去看，也许一下就通了。',
  firey: '你的内心正涌动着惊人的能量——去做那件一直不敢做的事吧！信念会帮你突破难关。',
  voice: '有些话，不要再憋着了。说出来，才能被听到，才能被珍惜。',
  lock: '也许你正觉得被什么困住了。但打开它的钥匙一直在你手中，只是你还没想起来用。',
  cloud: '眼前的迷雾只是暂时的。没有永远的阴天——风一吹，答案就在云开之处。',
  rain: '淋过雨的人，更懂得珍惜晴天。你现在经历的一切，终会变成最珍贵的养分。撑住。',
  watery: '你拥有打开他人心扉的温柔力量。不必硬碰硬——以柔克刚，你会找到最聪明的那条路。',
  jump: '恭喜，你正处于最佳状态！现在就是最好的起跳点——纵身一跃，你会飞得比想象中更高。',
  silent: '给自己一段安静的时间吧。这不是逃避，而是沉淀——外界喧嚣褪去，内心的答案自然会浮现。',
  time: '日子看似在原地踏步？别怕。每天看似重复的经历，都在为未来的你积蓄力量。磨练即成长。',
  return: '过去的经历塑造了现在的你。回头看一眼是为了更好地理解自己——然后转身，大步向前。',
  erase: '有些东西消失了，不必慌张。腾出空间，才装得下更好的。命运在说：稍等一下，好运马上就来。',
  light: '别再向外寻找答案了。光一直在你心里——你本身就是光源，只是有时忘了点亮自己。',
  shadow: '有影子恰恰说明身旁有光。那些令人不安的未知并不可怕——鼓起勇气正视，它们反而会变成你的力量。',
  snow: '一切纷扰终会落定。现在的寒冷只是暂时的——雪融之后，便是崭新的起点。',
  flower: '恭喜！这是最好的征兆之一——好事正在靠近，张开双手，迎接属于你的盛放吧！🌸',
};

/** 一句金句 */
const CARD_QUOTES = {
  shield: '守住该守的，放下该放的。',
  power: '真正的力量，是相信自己能做到。',
  loop: '循环不是困局，是更上一层楼的阶梯。',
  mirror1: '最好的伪装，是不再需要伪装。',
  mirror2: '你眼中的自己，远不如别人眼中的你闪耀。',
  big: '放大梦想，世界才会跟着变大。',
  change: '换位思考，是最被低估的超能力。',
  firey: '心中有火，眼中便有光。',
  voice: '你的声音值得被世界听见。',
  lock: '每一把锁，都在等那把对的钥匙。',
  cloud: '拨开云雾，自有晴天。',
  rain: '每一场雨，都在浇灌未来的花。',
  watery: '不争不抢，水到自然渠成。',
  jump: '每一次起跳，都是对平庸的告别。',
  silent: '安静下来，才能听到内心的声音。',
  time: '时间从不辜负，每一步都算数。',
  return: '回头看一眼，然后大步向前。',
  erase: '失去是另一种形式的获得。',
  light: '你不必追光，你就是光。',
  shadow: '每一道影子，都在证明光的存在。',
  snow: '大雪覆盖一切，也藏着崭新的开始。',
  flower: '你值得一场毫无理由的盛放。',
};

// 属性标签功能已移除
const ST = { IDLE: 'idle', STACKED: 'stacked', SPREAD: 'spread' };

const STATE = {
  IDLE: 'idle',
  SUMMONED: 'summoned',
  FOCUSED: 'focused',
  HOLDING: 'holding',
  RESULT: 'result',
};

/* ===== 星空 / 刻度 / 粒子 / 星尘（与原版一致）===== */
// 全局暂停标志：动画密集时暂停装饰性canvas
let _decorPaused = false;
function setDecorPaused(v) { _decorPaused = v; }

function initStars() {
  const c = document.getElementById('starfield');
  if (!c) return;
  const x = c.getContext('2d');
  let stars = [];
  let bgCache = null; // 缓存静态背景到离屏 canvas
  // 粉金色系星星颜色
  const starColors = [
    [255, 215, 140],  // 金色
    [255, 182, 193],  // 粉色
    [255, 200, 160],  // 暖金
    [255, 170, 200],  // 玫粉
    [255, 230, 200],  // 浅金
  ];
  function resize() {
    // 限制 canvas 像素为 CSS 尺寸的一半，大幅减少绘制像素量
    const scale = Math.min(1, 0.5);
    c.width = Math.round(innerWidth * scale);
    c.height = Math.round(innerHeight * scale);
    stars = [];
    // 减少星星数量 60→40
    for (let i = 0; i < 40; i++) {
      const col = starColors[Math.floor(Math.random() * starColors.length)];
      stars.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.7 + 0.2,
        sp: Math.random() * 0.01 + 0.003,
        ph: Math.random() * 6.28,
        col,
        isCross: Math.random() < 0.25, // 25%概率画十字星
      });
    }
    // 预渲染静态背景到离屏canvas
    bgCache = document.createElement('canvas');
    bgCache.width = c.width;
    bgCache.height = c.height;
    const bx = bgCache.getContext('2d');
    const bg = bx.createRadialGradient(c.width * 0.5, c.height * 0.4, 0, c.width * 0.5, c.height * 0.4, c.width * 0.8);
    bg.addColorStop(0, '#110e28');
    bg.addColorStop(0.5, '#0a0818');
    bg.addColorStop(1, '#050410');
    bx.fillStyle = bg;
    bx.fillRect(0, 0, c.width, c.height);
    const gl = bx.createRadialGradient(c.width * 0.5, c.height * 0.75, 0, c.width * 0.5, c.height * 0.75, c.width * 0.4);
    gl.addColorStop(0, 'rgba(180,140,20,0.06)');
    gl.addColorStop(1, 'transparent');
    bx.fillStyle = gl;
    bx.fillRect(0, 0, c.width, c.height);
  }
  resize();
  addEventListener('resize', resize);
  let frame = 0;
  (function loop() {
    // 每5帧渲染一次，星空是纯装饰不需要60fps
    frame++;
    if (frame % 5 !== 0 || _decorPaused) { requestAnimationFrame(loop); return; }
    if (bgCache) x.drawImage(bgCache, 0, 0);
    const t = Date.now() * 0.001;
    for (const s of stars) {
      const tw = Math.sin(t * s.sp * 60 + s.ph) * 0.3 + 0.7;
      const alpha = s.a * tw;
      const [r, g, b] = s.col;
      if (s.isCross) {
        // 十字形四角星（无shadowBlur，轻量）
        const len = s.r * 3 + 1;
        x.save();
        x.translate(s.x, s.y);
        x.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        x.lineWidth = 1.2;
        x.beginPath();
        x.moveTo(-len, 0); x.lineTo(len, 0);
        x.moveTo(0, -len); x.lineTo(0, len);
        x.stroke();
        // 中心亮点
        x.beginPath();
        x.arc(0, 0, s.r * 0.6, 0, 6.28);
        x.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        x.fill();
        x.restore();
      } else {
        x.beginPath();
        x.arc(s.x, s.y, s.r, 0, 6.28);
        x.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        x.fill();
      }
    }
    requestAnimationFrame(loop);
  })();
}

function genTicks() {
  const g = document.getElementById('tick-marks');
  if (!g) return;
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * 6.28 - 1.5708;
    const big = i % 6 === 0;
    const len = big ? 12 : 5;
    const r = 270;
    const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    ln.setAttribute('x1', 300 + Math.cos(a) * (r - len));
    ln.setAttribute('y1', 300 + Math.sin(a) * (r - len));
    ln.setAttribute('x2', 300 + Math.cos(a) * r);
    ln.setAttribute('y2', 300 + Math.sin(a) * r);
    ln.setAttribute('stroke', `rgba(212,160,23,${big ? 0.5 : 0.25})`);
    ln.setAttribute('stroke-width', big ? '1.5' : '0.8');
    g.appendChild(ln);
  }
}

function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  const x = c.getContext('2d');
  let ps = [];
  function resize() {
    // 降分辨率，减少绘制像素量
    c.width = Math.round(innerWidth * 0.5);
    c.height = Math.round(innerHeight * 0.5);
  }
  resize();
  addEventListener('resize', resize);
  let frame = 0;
  (function loop() {
    frame++;
    // 每4帧渲染一次
    if (frame % 4 !== 0 || _decorPaused) { requestAnimationFrame(loop); return; }
    x.clearRect(0, 0, c.width, c.height);
    if (ps.length < 8 && Math.random() < 0.04)
      ps.push({
        x: Math.random() * c.width,
        y: c.height + 5,
        vy: -0.4 - Math.random() * 1.2,
        s: Math.random() * 2 + 0.5,
        life: 1,
        d: 0.003 + Math.random() * 0.004,
      });
    ps = ps.filter(p => {
      p.y += p.vy;
      p.life -= p.d;
      if (p.life <= 0) return false;
      x.beginPath();
      x.arc(p.x, p.y, p.s * p.life, 0, 6.28);
      x.fillStyle = `rgba(212,170,40,${p.life * 0.5})`;
      x.fill();
      return true;
    });
    requestAnimationFrame(loop);
  })();
}

class Stardust {
  constructor() {
    this.c = document.getElementById('stardust');
    if (!this.c) return;
    this.x = this.c.getContext('2d');
    this.ps = [];
    this._running = false;
    this._resize();
    addEventListener('resize', () => this._resize());
  }
  _resize() {
    if (!this.c) return;
    this.c.width = Math.round(innerWidth * 0.5);
    this.c.height = Math.round(innerHeight * 0.5);
  }
  burst(cx, cy, n = 20) {
    if (!this.x) return;
    const cols = ['#ffd700', '#ff6b9d', '#ffb3d1', '#fff'];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28;
      const sp = 1 + Math.random() * 3;
      this.ps.push({
        x: cx, y: cy,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 1,
        s: Math.random() * 2.5 + 1,
        life: 1,
        d: 0.015 + Math.random() * 0.02,
        col: cols[i % cols.length],
      });
    }
    this._ensureRunning();
  }
  /* 全屏爆发：在随机位置产生多组粒子 */
  fullBurst(n = 40) {
    if (!this.c) return;
    const cx = this.c.width / 2, cy = this.c.height / 2;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28, d = Math.random() * 150;
      this.burst(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 2);
    }
  }
  _ensureRunning() {
    if (this._running) return;
    this._running = true;
    this._loop();
  }
  _loop() {
    if (!this.x || !this.c) return;
    if (this.ps.length === 0) {
      this._running = false;
      this.x.clearRect(0, 0, this.c.width, this.c.height);
      return;
    }
    this.x.clearRect(0, 0, this.c.width, this.c.height);
    this.ps = this.ps.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.life -= p.d;
      if (p.life <= 0) return false;
      this.x.globalAlpha = p.life;
      this.x.beginPath();
      this.x.arc(p.x, p.y, p.s * p.life, 0, 6.28);
      this.x.fillStyle = p.col;
      this.x.fill();
      this.x.globalAlpha = 1;
      return true;
    });
    requestAnimationFrame(() => this._loop());
  }
}

/* ===== 3D 圆环：塔罗式速度 + 吸附 + 正面/锁定高亮 ===== */
class SakuraTarotRing {
  constructor(sd) {
    this.ring = document.getElementById('ring');
    this.container = document.getElementById('card-ring-container');
    this.sd = sd;
    this.cards = [];
    this.state = ST.IDLE;
    this._recalling = false;
    this.spinAngle = 0;
    this._lastPalmX = undefined;
    this._momentum = 0;
    this._dragMoved = false;
    this._velocity = 0;
    this._isAnimating = false;
    this._friction = 0.92;
    this._frontCardPending = false;
    this._palmIdleTimer = null;
    this.deck = [];
    this._resizeBound = false;
    this._setupTouch();
  }

  _getRadius() {
    const circleW = Math.min(innerWidth * 0.92, 680);
    const magicR = (circleW / 2) * 0.95;
    const w = innerWidth;
    if (w <= 480) return Math.min(magicR, 210);
    if (w <= 768) return Math.min(magicR, 275);
    return Math.min(magicR, 320);
  }

  _cardTransform(baseAngle, radius, zLift = 0) {
    const rad = (baseAngle * Math.PI) / 180;
    const x = Math.sin(rad) * radius;
    const y = -Math.cos(rad) * radius;
    return `translate3d(${x}px, ${y}px, ${zLift}px) rotateZ(${baseAngle}deg) rotateX(-90deg)`;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  _buildDeck() {
    // 从全量卡池随机取 NUM_CARDS 张（不重复），用于本轮牌阵展示与抽取
    this.deck = this._shuffle(SAKURA_CARDS.slice()).slice(0, NUM_CARDS);
  }

  create(force = false) {
    if (!this.deck.length || force) this._buildDeck();
    this.ring.innerHTML = '';
    this.cards = [];
    const radius = this._getRadius();
    for (let i = 0; i < NUM_CARDS; i++) {
      const angle = (360 / NUM_CARDS) * i;
      const bk = CARD_BACKS[i % CARD_BACKS.length];
      const el = document.createElement('div');
      el.className = 'card';
      el.dataset.index = i;
      el.style.transform = this._cardTransform(angle, radius);
      el.dataset.angle = angle;
      const c = this.deck[i];
      el.innerHTML = `
        <div class="card-star-halo" aria-hidden="true"></div>
        <div class="card-inner">
          <div class="face face-front"><img src="${c.image}" loading="lazy" alt=""></div>
          <div class="face face-back"><img src="${bk}" loading="lazy" alt=""></div>
        </div>
        <div class="card-name">${c.name}</div>`;
      this.ring.appendChild(el);
      this.cards.push({ el, angle, bk, radius });
    }
    this._dragMoved = false;
    this._layoutCards();
    if (!this._resizeBound) {
      this._resizeBound = true;
      addEventListener('resize', () => this._onResize());
    }
  }

  _onResize() {
    const radius = this._getRadius();
    this.cards.forEach(c => {
      c.radius = radius;
    });
    this._layoutCards();
  }

  _updateAllCards() {
    // 只更新 ring 容器的旋转角度即可（卡片位置不变，靠容器旋转驱动）
    if (this.ring) this.ring.style.transform = `rotateZ(${this.spinAngle}deg)`;
  }

  /* 需要更新所有卡片位置时调用（resize、focused 等） */
  _layoutCards() {
    const radius = this._getRadius();
    this.cards.forEach(c => {
      if (c.el.style.getPropertyValue('--collapsed') === '1') return;
      const lift = c.el.classList.contains('focused-card') ? 38 : 0;
      c.el.style.transform = this._cardTransform(c.angle, radius, lift);
    });
    if (this.ring) this.ring.style.transform = `rotateZ(${this.spinAngle}deg)`;
  }

  _updateSpin() {
    this._updateAllCards();
    if (this.state === ST.SPREAD) this._updateFrontCard();
  }

  getCurrentIndex() {
    const step = 360 / NUM_CARDS;
    let idx = Math.round(-this.spinAngle / step);
    idx = ((idx % NUM_CARDS) + NUM_CARDS) % NUM_CARDS;
    return idx;
  }

  getCurrentCard() {
    return this.deck[this.getCurrentIndex()];
  }

  _updateFrontCard() {
    if (this.state !== ST.SPREAD) return;
    const idx = this.getCurrentIndex();
    if (idx === this._lastFrontIdx) return; // 没变化不操作DOM
    // 只操作变化的两张卡牌
    if (this._lastFrontIdx != null && this.cards[this._lastFrontIdx]) {
      this.cards[this._lastFrontIdx].el.classList.remove('front-card');
    }
    this._lastFrontIdx = idx;
    if (this.cards[idx]) this.cards[idx].el.classList.add('front-card');
  }

  setFocused(on) {
    this.clearFocused();
    if (!on || this.state !== ST.SPREAD) return;
    // 停止旋转动量和物理动画
    this._velocity = 0;
    this._momentum = 0;
    this._isAnimating = false;
    this._snapToNearest();
    const idx = this.getCurrentIndex();
    const c = this.cards[idx];
    if (c) {
      c.el.classList.add('focused-card');
      // 只更新被聚焦卡牌的lift，不重新布局全部
      const radius = this._getRadius();
      c.el.style.transform = this._cardTransform(c.angle, radius, 38);
    }
  }

  clearFocused() {
    const radius = this._getRadius();
    this.cards.forEach(c => {
      if (c.el.classList.contains('focused-card')) {
        c.el.classList.remove('focused-card');
        // 只恢复之前被focused的卡牌
        c.el.style.transform = this._cardTransform(c.angle, radius, 0);
      }
    });
  }

  addVelocity(v) {
    if (this.state !== ST.SPREAD) return;
    this._velocity += v;
    this._startPhysics();
  }

  /* 直接用手掌位移驱动旋转（不经过物理引擎，更跟手） */
  palmDrive(deltaAngle) {
    if (this.state !== ST.SPREAD) return;
    // 有卡牌被focused时不允许旋转
    if (this.cards.some(c => c.el.classList.contains('focused-card'))) return;
    this.spinAngle += deltaAngle;
    this._velocity = deltaAngle * 0.5; // 给一点残余动量用于松手后惯性
    // 直接更新容器旋转，不走_updateSpin中的front-card检测（高频操作太重）
    if (this.ring) this.ring.style.transform = `rotateZ(${this.spinAngle}deg)`;
    // 标记需要在下一个空闲时刻更新front-card
    if (!this._frontCardPending) {
      this._frontCardPending = true;
      requestAnimationFrame(() => {
        this._frontCardPending = false;
        this._updateFrontCard();
      });
    }
    // 重置松手惯性定时器
    clearTimeout(this._palmIdleTimer);
    this._palmIdleTimer = setTimeout(() => {
      this._startPhysics(); // 松手后才启动惯性吸附
    }, 100);
  }

  _startPhysics() {
    if (this._isAnimating) return;
    this._isAnimating = true;
    const loop = () => {
      this._velocity *= this._friction;
      this.spinAngle += this._velocity;
      this._updateSpin();
      if (Math.abs(this._velocity) > 0.15) {
        requestAnimationFrame(loop);
      } else {
        this._velocity = 0;
        this._snapToNearest();
        this._isAnimating = false;
      }
    };
    requestAnimationFrame(loop);
  }

  _snapToNearest() {
    const step = 360 / NUM_CARDS;
    this.spinAngle = Math.round(this.spinAngle / step) * step;
    this._updateSpin();
  }

  _setupTouch() {
    const scene = document.getElementById('scene');
    let pointerDown = false;
    let startX = 0;
    let startAngle = 0;
    let totalDragDist = 0;
    let lastMomentum = 0;

    const onDown = clientX => {
      if (this.state !== ST.SPREAD) return;
      pointerDown = true;
      startX = clientX;
      startAngle = this.spinAngle;
      totalDragDist = 0;
      lastMomentum = 0;
      this._dragMoved = false;
    };

    const onMove = clientX => {
      if (!pointerDown) return;
      const dx = clientX - startX;
      totalDragDist = Math.abs(dx);
      if (totalDragDist > 8) this._dragMoved = true;
      const newAngle = startAngle + dx * 0.45;
      lastMomentum = newAngle - this.spinAngle;
      this.spinAngle = newAngle;
      this._updateSpin();
    };

    const onUp = () => {
      if (!pointerDown) return;
      pointerDown = false;
      if (this._dragMoved) {
        this._momentum = lastMomentum;
        this._inertia();
      }
    };

    scene.addEventListener('touchstart', e => onDown(e.touches[0].clientX), { passive: true });
    scene.addEventListener('touchmove', e => onMove(e.touches[0].clientX), { passive: true });
    scene.addEventListener('touchend', () => onUp(), { passive: true });
    scene.addEventListener('mousedown', e => onDown(e.clientX));
    addEventListener('mousemove', e => onMove(e.clientX));
    addEventListener('mouseup', () => onUp());
  }

  _inertia() {
    const decay = () => {
      if (Math.abs(this._momentum) < 0.05) {
        this._snapToNearest();
        return;
      }
      this._momentum *= 0.92;
      this.spinAngle += this._momentum;
      this._updateSpin();
      requestAnimationFrame(decay);
    };
    requestAnimationFrame(decay);
  }

  summon() {
    if (this.state !== ST.IDLE) return;
    this.state = ST.STACKED;
    this.spinAngle = 0;
    this._velocity = 0;
    this._isAnimating = false;
    if (this.ring) this.ring.style.transform = 'rotateZ(0deg)';

    document.getElementById('magic-circle-wrap').classList.add('show');
    const b = document.getElementById('burst');
    b.classList.remove('pop');
    // 用rAF替代void offsetWidth强制reflow
    requestAnimationFrame(() => {
      b.classList.add('pop');
    });

    // 批量设置初始状态（一次reflow）
    this.cards.forEach(c => {
      c.el.classList.remove('flipped', 'show', 'flip-anim', 'emerge-spread', 'focused-card', 'front-card', 'anim-transform');
      c.el.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
      c.el.style.transform = 'translate3d(0, 0, 0) rotateZ(0deg) rotateX(-90deg)';
      c.el.style.setProperty('--collapsed', '1');
    });

    // 用单个rAF + 交错延迟批量显示
    requestAnimationFrame(() => {
      this.cards.forEach((c, i) => {
        setTimeout(() => c.el.classList.add('show'), i * 50);
      });
    });
  }

  spread() {
    if (this.state !== ST.STACKED) return;
    this.state = ST.SPREAD;
    this._velocity = 0;
    const radius = this._getRadius();
    this.cards.forEach((c, i) => {
      c.el.classList.add('entering', 'emerge-spread', 'anim-transform');
      setTimeout(() => {
        c.el.style.removeProperty('--collapsed');
        c.el.style.transform = this._cardTransform(c.angle, radius);
      }, i * 40);
      // 动画结束后移除transition类，让后续旋转不受transition拖累
      setTimeout(() => {
        c.el.classList.remove('entering', 'anim-transform');
      }, 900);
      setTimeout(() => c.el.classList.remove('emerge-spread'), 920);
    });
    setTimeout(() => this._updateFrontCard(), 950);
  }

  recall() {
    if (this.state === ST.IDLE || this._recalling) return;
    this._recalling = true;
    this._velocity = 0;
    this._isAnimating = false;
    this.clearFocused();
    document.getElementById('detail')?.classList.remove('show');

    // Phase 1: 所有卡牌飞往屏幕上方
    requestAnimationFrame(() => {
      this.cards.forEach((c, i) => {
        c.el.classList.add('recall-phase1');
        c.el.style.transitionDelay = `${i * 40}ms`;
      });
    });

    // Phase 2: 卡牌汇聚到中心收回
    const phase2Delay = NUM_CARDS * 40 + 500;
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.cards.forEach((c, i) => {
          c.el.classList.remove('recall-phase1');
          c.el.classList.add('recall-phase2');
          c.el.style.transitionDelay = `${i * 30}ms`;
        });
      });

      // Phase 3: 清理状态 → 回到堆叠状态（魔法阵保持显示）
      const phase3Delay = NUM_CARDS * 30 + 450;
      setTimeout(() => {
        this.cards.forEach(c => {
          c.el.classList.remove('show', 'entering', 'emerge-spread', 'flipped', 'flip-anim', 'focused-card', 'front-card', 'anim-transform', 'recall-phase1', 'recall-phase2');
          c.el.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
          c.el.style.transitionDelay = '';
          c.el.style.opacity = '';
          // 将卡牌收回到中心堆叠位置
          c.el.style.transform = 'translate3d(0, 0, 0) rotateZ(0deg) rotateX(-90deg)';
          c.el.style.setProperty('--collapsed', '1');
        });
        this._lastFrontIdx = null;
        // 回到堆叠状态，而不是IDLE——魔法阵保持显示
        this.state = ST.STACKED;
        this.spinAngle = 0;
        if (this.ring) this.ring.style.transform = 'rotateZ(0deg)';
        this._recalling = false;
        setDecorPaused(false);
        // 魔法阵不隐藏！保持 show 状态

        // 重新显示卡牌（堆叠在中心）
        requestAnimationFrame(() => {
          this.cards.forEach((c, i) => {
            setTimeout(() => c.el.classList.add('show'), i * 30);
          });
        });
      }, phase3Delay);
    }, phase2Delay);
  }

  clearPalmTracking() {
    this._lastPalmX = undefined;
  }
}

class SakuraTarotApp {
  constructor() {
    this.state = STATE.IDLE;
    this._cardsSpread = false;
    this.gestureEngine = new GestureEngine();
    this.ring = null;
    this.sd = null;
    this.particles = null;
    this.spellEffect = null;
    this._focusedCard = null;
    this._holdingCard = null;
    this.els = {};
    this._lastIdlePalmHintAt = 0;
    this._summoning = false;
    this._spreading = false;
    this._lastResultCard = null;
  }

  async boot() {
    this._cacheDom();
    initStars();
    genTicks();
    initParticles();
    this.sd = new Stardust();
    this.ring = new SakuraTarotRing(this.sd);
    this.particles = new ParticleSystem(this.els.particleCanvas);
    this.spellEffect = new SpellEffect(this.els.fxCanvas);
    this._bindUI();
    this._tryPlayBGM(); // 尽早尝试静音播放
    // 不在这里初始化摄像头——等用户点击"开始"后再调起
    this._showStartScreen();
  }

  /* 展示开始界面，等用户点击后才初始化摄像头和手势 */
  _showStartScreen() {
    const loading = this.els.loading;
    if (!loading) {
      this._startGame();
      return;
    }
    const btn = document.getElementById('btn-start');
    if (!btn) {
      this._startGame();
      return;
    }
    // 等 MediaPipe 加载完后才显示按钮（bootstrap 中已完成加载）
    btn.style.display = '';
    // 清空加载状态文字
    if (this.els.loadingStatus) this.els.loadingStatus.textContent = '';

    const startHandler = () => {
      btn.removeEventListener('click', startHandler);
      btn.removeEventListener('touchstart', startHandler);
      // 按钮变为加载状态
      btn.disabled = true;
      btn.textContent = '正在准备…';
      btn.style.opacity = '0.6';
      this._tryPlayBGM();
      this._startGame();
    };
    btn.addEventListener('click', startHandler);
    btn.addEventListener('touchstart', startHandler, { passive: true });
  }

  /* 用户确认开始后：初始化摄像头 → 手势引擎 → 进入游戏 */
  async _startGame() {
    const loading = this.els.loading;
    try {
      await this._initCamera();
      await this._initGesture();
    } catch (err) {
      // 错误已在 _initCamera/_initGesture 中处理
      return;
    }
    // 加载完成，隐藏 loading 进入游戏
    if (loading) {
      loading.style.transition = 'opacity 0.5s';
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
        this.els.app?.classList.remove('hidden');
      }, 500);
    } else {
      this.els.app?.classList.remove('hidden');
    }
    this._updateHint('✊ 握拳召唤 → 🖐️ 张手展开牌阵');
    this._updateBadge('小樱·魔法阵');
  }

  _cacheDom() {
    this.els = {
      app: document.getElementById('app'),
      loading: document.getElementById('loading-screen'),
      loadingStatus: document.getElementById('loading-status'),
      camera: document.getElementById('gcam'),
      gestureHint: document.getElementById('gesture-hint'),
      hintText: document.querySelector('#gesture-hint .hint-text'),
      stateBadge: document.getElementById('state-badge'),
      selectedView: document.getElementById('card-selected-view'),
      selectedFlipper: document.getElementById('selected-card-flipper'),
      selectedFront: document.getElementById('selected-card-front'),
      selectedCardName: document.getElementById('selected-card-name'),
      selectedGlow: document.getElementById('selected-glow'),
      releaseHint: document.getElementById('release-hint'),
      fxCanvas: document.getElementById('fx-canvas'),
      particleCanvas: document.getElementById('particle-canvas'),
      cardRingContainer: document.getElementById('card-ring-container'),
      bgm: document.getElementById('bgm'),
      selectedCardWrap: document.querySelector('#card-selected-view .selected-card-wrapper'),
      // 结果页
      resultView: document.getElementById('sakura-result-view'),
      srCardGlow: document.getElementById('sr-card-glow'),
      srCardFrame: document.getElementById('sr-card-frame'),
      srSpellEn: document.getElementById('sr-spell-en'),
      srSpellCn: document.getElementById('sr-spell-cn'),
      srTags: document.getElementById('sr-tags'),
      srQuote: document.getElementById('sr-quote'),
      srDestinyBody: document.getElementById('sr-destiny-body'),
      debugPanel: document.getElementById('debug-panel'),
      debugCanvas: document.getElementById('debug-canvas'),
      dbgGesture: document.getElementById('dbg-gesture'),
      dbgState: document.getElementById('dbg-state'),
      dbgHands: document.getElementById('dbg-hands'),
      dbgFps: document.getElementById('dbg-fps'),
      dbgConfidence: document.getElementById('dbg-confidence'),
    };
  }

  _setMagicCircleSelectionActive(active) {
    document.getElementById('magic-circle-wrap')?.classList.toggle('mc-selection-active', active);
    document.getElementById('magic-glow')?.classList.toggle('mc-selection-active', active);
  }

  _bindUI() {
    document.getElementById('btn-debug')?.addEventListener('click', () => {
      this.els.debugPanel.classList.toggle('hidden');
    });
    document.getElementById('debug-close')?.addEventListener('click', () => {
      this.els.debugPanel.classList.add('hidden');
    });
    document.getElementById('btn-mirror')?.addEventListener('click', () => {
      this.gestureEngine.mirrored = !this.gestureEngine.mirrored;
    });

    // 结果页按钮
    document.getElementById('sr-btn-retry')?.addEventListener('click', () => {
      this._restartDivination();
    });
    document.getElementById('sr-btn-save')?.addEventListener('click', async () => {
      await this._saveShareImage();
    });
  }

  _setLoading(text) {
    if (this.els.loadingStatus) this.els.loadingStatus.textContent = text;
  }

  _hideLoading() {
    const loading = this.els.loading;
    if (!loading) {
      this.els.app?.classList.remove('hidden');
      return;
    }
    // 改为"点击开始"，确保用户交互后才播放音乐
    if (this.els.loadingStatus) {
      this.els.loadingStatus.textContent = '✦ 封印解除，开始占卜 ✦';
      this.els.loadingStatus.style.cursor = 'pointer';
      this.els.loadingStatus.style.fontSize = '16px';
      this.els.loadingStatus.style.marginTop = '20px';
    }
    const startHandler = () => {
      loading.removeEventListener('click', startHandler);
      loading.removeEventListener('touchstart', startHandler);
      loading.style.transition = 'opacity 0.5s';
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
        this.els.app?.classList.remove('hidden');
      }, 500);
      this._tryPlayBGM();
    };
    loading.addEventListener('click', startHandler);
    loading.addEventListener('touchstart', startHandler, { passive: true });
  }

  _tryPlayBGM() {
    if (this._bgmStarted) return;
    const bgm = this.els.bgm;
    if (!bgm) return;
    bgm.loop = true;

    // Safari 要求 play() 必须在用户交互的同步调用栈内
    // 所以每次都直接尝试 play，不分静音/有声两步
    const attempt = () => {
      if (this._bgmStarted) return;
      bgm.volume = 0;
      bgm.muted = false;
      const p = bgm.play();
      if (p && p.then) {
        p.then(() => {
          this._bgmStarted = true;
          // 渐入音量
          let vol = 0;
          const fade = setInterval(() => {
            vol = Math.min(vol + 0.05, 0.35);
            bgm.volume = vol;
            if (vol >= 0.35) clearInterval(fade);
          }, 80);
          console.log('[BGM] Playing with fade-in');
        }).catch(e => {
          console.log('[BGM] Blocked:', e.message);
        });
      }
    };

    // 立即尝试一次（非用户交互可能被拒）
    attempt();

    // 注册多种用户交互事件，确保在用户手势回调栈内同步调用 play
    if (!this._bgmListenersSet) {
      this._bgmListenersSet = true;
      const events = ['click', 'touchstart', 'pointerdown', 'keydown'];
      const handler = () => {
        attempt();
        if (this._bgmStarted) {
          events.forEach(ev => document.removeEventListener(ev, handler));
        }
      };
      events.forEach(ev => document.addEventListener(ev, handler, { passive: true }));
    }
  }

  async _initCamera() {
    this._setLoading('正在连接摄像头…');
    try {
      // 优先使用父页面预请求时缓存的 stream（避免 Safari 全屏下二次弹窗）
      var stream;
      if (typeof __preCameraStream !== 'undefined' && __preCameraStream) {
        stream = __preCameraStream;
        __preCameraStream = null; // 用完清空
      } else {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 320, max: 480 },
            height: { ideal: 240, max: 360 },
            frameRate: { ideal: 20, max: 24 },
          },
          audio: false,
        });
      }
      this.els.camera.srcObject = stream;
      await new Promise(r => {
        this.els.camera.onloadedmetadata = r;
      });
      await this.els.camera.play();
      this._setLoading('摄像头已就绪');
      this._tryPlayBGM(); // 摄像头授权后再次尝试播放BGM
      // 通知父页面（play.html）摄像头已授权，以便恢复全屏
      try { window.parent.postMessage({ type: 'cygame-camera-granted' }, '*'); } catch (_) {}
    } catch (err) {
      console.error(err);
      let detail = err.message || String(err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        detail = '已拒绝摄像头权限，请允许后刷新';
        // 通知父页面摄像头被拒绝
        try { window.parent.postMessage({ type: 'cygame-camera-denied' }, '*'); } catch (_) {}
      } else if (!window.isSecureContext) {
        detail = '请用 http://127.0.0.1 本地服务器打开，勿用 file://';
      }
      this._setLoading('⚠️ 无法连接: ' + detail);
      throw err;
    }
  }

  async _initGesture() {
    await this.gestureEngine.init(this.els.camera, {
      onStatus: msg => this._setLoading(msg),
      inferStride: 4,
    });
    this.gestureEngine.onGesture = (g, hand) => this._handleGesture(g, hand);
    this.gestureEngine.onHandUpdate = results => this._drawDebug(results);
    this.gestureEngine.start();
    this._setLoading('手势已就绪');
  }

  _updateHint(text) {
    if (this.els.hintText) this.els.hintText.innerHTML = text;
  }

  _updateBadge(text) {
    if (this.els.stateBadge) this.els.stateBadge.textContent = text;
  }

  _handleGesture(gesture) {
    switch (this.state) {
      case STATE.IDLE:
        if (gesture === GESTURE.FIST && !this.ring._recalling && !this._summoning) this._summonCards();
        else if (gesture === GESTURE.OPEN_PALM || gesture === GESTURE.SWIPE_CONTINUOUS) {
          const t = performance.now();
          if (t - this._lastIdlePalmHintAt > 2500) {
            this._lastIdlePalmHintAt = t;
            this._updateHint('✊ 请先握拳召唤牌堆，再张开手掌展开');
            this._updateBadge('待命');
          }
        }
        break;

      case STATE.SUMMONED:
        if (gesture === GESTURE.FIST && this._cardsSpread && !this.ring._recalling) {
          this._recallToIdle();
        } else if (gesture === GESTURE.SWIPE_CONTINUOUS && this._cardsSpread) {
          const delta = this.gestureEngine.getSwipeDelta();
          // 直接驱动旋转：delta 是归一化手掌位移，映射为角度
          this.ring.palmDrive(delta * 160);
        } else if ((gesture === GESTURE.OPEN_PALM || gesture === GESTURE.SWIPE_CONTINUOUS) && !this._cardsSpread && !this.ring._recalling) {
          this._spreadCards();
        } else if (gesture === GESTURE.POINT && this._cardsSpread) {
          this._focusCard();
        }
        break;

      case STATE.FOCUSED:
        if (gesture === GESTURE.TWO_POINT) {
          this._holdCard();
        } else if (gesture === GESTURE.OPEN_PALM || gesture === GESTURE.SWIPE_CONTINUOUS) {
          this._unfocusCard();
          if (gesture === GESTURE.SWIPE_CONTINUOUS) {
            const d2 = this.gestureEngine.getSwipeDelta();
            this.ring.palmDrive(d2 * 160);
          }
        } else if (gesture === GESTURE.FIST) {
          this.ring.setFocused(false);
          this._focusedCard = null;
          this.state = STATE.SUMMONED;
          this._recallToIdle();
        }
        break;

      case STATE.HOLDING:
        // 翻牌后不响应手势，一定出结果页
        break;

      case STATE.RESULT:
        // 结果页不响应手势
        break;

      default:
        break;
    }
  }

  _summonCards() {
    if (this.ring._recalling || this._summoning) return;
    this._summoning = true;
    this.state = STATE.SUMMONED;
    this._cardsSpread = false;
    setDecorPaused(true);
    // 每次召唤都刷新牌阵（保证从全量卡池随机抽到对应卡牌）
    this.ring.create(true);
    this.ring.summon();
    this.particles.emitSummon('#d4af37', 15);
    if (this.sd) this.sd.fullBurst(10);
    this._updateHint('🖐️ 张开手掌展开牌阵');
    this._updateBadge('牌堆已就绪');
    // 500ms后解除防重入锁和恢复装饰canvas
    setTimeout(() => { this._summoning = false; setDecorPaused(false); }, 500);
  }

  _spreadCards() {
    if (this._spreading) return;
    this._spreading = true;
    this._cardsSpread = true;
    this.ring.spread();
    this.particles.emitSummon('#d4af37', 12);
    if (this.sd) this.sd.fullBurst(15);
    this._updateHint('🖐️ 左右滑动 · ☝️ 食指选定 · ✊ 握拳收牌');
    this._updateBadge('感知牌阵');
    setTimeout(() => { this._spreading = false; }, 1000);
  }

  _focusCard() {
    this.state = STATE.FOCUSED;
    this._focusedCard = this.ring.getCurrentCard();
    this.ring.setFocused(true);
    this._setMagicCircleSelectionActive(true);
    this.particles.emitSummon(this._focusedCard.color || '#d4af37', 15);
    this._updateHint('✌️ 翻牌');
    this._updateBadge('已选中');
  }

  _unfocusCard() {
    this.state = STATE.SUMMONED;
    this._focusedCard = null;
    this.ring.setFocused(false);
    this._setMagicCircleSelectionActive(false);
    this._updateHint('🖐️ 左右滑动 · ☝️ 食指选定 · ✊ 握拳收牌');
    this._updateBadge('感知牌阵');
  }

  _holdCard() {
    const card = this._focusedCard || this.ring.getCurrentCard();
    this.state = STATE.HOLDING;
    this._holdingCard = card;
    this._focusedCard = null;
    this.ring.setFocused(false);
    this._setMagicCircleSelectionActive(false);

    // 弱化显示卡牌环和魔法阵，不完全隐藏
    this.els.cardRingContainer.classList.add('ring-dimmed');
    this.els.gestureHint.style.opacity = '0';
    this.els.gestureHint.style.pointerEvents = 'none';
    this.els.stateBadge.style.opacity = '0';

    const wrap = this.els.selectedCardWrap;
    if (wrap) wrap.classList.remove('card-revealed', 'seal-phase');
    this.els.selectedFlipper.classList.remove('flipped', 'seal-breaking', 'flip-active');
    this.els.selectedView.classList.remove('hidden');
    this.els.selectedView.classList.add('sv-entry');
    setTimeout(() => this.els.selectedView.classList.remove('sv-entry'), 900);

    this.els.selectedCardName.textContent = '';
    this.els.selectedCardName.classList.remove('show');
    this.els.selectedCardName.style.display = 'none';

    const backImg = document.querySelector('#selected-card-back .selected-back-img');
    if (backImg) backImg.src = CARD_BACKS[Math.floor(Math.random() * CARD_BACKS.length)];

    // 重置所有特效元素
    const flipBurst = document.getElementById('flip-burst');
    const flipRing = document.getElementById('flip-ring');
    const lightPillar = document.getElementById('flip-light-pillar');
    const haloRing = document.getElementById('flip-halo-ring');
    const sealMc = document.getElementById('seal-magic-circle');
    const petalsContainer = document.getElementById('sakura-petals-container');
    const sparklesContainer = document.getElementById('magic-sparkles-container');

    [flipBurst, flipRing, lightPillar, haloRing, sealMc].forEach(el => {
      if (el) { el.classList.remove('active'); el.style.background = ''; }
    });
    if (petalsContainer) petalsContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';

    this.els.selectedFront.style.borderColor = card.color;
    this.els.selectedFront.style.boxShadow = `0 0 40px ${card.color}40, 0 20px 60px rgba(0,0,0,0.8)`;
    this.els.selectedFront.innerHTML = `
      <img src="${card.image}" alt="${card.name}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:7px;">`;
    this.els.selectedGlow.style.background = `radial-gradient(ellipse, ${card.color}20 0%, transparent 60%)`;

    this.particles.emitSummon(card.color, 12);
    if (this.sd) this.sd.fullBurst(10);

    /* ====== 魔法少女樱风格翻牌动画时间线 ====== */

    // Phase 1 (0ms): 封印摇晃（背面朝前展示）
    requestAnimationFrame(() => {
      if (wrap) wrap.classList.add('seal-phase');
      this.els.selectedFlipper.classList.add('seal-breaking');
    });

    // Phase 2 (400ms): 封印魔法阵旋转出现（背面继续展示中）
    setTimeout(() => {
      if (sealMc) sealMc.classList.add('active');
    }, 400);

    // Phase 3 (800ms): 光柱射出 + 翻转开始（背面已展示约0.8秒）
    setTimeout(() => {
      if (lightPillar) lightPillar.classList.add('active');
      if (haloRing) haloRing.classList.add('active');

      // 先移除封印摇晃动画，确保不与transition冲突
      this.els.selectedFlipper.classList.remove('seal-breaking');
      if (wrap) wrap.classList.remove('seal-phase');

      // 强制浏览器reflow，确保animation移除后再启用transition
      void this.els.selectedFlipper.offsetWidth;

      // 启用transition，然后触发翻转
      this.els.selectedFlipper.classList.add('flip-active');
      requestAnimationFrame(() => {
        this.els.selectedFlipper.classList.add('flipped');
        if (wrap) wrap.classList.add('card-revealed');
      });

      // 翻转后让圆形背景魔法阵完全隐藏，不再穿透卡牌
      const selMc = document.querySelector('.selected-magic-circle');
      if (selMc) {
        selMc.style.transition = 'opacity 0.6s';
        selMc.style.opacity = '0';
      }
    }, 800);

    // Phase 4 (1050ms): 光爆 + 粒子
    setTimeout(() => {
      if (flipBurst) {
        flipBurst.style.background = `radial-gradient(circle, ${card.color}60 0%, ${card.color}20 40%, transparent 70%)`;
        flipBurst.classList.add('active');
      }
      if (flipRing) {
        flipRing.style.borderColor = card.color;
        flipRing.style.boxShadow = `0 0 30px ${card.color}80`;
        flipRing.classList.add('active');
      }
      this.particles.emitSpellBurst(card.color, 20);
      if (this.sd) this.sd.fullBurst(8);
    }, 1050);

    // Phase 5 (1250ms): 樱花花瓣飘散
    setTimeout(() => {
      this._spawnSakuraPetals(petalsContainer, 6);
      this._spawnMagicSparkles(sparklesContainer, card.color, 5);
      this.spellEffect.play(card, 3000);
    }, 1250);

    // Phase 6 (4500ms): 特效结束后自动展示结果页
    setTimeout(() => {
      this._showResult(card);
    }, 4500);

    this._updateHint('');
    this._updateBadge('魔法释放中');
  }

  /* 生成樱花花瓣 */
  _spawnSakuraPetals(container, count) {
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div');
      petal.className = 'sakura-petal';
      const dx1 = (Math.random() - 0.5) * 80;
      const dy1 = (Math.random() - 0.5) * 60 - 30;
      const dx2 = dx1 + (Math.random() - 0.5) * 120;
      const dy2 = dy1 + Math.random() * 100 + 40;
      const dx3 = dx2 + (Math.random() - 0.5) * 80;
      const dy3 = dy2 + Math.random() * 120 + 60;
      const dur = 2 + Math.random() * 1.5;
      const delay = Math.random() * 0.8;
      const size = 8 + Math.random() * 10;
      petal.style.cssText = `
        left:50%;top:50%;
        width:${size}px;height:${size}px;
        --dx1:${dx1}px;--dy1:${dy1}px;
        --dx2:${dx2}px;--dy2:${dy2}px;
        --dx3:${dx3}px;--dy3:${dy3}px;
        --dur:${dur}s;--delay:${delay}s;
      `;
      container.appendChild(petal);
      requestAnimationFrame(() => petal.classList.add('falling'));
      setTimeout(() => petal.remove(), (dur + delay) * 1000 + 100);
    }
  }

  /* 生成魔法星星闪烁 */
  _spawnMagicSparkles(container, color, count) {
    if (!container) return;
    const colors = [color, '#ffd700', '#ffb3d1', '#fff', color];
    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.className = 'magic-sparkle';
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 260;
      const tx2 = tx + (Math.random() - 0.5) * 40;
      const ty2 = ty + (Math.random() - 0.5) * 40;
      const dur = 0.8 + Math.random() * 1;
      const delay = Math.random() * 1.2;
      const size = 8 + Math.random() * 14;
      const c = colors[i % colors.length];
      spark.style.cssText = `
        left:50%;top:50%;
        --tx:${tx}px;--ty:${ty}px;
        --tx2:${tx2}px;--ty2:${ty2}px;
        --dur:${dur}s;--delay:${delay}s;
        --size:${size}px;--color:${c};
      `;
      container.appendChild(spark);
      requestAnimationFrame(() => spark.classList.add('twinkle'));
      setTimeout(() => spark.remove(), (dur + delay) * 1000 + 100);
    }
  }

  _releaseCard() {
    this.spellEffect.stop();
    this._holdingCard = null;
    this.state = STATE.SUMMONED;
    this._cardsSpread = true;

    // 清理所有翻牌特效
    this.els.selectedCardWrap?.classList.remove('card-revealed', 'seal-phase');
    this.els.selectedFlipper.classList.remove('flipped', 'seal-breaking', 'flip-active');
    ['flip-burst','flip-ring','flip-light-pillar','flip-halo-ring','seal-magic-circle'].forEach(id => {
      document.getElementById(id)?.classList.remove('active');
    });
    const pc = document.getElementById('sakura-petals-container');
    const sc = document.getElementById('magic-sparkles-container');
    if (pc) pc.innerHTML = '';
    if (sc) sc.innerHTML = '';

    this.els.selectedView.classList.add('hidden');
    this.els.cardRingContainer.classList.remove('ring-dimmed');
    this.els.gestureHint.style.opacity = '1';
    this.els.gestureHint.style.pointerEvents = '';
    this.els.stateBadge.style.opacity = '';
    // 恢复圆形魔法阵透明度
    const selMc = document.querySelector('.selected-magic-circle');
    if (selMc) selMc.style.opacity = '';

    this._updateHint('🖐️ 左右滑动 · ☝️ 食指选定 · ✊ 握拳收牌');
    this._updateBadge('感知牌阵');
  }

  /** 展示魔法揭示结果页 */
  _showResult(card) {
    this.state = STATE.RESULT;
    this.spellEffect.stop();
    this._lastResultCard = card;

    // 清理翻牌视图
    this.els.selectedView.classList.add('hidden');
    this.els.selectedCardWrap?.classList.remove('card-revealed', 'seal-phase');
    this.els.selectedFlipper.classList.remove('flipped', 'seal-breaking', 'flip-active');
    ['flip-burst','flip-ring','flip-light-pillar','flip-halo-ring','seal-magic-circle'].forEach(id => {
      document.getElementById(id)?.classList.remove('active');
    });
    const pc = document.getElementById('sakura-petals-container');
    const sc = document.getElementById('magic-sparkles-container');
    if (pc) pc.innerHTML = '';
    if (sc) sc.innerHTML = '';

    // 进入结果页时，暂时隐藏牌阵和提示
    this.els.cardRingContainer.classList.add('ring-hidden');
    document.getElementById('magic-circle-wrap')?.classList.remove('show');
    this.els.gestureHint.style.opacity = '0';
    this.els.gestureHint.style.pointerEvents = 'none';
    this.els.stateBadge.style.opacity = '0';

    // 填充结果页内容
    if (this.els.srCardGlow) this.els.srCardGlow.style.background = `radial-gradient(ellipse, ${card.color}30 0%, transparent 65%)`;
    if (this.els.srCardFrame) {
      if (card.image) {
        this.els.srCardFrame.innerHTML = `<img src="${card.image}" alt="${card.name}" style="width:100%;height:100%;object-fit:contain;display:block;">`;
      } else {
        this.els.srCardFrame.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:64px;line-height:1;color:${card.color};text-shadow:0 0 18px ${card.color}55">${card.symbol || '✦'}</div>`;
      }
      this.els.srCardFrame.style.borderColor = 'rgba(255,215,0,0.55)';
      this.els.srCardFrame.style.boxShadow = `0 0 18px ${card.color}25, 0 10px 36px rgba(0,0,0,0.6)`;
    }
    if (this.els.srSpellEn) this.els.srSpellEn.textContent = card.spell || '';
    if (this.els.srSpellCn) {
      const cn = (card.element === 'mirror1' || card.element === 'mirror2') ? card.spellSub : card.name;
      this.els.srSpellCn.textContent = cn || '';
    }

    if (this.els.srTags) this.els.srTags.innerHTML = '';

    const destinyText = CARD_MEANINGS[card.element] || '';
    const rawQuote = CARD_QUOTES[card.element] || '';

    if (this.els.srQuote) this.els.srQuote.textContent = rawQuote ? `「${rawQuote}」` : '';
    if (this.els.srDestinyBody) this.els.srDestinyBody.textContent = destinyText || '';

    // 同步分享卡片内容
    const shareImg = document.getElementById('sr-share-img');
    if (shareImg) {
      shareImg.style.borderColor = 'rgba(255,215,0,0.55)';
      shareImg.style.boxShadow = `0 0 20px ${card.color}33, 0 12px 40px rgba(0,0,0,0.6)`;
      if (card.image) {
        shareImg.innerHTML = `<img src="${card.image}" alt="${card.name}" style="width:100%;height:100%;object-fit:contain;display:block">`;
      } else {
        shareImg.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:56px;line-height:1;color:${card.color};text-shadow:0 0 18px ${card.color}55">${card.symbol || '✦'}</div>`;
      }
    }
    const sq = document.getElementById('sr-share-quote');
    const sdb = document.getElementById('sr-share-destiny');
    if (sq) sq.textContent = rawQuote ? `「${rawQuote}」` : '';
    if (sdb) sdb.textContent = destinyText || '';

    // 显示结果页（用 !important 对抗 .hidden 的 !important）
    const rv = document.getElementById('sakura-result-view');
    if (rv) {
      rv.style.setProperty('display', 'flex', 'important');
      rv.style.setProperty('z-index', '9999', 'important');
    }

    // 手机端按钮改成「长按保存」
    const saveBtn = document.getElementById('sr-btn-save');
    if (saveBtn && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      saveBtn.textContent = '长按保存';
    }

    this._updateHint('');
    this._updateBadge('');
  }

  /** 从结果页返回继续翻牌（不强制结束） */
  _closeResultToContinue() {
    const rv = document.getElementById('sakura-result-view');
    if (rv) {
      rv.style.setProperty('display', 'none', 'important');
      rv.style.removeProperty('z-index');
    }

    this._holdingCard = null;
    this._focusedCard = null;
    this.state = STATE.SUMMONED;
    this._cardsSpread = true;

    // 恢复 UI
    this.els.cardRingContainer.classList.remove('ring-hidden', 'ring-dimmed');
    document.getElementById('magic-circle-wrap')?.classList.add('show');
    this.els.gestureHint.style.opacity = '1';
    this.els.gestureHint.style.pointerEvents = '';
    this.els.stateBadge.style.opacity = '';
    const selMc = document.querySelector('.selected-magic-circle');
    if (selMc) selMc.style.opacity = '';

    // 继续在牌阵中
    this.ring.state = ST.SPREAD;
    this._updateHint('🖐️ 左右滑动 · ☝️ 食指选定 · ✌️ 翻牌 · ✊ 握拳收牌');
    this._updateBadge('感知牌阵');
  }

  _restartDivination() {
    const rv = document.getElementById('sakura-result-view');
    if (rv) {
      rv.style.setProperty('display', 'none', 'important');
      rv.style.removeProperty('z-index');
    }
    this._lastResultCard = null;
    this._holdingCard = null;
    this._focusedCard = null;
    this._cardsSpread = false;
    this.state = STATE.IDLE;

    this.els.cardRingContainer.classList.remove('ring-hidden', 'ring-dimmed');
    this.els.gestureHint.style.opacity = '1';
    this.els.gestureHint.style.pointerEvents = '';
    this.els.stateBadge.style.opacity = '';
    document.getElementById('magic-circle-wrap')?.classList.remove('show');
    this.ring.clearFocused();
    this.ring.clearPalmTracking();
    this.ring.state = ST.IDLE;
    this.ring.spinAngle = 0;
    if (this.ring.ring) this.ring.ring.style.transform = 'rotateZ(0deg)';

    this._updateHint('✊ 握拳召唤 → 🖐️ 张手展开牌阵');
    this._updateBadge('待命');
  }

  async _saveShareImage() {
    const card = this._lastResultCard;
    const btn = document.getElementById('sr-btn-save');
    if (!card) return;

    try {
      if (btn) { btn.disabled = true; btn.textContent = '生成中…'; btn.style.opacity = '0.75'; }

      // 用 Canvas API 手动绘制分享图（避免 html2canvas 中文路径问题）
      const W = 600, H = 960;
      const canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext('2d');

      // 背景渐变
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#06061a');
      bg.addColorStop(0.4, '#0c0a22');
      bg.addColorStop(1, '#080818');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // 标题
      ctx.fillStyle = '#f0ebe3';
      ctx.font = '600 22px "PingFang SC", "Noto Sans SC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✦  魔 法 揭 示  ✦', W / 2, 56);

      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.font = '300 12px "PingFang SC", sans-serif';
      ctx.fillText('小樱魔法卡 · CARDCAPTOR SAKURA', W / 2, 82);

      // 加载卡牌图片（同源，不设 crossOrigin）
      const img = new Image();
      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = () => resolve(); // 即使失败也继续，画一个占位
        img.src = card.image;
        setTimeout(resolve, 5000); // 5秒超时
      });

      // 绘制卡牌（居中）
      const cardW = 220, cardH = 374;
      const cardX = (W - cardW) / 2, cardY = 110;

      // 光晕
      const glow = ctx.createRadialGradient(W/2, cardY + cardH/2, 20, W/2, cardY + cardH/2, 200);
      glow.addColorStop(0, card.color + '25');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, cardY - 50, W, cardH + 100);

      // 卡牌圆角矩形裁剪
      const r = 12;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cardX + r, cardY);
      ctx.lineTo(cardX + cardW - r, cardY);
      ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + r);
      ctx.lineTo(cardX + cardW, cardY + cardH - r);
      ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - r, cardY + cardH);
      ctx.lineTo(cardX + r, cardY + cardH);
      ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - r);
      ctx.lineTo(cardX, cardY + r);
      ctx.quadraticCurveTo(cardX, cardY, cardX + r, cardY);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, cardX, cardY, cardW, cardH);
      ctx.restore();

      // 卡牌边框
      ctx.strokeStyle = card.color + '80';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cardX + r, cardY);
      ctx.lineTo(cardX + cardW - r, cardY);
      ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + r);
      ctx.lineTo(cardX + cardW, cardY + cardH - r);
      ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - r, cardY + cardH);
      ctx.lineTo(cardX + r, cardY + cardH);
      ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - r);
      ctx.lineTo(cardX, cardY + r);
      ctx.quadraticCurveTo(cardX, cardY, cardX + r, cardY);
      ctx.closePath();
      ctx.stroke();

      // 卡牌名
      let nameY = cardY + cardH + 40;
      ctx.fillStyle = '#f0ebe3';
      ctx.font = '700 26px "PingFang SC", "Noto Sans SC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.spell, W / 2, nameY);

      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '300 13px "PingFang SC", sans-serif';
      ctx.fillText(card.spellSub, W / 2, nameY + 24);

      // 寓意文字（自动换行）
      const meaning = CARD_MEANINGS[card.element] || '';
      if (meaning) {
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.font = '300 14px "PingFang SC", "Noto Sans SC", sans-serif';
        const maxW = W - 100;
        const lines = [];
        let line = '';
        for (const ch of meaning) {
          if (ctx.measureText(line + ch).width > maxW) { lines.push(line); line = ch; }
          else { line += ch; }
        }
        if (line) lines.push(line);
        let mY = nameY + 60;
        for (const l of lines) { ctx.fillText(l, W / 2, mY); mY += 24; }
      }

      // 分隔线
      const divY = H - 120;
      ctx.strokeStyle = 'rgba(255,215,0,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W/2 - 30, divY);
      ctx.lineTo(W/2 + 30, divY);
      ctx.stroke();

      // 引导语
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '300 12px "PingFang SC", sans-serif';
      ctx.fillText('你也来召唤你的命运之牌 →', W / 2, divY + 24);

      // 品牌
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = '700 13px Outfit, "PingFang SC", sans-serif';
      ctx.fillText('CYou Games  ·  cyougames.site', W / 2, H - 40);

      // 导出：移动端显示图片让用户长按保存，桌面端下载
      const url = canvas.toDataURL('image/png');
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // 移动端：创建全屏覆盖层，展示图片让用户长按保存
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;';
        overlay.innerHTML = '<p style="color:#fff;font-size:13px;margin-bottom:12px;opacity:0.7;">长按图片保存到相册</p>' +
          '<img src="' + url + '" style="max-width:85vw;max-height:75vh;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,0.5);">' +
          '<button style="margin-top:16px;padding:10px 28px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:#fff;border-radius:20px;font-size:13px;cursor:pointer;">关闭</button>';
        overlay.querySelector('button').onclick = function() { overlay.remove(); };
        overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); };
        document.body.appendChild(overlay);
        if (btn) { btn.textContent = '长按图片保存'; setTimeout(() => (btn.textContent = '长按保存'), 1400); }
      } else {
        // 桌面端：直接下载
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sakura-' + card.element + '-result.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
        if (btn) { btn.textContent = '已保存到下载'; setTimeout(() => (btn.textContent = '保存分享'), 1400); }
      }
    } catch (e) {
      console.error('[ShareImage]', e);
      if (btn) { btn.textContent = '生成失败，建议截图'; setTimeout(() => (btn.textContent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? '长按保存' : '保存分享'), 2000); }
    } finally {
      if (btn) { btn.disabled = false; btn.style.opacity = ''; }
    }
  }

  _recallToIdle() {
    this._setMagicCircleSelectionActive(false);
    setDecorPaused(true);
    this.els.selectedCardWrap?.classList.remove('card-revealed', 'seal-phase');
    this.els.selectedFlipper?.classList.remove('flipped', 'seal-breaking', 'flip-active');
    // 清理翻牌特效
    ['flip-burst','flip-ring','flip-light-pillar','flip-halo-ring','seal-magic-circle'].forEach(id => {
      document.getElementById(id)?.classList.remove('active');
    });
    const pc = document.getElementById('sakura-petals-container');
    const sc = document.getElementById('magic-sparkles-container');
    if (pc) pc.innerHTML = '';
    if (sc) sc.innerHTML = '';
    // 恢复圆形魔法阵透明度
    const selMc2 = document.querySelector('.selected-magic-circle');
    if (selMc2) selMc2.style.opacity = '';

    if (this.state === STATE.HOLDING) {
      this.spellEffect.stop();
      this.els.selectedView.classList.add('hidden');
      this.els.cardRingContainer.classList.remove('ring-dimmed');
      this.els.gestureHint.style.opacity = '1';
      this.els.gestureHint.style.pointerEvents = '';
      this.els.stateBadge.style.opacity = '';
    }
    // 回到 SUMMONED 状态（未展开），而不是 IDLE
    // 这样魔法阵保持显示，张掌即可重新展开
    this.state = STATE.SUMMONED;
    this._cardsSpread = false;
    this._focusedCard = null;
    this._holdingCard = null;
    this.ring.setFocused(false);
    this.ring.recall();
    this._updateHint('🖐️ 张开手掌展开牌阵');
    this._updateBadge('牌堆已就绪');
  }

  _drawDebug(results) {
    // debug面板隐藏时完全跳过
    if (!this.els.debugPanel || this.els.debugPanel.classList.contains('hidden')) return;

    const ge = this.gestureEngine;
    // 降低debug面板更新频率，每3次只更新一次文本
    this._dbgTextTick = (this._dbgTextTick || 0) + 1;
    if (this._dbgTextTick % 3 === 0) {
      if (this.els.dbgGesture) this.els.dbgGesture.textContent = ge.debugData.gesture;
      if (this.els.dbgState) this.els.dbgState.textContent = this.state;
      if (this.els.dbgHands) this.els.dbgHands.textContent = ge.debugData.handsCount;
      if (this.els.dbgFps) this.els.dbgFps.textContent = ge.fps + ' 推理/s';
      if (this.els.dbgConfidence) this.els.dbgConfidence.textContent = ge.debugData.confidence + '%';
    }

    const canvas = this.els.debugCanvas;
    if (!canvas) return;
    this._dbgPaint = (this._dbgPaint || 0) + 1;
    if (this._dbgPaint % 5 !== 0) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.els.camera.readyState >= 2) {
      ctx.save();
      if (ge.mirrored) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(this.els.camera, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    if (results.landmarks) {
      for (const hand of results.landmarks) {
        const connections = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [0, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [0, 9],
          [9, 10],
          [10, 11],
          [11, 12],
          [0, 13],
          [13, 14],
          [14, 15],
          [15, 16],
          [0, 17],
          [17, 18],
          [18, 19],
          [19, 20],
          [5, 9],
          [9, 13],
          [13, 17],
        ];
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.lineWidth = 1;
        for (const [a, b] of connections) {
          const pa = hand[a];
          const pb = hand[b];
          const ax = ge.mirrored ? (1 - pa.x) * canvas.width : pa.x * canvas.width;
          const ay = pa.y * canvas.height;
          const bx = ge.mirrored ? (1 - pb.x) * canvas.width : pb.x * canvas.width;
          const by = pb.y * canvas.height;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
        for (let i = 0; i < hand.length; i++) {
          const p = hand[i];
          const x = ge.mirrored ? (1 - p.x) * canvas.width : p.x * canvas.width;
          const y = p.y * canvas.height;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = [4, 8].includes(i) ? '#ff6baf' : '#ffd700';
          ctx.fill();
        }
      }
    }
  }
}
