const submitBtn = document.querySelector(".btn");

const toastMsg = document.querySelector(".toast-msg");
const emailInput = document.getElementById("email");
const subscribeContainer = document.querySelector(".subscribe-container");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue) || emailValue.trim() === "") {
    toastMsg.classList.remove("hidden");
    toastMsg.classList.add("active");
    emailInput.style.outline = "2px solid var(--secondary-light-red)";
    subscribeContainer.style.gap = "40px";
  } else {
    toastMsg.classList.add("hidden");
    toastMsg.classList.remove("active");
    emailInput.style.outline = "";
    subscribeContainer.style.gap = "10px";
  }
});
