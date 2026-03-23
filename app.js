const STORE = {
  heroes: 'timewar.skill.heroes.v3',
  skills: 'timewar.skill.skills.v3',
  teams: 'timewar.skill.teams.v3'
};

const DEFAULT_HEROES = [
  { id: "zenobia", name: "ゼノビア", team: "A", atk: 79, def: 187, int: 134, agi: 93, rng: 2, unique: "palmera_resistance", subSlots: ["repair_defense", "eloquence"] },
  { id: "lincoln", name: "リンカーン", team: "A", atk: 128, def: 136, int: 214, agi: 128, rng: 4, unique: "freedom_proclamation", subSlots: ["budo", "sage_plot"] },
  { id: "kublai", name: "フビライ・ハン", team: "A", atk: 128, def: 137, int: 165, agi: 221, rng: 3, unique: "mongol_expansion", subSlots: ["purge", "sniper"] },
  { id: "lin", name: "リン", team: "A", atk: 150, def: 125, int: 250, agi: 200, rng: 5, unique: "red_eye_gaze", subSlots: ["dragon_roar", "all_heal"] },
  { id: "monet", name: "モネ", team: "A", atk: 25, def: 175, int: 275, agi: 35, rng: 2, unique: "phantom_art", subSlots: ["nenriki_heal", "iron_guard"] },
  { id: "carl", name: "カール", team: "A", atk: 100, def: 200, int: 150, agi: 50, rng: 3, unique: "rock_hammer", subSlots: ["repair_defense", "purge"] },
  { id: "mark", name: "マーク", team: "A", atk: 175, def: 175, int: 175, agi: 175, rng: 2, unique: "justice_heart", subSlots: ["vampire", "gather_power"] },
  { id: "zono", name: "ゾノ", team: "B", atk: 300, def: 75, int: 75, agi: 300, rng: 14, unique: "berserker", subSlots: ["zangeki", "follow_shot"] },
  { id: "george", name: "ジョージ", team: "B", atk: 75, def: 150, int: 200, agi: 170, rng: 5, unique: "artillery_king", subSlots: ["supply", "follow_shot"] },
  { id: "nobunaga", name: "織田信長", team: "B", atk: 320, def: 180, int: 150, agi: 260, rng: 5, unique: "flow_blaze_dance", subSlots: ["budo", "sage_plot"] },
  { id: "galileo", name: "ガリレオ・ガリレイ", team: "B", atk: 150, def: 150, int: 350, agi: 200, rng: 5, unique: "stillness_prayer", subSlots: ["repair_defense", "purge"] }
];

const DEFAULT_SKILLS = [
  { id: "palmera_resistance", name: "パルメラの抵抗", category: "passive", chance: 100, range: 5, behavior: "palmeraResistance" },
  { id: "freedom_proclamation", name: "自由の宣言", category: "engage", chance: 100, range: 5, behavior: "freedomProclamation" },
  { id: "mongol_expansion", name: "モンゴルの拡張", category: "engage", chance: 100, range: 3, behavior: "mongolExpansion" },
  { id: "red_eye_gaze", name: "赤眼の眼光", category: "passive", chance: 100, range: 5, behavior: "redEyeGaze" },
  { id: "phantom_art", name: "幻影の芸術", category: "engage", chance: 100, range: 2, behavior: "phantomArt" },
  { id: "rock_hammer", name: "岩壁の鉄槌", category: "active", chance: 45, range: 3, behavior: "rockHammer", chargeTurns: 1 },
  { id: "justice_heart", name: "正義の心", category: "passive", chance: 100, range: 2, behavior: "justiceHeart" },
  { id: "berserker", name: "狂気のバーサーカー", category: "engage", chance: 100, range: 14, behavior: "berserker" },
  { id: "artillery_king", name: "鉄砲王", category: "engage", chance: 100, range: 5, behavior: "artilleryKing" },
  { id: "flow_blaze_dance", name: "流焔乱舞", category: "active", chance: 50, range: 5, behavior: "flowBlazeDance" },
  { id: "stillness_prayer", name: "静止の祈り", category: "active", chance: 55, range: 5, behavior: "stillnessPrayer" },
  { id: "repair_defense", name: "修復防御", category: "active", chance: 55, range: 3, behavior: "repairDefense" },
  { id: "budo", name: "文武両道", category: "active", chance: 50, range: 5, behavior: "budo" },
  { id: "sage_plot", name: "賢者の謀", category: "active", chance: 40, range: 4, behavior: "sagePlot" },
  { id: "eloquence", name: "巧みな弁舌", category: "active", chance: 40, range: 5, behavior: "eloquence" },
  { id: "final_battle", name: "最終決戦", category: "passive", chance: 100, range: 0, behavior: "finalBattle" },
  { id: "purge", name: "祓いの加護", category: "active", chance: 35, range: 2, behavior: "purge" },
  { id: "zangeki", name: "斬撃", category: "active", chance: 35, range: 5, behavior: "zangeki" },
  { id: "nenriki_heal", name: "念力の治癒", category: "active", chance: 35, range: 5, behavior: "nenrikiHeal" },
  { id: "vampire", name: "吸血", category: "passive", chance: 100, range: 0, behavior: "vampire" },
  { id: "follow_shot", name: "追撃の銃弾", category: "combo", chance: 35, range: 5, behavior: "followShot" },
  { id: "supply", name: "継戦補給", category: "combo", chance: 40, range: 5, behavior: "supply" },
  { id: "all_heal", name: "全面治癒", category: "engage", chance: 40, range: 0, behavior: "allHeal" },
  { id: "dragon_roar", name: "龍の咆哮", category: "active", chance: 50, range: 5, behavior: "dragonRoar" },
  { id: "sniper", name: "狙撃者の心得", category: "passive", chance: 100, range: 0, behavior: "sniper" },
  { id: "rainbow", name: "虹の景色", category: "engage", chance: 100, range: 5, behavior: "rainbow" },
  { id: "iron_guard", name: "鉄壁の守護", category: "engage", chance: 100, range: 0, behavior: "ironGuard" },
  { id: "gather_power", name: "機を蓄える", category: "passive", chance: 100, range: 0, behavior: "gatherPower" }
];

