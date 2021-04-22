/**
 * Hook para manejar el estado de los componentes de un formulario.
 *
 * @initialState Es el estado inicial del input.
 * @returns Un arreglo con el valor, el inputChange y una funcion para reiniciar el input.
 */

import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleInputChange, reset];
};
