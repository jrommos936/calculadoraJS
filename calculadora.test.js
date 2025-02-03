const { sumar, restar, multiplicar, dividir, raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('multiplicar 5 * 2 y devuelve 10', () => {
    expect(multiplicar(5,2)).toBe(10);
});

test('dividir 10 / 5 y devuelve 2', () => {
    expect(dividir(10,5)).toBe(2);
});

test('Raiz cuadrada de 16 y devuelve 4', () => {
    expect(raizCuadrada(16)).toBe(4);
});