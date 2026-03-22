let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    let prompt = document.getElementById("prompt").value || "chia tay trong mưa, nhớ người yêu";

    const style = document.getElementById("style").value;
    const voice = document.getElementById("voice").value;
    const mood = document.getElementById("mood").value;

    // 🎲 random helper
    const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    // 👉 TÁCH Ý
    const ideas = prompt.split(",").map(x => x.trim());

    function randomWord(base) {
        const variants = [
            base,
            "nỗi " + base,
            base + " xưa",
            base + " trong tim",
            "kỷ niệm " + base
        ];
        return variants[rand(0, variants.length)];
    }

    // 🎧 MOOD → văn phong
    function buildLine() {
        const subjects = ["anh", "em", "ta", "con tim"];
        const verbs = ["nhớ", "quên", "đợi", "tìm", "mơ"];
        const emotions = ["đau", "buồn", "xót xa", "lụi tàn", "vỡ tan"];

        let s = subjects[rand(0, subjects.length)];
        let v = verbs[rand(0, verbs.length)];
        let e = emotions[rand(0, emotions.length)];

        if (mood === "sad") {
            return `${s} ${v} trong ${e}`;
        }
        if (mood === "nostalgic") {
            return `${s} vẫn ${v} những ngày xưa`;
        }
        return `${s} ${v} một tình yêu dịu dàng`;
    }

    // 🎵 STYLE → mở đầu
    let intro = "";
    if (style === "nhacvang") intro = "Ngày xưa ấy đã xa thật rồi...";
    else if (style === "modern") intro = "Một chiều buồn chill giữa phố...";
    else intro = "Chiều buông lối cũ mưa rơi...";

    // 🎤 VOICE → xưng hô
    const x = (voice === "female") ? "anh" : "em";

    // 👉 TẠO BÀI HÁT
    const lyrics = `
🎵 ${title}

[Intro]
${intro}

[Verse 1]
${buildLine()}
${buildLine()}
${buildLine()}
Bóng ${x} giờ xa khuất...

[Verse 2]
${buildLine()}
${buildLine()}
${buildLine()}
Ký ức vẫn chưa phai...

💔 [Chorus]
${buildLine()}
${buildLine()}
Tình yêu như giấc mộng
Tan rồi giữa cuộc đời...

💔 [Cao trào]
${buildLine()}
${buildLine()}
Dù ${x} đã xa thật rồi...

[Bridge]
Nếu một ngày quay lại
${buildLine()}
${buildLine()}

[Kết]
${buildLine()}
Mất ${x} anh biết về đâu...
`;

    document.getElementById("lyrics").innerText = lyrics;
};
// 📋 COPY 1 CLICK
window.copyLyrics = function () {
    const text = document.getElementById("lyrics").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Đã copy lời Bolero!");
};

// 🎼 NHẠC DEMO
window.generateMusic = function () {
    audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    alert("🎼 Đã tạo nhạc demo");
};

// 🎤 FULL
window.generateFullSong = function () {
    generateLyrics();
    generateMusic();
};

// ▶️ PHÁT
window.playMusic = function () {
    const player = document.getElementById("player");
    player.src = audioUrl;
    player.play();
};

// 💾 TẢI
window.downloadSong = function () {
    if (!audioUrl) {
        alert("Chưa có nhạc!");
        return;
    }

    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = "bolero.mp3";
    a.click();
};
