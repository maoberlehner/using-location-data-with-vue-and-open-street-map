import axios from 'axios';

const ENDPOINT = `https://nominatim.openstreetmap.org/reverse`;
const FORMAT = `jsonv2`;

export function coordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      // Reject if the user doesn't
      // allow accessing their location.
      error => reject(error),
    );
  });
}

export async function address() {
  const { latitude, longitude } = await coordinates();
  const { data } = await axios.get(ENDPOINT, {
    params: {
      format: FORMAT,
      lat: latitude,
      lon: longitude,
    },
  });

  return data.address;
}
