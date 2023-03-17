const { Router } = require("express");
const {
  createCountry,
  getCountryById,
  findAllCountriesByName,
  findAllCountries,
  findAllCountriesByActivityId,
  findAllCountriesByActivityName,
  findAllCountriesByContinent,
  findAllCountriesBySubRegion,
  findAllCountriesWhitPopulationGreaterThanOrEqual,
  findAllCountriesWhitPopulationLessThanOrEqual,
  findAllCountriesWhitPopulationBetween,
  findAllCountriesOrderByNameAsc,
  findAllCountriesOrderByNameDesc,
  findAllCountriesOrderByPopulationAsc,
  findAllCountriesOrderByPopulationDesc,
} = require("../controllers/countryController");
const countryRouter = Router();
const { Country } = require("../db");
const axios = require("axios");

countryRouter.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countries = await findAllCountriesByName(name);
      if (countries) return res.status(200).json(countries);
      throw new Error(
        `No se ah encontrado el pais ${name} en la base de datos.`
      );
    }
    const countries = await findAllCountries();

    if (!countries.length) {
      await axios.get("https://restcountries.com/v3/all").then((res) => {
        const countries = res.data;

        countries.forEach(async (element) => {
          await Country.create({
              id: element.cca3,
              name: element.name.official ? element.name.official : element.name.common,
              imgFlag: element.flags ? element.flags[0] : element.flag,
              continent: element.region ? element.region : element.continents[0],
              capital: element.capital ? element.capital[0] : "No posee capital",
              subRegion: element.subregion,
              area: element.area,
              poblacion: element.population
          });
          // await createCountry({
          //   id: element.cca3,
          //   name: element.name.official
          //     ? element.name.official
          //     : element.name.common,
          //   imgFlag: element.flags ? element.flags[0] : element.flag,
          //   continent: element.region ? element.region : element.continents[0],
          //   capital: element.capital ? element.capital[0] : "No posee capital",
          //   subRegion: element.subregion,
          //   area: element.area,
          //   poblacion: element.population,
          // });
        });
      });

      return res.status(200).json({ status: "Paises cargados en la BDD." });
    }

    return res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByNameAsc", async (req, res) => {
  try {
    const countries = await findAllCountriesOrderByNameAsc();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByNameDesc", async (req, res) => {
  try {
    const countries = await findAllCountriesOrderByNameDesc();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByPopulationAsc", async (req, res) => {
  try {
    const countries = await findAllCountriesOrderByPopulationAsc();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByPopulationDesc", async (req, res) => {
  try {
    const countries = await findAllCountriesOrderByPopulationDesc();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByContinent", async (req, res) => {
  const { nameContinent } = req.query;

  try {
    if (!nameContinent)
      throw new Error("El nombre del continente esta indefinido.");

    const countries = await findAllCountriesByContinent(nameContinent);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesBySubRegion", async (req, res) => {
  const { nameSubRegion } = req.query;

  try {
    if (!nameSubRegion)
      throw new Error("El nombre de la subregion esta indefinido.");

    const countries = await findAllCountriesBySubRegion(nameSubRegion);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get(
  "/countriesWhitPopulationGreaterThanOrEqual",
  async (req, res) => {
    const { population } = req.query;

    try {
      if (!population)
        throw new Error("La cantidad de poblacion esta indefinida.");

      const countries = await findAllCountriesWhitPopulationGreaterThanOrEqual(
        population
      );
      res.status(200).json(countries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

countryRouter.get(
  "/countriesWhitPopulationLessThanOrEqual",
  async (req, res) => {
    const { population } = req.query;

    try {
      if (!population)
        throw new Error("La cantidad de poblacion esta indefinida.");

      const countries = await findAllCountriesWhitPopulationLessThanOrEqual(
        population
      );
      res.status(200).json(countries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

countryRouter.get("/countriesWhitPopulationBetween", async (req, res) => {
  const { lessPopulation, greatPopulation } = req.query;
  try {
    if (!lessPopulation || greatPopulation)
      throw new Error("Datos incompletos.");

    const countries = await findAllCountriesWhitPopulationBetween(
      lessPopulation,
      greatPopulation
    );
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByActivityName", async (req, res) => {
  const { nameActivity } = req.query;

  try {
    if (!nameActivity)
      throw new Error("El nombre de la actividad esta indefinido.");

    const countries = await findAllCountriesByActivityName(nameActivity);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/countriesByActivityId/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id)
      throw new Error("El id de la actividad turistica esta indefinido.");

    const countries = await findAllCountriesByActivityId(id);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countryRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw new Error("El id del pais esta indefinido.");

    const country = await getCountryById(id);
    if (!country)
      throw new Error(`No se encuentra ningun pais con el id ${id} en la BDD.`);

    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = countryRouter;