export function handleResponse(response) {
    if (
      response.status === 200 ||
      response.status === 202 ||
      response.statusText === "OK" ||
      response.statusText === "Created"
    )
      return response.data;
    if (response.status === 400) {
    // validación del lado del servidor.
      // La validación del lado del servidor devuelve un mensaje de error de cadena, lo analiza como texto en lugar de .json.
      const error = response.statusText();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }
  

// En una aplicación real prodria llamarla a un servicio de registro de errores.  
export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }
  