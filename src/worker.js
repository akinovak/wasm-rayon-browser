import init, { MuxWasm, initThreadPool } from "rln"

onmessage = async () => {
  await init();
  await initThreadPool(navigator.hardwareConcurrency);
//   const proof = await MuxWasm.export_proof();
  const proof = await MuxWasm.build_proof(BigInt(3), BigInt(2), true);
  const public_inputs = new Uint8Array([2]);
  const verified = await MuxWasm.verify_proof(proof, public_inputs);
  postMessage(verified);
}