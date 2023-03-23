const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const createCountry = async (
  id,
  name,
  imgFlag,
  continent,
  capital,
  subRegion,
  area,
  poblacion
) => {
  const countryCreated = await Country.create({
    id: id,
    name: name,
    imgFlag: imgFlag,
    continent: continent,
    capital: capital,
    subRegion: subRegion,
    area: area,
    poblacion: poblacion,
  });
  return countryCreated;
};

const getCountryById = async (id) => {
  const country = await Country.findByPk(id, { include: [Activity] });
  return country;
};

const findAllCountriesOrderByPopulationDesc = async () => {
  const countries = await Country.findAll({
    order: [["poblacion", "DESC"]],
    include: [Activity],
  });
  return countries;
};

const findAllCountriesOrderByPopulationAsc = async () => {
  const countries = await Country.findAll({
    order: [["poblacion", "ASC"]],
    include: [Activity],
  });
  return countries;
};

const findAllCountriesOrderByNameDesc = async () => {
  const countries = await Country.findAll({
    order: [["name", "DESC"]],
    include: [Activity],
  });
  return countries;
};

const findAllCountriesOrderByNameAsc = async () => {
  const countries = await Country.findAll({
    order: [["name", "ASC"]],
    include: [Activity],
  });
  return countries;
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
  const countries = await activity.getCountries({ include: [Activity] });
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
    where: { poblacion: { [Op.gte]: population } },
    include: [Activity],
  });
  return countries;
};

const findAllCountriesWhitPopulationLessThanOrEqual = async (population) => {
  const countries = await Country.findAll({
    where: { poblacion: { [Op.lte]: population } },
    include: [Activity],
  });
  return countries;
};

const findAllCountriesWhitPopulationBetween = async (
  lessPopulation,
  greatPopulation
) => {
  const countries = await Country.findAll({
    where: { poblacion: { [Op.between]: [lessPopulation, greatPopulation] } },
    include: [Activity],
  });
  return countries;
};

const getCountryByName = async (name) => {
  const country = await Country.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: [Activity],
  });
  return country;
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
        attributes: ["id", "name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countries;
};

module.exports = {
  createCountry,
  getCountryById,
  getCountryByName,
  findAllCountries,
  findAllCountriesByActivityId,
  findAllCountriesByActivityName,
  findAllCountriesByContinent,
  findAllCountriesBySubRegion,
  findAllCountriesWhitPopulationGreaterThanOrEqual,
  findAllCountriesWhitPopulationLessThanOrEqual,
  findAllCountriesWhitPopulationBetween,
  findAllCountriesOrderByNameDesc,
  findAllCountriesOrderByNameAsc,
  findAllCountriesOrderByPopulationDesc,
  findAllCountriesOrderByPopulationAsc
};