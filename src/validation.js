/* eslint-disable max-classes-per-file */

import { InvalidArgumentError, ValidationError } from './errors.js';

/**
 * La fonction name(value) valide que la valeur passée est un nom correctement formé, c'est-à-dire:
 * - Qui commence par une majuscule;
 * - Qui peut comporter des '-' ou des espaces suivis d'une majuscule (Ex. Truc-Machin-Chose);
 * - Qui ne doit contenir que des lettres.
 * @param {string} value
 * @returns boolean
 */
function name(value) {
  if (typeof value !== 'string') throw new InvalidArgumentError();
  if (!/^[A-Z](([ -][A-Z])?[a-z]?)*$/.test(value)) {
    throw new ValidationError();
  }
  return true;
}

/**
 * La fonction password(value) valide que la valeur passée respecte les règles suivantes:
 * - minimum 8 charactères;
 * - au moins une majuscule, une minuscule, un chiffre et un caractère spécial (#$^+=!*()@%&).
 * @param {string} value
 * @returns boolean
 */
function password(value) {
  if (typeof value !== 'string') throw new InvalidArgumentError();
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/.test(value)) {
    throw new ValidationError();
  }
  return true;
}

/**
 * La fonction phone(value) valide que la valeur passée soit un numéro de téléphone respectant
 * les règles suivantes:
 * - Doit être une string, pas un numéro;
 * - Doit commencer par un '+' suivi de 11 chiffres.
 * @param {string} value
 * @returns boolean
 */
function phone(value) {
  if (typeof value !== 'string') throw new InvalidArgumentError();
  if (!/^\+[0-9]{11}$/.test(value)) {
    throw new ValidationError();
  }
  return true;
}

/**
 * La fonction date(value) valide que la valeur passée
 * soit une date respectant les règles suivantes:
 * - format yyyy-mm-dd;
 * - séparé par des '-';
 * - uniquement des chiffres.
 * @param {string} value
 * @returns boolean
 */
function date(value) {
  if (typeof value !== 'string') throw new InvalidArgumentError();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new ValidationError();
  }
  return true;
}

/**
 * La fonction iban(value) valide que la valeur passée soit un IBAN correctement formé du type
 * 'CH56 0483 5012 3456 7800 9' respectant les règles suivantes:
 * - Ne pas prendre les éventuels espaces et '-' entre chaque groupe de 4 caractères en compte
 * - Vérifier qu'il commence par deux lettres majuscules
 * - Minimum de 13 et Maximum 34 caractères en tout
 * - Le reste doit être composé de chiffres ou de lettres en majuscule
 * @param {string} value
 * @returns boolean
 */
function iban(value) {
  if (typeof value !== 'string') throw new InvalidArgumentError();
  if (!/^([A-Z]{2}[ -]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$/.test(value)) {
    throw new ValidationError();
  }
  return true;
}

export {
  name,
  password,
  phone,
  date,
  iban,
};
