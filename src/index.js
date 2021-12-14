const myCrossOriginIsolated = self.crossOriginIsolated;
if (myCrossOriginIsolated) {
  console.log('isolated')
} else {
  console.log('not isolated -> something is probably wrong with headers')

}

if (window.Worker) {
  const worker = new Worker(new URL('./worker.js', import.meta.url));
  worker.postMessage({});
  worker.onmessage = (vk) => {
    console.log(vk.data);
  };
} else {
  console.log('Your browser doesn\'t support web workers.');
}