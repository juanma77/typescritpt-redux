import { Action } from "./ngrx/ngrx";
import { incrementarAction, decrementarAction, multiplicarAction, dividirAction, resetAction } from "./contador/contador.actions";

// El reducer toma como argumento el estado actual de la aplicación y una acción; y siempre regresa un estado
const reducer = ( state = 10, action: Action ) =>{

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

console.log( reducer(10, incrementarAction) ); 
console.log( reducer(10, decrementarAction) ); 
console.log( reducer(10, multiplicarAction) ); 
console.log( reducer(10, dividirAction) ); 
console.log( reducer(10, resetAction) ); 