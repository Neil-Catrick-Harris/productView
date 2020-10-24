import http from 'k6/http';
import { sleep } from 'k6';

/* To specify the target RPS, see throttle-test.js */

/* User Inputs */
const isAPI = true;
/* End of User Inputs */

export let options = {
  vus: 100,
  duration: '1800s',
};

const makeRequest = () => {
  if (isAPI) {
    http.get(`http://localhost:3002/api/productView/products/${Math.floor(Math.random() * 10**7)}`);
  } else {
    http.get(`http://localhost:3002/${Math.floor(Math.random() * 10**7)}`);
  }
};

export default function () {
  makeRequest();
}

