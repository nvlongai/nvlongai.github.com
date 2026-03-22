async function generateFullSong() {
    const title = document.getElementById("title").value;
    const prompt = document.getElementById("prompt").value;

    // 👉 gọi backend lấy lời
    const res = await fetch("https://bolero-ai-backend.vercel.app/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, prompt })
    });

    const data = await res.json();

    const lyrics = data.lyrics;
    document.getElementById("lyrics").innerText = lyrics;

    // 👉 tạo giọng đọc
    const speech = new SpeechSynthesisUtterance(lyrics);
    speech.lang = "vi-VN";
    speech.rate = 0.9;

    // 👉 phát beat nền
    const beat = new Audio("bolero-beat.mp3");
    beat.loop = true;
    beat.volume = 0.4;

    beat.play();

    // 👉 hát (giả lập)
    speechSynthesis.speak(speech);

    alert("🎤 Đang hát Bolero AI...");
}
