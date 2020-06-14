// Interfaz para las acciones; una acción siempre lleva un tipo y un payload
export interface Action {
    type: string;
    payload?: any; // Es algún parámetro que le mandamos a la acción     
}

// Interfaz para el reducer 
export interface Reducer<T> {
    // Definimos una función que recibe un estado y una acción y siempre regresa un dato de tipo genérico 
    ( state: T, action: Action ): T; 
}