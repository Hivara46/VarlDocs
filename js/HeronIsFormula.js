function HeronIsFormula() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = document.getElementById("input3").value;
  let p = (Number(a) + Number(b) + Number(c)) / 2;
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  if (isNaN(S) == true) {
    document.getElementById("output").innerHTML = "ERROR";
  } else if (a <= 0) {
    document.getElementById("output").innerHTML = "ERROR";
  } else if (b <= 0) {
    document.getElementById("output").innerHTML = "ERROR";
  } else if (c <= 0) {
    document.getElementById("output").innerHTML = "ERROR";
  } else if (p * (p - a) * (p - b) * (p - c) <= 0) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    document.getElementById("output").innerHTML =
      "<math><mi>S</mi><mo>=</mo></math>" + S;
  }
}
