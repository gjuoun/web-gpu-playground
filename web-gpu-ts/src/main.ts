import "./style.css";

let el = document.querySelector<HTMLDivElement>("#app")!;

el.innerHTML = "Hello World!";

if (navigator.gpu) {
  el.innerHTML += "WebGPU is supported!";
} else {
  el.innerHTML += "WebGPU is not supported!";
}
