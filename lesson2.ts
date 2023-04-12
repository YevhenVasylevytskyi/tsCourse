// Задайте правильные ts типы, для классических js;

let age: number = 50;
let name1: string = 'Max';
let toggle:boolean = true;
let empty = null;
let notInitialize = undefined;
let callback = (a: number) => { return 100 + a };

// Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: any = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}
