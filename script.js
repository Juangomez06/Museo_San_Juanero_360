// Inicializar el visor de Pannellum
const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "pano1",
    sceneFadeDuration: 1000,
    autoLoad: true,
    type: "equirectangular",
    minHfov: 30,
    maxHfov: 130,
    hfov: 200,
    pitch: 0,
    minPitch: -45,
    maxPitch: 45,
    minYaw: -150,
    maxYaw: 170,
    autoRotate: -2,
    showControls: true,
  },
  scenes: {
    pano1: {
      title: "Entrada museo San Juanero",
      panorama: "entrada.jpeg",
      yaw: 0,
      pitch: 0,
      hfov: 200,
      hotSpots: [
        {
          pitch: 200,
          yaw: 110,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "arriba.png",
            escenaDestino: "pano2",
          },
        },
      ],
    },
    pano2: {
      title: "Pasillo museo San Juanero",
      panorama: "pasillo1.jpg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 130,
      hfov: 200,
      hotSpots: [
        {
          pitch: 340,
          yaw: 150,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "arriba.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano1",
          },
        },
      ],
    },
    pano3: {
      title: "Pasillo museo San Juanero",
      panorama: "salon.jpg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 150,
      hfov: 200,
      hotSpots: [
        {
          pitch: 210,
          yaw: 110,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano4",
          },
        },
        {
          pitch: 210,
          yaw: 170,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 230,
          yaw: 140,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "abajo.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 340,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "arriba.png",
            escenaDestino: "pano6",
          },
        },
      ],
    },
    pano4: {
      title: "Pasillo museo San Juanero",
      panorama: "musica.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 150,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: -10,
          yaw: 90,
          type: "info",
          text: "Retratos Familiares",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Retratos Familiares",
              "Estos retratos son de los antepasados de la familia, colgados para honrar su memoria.",
              "ventana.jpg"
            ),
        },
      ],
    },
    pano5: {
      title: "Pasillo museo San Juanero",
      panorama: "trajes.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 150,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "derecha.png",
            escenaDestino: "pano6",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: -10,
          yaw: 90,
          type: "info",
          text: "Retratos Familiares",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Retratos Familiares",
              "Estos retratos son de los antepasados de la familia, colgados para honrar su memoria.",
              "ventana.jpg"
            ),
        },
      ],
    },
    pano6: {
      title: "Pasillo museo San Juanero",
      panorama: "pasos.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 150,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "derecha.png",
            escenaDestino: "pano7",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: -10,
          yaw: 90,
          type: "info",
          text: "Retratos Familiares",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Retratos Familiares",
              "Estos retratos son de los antepasados de la familia, colgados para honrar su memoria.",
              "ventana.jpg"
            ),
        },
      ],
    },
    pano7: {
      title: "Pasillo museo San Juanero",
      panorama: "mural.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 150,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "derecha.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "izquierda.png",
            escenaDestino: "pano6",
          },
        },
        {
          pitch: -10,
          yaw: 90,
          type: "info",
          text: "Retratos Familiares",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Retratos Familiares",
              "Estos retratos son de los antepasados de la familia, colgados para honrar su memoria.",
              "ventana.jpg"
            ),
        },
      ],
    },
  },
});

function hotspotIconoConTexto(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-hotspot");

  const icon = document.createElement("img");
  icon.src = args.icono;
  icon.alt = "Icono";
  icon.className = "hotspot-icono";
  hotSpotDiv.appendChild(icon);

  icon.addEventListener("click", function () {
    if (args.escenaDestino) {
      viewer.loadScene(args.escenaDestino);
    }
  });
}

// Función para mostrar el modal con descripción e imagen
function showModal(title, description, imageSrc) {
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;
  modal.style.display = "flex";
}

// Cerrar el modal al hacer clic en la "X"
document.querySelector(".close").onclick = function () {
  document.getElementById("infoModal").style.display = "none";
};

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
