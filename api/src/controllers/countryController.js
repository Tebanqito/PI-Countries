const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryById = async (id) => {
  const country = await Country.findByPk(id, { include: [Activity] });
  return country;
};

const findAllCountriesByActivityId = async (activityId) => {
  const activity = await Activity.findByPk(activityId);
  const countries = await activity.getCountries({ include: [Activity] });
  return countries;
};

const findAllCountriesByActivityName = async (name) => {
  const activity = await Activity.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });
  const countries = await activity.getCountries();
  return countries;
};

const findAllCountriesByContinent = async (continent) => {
  const countries = await Country.findAll({
    where: { continent: { [Op.like]: `%${continent}%` } },
    include: [Activity],
  });
  return countries;
};

const findAllCountriesBySubRegion = async (subRegion) => {
  const countries = await Country.findAll({
    where: { subRegion: { [Op.like]: `%${subRegion}%` } },
    include: [Activity],
  });
  return countries;
};

const findAllCountriesWhitPopulationGreaterThanOrEqual = async (population) => {
  const countries = await Country.findAll({
    where: { population: { [Op.gte]: population } },
    include: [Activity],
  });
  return countries;
};

const findAllCountriesByName = async (name) => {
  const countries = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: [Activity],
  });
  return countries;
};

const findAllCountries = async () => {
  const countries = await Country.findAll({
    attributes: [
      "id",
      "name",
      "imgFlag",
      "continent",
      "capital",
      "subRegion",
      "area",
      "poblacion",
    ],
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countries;
};

module.exports = {
  getCountryById,
  findAllCountriesByName,
  findAllCountries,
  findAllCountriesByActivityId,
  findAllCountriesByActivityName,
  findAllCountriesByContinent,
  findAllCountriesBySubRegion,
  findAllCountriesWhitPopulationGreaterThanOrEqual,
};