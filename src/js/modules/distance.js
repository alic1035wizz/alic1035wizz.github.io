export const  calculateDistance = (latitude, longitude) => {
    // Координаты точки наблюдения
    const startPoint = { latitude:  55.81056975, longitude: 37.793542 };
  
    // Координаты точки доставки
    const endPoint = { latitude: latitude, longitude: longitude };
  
    // Радиус Земли в километрах
    const earthRadius = 6371;
  
    // Перевод градусов в радианы
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
  
    // Разница между широтами и долготами в радианах
    const latDiff = toRadians(endPoint.latitude - startPoint.latitude);
    const lonDiff = toRadians(endPoint.longitude - startPoint.longitude);
  
    // Вычисление гаверсинуса половины разницы широт и долгот
    const havLat = Math.sin(latDiff / 2) ** 2;
    const havLon = Math.sin(lonDiff / 2) ** 2;
  
    // Вычисление гаверсинуса расстояния
    const havDistance = havLat + Math.cos(toRadians(startPoint.latitude)) * Math.cos(toRadians(endPoint.latitude)) * havLon;
  
    // Вычисление центрального угла
    const centralAngle = 2 * Math.atan2(Math.sqrt(havDistance), Math.sqrt(1 - havDistance));
  
    // Вычисление расстояния в километрах
    const distanceInKilometers = earthRadius * centralAngle;
  
    // Округление до двух знаков после запятой
    const roundedDistance = distanceInKilometers.toFixed(2);
  
    return roundedDistance;
  };