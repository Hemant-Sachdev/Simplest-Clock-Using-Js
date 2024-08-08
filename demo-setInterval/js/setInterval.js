function updateClock() {
    let clockElement = document.querySelector('.paraEvent');
    let now = new Date();

    let hours = now.getHours();
    let minutes =now.getMinutes();
    let seconds = now.getSeconds();

    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 500);
