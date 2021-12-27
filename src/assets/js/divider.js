function listar(numero){

    if (numero == 1) {
        document.getElementById("Estudiantes").style.display = "block";
        document.getElementById("Egresados").style.display = "none";
    }else if (numero == 2){
        document.getElementById("Estudiantes").style.display = "none";
        document.getElementById("Egresados").style.display = "block";
    }
}