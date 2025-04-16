/*Desarrollado por Juan Pablo Gómez*/ 

// Inicializar el visor de Pannellum
const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "pano4",
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
      panorama: "/escenas/entrada.jpeg",
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
            icono: "/flechas/arriba.png",
            escenaDestino: "pano2",
          },
        },
      ],
    },
    pano2: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/pasillo1.jpg",
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
            icono: "/flechas/arriba.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano1",
          },
        },
      ],
    },
    pano3: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/salon.jpg",
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
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano4",
          },
        },
        {
          pitch: 210,
          yaw: 170,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 230,
          yaw: 140,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/abajo.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 340,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/arriba.png",
            escenaDestino: "pano6",
          },
        },
      ],
    },
    pano4: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/musica.jpeg",
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
            icono: "/flechas/derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 150,
          yaw: 100,
          type: "info",
          text: "Guitarras",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Guitarras",
              "Las guitarras son un símbolo importante de la música tradicional de la región.",
              "/modal/guitarras.jpeg"
            ),
        },
        {
          pitch: 150,
          yaw: 220,
          type: "info",
          text: "Instrumentos",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Instrumentos",
              "Las Instrumentos son un símbolo importante de la música tradicional de la región.",
              "/modal/instrumentos.jpeg"
            ),
        },
        {
          pitch: 390,
          yaw: 155,
          type: "info",
          text: "Mural",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Mural",
              "El mural representa la historia y la cultura de la región.",
              "/modal/mural_convocatoria.jpeg"
            ),
        },
      ],
    },
    pano5: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/trajes.jpeg",
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
            icono: "/flechas/derecha.png",
            escenaDestino: "pano6",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 180,
          yaw: 80,
          type: "info",
          text: "Traje de San Juanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Traje de San Juanero",
              "El traje de San Juanero es un símbolo de la cultura y tradiciones de la región.",
              "/modal/traje1.jpeg"
            ),
        },
        {
          pitch: 210,
          yaw: 150,
          type: "info",
          text: "Traje de San Juanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Traje de San Juanero",
              "El traje de San Juanero es un símbolo de la cultura y tradiciones de la región.",
              "/modal/traje2.jpeg"
            ),
        },
        {
          pitch: 190,
          yaw: 250,
          type: "info",
          text: "Traje de San Juanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Traje de San Juanero",
              "El traje de San Juanero es un símbolo de la cultura y tradiciones de la región.",
              "/modal/traje3.jpeg"
            ),
        },
        {
          pitch: 380,
          yaw: 140,
          type: "info",
          text: "Traje de San Juanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Traje de San Juanero",
              "El traje de San Juanero es un símbolo de la cultura y tradiciones de la región.",
              "/modal/traje4.jpeg"
            ),
        },
      ],
    },
    pano6: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/pasos.jpeg",
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
            icono: "/flechas/derecha.png",
            escenaDestino: "pano7",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
      ],
    },
    pano7: {
      title: "Pasillo museo San Juanero",
      panorama: "/escenas/mural.jpeg",
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
            icono: "/flechas/derecha.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono: "/flechas/izquierda.png",
            escenaDestino: "pano6",
          },
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
