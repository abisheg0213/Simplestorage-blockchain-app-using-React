const Web3 = require("web3");
const abi = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "num", type: "uint256" }],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const contractAddress = "0x12C89bfE1a73c9A43A3956f5B8700D603B066213";
let p = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
let w3 = new Web3(p);
let con_instance = new w3.eth.Contract(abi, contractAddress);
export async function setd(d) {
  // console.log("*(*");
  const data = await con_instance.methods
    .store(d)
    .send({ from: "0xf1fBbA91EF27FC49E280eF43f5a194460D612dd2" });
  // console.log(data);
}
export async function getd() {
  const d = await con_instance.methods.retrieve().call();
  return d;
}
