const forms = document.forms.main;
const nameInput = forms.nameInput;
const nameTel = forms.nameTel;
const form = document.getElementById("form");

console.log(nameTel.value);

const nameInputPlaceholder = nameInput.placeholder;

nameInput.addEventListener("focus", function () {
  nameInput.placeholder = "";
});
nameInput.addEventListener("blur", function () {
  nameInput.placeholder = nameInputPlaceholder;
});

const nameTelPlaceholder = nameTel.placeholder;

nameTel.addEventListener("focus", function () {
  nameTel.placeholder = "";
});
nameTel.addEventListener("blur", function () {
  nameTel.placeholder = nameTelPlaceholder;
});

nameInput.addEventListener("submit", function (event) {
  if (!nameInput.value) {
    console.log("Не заполнено");
    event.preventDefault();
  }
});

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0) {
    form.classList.add("_sending");

    let respone = await fetch("sendmmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await respone.json();
      alert(result.message);
      form.reset();
      form.classList.remove("_sending");
    } else {
      alert("Ошибка");
      form.classList.remove("_sending");
    }
  } else {
    alert("Проверьте правильность данных");
  }
}
function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains("_tel")) {
      if (telTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function telTest(input) {
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(
      input.value
    );
  }
}
export default form