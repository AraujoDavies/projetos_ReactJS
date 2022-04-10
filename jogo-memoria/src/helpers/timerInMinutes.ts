export const formatMinutes = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);

    let txtMin = (minutes < 10 ? `0${minutes}` : minutes);
    let txtSec = (seconds < 10 ? `0${seconds}` : seconds);
    return `${txtMin}:${txtSec}`;
}