import axios from 'axios';

const ENDPOINT = `https://nominatim.openstreetmap.org/reverse`;
const FORMAT = `jsonv2`;

export function currentCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      // Reject if the user doesn't
      // allow accessing their location.
      error => reject(error),
    );
  });
}

export async function addressByCoordinates({ latitude, longitude }) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      format: FORMAT,
      lat: latitude,
      lon: longitude,
    },
  });

  return data.address;
}

export async function currentAddress() {
  const coordinates = await currentCoordinates();

  return addressByCoordinates(coordinates);
}
