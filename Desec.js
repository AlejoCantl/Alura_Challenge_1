const texto = document.getElementById("area");
const bEn = document.getElementById("en");
const bDen = document.getElementById("den");
const bCop = document.getElementById("Copiar");
const output = document.getElementById("Output");

let isEncrypted = () => {
  let regex = /ai|enter|imes|ober|ufat/g;
  return regex.test(texto.value);
};
let transformed_text;


const isLowerCase = (texto) => {
  return texto === texto.toLowerCase();
};

const voc_r = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

const inv_voc_r = Object.fromEntries(
  Object.entries(voc_r).map(([key, value]) => [value, key])
);

function encriptar(tex) {
  if (!isEncrypted()) {
    transformed_text = '';
    transformed_text = tex.replace(/(a|e|i|o|u)/g, (vocal) => { return voc_r[vocal] });
    output.innerText = transformed_text;
  }
}

function desencriptar(tex) {
  if (isEncrypted()) {
    transformed_text = '';
    transformed_text = tex.replace(/(ai|enter|imes|ober|ufat)/g, (t) => { return inv_voc_r[t] });
    output.innerText = transformed_text;
  }
}

function copiar(output) {
  texto.value = output;
  navigator.clipboard.writeText(output).then(() => console.log("texto copiado")).catch(err => console.log("No se pudo copiar el texto", err));
}

bEn.addEventListener("click", () => { (isLowerCase(texto.value)) ? encriptar(texto.value) : alert("El texto tiene mayuscula") });
bDen.addEventListener("click", () => { (isLowerCase(texto.value)) ? desencriptar(texto.value) : alert("El texto tiene mayuscula") });
bCop.addEventListener("click", () => { copiar(output.innerText) });