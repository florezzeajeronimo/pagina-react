import Saludo from './saludo';
import Contador from './contador';

function App() {
  return (
    <div>
      <h1>¡Hola React!</h1>
      <Saludo nombre="Santiago" />
      <saludo nombre="Laura" />
      <contador/>
    </div>
  );
}

export default App;
