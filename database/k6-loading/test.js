import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 6,
  duration: '60s',
  // rps: 1000,
};

// const RPS = 1000;
// const RPSmap = {
//   1: 1,
//   10: 11,
//   100: 140,
//   1000: 2500
// };
// const RPSeffective = RPSmap[RPS];
const isAPI = true;

export default function () {
  if (isAPI) {
    http.get(`http://localhost:3002/api/productView/products/${Math.floor(Math.random() * 10**7)}`);
  } else {
    http.get(`http://localhost:3002/${Math.floor(Math.random() * 10**7)}`);
  }
  // sleep(1 / (RPSeffective));
}

