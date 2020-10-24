import http from 'k6/http';
import { sleep } from 'k6';

/*
NOTE: This script allows the user to specify the RPS. VUs and other parameters are assigned accordingly.
  To see full capabilities of the server, use test.js
*/
// https://k6.io/blog/how-to-generate-a-constant-request-rate-in-k6

/* User Inputs */
const RPS = 1000;
const isAPI = true;
/* End of User Inputs */

const R = 10;
const request_duration = 7 / 1000; // s
const T = 1; // s
const VUs = Math.floor(RPS * T / R);

export let options = {
  vus: VUs,
  duration: '120s',
};

const makeRequest = () => {
  if (isAPI) {
    http.get(`http://localhost:3002/api/productView/products/${Math.floor(Math.random() * 10**7)}`);
  } else {
    http.get(`http://localhost:3002/${Math.floor(Math.random() * 10**7)}`);
  }
};

export default function () {
  const before = new Date().getTime();

  for (let i = 0; i < R; i++) {
    makeRequest();
  }

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted. Execution time of the test took longer than ${T} seconds`);
  }
}

