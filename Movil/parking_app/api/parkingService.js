// api/parkingService.js
const API_URL = 'http://alejandro.local:5000/estacionamientos_privados'; 

export async function getParkings() {
  try {
    const resp = await fetch(API_URL);
    return await resp.json();
  } catch (e) {
    console.error('Error fetching parkings', e);
    throw e;
  }
}
