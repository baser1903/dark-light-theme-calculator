import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lightTheme: string = "assets/styles/light.css";
  darkTheme: string = "assets/styles/dark.css";
  sunIcon: string = "assets/images/SunIcon.svg";
  moonIcon: string = "assets/images/MoonIcon.svg";
  themeIcon: any = document.getElementById("theme-icon");
  res: any = document.getElementById("this.result");
  toast: any = document.getElementById("toast");
  theme:any;

  calculate(value: any) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      this.res.value = "0 ile 0 bölünmez";
      setTimeout(() => {
        this.res.value = "";
      }, 1300);
    } else {
      this.res.value = calculatedValue;
    }
  }

  changeTheme() {
    this.theme = document.getElementById("theme");
    if (this.theme.getAttribute("href") === this.lightTheme) {
      this.theme.setAttribute("href", this.darkTheme);
      this.themeIcon.setAttribute("src", this.sunIcon);
    } else {
      this.theme.setAttribute("href", this.lightTheme);
      this.themeIcon.setAttribute("src", this.moonIcon);
    }
  }

  liveScreen(enteredValue: any) {
    if (!this.res.value) {
      this.res.value = "";
    }
    this.res.value += enteredValue;
  }

  keyboardInputHandler(e: any) {

    e.preventDefault();
    if (e.key === "0") {
      this.res.value += "0";
    } else if (e.key === "1") {
      this.res.value += "1";
    } else if (e.key === "2") {
      this.res.value += "2";
    } else if (e.key === "3") {
      this.res.value += "3";
    } else if (e.key === "4") {
      this.res.value += "4";
    } else if (e.key === "5") {
      this.res.value += "5";
    } else if (e.key === "6") {
      this.res.value += "6";
    } else if (e.key === "7") {
      this.res.value += "7";
    } else if (e.key === "7") {
      this.res.value += "7";
    } else if (e.key === "8") {
      this.res.value += "8";
    } else if (e.key === "9") {
      this.res.value += "9";
    }

    if (e.key === "+") {
      this.res.value += "+";
    } else if (e.key === "-") {
      this.res.value += "-";
    } else if (e.key === "*") {
      this.res.value += "*";
    } else if (e.key === "/") {
      this.res.value += "/";
    }

    if (e.key === ".") {
      this.res.value += ".";
    }

    if (e.key === "Enter") {
      this.calculate(this.res.value);
    }

    if (e.key === "Backspace") {
      const resultInput = this.res.value;
      this.res.value = resultInput.substring(0, this.res.value.length - 1);
    }
  }

}
