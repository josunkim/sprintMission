const path = {
  HOME: "main.html",
  LOGIN: "login.html",
  SIGNUP: "signup.html",
  PRIVACY: "privacy.html",
  FQA: "fqa.html",
  ITEMS: "items.html",
};

document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home");
  const signUp = document.getElementById("signUp");
  const pw = document.getElementById("pw");
  const pwError = document.getElementById("pwError");
  const pwView = document.getElementById("pwView");
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const login = document.getElementById("login");

  const ErorRed = "#F74747";

  const emailValidate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const pwValidate = /^(?=.*[a-zA-Z])(?=.*[0-8])(?=.*[!@#$%^*+=-]).{6,16}$/;

  email.addEventListener("focusout", () => {
    if (email.value === "") {
      email.style.border = `1px solid ${ErorRed}`;
      emailError.textContent = "이메일을 입력해주세요.";
      return;
    }
  });
  email.addEventListener("keyup", () => {
    let emailCheck = emailValidate.test(email.value);
    let pwCheck = pwValidate.test(pw.value);

    if (emailCheck && pwCheck) {
      login.disabled = false;
      return;
    }

    if (!emailCheck) {
      email.style.border = `1px solid ${ErorRed}`;
      emailError.textContent = "잘못된 이메일 형식입니다.";
    } else {
      email.style.border = "";
      emailError.textContent = "";
    }
  });

  pw.addEventListener("focusout", () => {
    if (pw.value === "") {
      pw.style.border = `1px solid ${ErorRed}`;
      pwError.textContent = "비밀번호를 입력해주세요.";
    }
  });

  pw.addEventListener("keyup", () => {
    let emailCheck = emailValidate.test(email.value);
    let pwCheck = pwValidate.test(pw.value);

    if (emailCheck && pwCheck) {
      login.disabled = false;
    }

    if (!pwCheck) {
      pw.style.border = `1px solid ${ErorRed}`;
      pwError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else {
      pw.style.border = "";
      pwError.textContent = "";
    }
  });

  pwView.addEventListener("click", () => {
    if (pw.type === "password") {
      pw.type = "text";
      pwView.src = "../assets/btn_visibility_on_24px.png";
    } else {
      pw.type = "password";
      pwView.src = "../assets/btn_visibility_off_24px.png";
    }
  });

  login.addEventListener("click", () => {
    location.href = path.ITEMS;
  });
  home.addEventListener("click", () => {
    location.href = path.HOME;
  });
  signUp.addEventListener("click", () => {
    location.href = path.SIGNUP;
  });
});
