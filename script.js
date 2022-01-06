function colorOnLoad() {
  let cor1 = []
  let cor2 = []
  let cor3 = []
  let cor4 = []
  let cor5 = []
  let cor6 = []
  for (let index = 0; index < 18; index += 1) {
    let randoColor = parseInt(Math.random() * 255)
    if (cor1.length <= 2) {
      cor1.push(randoColor)
    } else if (cor2.length <= 2) {
      cor2.push(randoColor)
    } else if (cor3.length <= 2) {
      cor3.push(randoColor)
    } else if (cor4.length <= 2) {
      cor4.push(randoColor)
    } else if (cor5.length <= 2) {
      cor5.push(randoColor)
    } else if (cor6.length <= 2) {
      cor6.push(randoColor)
    }
  }
  document.getElementById("ball1").style.backgroundColor = "rgb(" + cor1[0] + "," + cor1[1] + "," + cor1[2] + ")"
  document.getElementById("ball2").style.backgroundColor = "rgb(" + cor2[0] + "," + cor2[1] + "," + cor2[2] + ")"
  document.getElementById("ball3").style.backgroundColor = "rgb(" + cor3[0] + "," + cor3[1] + "," + cor3[2] + ")"
  document.getElementById("ball4").style.backgroundColor = "rgb(" + cor4[0] + "," + cor4[1] + "," + cor4[2] + ")"
  document.getElementById("ball5").style.backgroundColor = "rgb(" + cor5[0] + "," + cor5[1] + "," + cor5[2] + ")"
  document.getElementById("ball6").style.backgroundColor = "rgb(" + cor6[0] + "," + cor6[1] + "," + cor6[2] + ")"

  let randoColorText = parseInt(Math.random() * 6) + 1
  switch (randoColorText) {
    case 1:
      let cor1 = document.getElementById("ball1").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor1;
      document.getElementById("ball1").classList.add("win")

      break
    case 2:
      let cor2 = document.getElementById("ball2").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor2;
      document.getElementById("ball2").classList.add("win")
      break
    case 3:
      let cor3 = document.getElementById("ball3").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor3;
      document.getElementById("ball3").classList.add("win")
      break
    case 4:
      let cor4 = document.getElementById("ball4").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor4;
      document.getElementById("ball4").classList.add("win")
      break
    case 5:
      let cor5 = document.getElementById("ball5").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor5;
      document.getElementById("ball5").classList.add("win")
      break
    case 6:
      let cor6 = document.getElementById("ball6").style.backgroundColor
      document.querySelector("#rgb-color").innerHTML = "Adivinhe qual é essa cor: " + cor6;
      document.getElementById("ball6").classList.add("win")
      break
  }
  let resposta = document.querySelector("#answer")
  resposta.innerHTML = "Escolha uma cor"
}

function resposta(cor) {
  let pontos = document.getElementById("score")
  if (cor.classList.length == 2) {
    document.getElementById("answer").innerHTML = "Acertou!"
    let scoreUp = parseInt(pontos.innerText) + 3
    pontos.innerText = scoreUp
  } else {
    document.getElementById("answer").innerHTML = "Errou! Tente novamente!"
    pontos.innerText = 0
  }
}


window.onload = colorOnLoad()
