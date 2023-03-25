// Obtemos a referência para a imagem arrastável
const draggableImage = document.getElementById("draggable-image");
const draggableImg = document.getElementById("draggable-img");


// Obtemos a referência para a imagem de destino
const targetImage = document.getElementById("target-image");


// Adicionamos um evento de "dragstart" à imagem arrastável
draggableImage.addEventListener("dragstart", function (event) {
  // Quando o usuário começa a arrastar a imagem, definimos os dados a serem transferidos como o ID da imagem
  event.dataTransfer.setData("text/plain", event.target.id);
});

// Adicionamos um evento de "dragstart" à imagem arrastável
draggableImg.addEventListener("dragstart", function (event) {
  // Quando o usuário começa a arrastar a imagem, definimos os dados a serem transferidos como o ID da imagem
  event.dataTransfer.setData("text/plain", event.target.id);
});


// Adicionamos um evento de "dragover" à imagem de destino
targetImage.addEventListener("dragover", function (event) {
  // Prevenimos a ação padrão do navegador (que é impedir o drop)
  event.preventDefault();
});


// Adicionamos um evento de "drop" à imagem de destino
targetImage.addEventListener("drop", function (event) {
  // Prevenimos a ação padrão do navegador (que é impedir o drop)
  event.preventDefault();
  
  // Obtemos os dados transferidos
  const data = event.dataTransfer.getData("text/plain");
  
  // Adicionamos a imagem arrastável como filha da imagem de destino
  event.target.appendChild(document.getElementById(data));
});
