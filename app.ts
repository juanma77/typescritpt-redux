import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementarAction } from './contador/contador.actions';

// Mandamos la función como parámetro, no la estamos ejecutando 
const store: Store = createStore( contadorReducer );

// Hacemos un subscribe para que así se nos notifique cuando cambia el store a través del dispatch; imprimimos el state actual de la aplicación 
store.subscribe( () =>{
    console.log('Subscribe: ', store.getState());
});

// Disparamos la acción desde el store  
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );