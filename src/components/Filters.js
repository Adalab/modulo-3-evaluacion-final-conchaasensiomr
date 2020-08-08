import React from 'react';

const Filters = (props) => {
  const handleFilterNameChild = (ev) => {
    ev.preventDefault();
    props.handleFilters({
      key: ev.target.id,
      value: ev.target.value,
    });
  };
  return (
    <form action="">
      <div>
        <label htmlFor="filterName">Busca tu personaje</label>
        <input
          type="text"
          id="filterName"
          value={props.filterName}
          onChange={handleFilterNameChild}
        />
      </div>
      <div>
        <label htmlFor="filterSpecie">Busca por especie</label>
        <select
          name="filterSpecie"
          id="filterSpecie"
          value={props.filterSpecie}
          onChange={handleFilterNameChild}
        >
          <option value="all">Todos</option>
          <option value="Humano">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
