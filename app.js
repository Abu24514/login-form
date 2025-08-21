// ----------------- SELECTORS -----------------
// HTML elements ko select karna (form, inputs, error msgs, result msg)
let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emEr = document.querySelector("#emailError"); // email ka error msg
let passEr = document.querySelector("#passwordError"); // password ka error msg
let result = document.querySelector(".result"); // success msg

// ----------------- EVENT LISTENER -----------------
// form submit hone par ye code chalega
form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // page reload hone se rokta hai

  // reset messages (pehle ke errors/success clear karte hain)
  emEr.textContent = "";
  passEr.textContent = "";
  result.textContent = "";
  result.style.display = "none";

  // ----------------- REGEX PATTERNS -----------------
  // email validation: "@" aur "." hona chahiye (basic check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // strong password validation:
  // - at least 1 lowercase, 1 uppercase, 1 digit, 1 special char
  // - minimum length 8
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // ----------------- CHECK VALUES -----------------
  // test() true/false deta hai
  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  let isValid = true; // assume valid, phir check karenge

  // agar email galat hai to error show karo
  if (!emailAns) {
    emEr.textContent = "Invalid email";
    isValid = false;
  }

  // agar password galat hai to error show karo
  if (!passwordAns) {
    passEr.textContent = "Invalid password at least 1 lowercase, 1 uppercase, 1 digit, 1 special char and  minimum length must be 8";
    isValid = false;
  }

  // ----------------- SUCCESS CASE -----------------
  if (isValid) {
    result.textContent = "✅ Everything is correct"; // success message
    result.style.display = "block";

    // fields reset karte hain taaki user ko fresh form mile
    form.reset();

    // optional: success msg ko 2s ke baad fade out karna
    // setTimeout(() => {
    //   // result.style.opacity = "0"; // fade effect
    // }, 2000);

    // 3s ke baad msg ko completely hide + opacity reset
    setTimeout(() => {
      result.style.display = "none";
      result.style.opacity = "1"; // next submit pe wapas normal
    }, 3000);
  }
});
