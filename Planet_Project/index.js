const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

const habitablePlanets = [];

// features for the habitable planets 👇
const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    // pushing only the habitable planets
    if (isHabitable(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map(planet => planet["kepler_name"]))
    console.log(`${habitablePlanets.length} habitable planets found `);
  });

  // these 8 planets are habitable 
  // [
  //   'Kepler-1652 b',
  //   'Kepler-1410 b',
  //   'Kepler-296 A f',
  //   'Kepler-442 b',
  //   'Kepler-296 A e',
  //   'Kepler-1649 b',
  //   'Kepler-62 f',
  //   'Kepler-452 b'
  // ]

  // 8 habitable planets found