// @ts-check

/**
 * @typedef {import("../generated/api").CartValidationsGenerateRunInput} CartValidationsGenerateRunInput
 * @typedef {import("../generated/api").CartValidationsGenerateRunResult} CartValidationsGenerateRunResult
 */

/**
 * @param {CartValidationsGenerateRunInput} input
 * @returns {CartValidationsGenerateRunResult}
 */
export function cartValidationsGenerateRun(input) {
  console.error("running");
  
  const errors = input.cart.lines
    .filter(({ quantity }) => quantity > 1)
    .map(() => ({
      message: "Not possible to order more than one of each",
      target: "$.cart",
    }));

    console.error('errors');

  const operations = [
    {
      validationAdd: {
        errors
      },
    },
  ];

  return { operations };
};