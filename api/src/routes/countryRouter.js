const { Router } = require("express");
const {
    createCountry,
    getById
} = require("../controllers/countryController");
const { Country } = require("../db");
const countryRouter = Router();
const axios = require("axios");

countryRouter.get("/", async (req, res) => {
    try {
        await axios.get("https://restcountries.com/v3/all")
        .then(res => {
            const countries = res.data;

            countries.forEach(async element => {
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
            });
        });

        res.status(200).json({status: "ok"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

countryRouter.get("/:idPais", async (req, res) => {
    const { id } = req.params;

    try {
        const country = await getById(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = countryRouter;