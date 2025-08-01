## ¿Qué es React?
React es una librería de JavaScript creada por Meta (antes Facebook) para construir interfaces de usuario (UI), especialmente aplicaciones web interactivas y dinámicas.

Con React, puedes construir componentes reutilizables que representan partes de una interfaz (como botones, menús, formularios, etc.) y React se encarga de actualizar solo lo que cambia en la página, de forma eficiente.

## ¿Por qué usar React?
Componentes reutilizables: Puedes dividir tu aplicación en piezas pequeñas que se pueden reutilizar y mantener fácilmente.

Actualizaciones eficientes: React solo cambia lo que es necesario en la página (gracias al Virtual DOM), haciéndolo muy rápido.

Gran comunidad y herramientas: Tiene mucho soporte, recursos, bibliotecas y una gran comunidad de desarrolladores.

Escalable: Puedes usarlo para proyectos pequeños o grandes.

Compatible con apps móviles: Con React Native puedes usar lo aprendido para crear apps móviles también.

## ¿Qué necesito saber antes de aprender React?
Antes de comenzar con React, es muy útil tener una buena base en:

HTML – Estructura de la web.
CSS – Estilos para el diseño.
JavaScript – Muy importante. Deberías entender:

Variables (let, const)

Funciones

Condicionales (if, else)

Arreglos y objetos

Funciones flecha

Manipulación del DOM básica

Promesas y funciones asincrónicas (async/await) es un plus

## INVESTIGACION GUIADA
## ¿Qué es JSX?
JSX (JavaScript XML) es una extensión sintáctica de JavaScript que permite escribir código similar a HTML dentro de archivos .js o .jsx. Aunque no es JavaScript puro, se transpila automáticamente a llamadas como React.createElement(...) antes de ejecutarse en el navegador

const heading = <h1>Hola, JSX!</h1>;

## ¿Qué es un componente funcional?
Un componente funcional es una función JavaScript que recibe un objeto props, y retorna elementos de React (usualmente en JSX) que indican lo que debe mostrarse en pantalla

function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}

## ¿Qué son los props en React?
Los props (propiedades) son datos que se pasan desde un componente padre a un hijo. Son inmutables dentro del componente receptor y sirven como configuración o parámetros

<Welcome name="María" />

## ¿Cómo se actualiza la pantalla automáticamente al cambiar datos?
React funciona de manera declarativa: cuando cambias datos que forman parte del estado (state), React vuelve a renderizar (re-render) los componentes afectados y actualiza solo el DOM necesario mediante su proceso de Virtual DOM
Esto permite que la pantalla refleje cambios en los datos sin que tú controles manualmente el DOM.

## Qué hace el useState?
El Hook useState permite a los componentes funcionales tener estado interno. Devuelve un par [valor, funciónActualiza]:

valor es el estado actual

funciónActualiza permite cambiar ese estado y desencadenar un re-render 

const [count, setCount] = useState(0);
