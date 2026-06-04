// ================= GLOBAL GAME STATES =================
let playerName = "Calon Mahasiswa";
let scoreLevel1 = 0; // Maksimal 35 Poin
let scoreLevel2 = 0; // Maksimal 35 Poin
let scoreLevel3 = 0; // Maksimal 30 Poin

// State Kendali Puzzle Sistem Klik Baru
let selectedHardwareId = null;
let completedPuzzleSlots = 0;

// Data Struktur Komponen Merakit Gambar Komputer
const hardwareComponents = [
    { id: 1, name: "Processor Intel Core i7", icon: "🔲", function: "Otak Pemrosesan Data" },
    { id: 2, name: "RAM Corsair DDR5 16GB", icon: "🔋", function: "Penyimpanan Sementara Sistem" },
    { id: 3, name: "NVMe SSD Samsung 1TB", icon: "💾", function: "Media Penyimpanan Website" },
    { id: 4, name: "Power Supply 750W", icon: "⚡", function: "Penyalur Arus Daya Listrik" }
];

// ================= NAVIGATION MANAGER =================
function navigateTo(screenId) {
    const allScreens = document.querySelectorAll('.screen-section');
    allScreens.forEach(screen => screen.classList.remove('active-screen'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active-screen');
    }

    const rainbow = document.getElementById('rainbow-decor');
    if (screenId === 'screen-level-menu') {
        rainbow.style.display = 'block';
    } else {
        rainbow.style.display = 'none';
    }
}

function startToRules() {
    const inputName = document.getElementById('player-name').value;
    if (inputName.trim() === "") {
        alert("Silakan isi nama lengkap kamu terlebih dahulu!");
        return;
    }
    playerName = inputName;
    navigateTo('screen-tata-cara');
}

// ================= LEVEL 1: QUIZ ENGINE (UI & RPL) =================
function initQuizLevel() {
    navigateTo('screen-level1-quiz');
    document.getElementById('quiz-feedback').innerText = "";
    
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    
    quizQuestion.innerText = "Dalam Rekayasa Perangkat Lunak (RPL), diagram manakah yang digunakan untuk memodelkan struktur hubungan relasi antartabel database sebelum dikembangkan menggunakan MySQL?";
    
    const answers = [
        { text: "A. Use Case Diagram", correct: false },
        { text: "B. Entity Relationship Diagram (ERD)", correct: true },
        { text: "C. Activity Diagram", correct: false },
        { text: "D. Wireframe Desain Tata Letak", correct: false }
    ];
    
    quizOptions.innerHTML = "";
    answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = "option-btn-box";
        btn.innerText = ans.text;
        btn.onclick = () => {
            const allButtons = quizOptions.querySelectorAll('.option-btn-box');
            allButtons.forEach(b => b.disabled = true);
            
            const feedback = document.getElementById('quiz-feedback');
            if(ans.correct) {
                btn.style.styleHtml = ""; 
                btn.style.backgroundColor = "#c6f6d5";
                btn.style.borderColor = "#2f855a";
                feedback.innerText = "🎉 Benar! ERD digunakan untuk merancang skema relasi database perangkat lunak. (+35 Poin)";
                feedback.style.color = "#2f855a";
                scoreLevel1 = 35;
            } else {
                btn.style.backgroundColor = "#fed7d7";
                btn.style.borderColor = "#9b2c2c";
                feedback.innerText = "❌ Kurang tepat! Model relasi basis data digambarkan lewat ERD (Jawaban B).";
                feedback.style.color = "#9b2c2c";
                scoreLevel1 = 0;
            }
            setTimeout(() => { navigateTo('screen-level-menu'); }, 2500);
        };
        quizOptions.appendChild(btn);
    });
}

