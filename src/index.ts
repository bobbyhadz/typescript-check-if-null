export {};

// EXAMPLE 1 - Correctly check for Null in TypeScript

type Color = string | null;

const color: Color = null;

// ✅ Check if null
if (color === null) {
  console.log('value is equal to null');
} else {
  console.log('value is NOT equal to null');
}

// ✅ Check if NOT equal to null
if (color !== null) {
  console.log('value is NOT equal to null');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Check for null or undefined implicitly in TypeScript

// type Color = string | null;

// const color: Color = null;

// // ✅ Check if a value is equal to null or undefined
// if (color == null) {
//   console.log('value is equal to null or undefined');
// }

// // ✅ Check if a value is NOT equal to null or undefined
// if (color != null) {
//   console.log('value is NOT equal to null or undefined');
// }

// ---------------------------------------------------

// // EXAMPLE 3 - The `if` statement serves as a type guard

// type Person = {
//   name: string | null;
// };

// const person: Person = {
//   name: null,
// };

// if (person.name !== null) {
//   // ✅ TypeScript knows person.name is string
//   // 👇️ (property) name: string
//   console.log(person.name);

//   console.log(person.name.toLowerCase());
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Check for `null` using the optional chaining (?.) operator in TypeScript

// type Person = {
//   name: string | null;
// };

// const person: Person = {
//   name: null,
// };

// // 👇️ undefined
// console.log(person.name?.toLowerCase());

// ---------------------------------------------------

// // EXAMPLE 5 - Don't use the `typeof` operator to check for `null`

// type Person = string | null;

// const person: Person = null;

// console.log(typeof person); // 👉️ "object"
