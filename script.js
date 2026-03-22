// 👉 biến global
let audioUrl = "";

// 🔥 TẠO LỜI
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    const prompt = document.getElementById("prompt").value || "chia ly";

    const lyrics = `
🎵 ${title}

[Verse 1]
${prompt} ngày ấy còn trong tim
Con đường xưa lặng lẽ đi tìm
Bóng hình em giờ nơi đâu
Để lòng anh thêm u sầu...

[Verse 2]
Kỷ niệm xưa như cơn gió
Thoảng qua rồi lại tan theo
Chỉ còn lại những thương đau
Giữa đêm dài anh úa sầu...

💔 [Chorus]
Em ơi sao nỡ quên câu thề
Để anh ôm trọn nỗi ê chề
Tình yêu như giấc mộng mê
Tan rồi chỉ còn u mê...

[Kết]
Mưa rơi lạnh ướt vai gầy
Mất em anh biết về đâu...
`;

    document.getElementById("lyrics").innerText = lyrics;
};

// 🎼 TẠO NHẠC (demo)
window.generateMusic = function () {
    audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    alert("🎼 Đã tạo nhạc demo");
};

// 🎤 FULL AI (đơn giản)
window.generateFullSong = function () {
    generateLyrics();
    generateMusic();
    alert("🎤 Đã tạo bài hát FULL!");
};

// ▶️ PHÁT NHẠC
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
