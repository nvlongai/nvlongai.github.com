let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    const prompt = document.getElementById("prompt").value || "chia tay trong mưa";

    const lyrics = `
🎵 ${title}

[Intro]
Chiều rơi lặng lẽ bên hiên
Nghe tim nhói buốt nỗi niềm chưa quên...

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

💔 [Chorus - Cao trào]
Em đi mang theo bao yêu thương
Bỏ lại anh giữa đêm cô đơn
Con tim anh vẫn không quên
Dù em đã xa thật rồi...

[Bridge]
Nếu một ngày em quay trở lại
Anh vẫn chờ dù biết sai
Tình này dẫu có nhạt phai
Anh vẫn yêu em mãi...

[Kết]
Mưa rơi lạnh ướt vai gầy
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
