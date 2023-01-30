const FilterActivity = (props) => {
    const handleInputChange = (e) => {
        props.setFiltro(e.target.value);
    };

    return (
        <div>
                <label htmlFor="">Filtrar por Actividad Turistica</label>
                <input type="text" name="activityName" value={props.filtro} onChange={handleInputChange} />
        </div>
    );
}

export default FilterActivity;