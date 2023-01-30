const { Country } = require("../db");
const { Op } = require("sequelize");

const createCountry = async (id, name, imgFlag, continent, capital, subRegion, area, poblacion) => {
    const newCountry = await Country.create({id, name, imgFlag, continent, capital, subRegion, area, poblacion });
    return newCountry;
};

const getById = async id => {
    const country = await Country.findByPk(id);
    return country;
};

module.exports = {
    createCountry,
    getById
};