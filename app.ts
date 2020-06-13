// Acciones
interface Action {
    type: string;
    payload?: any; // Es algún parámetro que le mandamos a la acción     
}

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

        default:
            return state;
            
    }
}

// Utilizamos el reducer 

// Definimos nuestra acción 
const incrementarAction: Action = {
    type: 'INCREMENTAR'
};

const decrementarAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log( reducer(10, incrementarAction) ); 
console.log( reducer(10, decrementarAction) ); 
console.log( reducer(10, multiplicarAction) ); 
console.log( reducer(10, dividirAction) ); 


