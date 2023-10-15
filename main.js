// question 1
function calculerImpot() {
  const sexe = document.getElementById('sexe').value;
  const age = parseInt(document.getElementById('age').value);
  const resultat = document.getElementById('resultat');

  if ((sexe === 'M' && age > 20) || (sexe === 'F' && age >= 18 && age <= 35)) {
    resultat.innerHTML = '<div class="alert alert-danger" role="alert">Imposable</div>';
  } else {
    resultat.innerHTML = '<div class="alert alert-success" role="alert">Non imposable</div>';
  }
}
document.getElementById('calculer').addEventListener('click', calculerImpot);

//question 2

function calculerMonnaie() {
  // Récupérer les valeurs des inputs
  const montantRecu = parseFloat(document.getElementById('received4').value);
  const prixTotal = parseFloat(document.getElementById('total4').value);

  // Calculer la monnaie à rendre
  let monnaie = montantRecu - prixTotal;

  // Afficher le résultat dans la div
  if (monnaie >= 0) {
    document.getElementById('result4').innerHTML = `<div class="alert alert-success" role="alert">La monnaie à rendre est de ${monnaie.toFixed(2)} €</div>`;
  } else {
    document.getElementById('result4').innerHTML = '<div class="alert alert-danger" role="alert">Montant insuffisant</div>';
  }
}
document.getElementById('form4').addEventListener('submit', function(e) {
  e.preventDefault();
  calculerMonnaie();
});

//question 3

function calculerSecondeSuivante() {
    let heure = parseInt(document.getElementById('hours').value);
    let minute = parseInt(document.getElementById('minutes').value);
    let seconde = parseInt(document.getElementById('seconds').value);
  
    if (seconde === 59) {
      seconde = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        heure++;
        if (heure === 24) {
          heure = 0;
        }
      }
    } else {
      seconde++;
    }
  
    document.getElementById('result3').innerHTML = `<div class="alert alert-success" role="alert">Dans une seconde il sera ${heure} : ${minute} : ${seconde}</div>`;
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeButton').addEventListener('click', calculerSecondeSuivante);
  });

  //question 4

  function controlleEmail() {
    const emailInput = document.getElementById('email');
    const validationMessage = document.getElementById('validationMessage');
    const validateButton = document.getElementById('validateButton');
  
    validateButton.addEventListener('click', function() {
      const email = emailInput.value;
  
      if (email.includes('@') && email.includes('.')) {
        const atIndex = email.indexOf('@');
        const dotIndex = email.indexOf('.');
  
        if (dotIndex > atIndex) {
          const domain = email.substring(atIndex + 1, dotIndex);
  
          if (domain.length > 0) {
            validationMessage.innerHTML = '<div class="alert alert-success" role="alert">Adresse email valide</div>';
            return;
          }
        }
      }
      validationMessage.innerHTML = '<div class="alert alert-danger" role="alert">Adresse email invalide</div>';
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les fonctions
    document.getElementById('calculer').addEventListener('click', calculerImpot);

    document.getElementById('form4').addEventListener('submit', function(e) {
      e.preventDefault();
      calculerMonnaie();
    });
    document.getElementById('calculateTimeButton').addEventListener('click', calculerSecondeSuivante);
    controlleEmail();
  });

  //question 5
  /*'<div class="alert alert-danger" role="alert">.................</div>''
<div class="alert alert-success" role="alert">.......................</div>' */

function calculerCout() {
  let nombre = document.getElementById('copies').value;
  let prix = 0;

  if (nombre <= 10) {
    prix = nombre * 0.1;
  } else if (nombre <= 30) {
    prix = (nombre - 10) * 0.09 + 1;
  } else {
    prix = (nombre - 30) * 0.08 + 2.8;
  }

  document.getElementById('result2').innerHTML = `<div class="alert alert-success" role="alert">Le prix total est de : ${prix.toFixed(2)} €</div>`;
}

document.getElementById('calculerCout').addEventListener('click', calculerCout);

document.getElementById('insuranceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const age = parseInt(document.getElementById('age').value);
  const dureePermis = parseInt(document.getElementById('dureePermis').value);
  const nbrAccidents = parseInt(document.getElementById('nbrAccidents').value);
  const dureeAssurance = parseInt(document.getElementById('dureeAssurance').value);
  let tarif;
  if (nbrAccidents > 3) {
    tarif = 'Refusé';
  } else if (age < 25 && dureePermis < 2) {
    tarif = nbrAccidents === 0 ? 'Rouge' : 'Refusé';
  } else if ((age < 25 && dureePermis >= 2) || (age >= 25 && dureePermis < 2)) {
    tarif = nbrAccidents === 0 ? 'Orange' : (nbrAccidents === 1 ? 'Rouge' : 'Refusé');
  } else {
    if (nbrAccidents === 0) {
      tarif = 'Vert';
    } else if (nbrAccidents === 1) {
      tarif = 'Orange';
    } else {
      tarif = 'Rouge';
    }
  }
  if (dureeAssurance > 1 && tarif !== 'Refusé') {
    if (tarif === 'Rouge') {
      tarif = 'Orange';
    } else if (tarif === 'Orange') {
      tarif = 'Vert';
    } else if (tarif === 'Vert') {
      tarif = 'Bleu';
    }
  }
  document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Votre tarif est : ${tarif}</div>`;
});

function calculateInsurance(age, dureePermis, nbrAccidents, dureeAssurance) {
  let tarif;
  if (nbrAccidents > 3) {
    tarif = 'Refusé';
  } else if (age < 25 && dureePermis < 2) {
    tarif = nbrAccidents === 0 ? 'Rouge' : 'Refusé';
  } else if ((age < 25 && dureePermis >= 2) || (age >= 25 && dureePermis < 2)) {
    tarif = nbrAccidents === 0 ? 'Orange' : (nbrAccidents === 1 ? 'Rouge' : 'Refusé');
  } else {
    if (nbrAccidents === 0) {
      tarif = 'Vert';
    } else if (nbrAccidents === 1) {
      tarif = 'Orange';
    } else {
      tarif = 'Rouge';
    }
  }
  if (dureeAssurance > 1 && tarif !== 'Refusé') {
    if (tarif === 'Rouge') {
      tarif = 'Orange';
    } else if (tarif === 'Orange') {
      tarif = 'Vert';
    } else if (tarif === 'Vert') {
      tarif = 'Bleu';
    }
  }
  return tarif;
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('insuranceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const dureePermis = parseInt(document.getElementById('dureePermis').value);
    const nbrAccidents = parseInt(document.getElementById('nbrAccidents').value);
    const dureeAssurance = parseInt(document.getElementById('dureeAssurance').value);
    const tarif = calculateInsurance(age, dureePermis, nbrAccidents, dureeAssurance);
    document.getElementById('result6').innerHTML = `<div class="alert alert-danger" role="alert">Votre tarif est : ${tarif}</div>`;
  });
});



////question 7
function checkPasswordStrength(password) {
  let strength = 'Dangereux';
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

  if (password.length >= 12 && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
    strength = 'Très sécurisé';
  } else if (password.length >= 8 && hasUpperCase && hasLowerCase && hasNumbers) {
    strength = 'Sécurisé';
  } else if (password.length >= 6 && (hasUpperCase || hasLowerCase) && hasNumbers) {
    strength = 'Moyen';
  }

  return strength;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitPassword').addEventListener('click', () => {
    const password = document.getElementById('motDePasse').value;
    const strength = checkPasswordStrength(password);
    document.getElementById('forceMotDePasse').innerHTML = `<div class='alert alert-${strength === 'Dangereux' ? 'danger' : 'success'}' role='alert'>Votre mot de passe est : ${strength}</div>`;
  });
});


//question 8


function justePrix() {
  const correctPrice = Math.floor(Math.random() * 100) + 1;
  document.getElementById('verifier').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('proposition').value);
    let message = '';
    if (userGuess === correctPrice) {
      message = 'Bravo, vous avez trouvé le juste prix!';
    } else if (userGuess < correctPrice) {
      message = 'Trop bas!';
    } else {
      message = 'Trop haut!';
    }
    document.getElementById('resultatjustprix').innerHTML = `<div class='alert alert-${message === 'Bravo, vous avez trouvé le juste prix!' ? 'success' : 'danger'}' role='alert'>${message}</div>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Password Strength Checker
  document.getElementById('submitPassword').addEventListener('click', () => {
    const password = document.getElementById('motDePasse').value;
    const strength = checkPasswordStrength(password);
    document.getElementById('forceMotDePasse').innerHTML = `<div class='alert alert-${strength === 'Dangereux' ? 'danger' : 'success'}' role='alert'>Votre mot de passe est : ${strength}</div>`;
  });
  // Juste Prix game
  justePrix();
});

