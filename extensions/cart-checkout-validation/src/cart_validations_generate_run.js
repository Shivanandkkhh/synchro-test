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
    .filter(({ quantity, sellingPlanAllocation }) => {
      // If cart line has a selling plan, limit quantity to 2
      if (sellingPlanAllocation) {
        return quantity > 2;
      }
      // Skip validation for items without selling plans
      return false;
    })
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