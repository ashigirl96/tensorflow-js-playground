/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
export async function getData() {
  const carsDataReq = await fetch(
    "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
  );
  const carsData = await carsDataReq.json();
  return carsData
    .map((car: { Miles_per_Gallon: any; Horsepower: any }) => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(
      (car: { mpg: null; horsepower: null }) =>
        car.mpg !== null && car.horsepower !== null
    );
}
