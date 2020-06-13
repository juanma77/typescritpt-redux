// Acciones
interface Action {
    type: string;
    payload?: any; // Es algún parámetro que le mandamos a la acción     
}

// El reducer toma como argumento el estado actual de la aplicación y una acción; y siempre regresa un estado
const reducer = ( state = 10, action: Action ) =>{

    if( action.type === 'INCREMENTAR' ) {
        return state + 1; 
    }

    return state; 
}

// Utilizamos el reducer 

// Definimos nuestra acción 
const incrementarAction: Action = {
    type: 'INCREMENTAR'
};

console.log( reducer(10, incrementarAction) ); 



