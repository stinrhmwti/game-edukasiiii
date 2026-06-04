:root {
    --astra-blue: #1a44a0;
    --sky-blue: #3a81f5;
    --bg-dark-blue: #0f256e;
    --orange-main: #e0531c;
    --green-card: #2f855a;
    --red-card: #e53e3e;
}

* {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f3f7fa;
    display: flex; flex-direction: column; min-height: 100vh;
}

/* --- NAVIGASI HEADER --- */
header {
    background-color: #ffffff; padding: 18px 6%;
    display: flex; justify-content: space-between; align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04); z-index: 10;
}
.logo-container { display: flex; align-items: center; font-weight: 800; font-size: 22px; color: var(--astra-blue); }
.logo-container span { color: #7d96d6; font-weight: 400; font-size: 13px; margin-left: 6px; border-left: 1px solid #ccc; padding-left: 6px; }
header nav ul { display: flex; list-style: none; align-items: center; gap: 25px; }
header nav ul li a { text-decoration: none; color: #333333; font-size: 14px; font-weight: 500; }
.btn-header-pmb { background-color: var(--astra-blue); color: #ffffff !important; padding: 9px 18px; border-radius: 6px; font-weight: 600; }

/* --- GAME VIEWPORT KANVAS --- */
main { flex: 1; display: flex; justify-content: center; align-items: center; padding: 30px 20px; }
.game-viewport {
    width: 100%; max-width: 960px; min-height: 575px;
    background: linear-gradient(180deg, #3273e9 0%, #7db2f8 100%);
    border-radius: 24px; position: relative; padding: 35px; color: #ffffff;
    box-shadow: 0 15px 35px rgba(15, 37, 110, 0.25); display: flex; flex-direction: column; justify-content: space-between;
}
.decor-clouds { position: absolute; top: 0; left: 0; width: 100%; height: 90px; background: rgba(255, 255, 255, 0.15); border-bottom-left-radius: 50% 20px; border-bottom-right-radius: 50% 20px; pointer-events: none; }
.decor-rainbow { position: absolute; bottom: -20px; right: -20px; width: 180px; height: 180px; background: radial-gradient(circle, transparent 40%, rgba(255,235,59,0.3) 46%, rgba(233,30,99,0.3) 56%, transparent 66%); pointer-events: none; display: none; }

/* --- SCREEN ACTION ROUTER --- */
.screen-section { display: none; width: 100%; animation: fadeIn 0.4s ease-out; }
.screen-section.active-screen { display: flex; flex-direction: column; justify-content: space-between; flex: 1; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.screen-header-banner { background-color: #ffffff; color: var(--astra-blue); padding: 10px 50px; border-radius: 30px; font-size: 24px; font-weight: 800; text-align: center; width: fit-content; margin: 0 auto 20px auto; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
.top-utilities { position: absolute; top: 25px; right: 25px; z-index: 5; }
.btn-mute { background-color: #f7ded4; border: none; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; color: var(--orange-main); }

/* --- LANDING LAYOUT --- */
.landing-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; align-items: center; flex: 1; }
.hero-left h1 { font-size: 46px; font-weight: 800; line-height: 1.1; }
.hero-left .tag-orange { color: #ff4d00; background-color: #ffffff; padding: 2px 12px; border-radius: 6px; font-size: 20px; font-weight: 800; display: inline-block; margin-top: 5px; }
.hero-left p { margin: 15px 0 25px 0; font-size: 15px; line-height: 1.4; }
.icon-row { display: flex; gap: 12px; margin-bottom: 30px; }
.icon-box-small { background: rgba(255, 255, 255, 0.18); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 12px; padding: 10px; text-align: center; width: 85px; font-size: 11px; }
.icon-box-small div { font-size: 22px; margin-bottom: 4px; }
.btn-orange-play { background-color: var(--orange-main); color: #ffffff; border: none; padding: 12px 45px; font-size: 18px; font-weight: 700; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 12px rgba(224, 83, 28, 0.35); }
.hero-right-circle { background-color: #ffffff; color: var(--astra-blue); width: 240px; height: 240px; border-radius: 50%; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; }

/* --- FORMS DATA DIRI --- */
.avatar-top { width: 75px; height: 75px; background-color: #ffffff; border-radius: 50%; margin: -65px auto 10px auto; display: flex; align-items: center; justify-content: center; font-size: 35px; }
.white-form-card { background-color: rgba(255, 255, 255, 0.95); border-radius: 18px; padding: 25px 40px; color: #333333; max-width: 720px; margin: 30px auto 0 auto; flex: 1; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group-item { margin-bottom: 12px; display: flex; flex-direction: column; }
.form-group-item label { font-size: 14px; font-weight: 600; margin-bottom: 6px; color: #4a5568; }
.form-group-item input { background-color: #edf2f7; border: none; padding: 11px 16px; border-radius: 10px; font-size: 14px; outline: none; }
.phone-input-container { display: flex; gap: 10px; }
.phone-prefix { background-color: #edf2f7; padding: 11px 15px; border-radius: 10px; font-size: 14px; color: #666; }

/* --- PANDUAN DAN LEVEL --- */
.tata-cara-container { max-width: 750px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
.tata-cara-item { background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.2); padding: 14px 20px; border-radius: 12px; display: flex; align-items: center; gap: 15px; font-size: 14px; }
.bullet-white-circle { width: 12px; height: 12px; background-color: #ffffff; border-radius: 50%; flex-shrink: 0; }
.level-cards-wrapper { display: flex; justify-content: center; align-items: center; gap: 20px; margin: auto 0; }
.menu-level-card { background-color: #ffffff; color: #333333; border-radius: 16px; width: 210px; height: 210px; padding: 25px 15px; text-align: center; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; align-items: center; box-shadow: 0 8px 20px rgba(0,0,0,0.1); transition: transform 0.2s; }
.menu-level-card:hover { transform: translateY(-5px); }
.menu-level-card.c-level1 { border-bottom: 8px solid var(--sky-blue); }
.menu-level-card.c-level2 { border-bottom: 8px solid var(--orange-main); }
.menu-level-card.c-level3 { border-bottom: 8px solid #48bb78; }
.menu-level-card .lvl-sub { font-size: 12px; color: #888; font-weight: 600; text-transform: uppercase; }
.menu-level-card .lvl-title { font-size: 16px; font-weight: 800; color: #222; }
.menu-level-card .lvl-icon { font-size: 40px; }

/* --- GAME ENGINE LAYOUT --- */
.question-box-card { background-color: rgba(255, 255, 255, 0.95); border-radius: 18px; padding: 25px 30px; color: #333333; flex: 1; display: flex; flex-direction: column; justify-content: center; }
.quiz-ilust-area { background-color: #edf2f7; border: 2px dashed #cbd5e0; border-radius: 12px; height: 95px; display: flex; align-items: center; justify-content: center; color: #4a5568; margin-bottom: 15px; }
.question-statement { font-size: 15px; font-weight: 600; line-height: 1.5; margin-bottom: 15px; }
.options-layout-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.option-btn-box { background-color: #ffffff; border: 1px solid #cbd5e0; padding: 14px 20px; border-radius: 10px; font-size: 14px; font-weight: 500; color: #4a5568; cursor: pointer; text-align: left; transition: background 0.2s; }
.option-btn-box:hover { background-color: #f7fafc; }
.live-feedback { margin-top: 15px; font-weight: 700; text-align: center; min-height: 24px; font-size: 15px; }
.tebak-media-row { display: flex; justify-content: center; gap: 40px; margin-bottom: 15px; }
.media-image-frame { background-color: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 12px; width: 110px; height: 110px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.media-hint-text { color: var(--orange-main); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 12px; line-height: 1.4; }

/* --- SISTEM PUZZLE MERAKIT PC (KLIK INTERAKTIF) --- */
.puzzle-board-container { background-color: rgba(255, 255, 255, 0.95); border-radius: 16px; padding: 20px; flex: 1; color: #333; }
.puzzle-instruction-tip { font-size: 13px; color: #e0531c; font-weight: 600; text-align: center; margin: 0; }
.puzzle-gameplay-layout { display: flex; justify-content: space-between; width: 100%; align-items: stretch; gap: 20px; }
.puzzle-side-box { width: 50%; display: flex; flex-direction: column; }
.puzzle-side-title { margin-bottom: 10px; color: var(--astra-blue); text-align: center; font-size: 14px; font-weight: 700; }

.computer-casing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; background: #e2e8f0; padding: 12px; border-radius: 12px; flex: 1; }
.casing-slot-cell { background-color: #ffffff; border: 2px dashed #94a3b8; border-radius: 8px; height: 85px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #718096; cursor: pointer; transition: all 0.2s ease; padding: 5px; text-align: center; }
.casing-slot-cell:hover { background-color: #edf2f7; border-color: var(--sky-blue); }
.casing-slot-cell .slot-tag { font-size: 10px; font-weight: 600; color: #a0aec0; }

.hardware-source-pool { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; background-color: #f8fafc; border: 2px dashed #b1c7ec; border-radius: 12px; padding: 12px; flex: 1; align-content: center; }
.hardware-tile-card { background-color: var(--sky-blue); color: #ffffff; border-radius: 8px; height: 85px; padding: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.1); user-select: none; }
.hardware-tile-card strong { font-size: 12px; margin-top: 2px; line-height: 1.2; }
.hardware-tile-card em { font-size: 9px; opacity: 0.8; font-style: normal; margin-top: 2px; }

/* Penanda Kepingan yang sedang aktif dipilih */
.hardware-tile-card.active-selected { border: 3px solid #ff4d00 !important; background-color: #2b6cb0 !important; transform: scale(1.03); box-shadow: 0 0 12px rgba(224, 83, 28, 0.5); }

/* --- SEKSI HASIL SELEKSI AKHIR --- */
.victory-card-box { background-color: #ffffff; border-radius: 20px; padding: 35px; width: 100%; max-width: 470px; margin: 0 auto; text-align: center; color: #333; box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
.victory-trophy { font-size: 60px; margin-bottom: 5px; }
.victory-card-box h2 { color: var(--astra-blue); font-weight: 800; font-size: 24px; margin-bottom: 15px; letter-spacing: 0.5px; }
.result-stats-board { background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 15px; }
.stat-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e2e8f0; }
.stat-item:last-child { border-bottom: none; }
.stat-label { font-size: 13px; color: #666; font-weight: 500; }
.stat-value { font-size: 13px; color: #222; font-weight: 700; }
.btn-submit-red { background-color: var(--red-card); color: #ffffff; border: none; width: 100%; padding: 12px; border-radius: 25px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px; }

.feedback-card { background-color: #fff; padding: 30px; border-radius: 20px; text-align: center; max-width: 460px; margin: 0 auto; color: #333; box-shadow: 0 8px 20px rgba(0,0,0,0.05); }
.feedback-card textarea { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ccc; outline: none; resize: none; margin-bottom: 15px; font-size: 13px; }

/* --- BOTTOM CONTROLS & FOOTER --- */
.bottom-nav-action-bar { display: flex; justify-content: space-between; margin-top: 15px; align-items: center; }
.btn-prev-outline { background: transparent; border: 1px solid rgba(255, 255, 255, 0.5); color: #ffffff; padding: 8px 25px; border-radius: 20px; font-size: 14px; cursor: pointer; }
.btn-next-solid { background-color: #ffffff; color: var(--astra-blue); border: none; padding: 10px 30px; border-radius: 20px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

footer { background-color: #2354cd; color: #ffffff; padding: 35px 8% 20px 8%; font-size: 13px; }
.footer-grid-container { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 30px; margin-bottom: 20px; }
.footer-column-box { flex: 1; min-width: 250px; }
.footer-column-box h4 { font-size: 14px; font-weight: 700; margin-bottom: 12px; text-transform: uppercase; }
.footer-column-box p { margin-bottom: 8px; opacity: 0.85; line-height: 1.5; }
.footer-copyright-bar { text-align: center; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 15px; font-size: 12px; opacity: 0.6; }
