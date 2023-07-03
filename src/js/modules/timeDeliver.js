export const calculateTime = (distance) => {
    // Скорость дрона в км/ч
    const droneSpeed = 60;

    // Перевод расстояния из километров в метры
    const distanceInMeters = distance * 1000;

    // Расчет времени в часах
    const timeInHours = distanceInMeters / (droneSpeed * 1000);

    // Преобразование времени в минуты
    const timeInMinutes = timeInHours * 60;

    // Округление времени до целых минут
    const roundedTime = Math.round(timeInMinutes);

    const HOUR = Math.ceil(roundedTime / 60);
    const MIN = roundedTime % 60;

    return roundedTime < 60 ? `${roundedTime}мин` : `${HOUR}ч ${MIN}мин`
}