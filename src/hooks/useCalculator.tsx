import {useRef, useState} from 'react';

enum Operadors {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const endOperations = useRef<Operadors>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumer = (numberText: string) => {
    //no aceptar doble punto:
    if (number.includes('.') && numberText === '.') return;

    //validar si el numero empieza con 0 o -0
    if (number.startsWith('0') || number.startsWith('-0')) {
      //validar si es el primer punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        // evaluar si es otro 0 y hay un punto'.'
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        // evaluar si es diferente de 0 y no tiene un punto '.'
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        // Evitar el 0000.0
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveAndNegatve = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let numTemp = number;

    if (number.includes('-')) {
      numTemp = number.substr(1); // elimina la primera posicion del string
    }

    if (numTemp.length > 1) {
      setNumber(number.slice(0, -1)); // elimina la ultima posicion del string
    } else {
      setNumber('0');
    }
  };

  const changeNumBefore = () => {
    if (number.endsWith('.')) {
      // termina con
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumBefore();
    endOperations.current = Operadors.dividir;
  };

  const btnMultiplicar = () => {
    changeNumBefore();
    endOperations.current = Operadors.multiplicar;
  };

  const btnRestar = () => {
    changeNumBefore();
    endOperations.current = Operadors.restar;
  };

  const btnSumar = () => {
    changeNumBefore();
    endOperations.current = Operadors.sumar;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (endOperations.current) {
      case Operadors.dividir:
        setNumber(`${num2 / num1}`);
        break;
      case Operadors.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadors.restar:
        setNumber(`${num2 - num1}`);
        break;
      case Operadors.sumar:
        setNumber(`${num1 + num2}`);
        break;
    }

    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    btnSumar,
    btnRestar,
    calculate,
    btnDivide,
    btnMultiplicar,
    clear,
    buildNumer,
    positiveAndNegatve,
    btnDelete,
  };
};
