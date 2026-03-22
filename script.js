let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    let prompt = document.getElementById("prompt").value || "chia tay, mưa, nhớ";

    const keywords = prompt.split(",").map(k => k.trim());
    const k1 = keywords[0] || "chia ly";
    const k2 = keywords[1] || "mưa";
    const k3 = keywords[2] || "nỗi nhớ";

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // 🎵 STYLE (QUAN TRỌNG)
    const styles = [
        "Vietnamese Bolero, slow tempo, emotional male vocal, sad romantic",
        "Bolero trữ tình, nhạc vàng xưa, giọng nam ấm, cảm xúc sâu lắng",
        "Vietnamese nostalgic bolero, guitar + accordion, romantic sadness",
        "Bolero style 90 BPM, male singer, emotional and heartbreaking"
    ];

    const style = pick(styles);

    const verse1 = [
        "Chiều buồn lặng lẽ bên hiên",
        "Con đường xưa phủ mưa rơi",
        "Hoàng hôn buông xuống chơi vơi",
        "Lối cũ giờ vắng bóng em"
    ];

    const chorus1 = [
        "Em ơi sao nỡ quên câu thề",
        "Sao em đành lòng quay bước đi",
        "Người ơi sao nỡ xa cách anh",
        "Tình ơi sao nỡ tan vỡ nhanh"
    ];

    const chorus2 = [
        "Để anh ôm trọn nỗi ê chề",
        "Để tim anh đau đến tái tê",
        "Để lại đây bao nhiêu đắng cay",
        "Để anh cô đơn giữa đêm dài"
    ];

    const lyrics = `
🎧 STYLE:
${style}

🎵 ${title}

[Intro]
${pick(verse1)}
Cơn ${k2} rơi nhẹ mang theo nỗi buồn...

[Verse 1]
${pick(verse1)}
${pick(verse1)}
Nhớ về ${k3} ngày xưa...

[Verse 2]
Chuyện ${k1} khiến lòng anh đau
Kỷ niệm xưa giờ phai mau
Giọt lệ rơi trong đêm thâu
Nghe lòng thêm xót xa...

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

[Kết]
Cơn ${k2} vẫn rơi ngoài hiên
Mà em đã xa anh thật rồi...
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
