let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    let prompt = document.getElementById("prompt").value || "chia tay, mưa, nhớ";

    const styleSelect = document.getElementById("style").value;
    const voiceSelect = document.getElementById("voice").value;
    const moodSelect = document.getElementById("mood").value;

    const keywords = prompt.split(",").map(k => k.trim());
    const k1 = keywords[0] || "chia ly";
    const k2 = keywords[1] || "mưa";
    const k3 = keywords[2] || "nỗi nhớ";

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // 🎵 STYLE TEXT
    let styleText = "";

    if (styleSelect === "bolero") {
        styleText = "Vietnamese Bolero, slow tempo, guitar + accordion";
    } else if (styleSelect === "nhacvang") {
        styleText = "Nhạc vàng xưa, bolero cổ điển, âm thanh analog";
    } else {
        styleText = "Modern Bolero, soft piano + chill beat";
    }

    // 🎤 VOICE
    let voiceText = "";

    if (voiceSelect === "male") {
        voiceText = "male deep emotional vocal, giống Chế Linh";
    } else if (voiceSelect === "male2") {
        voiceText = "male warm vocal, giống Mạnh Quỳnh";
    } else {
        voiceText = "female soft emotional vocal";
    }

    // 🎧 MOOD
    let moodText = "";

    if (moodSelect === "sad") {
        moodText = "sad, heartbreaking";
    } else if (moodSelect === "nostalgic") {
        moodText = "nostalgic, memory, old love";
    } else {
        moodText = "romantic, emotional";
    }

    const verse = [
        "Chiều buồn lặng lẽ bên hiên",
        "Con đường xưa phủ mưa rơi",
        "Lối cũ giờ vắng bóng em",
        "Hoàng hôn buông xuống chơi vơi"
    ];

    const chorus1 = [
        "Em ơi sao nỡ quên câu thề",
        "Sao em đành lòng quay bước đi",
        "Người ơi sao nỡ xa cách anh"
    ];

    const chorus2 = [
        "Để anh ôm trọn nỗi ê chề",
        "Để tim anh đau đến tái tê",
        "Để lại đây bao nhiêu đắng cay"
    ];

    const lyrics = `
🎧 STYLE:
${styleText}, ${voiceText}, ${moodText}

🎵 ${title}

[Intro]
${pick(verse)}
Cơn ${k2} rơi nhẹ mang theo nỗi buồn...

[Verse 1]
${pick(verse)}
${pick(verse)}
Nhớ về ${k3} ngày xưa...

[Verse 2]
Chuyện ${k1} khiến lòng anh đau
Kỷ niệm xưa giờ phai mau
Giọt lệ rơi trong đêm thâu...

💔 [Chorus]
${pick(chorus1)}
${pick(chorus2)}
Tình yêu như giấc mộng mê...

💔 [Chorus - Cao trào]
${pick(chorus1)}
${pick(chorus2)}
Con tim anh vẫn không quên...

[Kết]
Cơn ${k2} vẫn rơi ngoài hiên...
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
