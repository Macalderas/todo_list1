async function obtenerTareas(id) {
  try {
    const url = `https://backend-todo-lista.onrender.com/api/tareas?id=${id}`; 
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return [];
  }
}

export { obtenerTareas };
