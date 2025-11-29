const logic = require('logicjs');
const { or, and, eq, run, lvar } = logic;

// --- Variables Lógicas ---
// En LogicJS, las variables se crean con lvar().
// Las usaremos en las consultas.

// --- Relación de Aliados ---
// esAliado(x, y) define quién es aliado de quién.
function esAliado(x, y) {
    return or(
        and(eq(x, 'Batman'), eq(y, 'Robin')),
        and(eq(x, 'Iron Man'), eq(y, 'Spider-Man')),
        and(eq(x, 'Wonder Woman'), eq(y, 'Superman'))
    );
}

// --- Relación de Enemigos ---
// esEnemigo(x, y) define quién es enemigo de quién.
function esEnemigo(x, y) {
    return or(
        and(eq(x, 'Batman'), eq(y, 'Joker')),
        and(eq(x, 'Spider-Man'), eq(y, 'Green Goblin')),
        and(eq(x, 'Superman'), eq(y, 'Lex Luthor'))
    );
}

// --- Relación de Mentores ---
// esMentor(x, y) define quién es mentor de quién.
function esMentor(x, y) {
    return or(
        and(eq(x, 'Batman'), eq(y, 'Robin')),
        and(eq(x, 'Iron Man'), eq(y, 'Spider-Man'))
    );
}

// --- Consultas ---

console.log('--- Resultados de las Consultas ---\n');

// 1. Encontrar todos los aliados de Batman.
const aliadoDeBatman = lvar('aliadoDeBatman');
const resultado1 = run(esAliado('Batman', aliadoDeBatman), aliadoDeBatman);
console.log('1. Aliados de Batman:', resultado1);

// 2. Encontrar todos los enemigos de Superman.
const enemigoDeSuperman = lvar('enemigoDeSuperman');
const resultado2 = run(esEnemigo('Superman', enemigoDeSuperman), enemigoDeSuperman);
console.log('2. Enemigos de Superman:', resultado2);

// 3. ¿Quién es mentor de Spider-Man?
const mentorDeSpiderman = lvar('mentorDeSpiderman');
const resultado3 = run(esMentor(mentorDeSpiderman, 'Spider-Man'), mentorDeSpiderman);
console.log('3. Mentor de Spider-Man:', resultado3);

// 4. Mostrar todos los pares héroe-aliado que existen en la base de conocimiento.
const heroe = lvar('heroe');
const aliado = lvar('aliado');
const resultado4 = run(esAliado(heroe, aliado), [heroe, aliado]);
console.log('4. Pares Héroe-Aliado:', resultado4);
