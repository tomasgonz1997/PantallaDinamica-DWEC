 window.addEventListener("load", function () {

//     const inputForm = "#numPantallas"
//     const idContenedor = "#contenedor"
//     const idContenedorDatos = "#contenedorDatos"
//     const clasePantallas = "pantalla"
//     const claseDato = "dato"

//     const inputPantallas = document.querySelector(inputForm);
//     const form = document.querySelector("form")
//     const contenedor = document.querySelector(idContenedor)
//     const contenedorDatos = document.querySelector(idContenedorDatos)



//     form.addEventListener("submit", function (e) {
//         e.preventDefault()
//         console.log("mostrar datos" + inputPantallas.value);
//         crearPanttallas(inputPantallas.value)
//     })

//     crearContenedoDatos(5)

//     function crearContenedoDatos(datos) {
//         contenedorDatos.innerHTML = "";
//         for (let i = 0; i < datos; i++) {
//             let div = document.createElement("div")
//             div.classList.add(claseDato)
//             contenedorDatos.appendChild(div)

//         }
//     }

//     function crearPanttallas(numPantallas) {
//         contenedor.innerHTML = ""
//         for (let i = 0; i < numPantallas; i++) {
//             let div = document.createElement("div")
//             div.classList.add(clasePantallas)
//             contenedor.appendChild(div)
//         }
//     }
// })
//Tom codigo debajo 
// Listar elementos disponibles 
//Array con nombres
var listaImagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];
var listaVideos = ["video1.mp4", "video2.mp4", "video3.mp4"];
const contenedorDatos = document.querySelector("#contenedorDatos");
//Funcion DOM cargar elementos
function listarImagenes (arrayImagenes){
    let indice = 1;
    for(let elemento of arrayImagenes){
        let caja = document.createElement("div");
        caja.setAttribute("id", `img-${indice}`);
        caja.classList.add("dato");
        caja.setAttribute("draggable",true);
        indice++;
        caja.style.backgroundImage = "url('../media/img/"+ elemento+"')";
        contenedorDatos.appendChild(caja);
  }
}
//Listar videos
 function listarVideos (arrayVideos){
     let indice = 1;
     for(let elemento of arrayVideos){
         let caja = document.createElement("div");
         caja.setAttribute("id", `vid-${indice}`);
         caja.classList.add("dato");
         caja.setAttribute("draggable",true);
         //VIdeo COntrol
         let videoCtrl = document.createElement("video");
         videoCtrl.setAttribute("height","100%");
         videoCtrl.setAttribute("width","100%");
         videoCtrl.setAttribute("controls","");
         indice++;
         //Video
         let video = document.createElement("source");
         video.setAttribute("type", "video/mp4");
         video.setAttribute("src", "../media/video/" + elemento);
         //Anadir
         videoCtrl.append(video);
         caja.append(videoCtrl);
         contenedorDatos.appendChild(caja);

   }
 }
 
//Llmaadas 
listarImagenes(listaImagenes);
listarVideos(listaVideos);
})