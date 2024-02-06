const buttons = document.querySelectorAll('.color-buttons');
const body = document.querySelector('body');
function calculateComplementaryColor(hexColor) {
  // Convert the hex color to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate the complementary color
  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;

  // Convert back to hex
  const complementaryHex = `#${(complementaryR << 16 | complementaryG << 8 | complementaryB).toString(16).padStart(6, '0')}`;

  return complementaryHex;
}

function changeColor(ids) {
  body.style.backgroundColor = ids;
  const fontColor = calculateComplementaryColor(ids);
  body.style.color = fontColor;
}
buttons.forEach(function(button){
  button.addEventListener("click",function(e){
      changeColor(e.target.id);
  })
});
