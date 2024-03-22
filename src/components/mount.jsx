import React, { Component } from 'react';
import axios from 'axios';

class PokemonInfo extends Component {
  state = {
    pokemonData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/excadrill')
      .then(response => {
        this.setState({ pokemonData: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ error: 'Error fetching Pokemon data', loading: false });
      });
  }

  render() {
    const { pokemonData, loading, error } = this.state;

    if (loading) {
      return <div>Cargando...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h3>Habilidades:</h3>
        <ul>
          {pokemonData.abilities.map((habilidad, index) => (
            <li key={index}>{habilidad.ability.name}</li>
          ))}
        </ul>
        <h3>Tipos:</h3>
        <ul>
          {pokemonData.types.map((tipo, index) => (
            <li key={index}>{tipo.type.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonInfo;
