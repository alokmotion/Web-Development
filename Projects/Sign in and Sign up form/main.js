let signUpBtn = document.querySelector(".signUpBtn");
let signInBtn = document.querySelector(".signInBtn");
let title = document.querySelector(".title");
let namefeild = document.querySelector(".namefeild");
let underline = document.querySelector(".underline");
let text = document.querySelector(".Ltext");

signInBtn.addEventListener("click", () => {
  namefeild.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underline.style.transform = "translateX(36px)";
  text.innerHTML = "Lost Password ";
});

signUpBtn.addEventListener("click", () => {
  namefeild.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
  text.innerHTML = "Password suggestions  ";
});
