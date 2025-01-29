const currentTime = document.getElementById("current-time");

function getCurrentUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().split("T")[1].split(".")[0];
    currentTime.textContent = utcTime;
}

getCurrentUTCTime();
