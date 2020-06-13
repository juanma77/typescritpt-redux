// Acciones
export interface Action {
    type: string;
    payload?: any; // Es algún parámetro que le mandamos a la acción     
}