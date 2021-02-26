// create a form to append new rows to table
/**
 * @typedef {object} SubmitEvent
 */

/**
 * @typedef {object} HTMLFormElement
 */
const form = document.getElementById("form");

// TODO: show how to get type info
/**
 *
 * @param {SubmitEvent} event
 */
const handleSubmit = function (event) {
  event.preventDefault();
  const formEl = event.target;
  console.log("is form valid", formEl.checkValidity());

  const data = {
    fName: formEl.firstName.value,
    email: formEl.email.value,
    password: formEl.password.value,
  };
  formEl.reset();
};

form.addEventListener("submit", handleSubmit);

// form.password.addEventListener("input", function (event) {
//   if (form.password.validity.tooShort) {
//     const el = document.createElement("p");
//     el.innerText = "Your password is too short";
//     form.password.after(el);
//   } else {
//   }
// });

/**
 *
 * @param {number} num some num
 * @param {number} num Some num
 *
 * @returns {number} a number
 */
function add(num, num) {
  return num + num;
}

/**
 * @typedef {object} MouseEvent
 */
