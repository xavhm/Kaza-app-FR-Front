import type Flat from "../entities/Flat.interface";

async function getFlatsData() {
  const response = await fetch("src/api/data.json");
  if (!response.ok) throw new Error("Une erreur est survenue au chargement");
  const flatsData: Flat[] = await response.json();
  return flatsData;
}

export default getFlatsData;
