
const Filtros = ({ filtro, setFiltro }) => {
	return (
		<div className="filtros sombra contenedor">
			<form action="#">
				<div className="campo">
					<label htmlFor="#">Filtrar Gastos</label>
					<select
						value={filtro}
						onChange={(e) => setFiltro(e.target.value)}
					>
						<option value="">-- Todos --</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="subcripciones">Subcripciones</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filtros;
