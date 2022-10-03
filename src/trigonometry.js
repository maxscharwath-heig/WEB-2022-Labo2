/**
 * Return true if the input is a Number.
 * @param {*} input
 */
function isNum(input) {
  return typeof input === 'number';
}

/**
 * Returns true if the input is an Integer.
 * @param {*} input
 */
function isInt(input) {
  return Number.isInteger(input);
}

/**
 * Generates a random number between f and t.
 *
 * @param {Integer} from
 * @param {Integer} to
 */
function random(from, to) {
  if (!isInt(from) || !isInt(to)) {
    throw new Error('Invalid arguments');
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * Generates a random colors.
 */
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toUpperCase();
}

/**
 * Converts degrees to radians.
 *
 * @param {Number} degrees
 */
function toRadians(degrees) {
  if (!isNum(degrees)) {
    throw new Error('Invalid arguments');
  }
  return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees.
 * @param {Number} radians
 */
function toDegrees(radians) {
  if (!isNum(radians)) {
    throw new Error('Invalid arguments');
  }
  return radians * (180 / Math.PI);
}

/**
 * Computes the adjacent  of a triangle from an hypotenuse and an angle.
 *
 * @param {Number} hypotenuse
 * @param {Number} radians
 */
function adjacent(hypotenuse, radians) {
  if (!isNum(hypotenuse) || !isNum(radians)) {
    throw new Error('Invalid arguments');
  }
  return Math.cos(radians) * hypotenuse;
}

/**
 * Computes the opposite of a triangle from an hypotenuse and an angle.
 *
 * @param {Number} hypotenuse
 * @param {Number} radians
 */
function opposite(hypotenuse, radians) {
  if (!isNum(hypotenuse) || !isNum(radians)) {
    throw new Error('Invalid arguments');
  }
  return Math.sin(radians) * hypotenuse;
}

/**
 * Computes the position on a plan.
 * @param {Number} coordinate
 * @param {Number} max
 */
function position(coordinate, max) {
  if (!isNum(coordinate) || !isNum(max)) {
    throw new Error('Invalid arguments');
  }
  return (max + (coordinate % max)) % max;
}

/**
 * Check for collisions between a point an a circle.
 *
 * @param {Number} pX
 * @param {Number} pY
 * @param {Number} cX
 * @param {Number} cY
 * @param {Number} cR
 */
function collision(pX, pY, cX, cY, cR) {
  if (!isNum(pX) || !isNum(pY) || !isNum(cX) || !isNum(cY) || !isNum(cR)) {
    throw new Error('Invalid arguments');
  }
  return Math.hypot(pX - cX, pY - cY) < cR;
}

export {
  random,
  randomColor,
  toRadians,
  toDegrees,
  adjacent,
  opposite,
  position,
  collision,
};
