let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    let prompt = document.getElementById("prompt").value || "chia tay, mưa, nhớ";

    const keywords = prompt.split(",").map(k => k.trim());
    const k1 = keywords[0] || "chia ly";
    const k2 = keywords[1] || "mưa";
    const k3 = keywords[2] || "nỗi nhớ";

    // 🎲 RANDOM helper
    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // 🎵 CÂU NHẠC VÀNG (RANDOM)
    const verse1 = [
        `Ngày xưa ta bước chung đường`,
        `Chiều xưa mưa rơi lối nhỏ`,
        `Con đường quen bóng em về`,
        `Hoàng hôn buông xuống êm đềm`
    ];

    const verse2 = [
        `Mà giờ đây chỉ còn mình anh`,
        `Mà giờ em đã xa thật rồi`,
        `Chỉ còn anh với đêm dài`,
        `Để lại đây bao nỗi sầu`
    ];

    const sadLines = [
        `Nghe tim nhói buốt từng đêm`,
        `Lòng anh đau như xé tim`,
        `Giọt lệ rơi ướt bờ mi`,
        `Tình tan theo cơn ${k2} rơi`
    ];

    const chorus1 = [
        `Em ơi sao nỡ quên câu thề`,
        `Sao em đành lòng quên lối về`,
        `Vì sao em nỡ quay lưng đi`,
        `Người ơi sao đành xa cách anh`
    ];

    const chorus2 = [
        `Để anh ôm trọn nỗi ê chề`,
        `Để tim anh đau đến tái tê`,
        `Để lại đây bao nhiêu đắng cay`,
        `Để anh cô đơn giữa đêm dài`
    ];

    const ending = [
        `Mưa vẫn rơi ngoài hiên`,
        `Đêm nay anh không ngủ`,
        `Con tim anh lặng câm`,
        `Em giờ nơi chốn nào`
    ];

    const lyrics = `
🎵 ${title}

[Intro]
Chiều buồn lặng lẽ bên hiên
Cơn ${k2} rơi nhẹ gợi thêm ưu phiền...

[Verse 1]
${pick(verse1)}
${pick(verse2)}
${pick(sadLines)}
Bóng hình em dần xa khuất...

[Verse 2]
Kỷ niệm xưa đã phai màu
Chuyện ${k1} khiến lòng anh đau
${pick(sadLines)}
Giữa đêm dài nghe xót xa...

💔 [Chorus]
${pick(chorus1)}
${pick(chorus2)}
Tình yêu như giấc mộng mê
Tan rồi chỉ còn u mê...

💔 [Chorus - Cao trào]
${pick(chorus1)}
${pick(chorus2)}
Con tim anh vẫn không quên
Dù em đã xa thật rồi...

[Bridge]
Nếu một ngày em quay trở lại
Anh vẫn chờ dù biết sai
Tình này dẫu có nhạt phai
Anh vẫn yêu em mãi...

[Kết]
${pick(ending)}
${pick(sadLines)}
Mất em anh biết về đâu...
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
