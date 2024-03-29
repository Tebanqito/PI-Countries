const { Activity, Country } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countriesId
) => {
  const activity = await Activity.create({
    name: name,
    difficulty: difficulty,
    duration: duration,
    season: season,
  });

  for (let countryId of countriesId) {
    let country = await Country.findByPk(countryId);
    await country.addActivity(activity);
    await activity.addCountry(country);
  }

  return activity;
};

const getActivities = async () => {
  const activities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

const getActivityById = async (id) => {
  const activity = await Activity.findByPk(id, {
    include: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activity;
};

const getActivityByName = async (name) => {
  const activity = await Activity.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
    includes: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activity;
};

const getActivitiesByCountryId = async (countryId) => {
  const country = await Country.findByPk(countryId);
  const activities = await country.getActivities({
    includes: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

const getActivitiesByCountryName = async (name) => {
  const country = await Country.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });
  const activities = await country.getActivities({
    includes: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

const getActivitiesBySeason = async (season) => {
  const activities = await Activity.findAll({
    where: { season: season },
    includes: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

const getActivitiesByDifficulty = async (difficulty) => {
  const activities = await Activity.findAll({
    where: { difficulty: { [Op.eq]: difficulty } },
    includes: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

const updateActivityById = async (id, attributes) => {
  await Activity.update(attributes, { where: { id: id } });
  const activityUpdated = await Activity.findByPk(id);
  return activityUpdated;
};

const deleteActivityById = async (id) => {
  const activityToDelete = await Activity.findByPk(id);
  await Activity.destroy({ where: { id: id } });
  return activityToDelete;
};

const unlinkCountry = async (activityId, countryId) => {
  const activity = await Activity.findByPk(activityId, {
    include: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  const country = await Country.findByPk(countryId);
  await activity.removeCountry(country);
  await country.removeActivity(activity);
  return activity;
};

const linkCountry = async (activityId, countryId) => {
  const activity = await Activity.findByPk(activityId, {
    include: {
      model: Country,
      attributes: ["id", "name", "continent", "subRegion"],
      through: {
        attributes: [],
      },
    },
  });
  const country = await Country.findByPk(countryId);
  await activity.addCountry(country);
  await country.addActivity(activity);
  return activity;
};

module.exports = {
  createActivity,
  getActivities,
  getActivitiesByDifficulty,
  getActivityById,
  getActivityByName,
  getActivitiesBySeason,
  getActivitiesByCountryId,
  getActivitiesByCountryName,
  updateActivityById,
  deleteActivityById,
  unlinkCountry,
  linkCountry,
};
