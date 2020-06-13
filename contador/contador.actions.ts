import { Action } from "../ngrx/ngrx";

// Definimos nuestras acciones
export const incrementarAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementarAction: Action = {
    type: 'DECREMENTAR'
};

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

export const resetAction: Action = {
    type: 'RESET'
};