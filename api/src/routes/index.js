const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRouter");
// const touristActivity = require("./touristActivityRouter");
const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const router = Router();

router.use("/countries", countryRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get("/countries", async (req, res) => {
//     const { name } = req.query;

//     try {
//         console.log("estoy en /countries");
//         if (name) {
//             const countries = await Country.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } } });
//             if (countries) return res.status(200).json(countries);
//             throw new Error(`No se ah encontrado el pais ${name} en la base de datos.`);
//         }
//         const countries = await Country.findAll({
//             attributes: ["id", "name", "imgFlag", "continent", "capital", "subRegion", "area", "poblacion"],
//             include: [
//                 {
//                     model: Activity,
//                     attributes: ["name", "difficulty", "duration", "season"],
//                     through: {
//                         attributes: []
//                     }
//                 }
//             ]
//         });

//         if (!countries.length) {
//             await axios.get("https://restcountries.com/v3/all")
//                 .then(res => {
//                     const countries = res.data;

//                     countries.forEach(async element => {
//                         await Country.create({
//                             id: element.cca3,
//                             name: element.name.official ? element.name.official : element.name.common,
//                             imgFlag: element.flags ? element.flags[0] : element.flag,
//                             continent: element.region ? element.region : element.continents[0],
//                             capital: element.capital ? element.capital[0] : "No posee capital",
//                             subRegion: element.subregion,
//                             area: element.area,
//                             poblacion: element.population
//                         });
//                     });
//                 });

//             return res.status(200).json({ status: "Paises cargados en la BDD." });
//         }

//         return res.status(200).json(countries);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// router.get("/countriesActivity/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         console.log("estoy en /countriesActivity/:id");
//         const activity = await Activity.findByPk(id);
//         const countries = await activity.getCountries();
//         if (!countries.length) throw new Error("No se han encontrado paises con tal actividad");
//         res.status(200).json(countries);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// router.get("/countries/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         console.log("estoy en /countries/:id");
//         const country = await Country.findByPk(id, { include: [Activity] });
//         if (!country) throw new Error("Pais no encontrado");
//         res.status(200).json(country);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// ******************************************************************

// router.post("/activities", async (req, res) => {
//     const { countryId, name, difficulty, duration, season } = req.body;

//     try {
//         console.log("estoy en /activities");
//         if (![countryId, name, difficulty, duration, season].every(Boolean)) {
//             throw new Error("Datos incompletos.");
//         }

//         const country = await Country.findByPk(countryId);
//         if (!country) throw new Error(`El pais con el id: ${countryId} no se encuentra en la BDD`);

//         const touristActivity = await TouristActivity.create({
//             name: name,
//             difficulty: difficulty,
//             duration: duration,
//             season: season
//         });
//         await country.addTouristActivity(touristActivity);

//         res.status(200).json({ country: countryId, activity: touristActivity });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

router.post("/activities", async (req, res) => {
    const { countriesId, name, difficulty, duration, season } = req.body;

    try {
        console.log("estoy en /activities");
        if (![countriesId.length, name, difficulty, duration, season].every(Boolean)) {
            throw new Error("Datos incompletos.");
        }

        const touristActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });

        for(let countryId of countriesId) {
            let country = await Country.findByPk(countryId);
            await country.addActivity(touristActivity);
            await touristActivity.addCountry(country);
        }

        res.status(200).json({ activity: touristActivity });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/getActivities", async (req, res) => {
    try {
        console.log("esoy en /getActivities");
        const touristActivities = await Activity.findAll();
        res.status(200).json(touristActivities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
