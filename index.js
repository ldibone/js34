function showCurrentTime() {
    var timeDisplay = document.getElementById('timeDisplay')
    var currentTime = new Date()
    var hrs = currentTime.getHours()
    var min = currentTime.getMinutes()
    var sec = currentTime.getSeconds()

    hrs = (hrs < 10 ? "0" : "") + hrs
    min = (min < 10 ? "0" : "") + min
    sec = (sec < 10 ? "0" : "") + sec

    var formattedTime = hrs + ":" + min + ":" + sec
    timeDisplay.innerHTML = formattedTime

    setTimeout(showCurrentTime, 1000)
}
