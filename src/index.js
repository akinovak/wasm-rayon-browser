import { _Z4facti } from './factorial.wasm';
import init, { MuxWasm, initThreadPool } from "rln"

const myCrossOriginIsolated = self.crossOriginIsolated;
if (myCrossOriginIsolated) {
  console.log('isolated')
} else {
  console.log('not isolated -> something is probably wrong with headers')

}

// const worker = new Worker(new URL('./worker.js', import.meta.url));
// worker.postMessage({
//   question:
//     'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
// });
// worker.onmessage = ({ data: { answer } }) => {
//   console.log(answer);
// };

// (async () => {
//   await init();
//   await initThreadPool(navigator.hardwareConcurrency);
// })();

if (window.Worker) {
  const worker = new Worker(new URL('./worker.js', import.meta.url));
  worker.postMessage({});
  worker.onmessage = (vk) => {
    console.log(vk.data);
  };
} else {
  console.log('Your browser doesn\'t support web workers.');
}