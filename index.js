const btnClose = document.querySelectorAll(".toast__close");
console.log("🚀 ~ btnClose :", btnClose);

// ----------- function handle toast messages -----------
function toast({
  title = "",
  message = "",
  type = "success",
  duration = 3000,
}) {
  const toast = document.getElementById("toast");
  if (toast) {
    const toastMessage = document.createElement("div");
    const icons = {
      success: "fa-regular fa-circle-check",
      warning: "fa-solid fa-circle-exclamation icon--warning",
      info: "fa-solid fa-circle-info icon-info",
      question: "fa-solid fa-circle-question icon-question",
      error: "fa-solid fa-triangle-exclamation icon-error",
    };

    // add type icons
    const icon = icons[type];
    // delay aniamtion
    const delay = (duration / 1000).toFixed(2);
    toastMessage.classList.add("toast", `toast--${type}`);
    toastMessage.style.animation = ` fadeIn ease-in-out 0.7s, fadeOut linear 1s ${delay}s forwards`;

    toastMessage.innerHTML = `
              <div class="toast__icon">
                <i class="${icon}"></i>
              </div>
              <div class="toast__body">
                <h3 class="toast__title">${title}!</h3>
                <p class="toast__message">
                  ${message}
                </p>
              </div>
              <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
      `;
    toast.appendChild(toastMessage);

    // after 3s delete DOM
    const remove = setTimeout(function () {
      toastMessage.remove(toastMessage);
    }, duration + 1000);

    // remove toast when "click"
    toastMessage.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        toastMessage.remove();
        clearTimeout(remove);
      }
    };
  }
}

// callback

toast({
  title: "Success",
  message: "Your operation was completed successfully. Everything is working",
  type: "success",
  duration: 3000,
});

// ----------- get buttons -----------
const btnSuccess = document.querySelector(".btn-success");
const btnWarning = document.querySelector(".btn-warning");
const btnInfo = document.querySelector(".btn-info");
const btnQuestion = document.querySelector(".btn-question");
const btnError = document.querySelector(".btn-error");
console.log(btnSuccess);
console.log(btnWarning);
console.log(btnInfo);
console.log(btnQuestion);
console.log(btnError);

// ----------- handle event "click" button -----------
btnSuccess.addEventListener("click", () => {
  toast({
    title: "Success",
    message: "Your operation was completed successfully. Everything is working",
    type: "success",
    duration: 3000,
  });
});

btnWarning.addEventListener("click", () => {
  toast({
    title: "Warning",
    message:
      "  Something went wrong, but it is not critical. Please check your inputs and try again.",
    type: "warning",
    duration: 3000,
  });
});

btnInfo.addEventListener("click", () => {
  toast({
    title: "Information",
    message:
      "Here's some useful information for you. Make sure to review the details carefully.",
    type: "info",
    duration: 3000,
  });
});

btnQuestion.addEventListener("click", () => {
  toast({
    title: "Question",
    message:
      "  Do you want to proceed with this action? Please confirm before continuing.",
    type: "question",
    duration: 3000,
  });
});

btnError.addEventListener("click", () => {
  toast({
    title: "Error",
    message:
      " Something went wrong. Please try again later or contact support if the issue persists.",
    type: "error",
    duration: 3000,
  });
});
