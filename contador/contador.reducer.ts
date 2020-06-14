import { Action } from "../ngrx/ngrx";
import { incrementarAction, decrementarAction, multiplicarAction, dividirAction, resetAction } from "./contador.actions";

// El reducer toma como argumento el estado actual de la aplicación y una acción; y siempre regresa un estado
export const contadorReducer = ( state = 10, action: Action ) =>{

    switch( action.type ){
        case 'INCREMENTAR':
            return state + 1;
        case 'DECREMENTAR':
            return state - 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;  
        
        case 'RESET':
            return state = 0;    

        default:
            return state;
            
    }
}

console.log( contadorReducer(10, incrementarAction) ); 
console.log( contadorReducer(10, decrementarAction) ); 
console.log( contadorReducer(10, multiplicarAction) ); 
console.log( contadorReducer(10, dividirAction) ); 
console.log( contadorReducer(10, resetAction) ); 