// Obtener un número aleatorio entre 1 y 898
const randomPokemonId = Math.floor(Math.random() * 898) + 1;

// URL de ejemplo para obtener información del primer Pokémon (Bulbasaur) en español
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}?language=es`;


// Realizar la solicitud HTTP a la PokeAPI
$.getJSON(pokemonUrl, function(data) {
  // Obtener los datos relevantes del Pokémon
  const name = data.name;
  const image = data.sprites.front_default;
  const types = data.types.map(type => type.type.name);

  // Traducir los nombres de los tipos al español
  const translatedTypes = types.map(type => translateTypeToSpanish(type));

  // Función para traducir el nombre de un tipo al español
  function translateTypeToSpanish(type) {
    switch (type) {
      case "normal":
        return "Normal";
      case "fire":
        return "Fuego";
      case "water":
        return "Agua";
      case "electric":
        return "Eléctrico";
      case "grass":
        return "Planta";
      case "ice":
        return "Hielo";
      case "fighting":
        return "Lucha";
      case "poison":
        return "Veneno";
      case "ground":
        return "Tierra";
      case "flying":
        return "Volador";
      case "psychic":
        return "Psíquico";
      case "bug":
        return "Bicho";
      case "rock":
        return "Roca";
      case "ghost":
        return "Fantasma";
      case "dragon":
        return "Dragón";
      case "dark":
        return "Siniestro";
      case "steel":
        return "Acero";
      case "fairy":
        return "Hada";
      default:
        return type;
    }
  }

  // Crear el contenido HTML para mostrar la información en español
  const html = `
    <h2>${name}</h2>
    <img src="${image}" alt="${name}">
    <p>Tipo(s): ${translatedTypes.join(", ")}</p>
  `;

  // Mostrar la información en el elemento con el id "pokemon-info"
  $("#pokemon-info").html(html);
});
