import http from 'k6/http';
import { sleep } from 'k6';

/* To specify the target RPS, see throttle-test.js */

/* User Inputs */
const isAPI = true;
const postFreq = 0.05;
/* End of User Inputs */

export let options = {
  vus: 100,
  duration: '1s',
};

const makeGetRequest = () => {
  if (isAPI) {
    http.get(`http://localhost:3002/api/productView/products/${Math.floor(Math.random() * 10**7)}`);
  } else {
    http.get(`http://localhost:3002/${Math.floor(Math.random() * 10**7)}`);
  }
}

const makePostRequest = () => {
  const url = `http://localhost:3002/api/productView/products`;
  let headers = { 'Content-Type': 'application/json' };
  let res = http.post(url, JSON.stringify(sampleObject), { headers });
}

export default function () {
  for (let i = 1; i < 1/postFreq; i++) {
    makeGetRequest();
  }
  makePostRequest();
}

const sampleObject = {
  "packaging": {
      "measurments": {
          "width": 15,
          "height": 33,
          "length": 7,
          "weight": 42,
          "packages": 3
      },
      "shortDesc": "Dolore ad quibusdam sit."
  },
  "sizes": {
      "attributes": {
          "thread-count": 209,
          "Pillowcase quantity": 4,
          "Duvet cover length": 3,
          "Duvet cover width": 3,
          "Pillowcase length": 4,
          "Pillowcase width": 3
      },
      "fitting": "ipsum dolores est (et quis impedit)"
  },
  "imageUrls": [
      "http://placeimg.com/640/480/fashion",
      "http://placeimg.com/640/480/abstract",
      "http://placeimg.com/640/480/animals",
      "http://placeimg.com/640/480/business",
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/city",
      "http://placeimg.com/640/480/food",
      "http://placeimg.com/640/480/nightlife",
      "http://placeimg.com/640/480/fashion",
      "http://placeimg.com/640/480/nature"
  ],
  "name": "This object was posted by k6",
  "id": 10000001,
  "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  "materials": "Est incidunt temporibus omnis quibusdam ipsa soluta placeat tempore impedit.",
  "sustainibility": "Quas nulla est voluptatibus animi minus vero.",
};
