const validators = [
  (password) => password.length >= 6,
  (password) => /[A-Z]/.test(password),
  (password) => /[0-9]/.test(password),
  (password) => /[!@#$%^&*_\-.?]/.test(password),
  (password, confirm) => password === confirm,
];

const passwordEl = document.querySelector("#password");
const confirmEl = document.querySelector("#confirm");
const validatorsEls = document.querySelectorAll("#validators > li");

function checkValidators() {
  const password = passwordEl.value;
  const confirm = confirmEl.value;

  // 🔁 Pour chaque règle (fonction) dans le tableau "validators"
  validators.forEach((validateFn, index) => {
    // ⛳️ Si la fonction attend 2 arguments → on lui donne les deux
    const isValid =
      validateFn.length === 2
        ? validateFn(password, confirm)
        : validateFn(password);

    // 🎯 On ajoute ou on enlève la classe "ok"
    if (isValid) {
      validatorsEls[index].classList.add("ok");
    } else {
      validatorsEls[index].classList.remove("ok");
    }
  });
}

// 🟢 Quand l'utilisateur tape dans l'un des deux champs, on vérifie
passwordEl.addEventListener("input", checkValidators);
confirmEl.addEventListener("input", checkValidators);
