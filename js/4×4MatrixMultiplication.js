function MatrixMultiplicationFour() {
  let A0 = document.getElementById("A0").value;
  let A1 = document.getElementById("A1").value;
  let A2 = document.getElementById("A2").value;
  let A3 = document.getElementById("A3").value;
  let A4 = document.getElementById("A4").value;
  let A5 = document.getElementById("A5").value;
  let A6 = document.getElementById("A6").value;
  let A7 = document.getElementById("A7").value;
  let A8 = document.getElementById("A8").value;
  let A9 = document.getElementById("A9").value;
  let Aa = document.getElementById("Aa").value;
  let Ab = document.getElementById("Ab").value;
  let Ac = document.getElementById("Ac").value;
  let Ad = document.getElementById("Ad").value;
  let Ae = document.getElementById("Ae").value;
  let Af = document.getElementById("Af").value;
  let B0 = document.getElementById("B0").value;
  let B1 = document.getElementById("B1").value;
  let B2 = document.getElementById("B2").value;
  let B3 = document.getElementById("B3").value;
  let B4 = document.getElementById("B4").value;
  let B5 = document.getElementById("B5").value;
  let B6 = document.getElementById("B6").value;
  let B7 = document.getElementById("B7").value;
  let B8 = document.getElementById("B8").value;
  let B9 = document.getElementById("B9").value;
  let Ba = document.getElementById("Ba").value;
  let Bb = document.getElementById("Bb").value;
  let Bc = document.getElementById("Bc").value;
  let Bd = document.getElementById("Bd").value;
  let Be = document.getElementById("Be").value;
  let Bf = document.getElementById("Bf").value;
  let C0 = A0 * B0 + A1 * B4 + A2 * B8 + A3 * Bc;
  let C1 = A0 * B1 + A1 * B5 + A2 * B9 + A3 * Bd;
  let C2 = A0 * B2 + A1 * B6 + A2 * Ba + A3 * Be;
  let C3 = A0 * B3 + A1 * B7 + A2 * Bb + A3 * Bf;
  let C4 = A4 * B0 + A5 * B4 + A6 * B8 + A7 * Bc;
  let C5 = A4 * B1 + A5 * B5 + A6 * B9 + A7 * Bd;
  let C6 = A4 * B2 + A5 * B6 + A6 * Ba + A7 * Be;
  let C7 = A4 * B3 + A5 * B7 + A6 * Bb + A7 * Bf;
  let C8 = A8 * B0 + A9 * B4 + Aa * B8 + Ab * Bc;
  let C9 = A8 * B1 + A9 * B5 + Aa * B9 + Ab * Bd;
  let Ca = A8 * B2 + A9 * B6 + Aa * Ba + Ab * Be;
  let Cb = A8 * B3 + A9 * B7 + Aa * Bb + Ab * Bf;
  let Cc = Ac * B0 + Ad * B4 + Ae * B8 + Af * Bc;
  let Cd = Ac * B1 + Ad * B5 + Ae * B9 + Af * Bd;
  let Ce = Ac * B2 + Ad * B6 + Ae * Ba + Af * Be;
  let Cf = Ac * B3 + Ad * B7 + Ae * Bb + Af * Bf;
  if (
    isNaN(
      C1 + C2 + C3 + C4 + C5 + C6 + C7 + C8 + C9 + Ca + Cb + Cc + Cd + Ce + Cf
    ) == true
  ) {
    alert("输入错误❌");
  } else {
    document.getElementById("C0").innerHTML = "&nbsp;" + C0 + "&nbsp;";
    document.getElementById("C1").innerHTML = "&nbsp;" + C1 + "&nbsp;";
    document.getElementById("C2").innerHTML = "&nbsp;" + C2 + "&nbsp;";
    document.getElementById("C3").innerHTML = "&nbsp;" + C3 + "&nbsp;";
    document.getElementById("C4").innerHTML = "&nbsp;" + C4 + "&nbsp;";
    document.getElementById("C5").innerHTML = "&nbsp;" + C5 + "&nbsp;";
    document.getElementById("C6").innerHTML = "&nbsp;" + C6 + "&nbsp;";
    document.getElementById("C7").innerHTML = "&nbsp;" + C7 + "&nbsp;";
    document.getElementById("C8").innerHTML = "&nbsp;" + C8 + "&nbsp;";
    document.getElementById("C9").innerHTML = "&nbsp;" + C9 + "&nbsp;";
    document.getElementById("Ca").innerHTML = "&nbsp;" + Ca + "&nbsp;";
    document.getElementById("Cb").innerHTML = "&nbsp;" + Cb + "&nbsp;";
    document.getElementById("Cc").innerHTML = "&nbsp;" + Cc + "&nbsp;";
    document.getElementById("Cd").innerHTML = "&nbsp;" + Cd + "&nbsp;";
    document.getElementById("Ce").innerHTML = "&nbsp;" + Ce + "&nbsp;";
    document.getElementById("Cf").innerHTML = "&nbsp;" + Cf + "&nbsp;";
  }
}