// ================= LEVEL 2: TEBAK GAMBAR ENGINE =================
function initTebakLevel() {
    navigateTo('screen-level2-tebak');
    document.getElementById('tebak-feedback').innerText = "";
    
    const tebakOptions = document.getElementById('tebak-options');
    
    const optionsData = [
        { text: "A. System Design / UI Kit", correct: true },
        { text: "B. Alur Algoritma Flowchart", correct: false },
        { text: "C. Desain Pemodelan Objek 3D", correct: false },
        { text: "D. Source Code Framework PHP", correct: false }
    ];
    
    tebakOptions.innerHTML = "";
    optionsData.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn-box";
        btn.innerText = opt.text;
        btn.onclick = () => {
            const allButtons = tebakOptions.querySelectorAll('.option-btn-box');
            allButtons.forEach(b => b.disabled = true);
            
            const feedback = document.getElementById('tebak-feedback');
            if(opt.correct) {
                btn.style.backgroundColor = "#c6f6d5";
                btn.style.borderColor = "#2f855a";
                feedback.innerText = "🎉 Tepat sekali! System Design mengunci konsistensi elemen UI visual aplikasi. (+35 Poin)";
                feedback.style.color = "#2f855a";
                scoreLevel2 = 35;
            } else {
                btn.style.backgroundColor = "#fed7d7";
                btn.style.borderColor = "#9b2c2c";
                feedback.innerText = "❌ Salah! Aturan gaya visual seragam adalah komponen dari System Design (A).";
                feedback.style.color = "#9b2c2c";
                scoreLevel2 = 0;
            }
            setTimeout(() => { navigateTo('screen-level-menu'); }, 2500);
        };
        tebakOptions.appendChild(btn);
    });
}

// ================= LEVEL 3: PUZZLE MERAKIT KOMPUTER (SISTEM KLIK BEBAS MACET) =================
function initPuzzleLevel() {
    navigateTo('screen-level3-puzzle');
    
    // Reset internal state
    selectedHardwareId = null;
    completedPuzzleSlots = 0;
    scoreLevel3 = 0;

    // Reset visual slot target casing PC ke tampilan awal
    const defaultLabels = ["Processor", "RAM", "Storage/SSD", "Power Supply"];
    for (let i = 1; i <= 4; i++) {
        const slot = document.getElementById(`pc-slot-${i}`);
        slot.innerHTML = `<span class="slot-tag">[Slot ${i}]</span> <strong>Tempat ${defaultLabels[i-1]}</strong>`;
        slot.style.backgroundColor = "#ffffff";
        slot.style.border = "2px dashed #94a3b8";
        slot.style.color = "#718096";
    }

    // Acak kepingan komponen komputer
    const poolContainer = document.getElementById('hardware-pool');
    poolContainer.innerHTML = "";

    let shuffledList = [...hardwareComponents];
    shuffledList.sort(() => Math.random() - 0.5); // Proses pengacakan posisi index meja

    shuffledList.forEach(item => {
        const tileCard = document.createElement('div');
        tileCard.className = "hardware-tile-card";
        tileCard.id = `hw-tile-${item.id}`;
        tileCard.innerHTML = `<span style="font-size:24px;">${item.icon}</span><strong>${item.name}</strong><em>${item.function}</em>`;
        
        // Pemicu Klik Kepingan
        tileCard.onclick = function() {
            selectHardwareCard(item.id);
        };
        
        poolContainer.appendChild(tileCard);
    });
}

// Ketika user klik kepingan perangkat keras di meja kanan
function selectHardwareCard(id) {
    // Hapus efek seleksi aktif lama
    const cards = document.querySelectorAll('.hardware-tile-card');
    cards.forEach(c => c.classList.remove('active-selected'));

    // Aktifkan border jingga sebagai tanda kepingan siap dipasang
    selectedHardwareId = id;
    const currentCard = document.getElementById(`hw-tile-${id}`);
    if (currentCard) {
        currentCard.classList.add('active-selected');
    }
}

