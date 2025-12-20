function SolvingQuadraticEquationOfOneVariable() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = document.getElementById("input3").value;
  let z = b * b - 4 * a * c;
  document.getElementById("output1").innerHTML =
    "<math><mi>Δ</mi><mo>=</mo></math> " + z;
  if (a == 0) {
    document.getElementById("output1").innerHTML = "------";
    document.getElementById("output2").innerHTML = "ERROR";
    document.getElementById("output3").innerHTML = "------";
  } else if (isNaN(z) == true) {
    document.getElementById("output1").innerHTML = "------";
    document.getElementById("output2").innerHTML = "ERROR";
    document.getElementById("output3").innerHTML = "------";
  } else if (z < 0) {
    let xa = -b / (2 * a);
    let xb = Math.sqrt(Math.abs(z)) / (2 * a);
    if (xa == 0) {
      if (Math.abs(xb) == 1) {
        document.getElementById("output2").innerHTML =
          "<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo></math> -i";
        document.getElementById("output3").innerHTML =
          "<math><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo></math> i";
      } else {
        document.getElementById("output2").innerHTML =
          "<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo></math> -" +
          Math.abs(xb) +
          "i";
        document.getElementById("output3").innerHTML =
          "<math><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo></math> " +
          Math.abs(xb) +
          "i";
      }
    } else {
      document.getElementById("output2").innerHTML =
        "<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo></math> " +
        xa +
        "-" +
        Math.abs(xb) +
        "i";
      document.getElementById("output3").innerHTML =
        "<math><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo></math> " +
        xa +
        "+" +
        Math.abs(xb) +
        "i";
    }
  } else {
    let x1 = (-b - Math.sqrt(z)) / (2 * a);
    let x2 = (-b + Math.sqrt(z)) / (2 * a);
    document.getElementById("output2").innerHTML =
      "<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo></math> " + x1;
    document.getElementById("output3").innerHTML =
      "<math><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo></math> " + x2;
  }
}
