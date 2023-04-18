function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/dev-profile.png")
    }


    //texto
    if (html.classList.contains("light")) {
    var description = document.getElementById("nome-dev");
    description.textContent = '@orgatomic.';

    } else {
        var description = document.getElementById("nome-dev");
        description.textContent = '@fermec3';
  }

}