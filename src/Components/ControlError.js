
let color = (e) => {
    switch (e.target.name) {
      case "name":
        document.querySelector(".borde").classList.add("foco")
        break;
      case "email":
        document.querySelector(".borde1").classList.add("foco")
        break;
      case "mobile":
        document.querySelector(".borde2").classList.add("foco")
        break;
      case "password":
        document.querySelector(".borde3").classList.add("foco")
        break;
    
      default:
        break;
    }
  }

  const error = (e) => {
    switch (e.target.name) {
      case "name":
        if (document.querySelector(".borde").value === "") {
          document.querySelector(".borde").classList.add("red");
        } else {
          document.querySelector(".borde").classList.remove("red");
          document.querySelector(".borde").classList.add("foco");
        }
        break;
      case "email":
        if (document.querySelector(".borde1").value === "") {
          document.querySelector(".borde1").classList.add("red");
        } else {
          document.querySelector(".borde1").classList.remove("red");
          document.querySelector(".borde1").classList.add("foco");
        }
        break;
      case "mobile":
        if (document.querySelector(".borde2").value === "") {
          document.querySelector(".borde2").classList.add("red");
        } else {
          document.querySelector(".borde2").classList.remove("red");
          document.querySelector(".borde2").classList.add("foco");
        }
        break;
      case "password":
        if (document.querySelector(".borde3").value === "") {
          document.querySelector(".borde3").classList.add("red");
        } else {
          document.querySelector(".borde3").classList.remove("red");
          document.querySelector(".borde3").classList.add("foco");
        }
        break;

      default:
        break;
    }
  };


  let colorLogin = (e) => {

    switch (e.target.name) {
      case "user-email":
        document.querySelector(".borde01").classList.add("foco")
        break;

      case "user-password":
          document.querySelector(".borde02").classList.add("foco");
        break;

      default:
        break;
    }
  }

    let errorLogin = (e) => {
      switch (e.target.type) {
        case "email":
         if (document.querySelector(".borde01").value === "") {
           document.querySelector(".borde01").classList.add("red");
         }else{
             document.querySelector(".borde01").classList.remove("red");
               document.querySelector(".borde01").classList.add("foco");
         }
          break;

        case "password":
            if (document.querySelector(".borde02").value === "") {
              document.querySelector(".borde02").classList.add("red");
            } else {
              document.querySelector(".borde02").classList.remove("red");
              document.querySelector(".borde02").classList.add("foco");
            }
          break;

        default:
          break;
      }
    };

  /**
   * buscar por type a cada input del login asi
   * aplicar la misma logica de las clases y aplicar los errores
   */

  export  {color,error,colorLogin,errorLogin}