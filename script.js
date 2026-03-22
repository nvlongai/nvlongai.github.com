let audioUrl = "";

// 🎵 TẠO LỜI BOLERO PRO
window.generateLyrics = function () {
    const title = document.getElementById("title").value || "Chuyện tình buồn";
    let prompt = document.getElementById("prompt").value || "chia tay, mưa, nhớ";

    const style = document.getElementById("style").value;
    const voice = document.getElementById("voice").value;
    const mood = document.getElementById("mood").value;

    const keywords = prompt.split(",").map(k => k.trim());
    const k1 = keywords[0] || "chia ly";
    const k2 = keywords[1] || "mưa";
    const k3 = keywords[2] || "nỗi nhớ";

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // 🎧 MOOD → quyết định lời
    let verse, chorus1, chorus2;

    if (mood === "sad") {
        verse = [
            "Chiều buồn lặng lẽ bên hiên",
            "Mưa rơi ướt lạnh con tim",
            "Đêm về nghe lòng tái tê",
            "Lối xưa giờ vắng bóng em"
        ];

        chorus1 = [
            "Em ơi sao nỡ quên câu thề",
            "Sao em đành lòng rời xa anh",
            "Người ơi sao nỡ quay bước đi"
        ];

        chorus2 = [
            "Để anh ôm trọn nỗi ê chề",
            "Để tim anh đau đến tái tê",
            "Để lại đây bao nhiêu đắng cay"
        ];

    } else if (mood === "nostalgic") {
        verse = [
            "Con đường xưa vẫn còn đó",
            "Kỷ niệm xưa vẫn chưa phai",
            "Ngày nào ta bước bên nhau",
            "Giờ chỉ còn là giấc mơ"
        ];

        chorus1 = [
            "Ngày xưa ta đã yêu thật nhiều",
            "Kỷ niệm xưa vẫn còn trong tim",
            "Bao nhiêu yêu dấu không phai"
        ];

        chorus2 = [
            "Giờ đây anh vẫn còn nhớ em",
            "Thời gian không xóa được đâu",
            "Một thời ta đã có nhau"
        ];

    } else {
        verse = [
            "Ánh mắt em khiến anh say",
            "Tình yêu như cơn gió bay",
            "Tim anh rung động mỗi ngày",
            "Vì em anh biết yêu rồi"
        ];

        chorus1 = [
            "Anh yêu em hơn cả chính mình",
            "Trái tim anh chỉ có em thôi",
            "Tình ta như giấc mơ đẹp"
        ];

        chorus2 = [
            "Bên nhau ta sẽ không rời xa",
            "Dẫu cho giông tố phong ba",
            "Tình ta mãi mãi không phai"
        ];
    }

    // 🎵 STYLE → cách viết
    let intro;

    if (style === "nhacvang") {
        intro = "Dòng đời trôi giữa cơn mê...";
    } else if (style === "modern") {
        intro = "Một chiều chill buồn trong tim...";
    } else {
        intro = "Chiều buông lối cũ mưa rơi...";
    }

    // 🎤 VOICE → cách xưng hô
    let xungHo;

    if (voice === "female") {
        xungHo = "anh";
    } else {
        xungHo = "em";
    }

    const lyrics = `
🎵 ${title}

[Intro]
${intro}

[Verse 1]
${pick(verse)}
${pick(verse)}
Nhớ về ${xungHo} ngày xưa...

[Verse 2]
Chuyện ${k1} khiến lòng đau
Cơn ${k2} rơi càng thêm sầu
${pick(verse)}

💔 [Chorus]
${pick(chorus1)}
${pick(chorus2)}
Tình yêu như giấc mộng mê...

💔 [Cao trào]
${pick(chorus1)}
${pick(chorus2)}
Con tim vẫn chưa quên...

[Kết]
${pick(verse)}
Mất ${xungHo} anh biết về đâu...
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
