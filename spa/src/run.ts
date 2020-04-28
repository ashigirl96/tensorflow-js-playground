import * as tfvis from "@tensorflow/tfjs-vis";
import { getData } from "./datasets/cars";

export default async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map((d: { horsepower: any; mpg: any }) => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    { name: "Horsepower v MPG" },
    { values },
    {
      xLabel: "Horsepower",
      yLabel: "MPG",
      height: 300,
    }
  );

  // More code will be added below
}
