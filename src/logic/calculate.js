/* eslint-disable */

import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(op, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && op.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (op.operation) {
      if (op.next && op.next !== '0') {
        return { ...op, next: op.next + buttonName };
      }
      return { ...op, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (op.next && op.next !== '0') {
      return {
        next: op.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (op.next) {
      if (op.next.includes('.')) {
        return { ...op };
      }
      return { ...op, next: `${op.next}.` };
    }
    if (op.operation) {
      return { ...op, next: '0.' };
    }
    if (op.total) {
      if (op.total.includes('.')) {
        return {};
      }
      return { ...op, next: `${op.total}.` };
    }
    return { ...op, next: '0.' };
  }

  if (buttonName === '=') {
    if (op.next && op.operation) {
      return {
        total: operate(op.total, op.next, op.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (op.next) {
      return { ...op, next: (-1 * parseFloat(op.next)).toString() };
    }
    if (op.total) {
      return { ...op, total: (-1 * parseFloat(op.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!op.next && op.total && !op.operation) {
    return { ...op, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (op.operation) {
    if (op.total && !op.next) {
      return { ...op, operation: buttonName };
    }

    if (!op.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(op.total, op.next, op.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!op.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: op.next,
    next: null,
    operation: buttonName,
  };
}
