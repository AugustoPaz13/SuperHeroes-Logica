# Trabajo Práctico: Paradigma Lógico - Superhéroes 🦸‍♂️

Este repositorio contiene la resolución del trabajo práctico de **Paradigmas de la Programación**, enfocado en el **Paradigma Lógico**.

La implementación se realizó en **JavaScript** utilizando la librería **[LogicJS](https://www.npmjs.com/package/logicjs)** para simular el comportamiento de un lenguaje lógico como Prolog.

## 🎯 Objetivos

*   Comprender los fundamentos de la programación lógica.
*   Implementar el razonamiento lógico en JavaScript.
*   Desarrollar bases de conocimiento utilizando hechos y reglas.
*   Realizar consultas y obtener resultados.

## 📝 Consigna

El ejercicio consiste en modelar un universo de superhéroes definiendo relaciones y realizando consultas sobre ellas:

1.  **Relaciones**:
    *   [esAliado(x, y)](cci:1://file:///c:/Users/Augusto/Desktop/Facultad/2.%20Segundo%20A%C3%B1o/Segundo%20Cuatrimestre/Paradigmas/Superheroes/index.js:7:0-15:1): Define aliados (ej. Batman y Robin).
    *   [esEnemigo(x, y)](cci:1://file:///c:/Users/Augusto/Desktop/Facultad/2.%20Segundo%20A%C3%B1o/Segundo%20Cuatrimestre/Paradigmas/Superheroes/index.js:17:0-25:1): Define enemigos (ej. Batman y Joker).
    *   [esMentor(x, y)](cci:1://file:///c:/Users/Augusto/Desktop/Facultad/2.%20Segundo%20A%C3%B1o/Segundo%20Cuatrimestre/Paradigmas/Superheroes/index.js:27:0-34:1): Define mentores (ej. Batman a Robin).
2.  **Consultas**:
    *   Encontrar aliados de un héroe.
    *   Encontrar enemigos de un héroe.
    *   Identificar mentores.
    *   Listar todos los pares de aliados.

## 🚀 Instalación y Ejecución

### Prerrequisitos
*   Tener instalado [Node.js](https://nodejs.org/).

### Pasos

1.  **Clonar el repositorio** (o descargar los archivos):
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Superheroes
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar el programa**:
    ```bash
    npm start
    ```
    O alternativamente:
    ```bash
    node index.js
    ```

## 📊 Resultados Esperados

Al ejecutar el programa, verás la salida de las consultas lógicas en la consola:

```text
--- Resultados de las Consultas ---

1. Aliados de Batman: [ 'Robin' ]
2. Enemigos de Superman: [ 'Lex Luthor' ]
3. Mentor de Spider-Man: [ 'Iron Man' ]
4. Pares Héroe-Aliado: 
[
  [ 'Batman', 'Robin' ],
  [ 'Iron Man', 'Spider-Man' ],
  [ 'Wonder Woman', 'Superman' ]
]
