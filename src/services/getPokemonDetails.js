export default function getPokemonDetails(pkm) {
  return {
    name: pkm.name,
    types: pkm.types.map((type) => type.type.name),
    id: pkm.id,
    images: {
      front: pkm.sprites.front_default,
      back: pkm.sprites.back_default,
    },
  };
}
