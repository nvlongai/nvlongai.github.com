let currentSong = "";

// 🎼 Tạo bài hát (Demo hoặc AI thật)
async function generateSong() {
    const title = document.getElementById("title").value;
    const prompt = document.getElementById("prompt").value;

    // 👉 DEMO (chạy ngay nếu chưa có API)
    if (!window.USE_REAL_AI) {
        currentSong = `
🎵 ${title || "Bài Bolero"}

Chiều mưa rơi nhớ bóng em xưa
Con đường cũ vẫn chưa phai mờ
Tình yêu ngày đó như mơ
Giờ đây tan vỡ bơ vơ...

💔 Điệp khúc:
Em đi để lại tim đau
Mưa rơi ướt cả đêm thâu...
`;
        document.getElementById("result").innerText = currentSong;
        return;
    }

    // 👉 AI thật (OpenAI API)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Viết bài hát Bolero cực xúc động. Tiêu đề: ${title}. Nội dung: ${prompt}`
                }
            ]
        })
    });

    const data = await response.json();
    currentSong = data.choices[0].message.content;
    document.getElementById("result").innerText = currentSong;
}

// 🎤 Đọc giọng (Text-to-Speech)
function speakSong() {
    const speech = new SpeechSynthesisUtterance(currentSong);
    speech.lang = "vi-VN";
    speech.rate = 0.9;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}

// 💾 Tải file .txt
function downloadSong() {
    const blob = new Blob([currentSong], { type: "text/plain" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "bolero.txt";
    a.click();
}