const DEFAULT_TEAMS = {
  left: [
    { id: "george", troops: 10000, subSkills: ["supply", "follow_shot"] },
    { id: "lin", troops: 10000, subSkills: ["dragon_roar", "all_heal"] },
    { id: "mark", troops: 10000, subSkills: ["repair_defense", "nenriki_heal"] }
  ],
  right: [
    { id: "lincoln", troops: 10000, subSkills: ["budo", "sage_plot"] },
    { id: "kublai", troops: 10000, subSkills: ["purge", "sniper"] },
    { id: "zenobia", troops: 10000, subSkills: ["repair_defense", "eloquence"] }
  ]
};

const POSITIONS = ['指揮官', '中軍', '前衛'];
const CONTROL_SET = new Set(['stun', 'silence', 'confusion', 'frenzy', 'disarm', 'taunt', 'noheal', 'capture']);
const DEBUFF_SET = new Set(['atkDown', 'intDown', 'defDown', 'agiDown', 'damageTakenPct', 'damageDealPct']);

let app = { heroes: [], skills: [], teams: null, battle: null, auto: null };

function clone(v){ return JSON.parse(JSON.stringify(v)); }
function num(v, d=0){ const n = Number(v); return Number.isFinite(n) ? n : d; }
function rand(){ return Math.random(); }
function pick(arr){ return arr && arr.length ? arr[Math.floor(Math.random()*arr.length)] : null; }
function sample(arr, n){
  const pool = (arr || []).slice(); const out = [];
  while(pool.length && out.length < n) out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
  return out;
}
function logEl(){ return document.getElementById('log'); }
function setLog(text){ const el = logEl(); if(el) el.textContent = text; }
function getSkill(id){ return app.skills.find(s => s.id === id || s.name === id) || null; }
function getHero(id){ return app.heroes.find(h => h.id === id || h.name === id) || null; }
function sameTeam(a,b){ return !!a && !!b && a.side === b.side; }
function isAlive(u){ return !!u && num(u.currentTroops) > 0; }
function randRange(min,max){ return min + Math.random()*(max-min); }

// Rule 15: ステータス補正 (50毎に10%UP)
function statScale(stat){
  const step = Math.max(0, Math.floor(num(stat)/50));
  return 1 + (step * 0.10);
}

// Rule 16: 動的な距離計算 (死亡した枠は飛ばして計算)
function calculateDistance(battle, a, b) {
  const lineup = [];
  for(let i=0; i<=2; i++) if(isAlive(battle.sides.left[i])) lineup.push(battle.sides.left[i]);
  for(let i=2; i>=0; i--) if(isAlive(battle.sides.right[i])) lineup.push(battle.sides.right[i]);
  
  const idxA = lineup.indexOf(a);
  const idxB = lineup.indexOf(b);
  if(idxA === -1 || idxB === -1) return 999;
  return Math.abs(idxA - idxB);
}
function inRange(battle, attacker, target, rngValue) { return calculateDistance(battle, attacker, target) <= num(rngValue, 1); }

function loadState(){
  try{ app.heroes = JSON.parse(localStorage.getItem(STORE.heroes)) || clone(DEFAULT_HEROES); } catch{ app.heroes = clone(DEFAULT_HEROES); }
  try{ app.skills = JSON.parse(localStorage.getItem(STORE.skills)) || clone(DEFAULT_SKILLS); } catch{ app.skills = clone(DEFAULT_SKILLS); }
  try{
    const t = JSON.parse(localStorage.getItem(STORE.teams));
    app.teams = (t && t.left && t.right) ? t : clone(DEFAULT_TEAMS);
  }catch{ app.teams = clone(DEFAULT_TEAMS); }

  document.getElementById('heroesJson').value = JSON.stringify(app.heroes, null, 2);
  document.getElementById('skillsJson').value = JSON.stringify(app.skills, null, 2);
}

function saveState(){
  localStorage.setItem(STORE.heroes, JSON.stringify(app.heroes));
  localStorage.setItem(STORE.skills, JSON.stringify(app.skills));
  localStorage.setItem(STORE.teams, JSON.stringify(app.teams));
}

function renderAll(){
  renderTeams(); renderStatus(); renderLog();
}

function renderStatus(){
  const b = app.battle;
  document.getElementById('turnBadge').textContent = `Turn ${b ? b.turn : 0}`;
  document.getElementById('phaseBadge').textContent = `Phase: ${b ? b.phase : '-'}`;
  document.getElementById('stateBadge').textContent = b ? (b.finished ? '終了' : '進行中') : '待機中';
}

function renderLog(){
  const b = app.battle;
  if(!b){ setLog('準備完了。戦闘開始を押してください。'); return; }
  
  const turn = b.viewTurn;
  document.getElementById('currentTurnLabel').textContent = `Turn ${turn}`;
  const area = document.getElementById('logArea');
  setLog((b.logsByTurn[turn] || ['（ログなし）']).join('\n'));
  if(area) area.scrollTop = area.scrollHeight;
}

