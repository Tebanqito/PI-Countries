const { Router } = require("express");
const {
  getActivities,
  createActivity,
  getActivitiesByCountryId,
  getActivitiesByCountryName,
  getActivitiesByDifficulty,
  getActivitiesBySeason,
  getActivityByName,
  updateActivityById,
  deleteActivityById,
} = require("../controllers/activityController");
const activityRouter = Router();

activityRouter.get("/getActivities", async (req, res) => {
  try {
    const touristActivities = await getActivities();
    res.status(200).json(touristActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.get("/getActivitiesByDifficulty", async (req, res) => {
  const { difficulty } = req.query;

  try {
    if (!difficulty) throw new Error("La dificultad esta indefinida.");

    const activities = await getActivitiesByDifficulty(difficulty);
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.get("/getActivitiesBySeason", async (req, res) => {
  const { season } = req.query;

  try {
    if (!season) throw new Error("La temporada esta indefinida.");

    const activities = await getActivitiesBySeason(season);
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.get("/getActivityByName", async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) throw new Error("El nombre de la actividad esta indefinido");

    const activity = await getActivityByName(name);
    if (!activity)
      throw new Error(
        `No se encontro ninguna actividad con el nombre ${name} en la BDD.`
      );

    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.get("/getActivitiesByCountryName", async (req, res) => {
  const { countryName } = req.query;

  try {
    if (!countryName) throw new Error("El nombre del pais esta indefinido.");

    const activities = await getActivitiesByCountryName(countryName);
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.get("/getActivitiesByCountryId/:countryId", async (req, res) => {
  const { countryId } = req.params;

  try {
    if (!countryId) throw new Error("El id del pais esta indefinido.");

    const activities = await getActivitiesByCountryId(countryId);
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.post("/", async (req, res) => {
  const { countriesId, name, difficulty, duration, season } = req.body;

  try {
    console.log("estoy en /activities");
    if (
      ![countriesId.length, name, difficulty, duration, season].every(Boolean)
    ) {
      throw new Error("Datos incompletos.");
    }

    const touristActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countriesId
    );
    if (!touristActivity)
      throw new Error("Error al crear la actividad turistica.");

    res.status(200).json(touristActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

activityRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const attributes = req.body;

  try {
    if (!id || !attributes) throw new Error("Datos incompletos.");

    const activityUpdated = await updateActivityById(id, attributes);
    if (!activityUpdated)
      throw new Error(
        `No se encuentra una actividad con el id ${id} en la BDD.`
      );

    res.status(200).json(activityUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activityRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw new Error("El id de la actividad esta indefinido.");

    const activityDeleted = await deleteActivityById(id);
    if (!activityDeleted)
      throw new Error(
        `No se elimino ninguna actividad con el id ${id} en la BDD.`
      );

    res.status(200).json(activityDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = activityRouter;
