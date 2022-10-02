export var pantalla = document.querySelector("canvas");
export var pincel = pantalla.getContext("2d");


export function dibujarHorca(x) {

    if (x == 1) {
        //linea Vertical
        pincel.moveTo(75, 360);
        pincel.lineTo(75, 120);
        pincel.stroke();
    }

    if (x == 2) {
        //linea Horinzontal2
        pincel.moveTo(75, 120);
        pincel.lineTo(150, 120);
        pincel.stroke();
    }
    if (x == 3) {
        //linea vertical2
        pincel.moveTo(150, 120);
        pincel.lineTo(150, 160);
        pincel.stroke();
    }

    if (x == 4) {
        //Cabeza
        pincel.beginPath();
        pincel.arc(150, 160, 15, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();
    }

    if (x == 5) {
        //Cuerpo
        pincel.moveTo(150, 175);
        pincel.lineTo(150,240);
        pincel.stroke();
    }

    if (x == 6) {
        //pie izquierdo
        pincel.moveTo(150, 190);
        pincel.lineTo(120, 220);
        pincel.stroke();
    }

    if (x == 7) {
        //pie derecho
        pincel.moveTo(150, 190);
        pincel.lineTo(180, 220);
        pincel.stroke();
    }

    if (x == 8) {
        //Mano izquierdo
        pincel.moveTo(150,240);
        pincel.lineTo(180, 270 );
        pincel.stroke();
    }

    if (x == 9) {
        //Mano derecho
        pincel.moveTo(150,240);
        pincel.lineTo(120, 270);
        pincel.stroke();
        document.querySelector(".modal-container").style.display = "flex";
        document.querySelector("#mensaje").innerHTML='Fin del juego. Has perdido';
        return false;
    }
    return true;
}

