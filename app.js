const $formulario = document.querySelector("form");
const campos = [
  document.querySelector("#nombre"),
  document.querySelector("#apellido"),
  document.querySelector("#telefono"),
  document.querySelector("#direccion"),
  document.querySelector("#documento"),
  document.querySelector("#tipo_documento")
];

const agregarSucces = (elemento) => {
  elemento.addEventListener("input", function() {
    if (elemento.value != '') {
      elemento.classList.add("succes");
      elemento.classList.remove("error");
    }
  });
};

const removerError = (elemento) => {
  elemento.addEventListener("blur", function() {
    if (elemento.value === '') {
      elemento.classList.add("error");
      elemento.classList.remove("succes");
    }
  });
};

campos.forEach(agregarSucces);
campos.forEach(removerError);

const validar = () => {
  event.preventDefault()
  let hayErrores = false;
  campos.forEach((campo) => {
    if (campo.value === '') {
      campo.classList.add("error");
      hayErrores = true;
    } else {
      campo.classList.remove("error");
      campo.classList.add("succes");
    }
  }); 

  if (hayErrores) {
    alert('Por favor, complete todos los campos obligatorios.');
  } else {
    $formulario.submit();
  }
};

$formulario.addEventListener("submit", validar);