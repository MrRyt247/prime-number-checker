function check() {
  const x = document.getElementById("input").value;
  const result = document.getElementById("log");
  const label = document.querySelector("label");

  function shake() {
      label.style.setProperty("animation", "shake 1s ease-in-out alternate");
      setTimeout(() => {
        label.style.removeProperty('animation');
      }, 1005);
  }

  prime = (a) => {
    var divisor = 0;
    var numOfDivisor;
    for (let i = 1; i <= a / 2; i++) {
      c = a / i;
      if (c % 1 === 0) {
        divisor += 1;
        numOfDivisor = divisor + 1;
      }
    }

    if (x == null || x <= 0 || x - parseInt(x) !== 0) {
      /* label.style.color = "red"; */
      label.innerText = "Enter a counting number here:";
      result.innerText = "";
      shake();
    } else if (numOfDivisor === undefined) {
      label.style.color = "black";
      result.innerText = `${x} is not a prime number.
      It has 1 factor.`;
    } else {
      label.style.color = "black";
      if (numOfDivisor === 2) {
        result.innerText = `${x} is a prime number.
        It has ${numOfDivisor} factors.`;
      } else {
        result.innerText = `${x} is not a prime number.
        It has ${numOfDivisor} factors.`;
      }
    }
  };
  prime(x);
}

