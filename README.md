# Calculadora en React

Este proyecto es una calculadora implementada en React realizado para el Primer Parcial de la materia __Certificación en React__. Permite realizar operaciones matemáticas simples, guarda un historial de cálculos y presenta una interfaz visual atractiva.

## Componentes

### Calculator

El componente `Calculator` es responsable de mostrar la calculadora en la interfaz. Permite ingresar una operación matemática, evaluarla y mostrar el resultado. También incluye botones para ingresar números y operadores, borrar caracteres y limpiar la entrada. La operación actual se actualiza en tiempo real y se almacena en el almacenamiento local para persistencia.

### NavBar

El componente `NavBar` muestra una barra de navegación en la parte superior de la página. En este caso, se utiliza para mostrar el nombre del proyecto, "CalcuJS". Proporciona una apariencia coherente y facilita la identificación del proyecto en la interfaz.

### Record

El componente `Record` muestra un historial de cálculos realizados. Recibe una lista de resultados y los muestra en un formato legible. También incluye un botón para borrar el historial completo. Cada elemento del historial se muestra utilizando el componente `RecordItem`.

### RecordItem

El componente `RecordItem` muestra un elemento individual del historial de cálculos. Recibe una operación y su resultado como propiedades y los muestra en un formato visualmente agradable. Cada operación se muestra con el prefijo "=" para indicar el resultado.

### Button

El componente `Button` representa un botón interactivo utilizado en la calculadora y en otras partes del proyecto. Recibe un texto y un controlador de eventos como propiedades, y muestra el texto como contenido del botón. Además permite sobreescribir los estilos definidos por defecto. Cuando se hace clic en el botón, se ejecuta el controlador de eventos asociado.

## Uso

Para utilizar la calculadora, se pueden seguir los siguientes pasos:

1. Ingrese la operación matemática en el campo de entrada de la calculadora.
2. Utilice los botones para agregar números y operadores a la operación.
3. Utilice el botón "Clear" para borrar la entrada actual.
4. Utilice el botón "Del" para borrar el último carácter de la entrada.
5. Presione el botón "=" para evaluar la operación y ver el resultado en la parte superior.
6. El historial de cálculos se muestra en el panel derecho (abajo de la calculadora en la versión móvil). Puede hacer clic en el botón "Limpiar" para borrar el historial completo.
