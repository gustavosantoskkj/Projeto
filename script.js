function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subsituir a imagem
  if (html.classList.contains("light")) {
  //se tiver light mode, acidiconar a imagem light
  img.setAttribute("scr", "./assets/avatar-light.png")
  } else {
    //se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }


  /*if(html.classList.contains('light')) {
    html.classList.remove('ligth')
  } else {
    html.classList.add('light')
  }
  */

  /* os dois codigos servem para adicionar um script igual ao botão de modo escuro/dia */

  //se tiver sem o light mode, manter a imagem normal
  // abaixo sera a estrutura para substituir a imagem
}
