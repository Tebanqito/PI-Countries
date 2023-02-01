const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const createCountry = async (id, name, imgFlag, continent, capital, subRegion, area, poblacion) => {
    const newCountry = await Country.create({id, name, imgFlag, continent, capital, subRegion, area, poblacion });
    return newCountry;
};

const getCountryById = async id => {
    const country = await Country.findByPk(id, { include: [Activity] });
    return country;
};

const findAllCountriesByName = async name => {
    const countries = await Country.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } } });
    return countries; 
}

module.exports = {
    createCountry,
    getCountryById,
    findAllCountriesByName
};