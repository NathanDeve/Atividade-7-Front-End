var valores = {
    escreveu: "",
    escreveu2: "",
    escreveu3: "",
  };
  
  function Limpatxt() {
    document.getElementById("tci").value = "";
    document.getElementById("tci2").value = "";
    document.getElementById("tci3").value = "";
  }
  
  function TCI() {
    valores.escreveu = document.getElementById("tci").value;
    Limpatxt();
  }
  
  function Mostrar() {
    var escrita = document.getElementById("Verificar");
    escrita.innerHTML = valores.escreveu;
    Limpatxt();
  }
  
  function TCI2() {
    valores.escreveu2 = document.getElementById("tci2").value;
    Limpatxt();
  }
  
  function Mostrar2() {
    var escrita2 = document.getElementById("Verificar2");
    escrita2.innerHTML = valores.escreveu2;
    Limpatxt();
  }
  
  function TCI3() {
    valores.escreveu3 = document.getElementById("tci3").value;
    Limpatxt();
  }
  
  function Mostrar3() {
    var escrita3 = document.getElementById("Verificar3");
    escrita3.innerHTML = valores.escreveu3;
    Limpatxt();
  }
  

  
  function LimparValores() {
    valores = {
      escreveu: "",
      escreveu2: "",
      escreveu3: "",
      escreveu4: ""
    };
    
    localStorage.removeItem("valores");
    Limpatxt();
    document.getElementById("Verificar").innerHTML = "";
    document.getElementById("Verificar2").innerHTML = "";
    document.getElementById("Verificar3").innerHTML = "";

  }
  
  window.addEventListener("load", function() {
    var storedValores = JSON.parse(localStorage.getItem("valores"));
    if (storedValores) {
      valores = storedValores;
    }
  
    document.getElementById("tci").value = "";
    document.getElementById("tci2").value = "";
    document.getElementById("tci3").value = "";
  });
  
  window.addEventListener("beforeunload", function() {
    localStorage.setItem("valores", JSON.stringify(valores));
  });
  