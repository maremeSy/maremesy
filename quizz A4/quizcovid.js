
  const form = document.getElementById("quizz");
  form.addEventListener("submit", function(event){
    event.preventDefault();
  
    const température = form.elements.température.value;
    const symptome = form.elements.symptome.value;
    const contact = form.elements.contact.value;
    const voyage = form.elements.voyage.value;
    let result = "";
    if (température >37 && symptome === "oui" && contact === "oui" && voyage === "oui"){
      result = "Le patient est atteint du covid.";
    }
    else{
      result = "Le patient n'a pas contracté le covid.";
    }
    const resultat = document.getElementById("résultats");
    resultat.textContent =result ;
  });
  