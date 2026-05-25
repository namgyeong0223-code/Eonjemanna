const MAX_PERSON = 10;
const MAX_NAME_LENGTH = 20;

const personCountInput = document.querySelector("#personCount");
const makeInputsBtn = document.querySelector("#makeInputsBtn");
const nameForm = document.querySelector("#nameForm");
const nameInputs = document.querySelector("#nameInputs");
const resultBox = document.querySelector("#resultBox");
const resultText = document.querySelector("#resultText");

makeInputsBtn.addEventListener("click", function () {
  const personCount = Number(personCountInput.value);

  if (personCount < 1 || personCount > MAX_PERSON) {
    alert("사람 수는 1명 이상 10명 이하로 입력해주세요.");
    return;
  }

  nameInputs.innerHTML = "";

  for (let i = 0; i < personCount; i++) {
    const inputBox = document.createElement("div");
    inputBox.className = "name-input-box";

    const label = document.createElement("label");
    label.textContent = `${i + 1}번째 사람 닉네임`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = "nickname";
    input.maxLength = MAX_NAME_LENGTH;
    input.placeholder = "실명 대신 닉네임 입력";
    input.autocomplete = "off";

    inputBox.appendChild(label);
    inputBox.appendChild(input);
    nameInputs.appendChild(inputBox);
  }

  nameForm.classList.remove("hidden");
  resultBox.classList.add("hidden");
});

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input[name='nickname']");
  const nicknames = [];

  for (const input of inputs) {
    const nickname = input.value.trim();

    if (nickname === "") {
      alert("비어 있는 닉네임이 있습니다.");
      return;
    }

    nicknames.push(nickname);
  }

  resultText.textContent = nicknames.join(", ");
  resultBox.classList.remove("hidden");

  for (const input of inputs) {
    input.value = "";
  }
});