// Ketika user klik kotak slot abu-abu di dalam casing PC sebelah kiri
function targetSlotClicked(slotNumber) {
    if (selectedHardwareId === null) {
        alert("⚠️ Pilih komponen hardware di meja sebelah kanan terlebih dahulu dengan cara diklik!");
        return;
    }

    // Validasi kecocokan logika perakitan komponen komputer
    if (selectedHardwareId === slotNumber) {
        const targetCell = document.getElementById(`pc-slot-${slotNumber}`);
        const hardwareInfo = hardwareComponents.find(h => h.id === slotNumber);
        const cardInPool = document.getElementById(`hw-tile-${selectedHardwareId}`);

        // Pindahkan komponen secara visual: Slot berubah hijau sukses
        targetCell.innerHTML = `<span style="font-size:22px;">✅ ${hardwareInfo.icon}</span><strong style="color:#2f855a; font-size:12px;">${hardwareInfo.name}</strong><span style="font-size:10px; color:#4a5568;">Terpasang Sempurna</span>`;
        targetCell.style.backgroundColor = "#c6f6d5";
        targetCell.style.border = "2px solid #2f855a";
        targetCell.style.color = "#1a202c";

        // Hilangkan kepingan yang benar dari daftar meja acak
        if (cardInPool) {
            cardInPool.remove();
        }

        // Reset state seleksi klik
        selectedHardwareId = null;
        completedPuzzleSlots++;

        // Jika ke-4 bagian perangkat keras komputer telah sukses dirakit
        if (completedPuzzleSlots === 4) {
            scoreLevel3 = 30; // Berikan poin penuh level 3
            setTimeout(() => {
                alert("🖥️ Sempurna! Seluruh komponen komputer berhasil dirakit dan menyala dengan normal!");
                renderFinalGraduationReport();
            }, 300);
        }
    } else {
        alert(`❌ Pemasangan Gagal! Posisi komponen tidak sesuai dengan arsitektur slot nomor ${slotNumber}. Silakan analisa ulang!`);
    }
}

// ================= GENERATE LAPORAN HASIL AKHIR =================
function renderFinalGraduationReport() {
    navigateTo('screen-game-over');
    
    // Akumulasi penjumlahan nilai akhir permainan
    const finalCalculatedScore = scoreLevel1 + scoreLevel2 + scoreLevel3;
    
    document.getElementById('end-name').innerText = playerName;
    document.getElementById('end-percentage').innerText = finalCalculatedScore + "%";
    
    const emojiOutput = document.getElementById('end-emoji');
    const titleOutput = document.getElementById('end-title');
    const statusOutput = document.getElementById('end-status');
    const motivationOutput = document.getElementById('end-motivation');

    // Pengondisian parameter kelulusan sesuai dengan skor yang didapat user
    if (finalCalculatedScore >= 70) {
        emojiOutput.innerText = "🏆";
        titleOutput.innerText = "CONGRATULATIONS!";
        statusOutput.innerText = "LULUS SELEKSI";
        statusOutput.style.color = "var(--green-card)";
        motivationOutput.innerText = `Selamat ${playerName}! Hasil nilai akhir kamu mencapai ${finalCalculatedScore}%. Selamat, anda siap kuliah di Politeknik ASTRATECH! Selesaikan langkah administrasi berkas pendaftaranmu sekarang juga! 🚀`;
    } else {
        emojiOutput.innerText = "❌";
        titleOutput.innerText = "GAME OVER / COBA LAGI";
        statusOutput.innerText = "TIDAK LULUS SELEKSI";
        statusOutput.style.color = "var(--red-card)";
        motivationOutput.innerText = `Maaf ${playerName}, akumulasi nilai seleksi pendaftaran kamu baru ${finalCalculatedScore}%. Silakan klik tombol refresh browser untuk belajar kembali dan mengulang permainan.`;
    }
}

function submitFinalFeedback() {
    const text = document.getElementById('feedback-text').value;
    if (text.trim() === "") {
        alert("Harap tuliskan ulasan singkat sebelum keluar.");
        return;
    }
    alert("Feedback berhasil terkirim ke server pusat PMB ASTRATECH. Terima kasih!");
    location.reload(); // Mengembalikan permainan ke landing page awal
}
