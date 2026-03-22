async function generateFullSong() {
    function generateLyrics() {
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
}

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
