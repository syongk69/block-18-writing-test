// Block 18 Workshop: Writing Test Sepcifications

// Prompts:

// For each prompt below:

// -Read the prompt.
// -Identify the expectations.
// -Write specifications for all the tests that would be useful for that prompt.
//     -Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
//     -Try not to write extraneous tests!
//
//
// Unit Tests:

// 1. A function called "multiplication" that returns the product of the two input numbers.

// ANSWER:
// Expect multiplication (-2.2, 2.2) to be a number
// Expect multiplication (-2.2, 2.2) to be a negative number
// Expect multiplication (-2.2, 2.2) to be equal to -4.84
// Expect multiplication (-2.2, 2.2) to be a number w/ decimal point (limit to 2 decimal point)
// Expect multiplication (-2.2, "x") to be an error
//
//
//
// 2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
//     -Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
//         -...should result in [-1, 1, 3, 9, 15]
//     -Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
//         -What should happen with unexpected inputs?
//             -What kinds of unexpected inputs should we worry about?
//         -What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

// ANSWER:
// concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3])
// Expect concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3]) to be a numbers
// Expect concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3]) to be both negative and positive numbers
// Expect concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3]) to be in ascending order
// Expect concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3]) to output repeated numbers only once
// Expect concatOdds([5, 3, 2] [8, 7, 5, 4, 1, -3]) to be [-3, 1, 3, 5, 7]
// Expect concatOdds([5, 3, 2] [8, 7, @, 4, 1, -3]) to be an error
// Expect concatOdds([5, 3, 2] [8, 7, %, 4, 1, -3]) to be an error
// Expect concatOdds([5, 3, 2] [8, 7, "a", 4, 1, -3]) to be an error
//
//
//
// Functional Tests:

// 1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user.
// They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
//     -Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
//         -What should happen if the cart is empty?
//         -What needs to be shown to the user at each step of check out?
//         -What behaviors of this feature does the prompt miss or gloss over?
//     -Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!

// ANSWER:
// for Online Shopping:
// When an user clicks "Checkout", it should prompt user an option to either continue checkout process as either "Guest", "Create an account", or "Login" to existing account.
// When an user clicks "Checkout" without any item in the cart, it should inform or give option to the user to either continue shopping or exit out of existing account.
// After "Checkout" as either guest or logged-in user, it should give an user option to modify the order such as quantity, remove, save for future order, continue shopping, etc.
// After an user clicks "Continue", prompt user for an user profile and payment information (either saved or user inputted) such as customer name, shipping address, billing address, payment options (credit card, debit card, e-check, etc.).
// Before submission of payment, final preview of order with option to go back to previous page or continue shopping.
// When an user clicks "Submit" for a payment, final page will show full information (customer name, shipping and billing address, payment method used with payment information, and confirmation number), return/refund policy, and exit to main page option.
// In case of Fast Food, an user has option for deliver or pickup order with time schedule.
