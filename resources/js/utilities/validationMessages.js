import React from "react";

export const printErrors = (error) => {
    if (error) {
        switch (error.type) {
            case 'required':
                return <span>El campo es requerido.</span>
                break;
        }
    }
}

export const erroOccurred = (message = null) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message ?? '¡Ocurrió un error, contacta al administrador!',
    })
}
