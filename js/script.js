// Variable que recibira los datos del fetch
let datos;

//Función para obtener datos de la url
const getDatos = async () => {
  try {
    let url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const data = await response.json();
    datos = data;
  } catch (error) {
    console.log(error);
  }
};

//Función para filtrar y obtener solamente los primeros 20 id de los datos
const get20Titulos = (datos) => {
  let arrayNuevo = [];
  datos.map((element) => {
    element.id <= 20 && arrayNuevo.push(element);
  });
  console.log(arrayNuevo);
};

//Función que retorna una promesa después de 3 segundos
const promesa = () => {
  setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
      const value = true;
      value ? resolve("Información enviada") : reject("Rechazado");
    });
    promise.then((respuesta) => recibirPromesa(respuesta));
  }, "3000");
};

//Función que recibe la promesa anterior y luego activa las dos funciones principales
const recibirPromesa = async (respuesta) => {
  await respuesta;
  console.log(respuesta);
  await getDatos();
  get20Titulos(datos);
};

// para activar la cadena:
promesa();
