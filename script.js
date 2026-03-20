let lyrics = "";
let audioUrl = "";

// ✍️ Tạo lời bằng AI
async function generateLyrics() {
    const title = document.getElementById("title").value;
    const prompt = document.getElementById("prompt").value;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Viết bài Bolero cực xúc động. Tiêu đề: ${title}. Nội dung: ${prompt}`
                }
            ]
        })
    });

    const data = await res.json();
    lyrics = data.choices[0].message.content;

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