function renderTeams(){
  const left = document.getElementById('leftSlots');
  const right = document.getElementById('rightSlots');
  const skillOptions = app.skills;

  function teamHTML(side){
    return app.teams[side].map((slot, idx) => {
      const hero = getHero(slot.id);
      const s1 = slot.subSkills && slot.subSkills[0] ? slot.subSkills[0] : '';
      const s2 = slot.subSkills && slot.subSkills[1] ? slot.subSkills[1] : '';
      return `
      <div class="slot">
        <div class="label">${POSITIONS[idx]}</div>
        <select onchange="updateSlot('${side}', ${idx}, 'id', this.value)">
          <option value="">英傑選択</option>
          ${app.heroes.map(h => `<option value="${h.id}" ${slot.id === h.id ? 'selected' : ''}>${h.name}</option>`).join('')}
        </select>
        <input type="number" value="${num(slot.troops, 10000)}" onchange="updateSlot('${side}', ${idx}, 'troops', this.value)">
        <select onchange="updateSlot('${side}', ${idx}, 'sub1', this.value)">
          <option value="">サブスキル1</option>
          ${skillOptions.map(s => `<option value="${s.id}" ${s1 === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
        </select>
        <select onchange="updateSlot('${side}', ${idx}, 'sub2', this.value)">
          <option value="">サブスキル2</option>
          ${skillOptions.map(s => `<option value="${s.id}" ${s2 === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
        </select>
      </div>`;
    }).join('');
  }
  left.innerHTML = teamHTML('left');
  right.innerHTML = teamHTML('right');
}

function updateSlot(side, idx, field, value){
  const slot = app.teams[side][idx];
  if(!slot) return;
  if(field === 'id') slot.id = value;
  if(field === 'troops') slot.troops = num(value, 10000);
  if(field === 'sub1') { slot.subSkills = slot.subSkills || []; slot.subSkills[0] = value; }
  if(field === 'sub2') { slot.subSkills = slot.subSkills || []; slot.subSkills[1] = value; }
  saveState(); renderTeams();
}
window.updateSlot = updateSlot;

class Battle {
  constructor(teams){
    this.turn = 0; this.phase = 'opening'; this.finished = false; this.viewTurn = 0;
    this.logsByTurn = {0: []};
    this.listeners = {
      battleStart: [], turnStart: [], actionStart: [], skillAttempt: [], skillSuccess: [],
      normalAttack: [], beforeDamage: [], afterDamage: [], controlAttempt: [], turnEnd: [], death: []
    };

    this.sides = { left: this.buildSide('left', teams.left || []), right: this.buildSide('right', teams.right || []) };
    this.units = [...this.sides.left, ...this.sides.right];
    this.units.forEach(u => this.setupUnit(u));
  }

  buildSide(side, slots){
    return slots.map((slot, idx) => {
      const hero = getHero(slot.id);
      if(!hero) return null;
      return {
        id: hero.id, name: hero.name, side, slotIndex: idx, positionLabel: POSITIONS[idx],
        initialTroops: num(slot.troops, 10000), currentTroops: num(slot.troops, 10000),
        atk: hero.atk, def: hero.def, int: hero.int, agi: hero.agi, rng: hero.rng,
        uniqueSkillId: hero.unique, subSkillIds: Array.isArray(slot.subSkills) ? slot.subSkills.slice(0,2) : [],
        statuses: [], buffs: [], shields: 0, ambush: 0, normalHits: 1, countersThisTurn: 0,
        prepared: {}, activeChanceBonusPct: 0, activeDamageBonusPct: 0, damageDealPct: 0, damageTakenPct: 0,
        critChanceBonusPct: 0, evadeChanceBonusPct: 0, ignoreEvasion: false, lifestealPct: 0,
        invincibleTurns: 0, markStacks: 0
      };
    }).filter(Boolean);
  }

  emit(name, payload){ (this.listeners[name] || []).forEach(fn => { try { fn(payload); } catch(err){ console.error(err); } }); }
  on(name, fn){ if(!this.listeners[name]) this.listeners[name] = []; this.listeners[name].push(fn); }
  
  log(msg){
    if(!this.logsByTurn[this.viewTurn]) this.logsByTurn[this.viewTurn] = [];
    this.logsByTurn[this.viewTurn].push(msg);
  }

  setupUnit(unit){
    const unique = getSkill(unit.uniqueSkillId);
    const subSkills = unit.subSkillIds.map(id => getSkill(id)).filter(Boolean);
    unit.uniqueSkill = unique; unit.subSkills = subSkills;
    [unique, ...subSkills].filter(Boolean).forEach(skill => this.registerSkillBehavior(unit, skill));
  }

  registerSkillBehavior(unit, skill){
    const b = this;
    switch(skill.behavior){
      case 'vampire':
        unit.lifestealPct += 0.20; break;
      case 'sniper':
        unit.ignoreEvasion = true; unit.critChanceBonusPct += 25; break;
      case 'finalBattle':
        unit.activeChanceBonusPct += 12;
        b.on('skillAttempt', ({ caster, skill: s }) => {
          if(caster !== unit || !s || s.category !== 'active') return;
          if(unit.markStacks < 5) {
            unit.markStacks++; unit.activeDamageBonusPct += 6;
            b.log(`${unit.name}：最終決戦 - アクティブ威力+${unit.markStacks * 6}%`);
          }
        });
        break;
      case 'gatherPower':
        b.on('actionStart', ({ actor }) => {
          if(actor !== unit || !isAlive(unit)) return;
          applyHeal(b, unit, unit, healAmount(unit, unit, 1.50, 'def'), '機を蓄える');
          const boost = Math.round(getStat(unit, 'def') * 0.10);
          addBuff(unit, { stat:'def', value: boost, duration:1, source:'機を蓄える' });
        });
        break;

      // 【修正】ジョージの鉄砲王：自軍の誰かが通常攻撃を行った場合のみ抽選
      case 'artilleryKing':
        unit.normalHits = 2; // 自身は連撃獲得
        b.on('normalAttack', ({ attacker, kind }) => {
          if(kind !== 'normal' || !sameTeam(attacker, unit) || !isAlive(unit)) return;
          if(rand() < 0.45){
            unit.ambush = Math.min(10, (unit.ambush || 0) + 1);
            b.log(`${unit.name}：鉄砲王 - 奇襲獲得 (計${unit.ambush}個)`);
          }
        });
        break;

      case 'palmeraResistance':
        b.on('afterDamage', ({ attacker, target, damage }) => {
          if(target !== unit || damage <= 0 || unit.countersThisTurn >= 2) return;
          const high = Math.max(getStat(unit,'def'), getStat(unit,'int'));
          const chance = Math.min(0.95, 0.24 + Math.floor(high/50)*0.01);
          if(rand() < chance){
            unit.countersThisTurn += 1;
            applyDamage(b, unit, attacker, skillDamage(unit, attacker, 1.40, 'int', 'int'), 'パルメラの抵抗');
            controlAttempt(b, unit, attacker, rand() < 0.5 ? 'stun' : 'disarm', 1, 'パルメラの抵抗');
          }
        });
        break;

      // 【修正】リンカーンの自由の宣言：味方がアクティブを「発動しようとする度」に抽選
      case 'freedomProclamation':
        unit._freedomTriggered = false;
        b.on('skillAttempt', ({ caster, skill: s }) => {
          if(s.category !== 'active' || !sameTeam(caster, unit) || !isAlive(unit)) return;
          // 成否に関わらず抽選
          if(rand() < 0.70){
            const enemy = randomEnemy(unit);
            if(enemy) applyDamage(b, unit, enemy, skillDamage(unit, enemy, 1.60, 'int', 'int'), '自由の宣言');
          }
        });
        b.on('skillSuccess', ({ caster, skill: s }) => {
          if(s.category !== 'active' || !sameTeam(caster, unit)) return;
          // 成功した時のみ回復
          const wounded = mostWoundedAlly(unit);
          if(wounded) applyHeal(b, unit, wounded, healAmount(unit, wounded, 0.80, 'int'), '自由の宣言');
        });
        b.on('afterDamage', ({ target }) => {
          if(!sameTeam(target, unit)) return;
          const threshold = Math.floor(num(target.initialTroops) * 0.70);
          if(!unit._freedomTriggered && num(target.currentTroops) < threshold){
            unit._freedomTriggered = true;
            const enemy = randomEnemy(unit);
            if(enemy) applyDamage(b, unit, enemy, skillDamage(unit, enemy, 1.60, 'int', 'int'), '自由の宣言(追加)');
          }
        });
        break;

      case 'mongolExpansion':
        b.on('battleStart', () => {
          const c = commander(unit.side);
          if(!c) return;
          const high = Math.max(getStat(unit, 'int'), getStat(unit, 'agi'));
          const val = Math.round(30 * statScale(high));
          addBuff(c, { stat:'damageDealPct', value: val, duration:3, source:'モンゴルの拡張' });
          addBuff(c, { stat:'damageTakenPct', value: -val, duration:3, source:'モンゴルの拡張' });
        });
        b.on('turnEnd', () => { const c = commander(unit.side); if(c && rand() < 0.70) removeDebuffs(c, b, 'モンゴルの拡張'); });
        break;

      case 'redEyeGaze':
        b.on('turnStart', () => {
          if(!isAlive(unit)) return;
          enemiesOf(unit).forEach(e => { addBuff(e, { stat:'atk', value:-10, duration:9999, source:'赤眼の眼光' }); addBuff(e, { stat:'int', value:-10, duration:9999, source:'赤眼の眼光' }); });
          addBuff(unit, { stat:'atk', value:20, duration:9999, source:'赤眼の眼光' }); addBuff(unit, { stat:'int', value:20, duration:9999, source:'赤眼の眼光' }); addBuff(unit, { stat:'def', value:20, duration:9999, source:'赤眼の眼光' });
        });
        break;

      case 'phantomArt':
        b.on('battleStart', () => { alliesOf(unit).forEach(a => a.shields += Math.round(num(a.initialTroops) * 0.20)); });
        b.on('controlAttempt', (payload) => {
          if(payload.target !== unit || !isAlive(unit) || unit.shields <= 0 || !CONTROL_SET.has(payload.status)) return;
          if(rand() < 0.45){
            payload.cancelled = true;
            b.log(`${unit.name}：幻影の芸術 - 制御無効`);
            if(payload.source && rand() < 0.50){
              applyDamage(b, unit, payload.source, skillDamage(unit, payload.source, 1.00, 'int', 'def'), '幻影の芸術');
              if(rand() < 0.25) controlAttempt(b, unit, payload.source, 'confusion', 1, '幻影の芸術');
            }
          }
        });
        break;

      case 'justiceHeart':
        b.on('battleStart', () => { unit.invincibleTurns = 4; b.log(`${unit.name}：正義の心 - 無敵4T`); });
        b.on('skillSuccess', ({ caster, skill: s }) => {
          if(caster !== unit || !s || s.category !== 'active') return;
          unit.markStacks = Math.min(99, unit.markStacks + 1); unit.activeDamageBonusPct += 3;
        });
        unit.activeChanceBonusPct += 15;
        break;

      // 【修正】狂気のバーサーカー: 狂乱付与。RNGが6以上なら味方を攻撃しない
      case 'berserker':
        b.on('battleStart', () => { addStatus(unit, { type: 'frenzy', duration: 9999, source: '狂気のバーサーカー' }); });
        b.on('turnStart', () => {
          if(isAlive(unit)) { unit.rng = Math.max(1, num(unit.rng) - 2); b.log(`${unit.name}：バーサーカー RNG=${unit.rng}`); }
        });
        b.on('turnEnd', () => {
          if(!isAlive(unit) || b.turn < 3) return;
          const enemy = randomEnemy(unit);
          if(enemy) applyDamage(b, unit, enemy, skillDamage(unit, enemy, 1.50, 'atk'), '狂気のバーサーカー(追加)');
        });
        break;

      case 'allHeal':
        b.on('turnStart', () => {
          if(isAlive(unit) && rand() < 0.40) alliesOf(unit).forEach(a => applyHeal(b, unit, a, healAmount(unit, a, 1.50, 'int'), '全面治癒'));
        });
        break;

      case 'ironGuard':
        b.on('battleStart', () => {
          const val = Math.round(30 * statScale(getStat(unit, 'int')));
          sample(alliesOf(unit), 2).forEach(a => addBuff(a, { stat:'damageTakenPct', value: -val, duration:2, source:'鉄壁の守護' }));
        });
        break;

      case 'rainbow':
        b.on('battleStart', () => { alliesOf(unit).forEach(a => a.shields += Math.round(num(a.initialTroops) * 0.20)); });
        b.on('turnStart', () => {
          if(!isAlive(unit)) return;
          if(b.turn <= 2) { const enemy = randomEnemy(unit); if(enemy) controlAttempt(b, unit, enemy, 'silence', 1, '虹の景色'); }
          if(b.turn >= 4) {
            addBuff(unit, { stat:'pierce', value:1, duration:9999, source:'虹の景色' });
            applyHeal(b, unit, unit, healAmount(unit, unit, 2.00, 'int'), '虹の景色');
          }
        });
        break;
    }
  }

  nextChunk(){
    if(this.finished) return;
    try{
      if(this.phase === 'opening'){
        this.emit('battleStart', { battle: this });
        this.turn = 0; this.viewTurn = 0; this.logsByTurn[0] = [];
        this.log(`=== 戦闘開始 ===`);
        this.phase = 'turnStart'; return;
      }
      if(this.phase === 'turnStart'){
        this.turn += 1; this.viewTurn = this.turn; this.logsByTurn[this.turn] = [];
        this.log(`--- Turn ${this.turn} 開始 ---`);
        this.units.forEach(u => { u.countersThisTurn = 0; if(u.invincibleTurns > 0) u.invincibleTurns -= 1; tickStatuses(u); tickBuffs(u); });
        this.emit('turnStart', { battle:this, turn:this.turn });
        this.turnOrder = this.units.filter(isAlive).slice().sort((a,b) => {
          const d = getStat(b,'agi') - getStat(a,'agi'); return d !== 0 ? d : rand() - 0.5;
        });
        this.turnIndex = 0; this.phase = 'action'; return;
      }
      if(this.phase === 'action'){
        if(this.turnIndex >= this.turnOrder.length){ this.phase = 'turnEnd'; return; }
        const actor = this.turnOrder[this.turnIndex++];
        if(isAlive(actor)) this.act(actor);
        this.resolveDeaths();
        if(this.finished) return;
        if(this.turnIndex >= this.turnOrder.length) this.phase = 'turnEnd';
        return;
      }
      if(this.phase === 'turnEnd'){
        this.emit('turnEnd', { battle:this, turn:this.turn });
        // 持続ダメージ (DoT) 処理
        this.units.filter(isAlive).forEach(u => {
          if(hasStatus(u, 'burn')) {
            const dot = Math.round(num(u.initialTroops) * 0.05);
            u.currentTroops = Math.max(0, u.currentTroops - dot);
            this.log(`${u.name} は燃焼により ${dot} ダメージ`);
          }
        });
        this.resolveDeaths();
        if(this.finished) return;
        if(this.turn >= 8) { this.finish('turn_limit'); return; }
        this.phase = 'turnStart'; return;
      }
    }catch(err){ console.error(err); this.log(`【クラッシュ防止】${err.message}`); this.finish('error'); }
  }

  act(actor){
    this.emit('actionStart', { battle:this, actor });
    this.log(`【${actor.side === 'left' ? '自軍' : '敵軍'} ${actor.positionLabel}】${actor.name} 行動 / 兵力:${actor.currentTroops}`);

    if(hasStatus(actor, 'stun')){ this.log(`${actor.name} は眩暈で行動不能`); return; }

    if(actor.prepared && actor.prepared.rock > 0){
      actor.prepared.rock = 0; this.resolveActiveSkill(actor, getSkill('rock_hammer')); return;
    }

    const actSkills = [actor.uniqueSkill, ...(actor.subSkills || [])].filter(Boolean).filter(s => s.category === 'active');
    for(const skill of actSkills){
      this.tryActiveSkill(actor, skill);
      if(this.finished) return;
    }

    if(hasStatus(actor, 'disarm')){ this.log(`${actor.name} は武装解除中`); return; }

    this.normalAttackSequence(actor);
  }

  tryActiveSkill(caster, skill){
    if(!isAlive(caster)) return;
    if(hasStatus(caster, 'silence')){ this.log(`${caster.name} は沈黙中(${skill.name}不可)`); return; }
    
    // 発動の意思を見せた時点でイベント発行 (リンカーンが反応する)
    this.emit('skillAttempt', { battle:this, caster, skill });
    
    const chance = Math.min(0.99, Math.max(0, (num(skill.chance, 100) + num(caster.activeChanceBonusPct, 0)) / 100));
    if(rand() > chance){ this.log(`${caster.name} の ${skill.name} 不発`); return; }
    
    this.emit('skillSuccess', { battle:this, caster, skill });
    this.log(`${caster.name} の ${skill.name} 発動！`);
    this.resolveActiveSkill(caster, skill);
  }

  resolveActiveSkill(caster, skill){
    const b = this;
    switch(skill.behavior){
      case 'repairDefense':
        [caster, lowestHpAlly(caster)].filter(Boolean).slice(0,2).forEach(t => applyHeal(b, caster, t, healAmount(caster, t, 2.50, 'def'), '修復防御'));
        addBuff(caster, { stat:'def', value:20, duration:3, source:'修復防御' }); break;
      case 'budo':
        sample(enemiesOf(caster).filter(isAlive), 2).forEach(t => {
          applyDamage(b, caster, t, skillDamage(caster, t, 1.80, 'int', 'int'), '文武両道');
          addBuff(t, { stat:'damageDealPct', value: -Math.round(12 * statScale(getStat(caster,'int'))), duration:2, source:'文武両道' });
        }); break;
      case 'sagePlot':
        sample(enemiesOf(caster).filter(isAlive), 2).forEach(t => {
          controlAttempt(b, caster, t, 'noheal', 1, '賢者の謀');
          applyDamage(b, caster, t, skillDamage(caster, t, 1.60, 'int', 'int'), '賢者の謀');
        }); break;
      case 'eloquence':
        addBuff(caster, { stat:'evadeChancePct', value:25, duration:2, source:'巧みな弁舌' });
        sample(enemiesOf(caster).filter(isAlive), 2).forEach(t => {
          controlAttempt(b, caster, t, 'taunt', 2, '巧みな弁舌');
          addBuff(t, { stat:'atk', value: -Math.round(30 * statScale(getStat(caster,'def'))), duration:2, source:'巧みな弁舌' });
        }); break;
      case 'purge':
        sample(alliesOf(caster), 3).forEach(t => {
          removeDebuffs(t, b, '祓いの加護');
          addBuff(t, { stat:'atk', value:50, duration:2, source:'祓いの加護' }); addBuff(t, { stat:'int', value:50, duration:2, source:'祓いの加護' });
        }); break;
      case 'zangeki':
        for(let i=0; i<2; i++){ let t = this.chooseNormalTarget(caster); if(t) applyDamage(b, caster, t, skillDamage(caster, t, 0.75, 'atk', 'atk'), '斬撃'); } break;
      case 'nenrikiHeal':
        sample(alliesOf(caster), 2).forEach(t => { applyHeal(b, caster, t, healAmount(caster, t, 1.20, 'int'), '念力の治癒'); removeOneControl(t, b); }); break;
      case 'dragonRoar': {
        const boost = Math.round(10 * statScale(getStat(caster,'int')));
        addBuff(caster, { stat:'damageDealPct', value: boost, duration:1, source:'龍の咆哮' });
        const ally = pick(alliesOf(caster).filter(a => a !== caster));
        if(ally) addBuff(ally, { stat:'damageDealPct', value: boost, duration:1, source:'龍の咆哮' });
        enemiesOf(caster).filter(isAlive).forEach(t => applyDamage(b, caster, t, skillDamage(caster, t, 1.20, 'int', 'int'), '龍の咆哮'));
        break;
      }
      case 'flowBlazeDance':
        sample(enemiesOf(caster).filter(isAlive), 2).forEach(t => {
          applyDamage(b, caster, t, skillDamage(caster, t, 1.50, 'int'), '流焔乱舞');
          addStatus(t, { type:'burn', duration:2, source:'流焔乱舞' });
        }); break;
      case 'stillnessPrayer':
        sample(enemiesOf(caster).filter(isAlive), 2).forEach(t => {
          controlAttempt(b, caster, t, 'silence', 1, '静止の祈り'); controlAttempt(b, caster, t, 'stun', 1, '静止の祈り');
        });
        applyHeal(b, caster, caster, healAmount(caster, caster, 1.00, 'int'), '静止の祈り'); break;
      case 'rockHammer':
        if(!caster.prepared.rock){ caster.prepared.rock = 1; b.log(`${caster.name}：岩壁の鉄槌 準備開始`); return; }
        caster.prepared.rock = 0;
        enemiesOf(caster).filter(isAlive).forEach(t => applyDamage(b, caster, t, skillDamage(caster, t, 3.00, 'atk', 'def'), '岩壁の鉄槌')); break;
    }
  }

  normalAttackSequence(attacker){
    let hits = Math.max(1, num(attacker.normalHits, 1));
    while(hits-- > 0 && isAlive(attacker)){
      const target = this.chooseNormalTarget(attacker);
      if(!target) break;
      const dmg = normalDamage(attacker, target);
      applyDamage(this, attacker, target, dmg, '通常攻撃');
      this.emit('normalAttack', { battle:this, attacker, target, kind:'normal', damage:dmg });
      this.resolveComboSkills(attacker, target);
      this.resolveDeaths();
      if(this.finished) return;
    }

    // 【修正】奇襲の消費処理：1回の追加攻撃ごとに1つ消費し、そこからもコンボ・奇襲追加判定が生まれる
    while(isAlive(attacker) && num(attacker.ambush,0) > 0){
      attacker.ambush -= 1;
      this.log(`${attacker.name}：奇襲による追加攻撃（残${attacker.ambush}）`);
      const target = this.chooseNormalTarget(attacker);
      if(!target) break;
      const dmg = normalDamage(attacker, target);
      applyDamage(this, attacker, target, dmg, '奇襲攻撃');
      this.emit('normalAttack', { battle:this, attacker, target, kind:'normal', damage:dmg });
      this.resolveComboSkills(attacker, target);
      this.resolveDeaths();
      if(this.finished) return;
    }
  }

  resolveComboSkills(attacker, target){
    const combos = (attacker.subSkills || []).filter(s => s && s.category === 'combo');
    for(const skill of combos){
      if(!isAlive(attacker) || !isAlive(target) || rand() > (num(skill.chance,0)/100)) continue;
      this.log(`${attacker.name} コンボ ${skill.name} 発動`);
      
      if(skill.behavior === 'followShot'){
        for(let i=0;i<2;i++) applyDamage(this, attacker, target, skillDamage(attacker, target, 1.10, 'int'), '追撃の銃弾');
      } else if (skill.behavior === 'supply'){
        applyDamage(this, attacker, target, skillDamage(attacker, target, 0.70, 'int'), '継戦補給');
        sample(alliesOf(attacker), 2).forEach(t => applyHeal(this, attacker, t, healAmount(attacker, t, 1.20, 'int'), '継戦補給'));
      }
    }
  }

  chooseNormalTarget(attacker){
    const enemies = enemiesOf(attacker).filter(t => isAlive(t) && inRange(this, attacker, t, num(attacker.rng,1)));
    const confusedPool = this.units.filter(u => isAlive(u) && u !== attacker && inRange(this, attacker, u, num(attacker.rng,1)));
    const frenzyPool = this.units.filter(u => isAlive(u) && inRange(this, attacker, u, num(attacker.rng,1)));

    if(hasStatus(attacker, 'confusion')) return pick(confusedPool) || pick(enemies);
    if(hasStatus(attacker, 'frenzy')) {
      // ゾノの特殊仕様「RNGが6を下回らない限り味方を攻撃しない」
      if(attacker.uniqueSkillId === 'berserker' && attacker.rng >= 6) return pick(enemies);
      return pick(frenzyPool) || pick(enemies);
    }

    const taunted = enemies.find(e => hasStatus(e, 'taunt') && e.tauntSourceSide === attacker.side);
    if(taunted) return taunted;
    return pick(enemies);
  }

  resolveDeaths(){
    this.units.forEach(u => {
      if(!u._deadLogged && num(u.currentTroops) <= 0){
        u._deadLogged = true;
        this.emit('death', { battle:this, unit:u });
        this.log(`${u.name} は撤退`);
      }
    });

    const leftCommander = this.sides.left[0];
    const rightCommander = this.sides.right[0];
    const leftDead = !isAlive(leftCommander);
    const rightDead = !isAlive(rightCommander);

    if(leftDead && rightDead) { this.finish('draw'); return; }
    if(leftDead) { this.finish('right_win'); return; }
    if(rightDead) { this.finish('left_win'); return; }
  }

  finish(reason){
    if(this.finished) return;
    this.finished = true;
    this.phase = 'finished';
    if(reason === 'draw') this.log('同時に両軍指揮官が死亡：引き分け');
    else if(reason === 'turn_limit') this.log('8ターン終了時点：引き分け');
    else if(reason === 'left_win') this.log('自軍の勝利！');
    else if(reason === 'right_win') this.log('敵軍の勝利！');
    
    ['left','right'].forEach(side => {
      this.log(`【${side === 'left' ? '自軍' : '敵軍'} 残存兵力 / 負傷兵】`);
      this.sides[side].forEach(u => {
        this.log(`- ${u.name}: 兵力 ${Math.max(0,u.currentTroops)} / 負傷兵 ${Math.max(0,u.initialTroops-u.currentTroops)}`);
      });
    });
  }
}

// -------- helpers --------
function commander(side){ return app.battle ? app.battle.sides[side][0] : null; }
function alliesOf(unit){ return app.battle ? app.battle.units.filter(u => u.side === unit.side && isAlive(u)) : []; }
function enemiesOf(unit){ return app.battle ? app.battle.units.filter(u => u.side !== unit.side && isAlive(u)) : []; }
function randomEnemy(unit){ return pick(enemiesOf(unit).filter(isAlive)); }
function lowestHpAlly(unit){ return alliesOf(unit).slice().sort((a,b)=>num(a.currentTroops)-num(b.currentTroops))[0] || null; }
function mostWoundedAlly(unit){ return alliesOf(unit).slice().sort((a,b)=>(num(b.initialTroops)-num(b.currentTroops))-(num(a.initialTroops)-num(a.currentTroops)))[0] || null; }

function getStat(unit, key){
  const base = num(unit[key], 0);
  const flat = (unit.buffs || []).filter(b => b.stat === key && b.type === 'flat').reduce((a,b)=>a+num(b.value,0),0);
  const pct = (unit.buffs || []).filter(b => b.stat === key && b.type === 'pct').reduce((a,b)=>a+num(b.value,0),0);
  let value = (base + flat) * (1 + pct/100);
  if(unit.markStacks && ['atk','def','int','agi'].includes(key)) value *= Math.pow(1.25, unit.markStacks);
  return Math.round(value);
}
function addBuff(unit, buff){ unit.buffs = unit.buffs || []; unit.buffs.push({ type: buff.type || 'flat', stat: buff.stat, value: num(buff.value,0), duration: num(buff.duration,1), source: buff.source || '' }); }
function tickBuffs(unit){ unit.buffs = (unit.buffs || []).filter(b => { if(b.duration === 9999) return true; b.duration -= 1; return b.duration > 0; }); }
function addStatus(target, st){ target.statuses = target.statuses || []; target.statuses.push({ type: st.type, duration: num(st.duration,1), source: st.source || '' }); }
function hasStatus(unit, type){ return (unit.statuses || []).some(s => s.type === type && s.duration > 0); }
function tickStatuses(unit){ unit.statuses = (unit.statuses || []).filter(s => { if(s.duration === 9999) return true; s.duration -= 1; return s.duration > 0; }); }
function removeDebuffs(unit, battle, source){
  const before = (unit.statuses || []).length;
  unit.statuses = (unit.statuses || []).filter(s => !CONTROL_SET.has(s.type) && !DEBUFF_SET.has(s.type));
  if(before !== unit.statuses.length) battle.log(`${unit.name} のデバフを解除 (${source})`);
}
function removeOneControl(unit, battle){
  const idx = (unit.statuses || []).findIndex(s => CONTROL_SET.has(s.type));
  if(idx !== -1) { unit.statuses.splice(idx, 1); battle.log(`${unit.name} の制御効果を1つ解除`); return true; }
  return false;
}

function healAmount(healer, target, rate, baseStatKey){
  const stat = num(healer[baseStatKey], 0);
  const scale = statScale(stat);
  const troops = Math.max(1, num(healer.currentTroops,1));
  const raw = (145 * Math.log(troops) - 900) * rate;
  return Math.max(0, Math.round(raw * scale));
}
function applyHeal(battle, source, target, amount, label){
  if(!target || !isAlive(target)) return 0;
  if(hasStatus(target, 'noheal')){ battle.log(`${target.name} は回復無効`); return 0; }
  const before = target.currentTroops;
  target.currentTroops = Math.min(target.initialTroops, target.currentTroops + Math.max(0, amount));
  const healed = target.currentTroops - before;
  if(healed > 0) battle.log(`${target.name} 回復 ${healed} (${label})`);
  return healed;
}
function controlAttempt(battle, source, target, status, duration, label){
  const payload = { battle, source, target, status, duration, label, cancelled: false };
  battle.emit('controlAttempt', payload);
  if(payload.cancelled) return false;
  addStatus(target, { type: status, duration, source: label || '' });
  if(status === 'taunt') target.tauntSourceSide = source.side;
  battle.log(`${target.name} に ${status} 付与`);
  return true;
}

function skillDamage(caster, target, power, damageType, scaleStatKey=null){
  const att = damageType === 'int' ? getStat(caster, 'int') : getStat(caster, 'atk');
  const def = damageType === 'int' ? getStat(target, 'int') : getStat(target, 'def');
  const troops = num(caster.currentTroops);
  const base = ((att - def) * 1.5) + ((-0.05/10000) * troops + 0.1) * troops;
  let scale = 1;
  if(scaleStatKey) scale = statScale(getStat(caster, scaleStatKey));
  let dmg = base * power * randRange(0.975, 1.025) * scale;
  dmg *= (1 + num(caster.damageDealPct,0)/100 + num(caster.activeDamageBonusPct,0)/100);
  return Math.max(1, Math.round(dmg));
}
function normalDamage(attacker, target){
  const att = getStat(attacker, 'atk');
  const def = getStat(target, 'def');
  const troops = num(attacker.currentTroops);
  const base = ((att - def) * 1.5) + ((-0.05/10000) * troops + 0.1) * troops;
  let dmg = base * randRange(0.975, 1.025);
  dmg *= (1 + num(attacker.damageDealPct,0)/100);
  if(rand() < (num(attacker.critChanceBonusPct,0)/100)) dmg *= 2;
  return Math.max(1, Math.round(dmg));
}
function applyDamage(battle, attacker, target, damage, label){
  if(!attacker || !target || !isAlive(attacker) || !isAlive(target)) return 0;
  battle.emit('beforeDamage', { battle, attacker, target, damage, label });

  let dmg = Math.max(0, num(damage,0));
  if(!attacker.ignoreEvasion && Math.random() < Math.min(0.95, Math.max(0, num(target.evadeChanceBonusPct,0)/100))){
    battle.log(`${target.name} は回避`);
    battle.emit('afterDamage', { battle, attacker, target, damage:0, label });
    return 0;
  }
  if(target.invincibleTurns > 0){ battle.log(`${target.name} は無敵中`); }

  dmg = Math.round(dmg * Math.max(0, 1 + num(target.damageTakenPct,0)/100));
  if(target.shields > 0){
    const absorb = Math.min(target.shields, dmg);
    target.shields -= absorb; dmg -= absorb;
    battle.log(`${target.name} シールド吸収 ${absorb}`);
  }

  if(dmg > 0){
    target.currentTroops = Math.max(0, target.currentTroops - dmg);
    battle.log(`${attacker.name} → ${target.name} に ${dmg} ダメージ (${label})`);
  }

  battle.emit('afterDamage', { battle, attacker, target, damage:dmg, label });
  if(num(attacker.lifestealPct,0) > 0 && dmg > 0){
    applyHeal(battle, attacker, attacker, Math.round(dmg * num(attacker.lifestealPct,0)), '吸血');
  }
  return dmg;
}

// -------- UI Actions --------
function enterBattle(){
  app.battle = new Battle(clone(app.teams));
  app.battle.log('準備完了');
  app.battle.viewTurn = 0;
  renderAll();
}

function nextStep(){
  if(!app.battle) return alert('先に戦闘開始を押してください');
  if(app.battle.finished){ app.battle.log('戦闘終了済み'); renderAll(); return; }
  app.battle.nextChunk();
  app.battle.viewTurn = app.battle.turn;
  renderAll();
}

function initButtons(){
  document.getElementById('btnLoadDefault').onclick = () => { if(confirm('初期化しますか？')) { localStorage.clear(); location.reload(); } };
  document.getElementById('btnSample').onclick = () => { app.teams = clone(DEFAULT_TEAMS); saveState(); renderAll(); };
  document.getElementById('btnSave').onclick = () => { saveState(); renderAll(); alert('保存しました'); };
  document.getElementById('btnStart').onclick = enterBattle;
  document.getElementById('btnNext').onclick = nextStep;
  document.getElementById('btnAuto').onclick = () => {
    if(app.auto) return;
    app.auto = setInterval(() => {
      if(!app.battle || app.battle.finished) { clearInterval(app.auto); app.auto = null; return; }
      nextStep();
    }, 600);
  };
  document.getElementById('btnStop').onclick = () => { if(app.auto) clearInterval(app.auto); app.auto = null; };
  
  const prevBtn = document.getElementById('btnPrevTurn');
  const nextBtn = document.getElementById('btnNextTurn');
  if(prevBtn) prevBtn.onclick = () => { if(app.battle && app.battle.viewTurn > 0) { app.battle.viewTurn--; renderLog(); } };
  if(nextBtn) nextBtn.onclick = () => { if(app.battle && app.battle.viewTurn < app.battle.turn) { app.battle.viewTurn++; renderLog(); } };

  document.getElementById('btnClearLog').onclick = () => { if(app.battle) { app.battle.logsByTurn = { [app.battle.turn]: [] }; renderAll(); } };
  document.getElementById('btnCopyLog').onclick = async () => {
    try{ await navigator.clipboard.writeText(document.getElementById('log').textContent || ''); alert('コピーしました'); }
    catch{ prompt('コピーしてください', document.getElementById('log').textContent || ''); }
  };
  document.getElementById('btnSaveHeroes').onclick = () => {
    try{ app.heroes = JSON.parse(document.getElementById('heroesJson').value); saveState(); renderAll(); alert('英傑を保存しました'); }
    catch(err){ alert('エラー: ' + err.message); }
  };
  document.getElementById('btnSaveSkills').onclick = () => {
    try{ app.skills = JSON.parse(document.getElementById('skillsJson').value); saveState(); renderAll(); alert('スキルを保存しました'); }
    catch(err){ alert('エラー: ' + err.message); }
  };
  document.getElementById('btnRefresh').onclick = renderAll;
}

window.addEventListener('error', (e) => {
  console.error(e.error || e.message);
  if(document.getElementById('log')) document.getElementById('log').textContent += `\n【クラッシュ防止】${e?.error?.message || e.message}`;
});

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  initButtons();
  renderAll();
});
