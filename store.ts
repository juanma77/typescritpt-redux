import { Reducer, Action } from "./ngrx/ngrx";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementarAction, multiplicarAction } from "./contador/contador.actions";

// Cuando se cambie el state nosotros podemos ser notificados a través de un observable y apenas el state sufra alguna modificación, podemos saber acerca de este cambio 

class Store <T> {

    //private state: T;

    constructor( private reducer: Reducer<T>, private state: T ){

    }

    // El store siempre regresa el state
    public getState() {
        return this.state; 
    }

    // El store se encarga de disparar o ejecutar las acciones
    public dispatch( action: Action ) {

        // El estado se actualiza y se le manda un nuevo estado y una acción a través del reducer 
        this.state = this.reducer( this.state, action );
    }


}

// Creamos una constante que será el store y le mandamos como parámetro un reducer, es decir, la función de contadorReducer y un estado, es decir, el valor 10
const store = new Store( contadorReducer, 10 );

// Obtenemos el estado 
console.log(store.getState());

// Disparamos la acción que incrementa en 1 nuestro state
store.dispatch( incrementarAction );

// Imprimimos el state ahora ya actualizado 
console.log(store.getState());

store.dispatch( multiplicarAction );

console.log(store.getState());