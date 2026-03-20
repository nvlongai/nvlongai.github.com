let lyrics = "";
let audioUrl = "";

// ✍️ Tạo lời bằng AI
async function generateLyrics() {
    const title = document.getElementById("title").value;

    lyrics = `
🎵 ${title || "Bài Bolero"}

Chiều mưa rơi nhớ em
Con đường xưa êm đềm
Tình ta nay tan biến
Chỉ còn lại nỗi buồn...

💔 Điệp khúc:
Em đi quên hết câu thề
Để anh ôm nỗi tái tê...
    `;

    document.getElementById("lyrics").innerText = lyrics;
}
// 🎼 Tạo nhạc (demo dùng file mẫu)
async function generateMusic() {

    // ⚠️ GitHub không gọi trực tiếp Suno → cần server
    // 👉 Tạm dùng demo audio

    audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

    alert("Đã tạo nhạc demo (bản thật cần server)");
}

// ▶️ Phát nhạc
function playMusic() {
    const player = document.getElementById("player");
    player.src = audioUrl;
    player.play();
}

// 💾 Tải lời
function downloadSong() {
    const blob = new Blob([lyrics], { type: "text/plain" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "bolero.txt";
    a.click();
}