//question 9
const mots = ['automatisation', 'international', 'configuration', 'administration', 'transformation'];

let motChoisi = mots[Math.floor(Math.random() * mots.length)];
let motAffiche = '_'.repeat(motChoisi.length);
let tentativesRestantes = 9;


document.getElementById('motAffiche').innerHTML = motAffiche;

document.getElementById('soumettreLettre').addEventListener('click', function() {
  const lettre = document.getElementById('lettre').value;
  let nouvelleAffiche = '';
  let trouve = false;

  for (let i = 0; i < motChoisi.length; i++) {
    if (motChoisi[i] === lettre) {
      nouvelleAffiche += lettre;
      trouve = true;
    } else {
      nouvelleAffiche += motAffiche[i];
    }
  }

  if (!trouve) {
    tentativesRestantes--;
  }

  motAffiche = nouvelleAffiche;
  document.getElementById('motAffiche').innerHTML = motAffiche;
  document.getElementById('tentativesRestantes').innerHTML = `Tentatives restantes: ${tentativesRestantes}`;

  if (motAffiche === motChoisi) {
    document.getElementById('resultatpendu').innerHTML = 'Vous avez gagné!';
  } else if (tentativesRestantes === 0) {
    document.getElementById('resultatpendu').innerHTML = 'Vous avez perdu!';
  }
});

//question 10

const combinaisonSecrete = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10).toString());
let tentatives = 0;

function verifierCombinaison() {
  const proposition = document.getElementById('propositionMasterMind').value.split('');
  let bienPlace = 0;
  let malPlace = 0;

  for (let i = 0; i < 4; i++) {
    if (proposition[i] === combinaisonSecrete[i]) {
      bienPlace++;
    } else if (combinaisonSecrete.includes(proposition[i])) {
      malPlace++;
    }
  }

  tentatives++;
  if (bienPlace === 4) {
    document.getElementById('resultatMasterMind').innerHTML = 'Félicitations, vous avez gagné!';
    return;
  }

  if (tentatives >= 12) {
    document.getElementById('resultatMasterMind').innerHTML = 'Désolé, vous avez perdu!';
    return;
  }

  document.getElementById('resultatMasterMind').innerHTML = `Bien placés: ${bienPlace}, Mal placés: ${malPlace}`;
}

document.getElementById('verifierMasterMind').addEventListener('click', verifierCombinaison);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Button clicked:', button.textContent);
  });
});