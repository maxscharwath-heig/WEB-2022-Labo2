/* eslint-disable max-classes-per-file */

/**
 * La fonction name(value) valide que la valeur passée est un nom correctement formé, c'est-à-dire:
 * - Qui commence par une majuscule;
 * - Qui peut comporter des '-' ou des espaces suivis d'une majuscule (Ex. Truc-Machin-Chose);
 * - Qui ne doit contenir que des lettres.
 * @param {string} value
 * @returns bool
 */

/**
 * La fonction password(value) valide que la valeur passée respecte les règles suivantes:
 * - minimum 8 charactères;
 * - au moins une majuscule, une minuscule, un chiffre et un caractère spécial (#$^+=!*()@%&).
 * @param {string} value
 * @returns bool
 */

/**
 * La fonction phone(value) valide que la valeur passée soit un numéro de téléphone respectant
 * les règles suivantes:
 * - Doit être une string, pas un numéro;
 * - Doit commencer par un '+' suivi de 11 chiffres.
 * @param {string} value
 * @returns bool
 */

/**
 * La fonction date(value) valide que la valeur passée
 * soit une date respectant les règles suivantes:
 * - format yyyy-mm-dd;
 * - séparé par des '-';
 * - uniquement des chiffres.
 * @param {string} value
 * @returns bool
 */

/**
 * La fonction iban(value) valide que la valeur passée soit un IBAN correctement formé du type
 * 'CH56 0483 5012 3456 7800 9' respectant les règles suivantes:
 * - Ne pas prendre les éventuels espaces et '-' entre chaque groupe de 4 caractères en compte
 * - Vérifier qu'il commence par deux lettres majuscules
 * - Minimum de 13 et Maximum 34 caractères en tout
 * - Le reste doit être composé de chiffres ou de lettres en majuscule
 * @param {string} value
 * @returns bool
 */
