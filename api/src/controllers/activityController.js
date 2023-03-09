const { Activity } = require("../db");

const createActivity = async (name, difficulty, duration, season) => {
  const activity = await Activity.create({
    name: name,
    difficulty: difficulty,
    duration: duration,
    season: season,
  });
  return activity;
};

const getActivities = async () => {
  const activities = await Activity.findAll();
  return activities;
};

const getActivityById = async (id) => {
  const activity = await Activity.findByPk(id);
  return activity;
};

const getActivityByName = async (name) => {
  const activity = await Activity.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });
  return activity;
};

const getActivitiesBySeason = async (season) => {
  const activities = await Activity.findAll({ where: { season: season } });
  return activities;
};

const getActivitiesByDifficulty = async (difficulty) => {
  const activities = await Activity.findAll({
    where: { difficulty: { [Op.eq]: difficulty } },
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

module.exports = {
  createActivity,
  getActivities,
  getActivitiesByDifficulty,
  getActivityById,
  getActivityByName,
  getActivitiesBySeason,
  updateActivityById,
  deleteActivityById,
};