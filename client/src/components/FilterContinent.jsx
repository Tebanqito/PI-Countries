const FilterContinent = (props) => {
    const handleInputChange = (e) => {
        props.setFiltro(e.target.value);
    };

    return (
        <div>
                <label htmlFor="">Filtrar por continente:</label>
                <input type="text" name="continentName" value={props.filtro} onChange={handleInputChange} />
        </div>
    );
}

export default FilterContinent;