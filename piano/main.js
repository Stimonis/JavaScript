let enregistrement = [];   // variable pour enregistrer les notes appuyées
let enregistre = false;
let play = false;
let boucle = false;
// première octave

let noteDo = $("#1OctDo");
let noteDo_ = $("#1OctDo_");
let noteRe = $("#1OctRe");
let noteRe_ = $("#1OctRe_");
let noteMi = $("#1OctMi");
let noteFa = $("#1OctFa");
let noteFa_ = $("#1OctFa_");
let noteSol = $("#1OctSol");
let noteSol_ = $("#1OctSol_");
let noteLa = $("#1OctLa");
let noteLa_ = $("#1OctLa_");
let noteSi = $("#1OctSi");

$("#enregistrement").click(function() {
  enregistre = true;
});

$("#stop").click(function() {
  enregistre = false;
  play = false;
})

$("#reset").click(function(){
  enregistrement = [];
})

/*
function ploufRecursive (arrayRecord,index) {
  arrayRecord[index].play.music()
  addEventListener('play.music.finish', function(e) {
    index++;
    if (arrayRecord.length < index) {
      ploufRecursive (arrayRecord,index);
    }
  })
}
*/

$("#play").click(function() {
  play = true;
  i = 0;
  while (i !== enregistrement.length) {
    enregistrement[i].play();
    i++;
  }
})

$("#1erDo").click(function() {
  if (noteDo[0].paused) {
    noteDo[0].play();
  } else {
    noteDo[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteDo[0]);
  }
});

$("#1erDo_").click(function() {
  if (noteDo[0].paused) {
    noteDo[0].play();
  } else {
    noteDo[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteDo_[0]);
  }
});

$("#1erRe").click(function() {
  if (noteRe[0].paused) {
    noteRe[0].play();
  } else {
    noteRe[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteRe[0]);
  }
});

$("#1erRe_").click(function() {
  if (noteRe_[0].paused) {
    noteRe_[0].play();
  } else {
    noteRe_[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteRe_[0]);
  }
});

$("#1erMi").click(function() {
  if (noteMi[0].paused) {
    noteMi[0].play();
  } else {
    noteMi[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteMi[0]);
  }
});

$("#1erFa").click(function() {
  if (noteFa[0].paused) {
    noteFa[0].play();
  } else {
    noteFa[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteFa[0]);
  }
});

$("#1erFa_").click(function() {
  if (noteFa_[0].paused) {
    noteFa_[0].play();
  } else {
    noteFa_[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteFa_[0]);
  }
});

$("#1erSol").click(function() {
  if (noteSol[0].paused) {
    noteSol[0].play();
  } else {
    noteSol[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteSol[0]);
  }
});

$("#1erSol_").click(function() {
  if (noteSol_[0].paused) {
    noteSol_[0].play();
  } else {
    noteSol_[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(notSol_[0]);
  }
});

$("#1erLa").click(function() {
  if (noteLa[0].paused) {
    noteLa[0].play();
  } else {
    noteLa[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteLa[0]);
  }
});

$("#1erLa_").click(function() {
  if (noteLa_[0].paused) {
    noteLa_[0].play();
  } else {
    noteLa_[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteLa_[0]);
  }
});

$("#1erSi").click(function() {
  if (noteSi[0].paused) {
    noteSi[0].play();
  } else {
    noteSi[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteSi[0]);
  }
});

// deuxième octave
let noteDo2 = $("#2OctDo");
let noteDo_2 = $("#2OctDo_");
let noteRe2 = $("#2OctRe");
let noteRe_2 = $("#2OctRe_");
let noteMi2 = $("#2OctMi");
let noteFa2 = $("#2OctFa");
let noteFa_2 = $("#2OctFa_");
let noteSol2 = $("#2OctSol");
let noteSol_2 = $("#2OctSol_");
let noteLa2 = $("#2OctLa");
let noteLa_2 = $("#2OctLa_");
let noteSi2 = $("#2OctSi");

$("#2emeDo").click(function() {
  if (noteDo2[0].paused) {
    noteDo2[0].play();
  } else {
    noteDo2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteDo2[0]);
  }
});

$("#2emeDo_").click(function() {
  if (noteDo_2[0].paused) {
    noteDo_2[0].play();
  } else {
    noteDo_2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteDo_2[0]);
  }
});

$("#2emeRe").click(function() {
  if (noteRe2[0].paused) {
    noteRe2[0].play();
  } else {
    noteRe2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteRe2[0]);
  }
});

$("#2emeRe_").click(function() {
  if (noteRe_2[0].paused) {
    noteRe_2[0].play();
  } else {
    noteRe_2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteRe_2[0]);
  }
});

$("#2emeMi").click(function() {
  if (noteMi2[0].paused) {
    noteMi2[0].play();
  } else {
    noteMi2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteMi2[0]);
  }
});

$("#2emeFa").click(function() {
  if (noteFa2[0].paused) {
    noteFa2[0].play();
  } else {
    noteFa2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteFa2[0]);
  }
});

$("#2emeFa_").click(function() {
  if (noteFa_2[0].paused) {
    noteFa_2[0].play();
  } else {
    noteFa_2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteFa_2[0]);
  }
});

$("#2emeSol").click(function() {
  if (noteSol2[0].paused) {
    noteSol2[0].play();
  } else {
    noteSol2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteSol2[0]);
  }
});

$("#2emeSol_").click(function() {
  if (noteSol_2[0].paused) {
    noteSol_2[0].play();
  } else {
    noteSol_2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteSol_2[0]);
  }
});

$("#2emeLa").click(function() {
  if (noteLa2[0].paused) {
    noteLa2[0].play();
  } else {
    noteLa2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteLa2[0]);
  }
});

$("#2emeLa_").click(function() {
  if (noteLa_2[0].paused) {
    noteLa_2[0].play();
  } else {
    noteLa_2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteLa_2[0]);
  }
});

$("#2emeSi").click(function() {
  if (noteSi2[0].paused) {
    noteSi2[0].play();
  } else {
    noteSi2[0].currentTime = 0;
  }

  if (enregistre === true) {
    enregistrement.push(noteSi2[0]);
  }
});

$(window).on("keypress", function(event) {
  let keyName = event.keyCode;
  console.log(keyName);

  switch (keyName) {
    case 97:
      if (noteDo[0].paused) {
        noteDo[0].play();
      } else {
        noteDo[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteDo[0]);
      }
      
      $("#n1erDo").addClass('red').removeClass('white');
      function plouf (){
        document.querySelector("#n1erDo").className = 'blanche';
      }
      setTimeout(plouf,300)

      break;
    case 233:
      if (noteDo_[0].paused) {
        noteDo_[0].play();
      } else {
        noteDo_[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteDo_[0]);
      }
      break;
    case 122:
      if (noteRe[0].paused) {
        noteRe[0].play();
      } else {
        noteRe[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteRe[0]);
      }
      break;
    case 34:
      if (noteRe_[0].paused) {
        noteRe_[0].play();
      } else {
        noteRe_[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteRe_[0]);
      }
      break;
    case 101:
      if (noteMi[0].paused) {
        noteMi[0].play();
      } else {
        noteMi[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteMi[0]);
      }
      break;
    case 114:
      if (noteFa[0].paused) {
        noteFa[0].play();
      } else {
        noteFa[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteFa[0]);
      }
      break;
    case 40:
      if (noteFa_[0].paused) {
        noteFa_[0].play();
      } else {
        noteFa_[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteFa_[0]);
      }
      break;
    case 116:
      if (noteSol[0].paused) {
        noteSol[0].play();
      } else {
        noteSol[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSol[0]);
      }
      break;
    case 167:
      if (noteSol_[0].paused) {
        noteSol_[0].play();
      } else {
        noteSol_[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSol_[0]);
      }
      break;
    case 121:
      if (noteLa[0].paused) {
        noteLa[0].play();
      } else {
        noteLa[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteLa[0]);
      }
      break;
    case 232:
      if (noteLa_[0].paused) {
        noteLa_[0].play();
      } else {
        noteLa_[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteLa_[0]);
      }
      break;
    case 117:
      if (noteSi[0].paused) {
        noteSi[0].play();
      } else {
        noteSi[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSi[0]);
      }
      break;
// 2ème octave
    case 99:
      if (noteDo2[0].paused) {
        noteDo2[0].play();
      } else {
        noteDo2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteDo2[0]);
      }
      break;
    case 102:
      if (noteDo_2[0].paused) {
        noteDo_2[0].play();
      } else {
        noteDo_2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteDo_2[0]);
      }
      break;
    case 118:
      if (noteRe2[0].paused) {
        noteRe2[0].play();
      } else {
        noteRe2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteRe2[0]);
      }
      break;
    case 103:
      if (noteRe_2[0].paused) {
        noteRe_2[0].play();
      } else {
        noteRe_2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteRe_2[0]);
      }
      break;
    case 98:
      if (noteMi2[0].paused) {
        noteMi2[0].play();
      } else {
        noteMi2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteMi[0]);
      }
      break;
    case 110:
      if (noteFa2[0].paused) {
        noteFa2[0].play();
      } else {
        noteFa2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteFa2[0]);
      }
      break;
    case 106:
      if (noteFa_2[0].paused) {
        noteFa_2[0].play();
      } else {
        noteFa_2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteFa_2[0]);
      }
      break;
    case 44:
      if (noteSol2[0].paused) {
        noteSol2[0].play();
      } else {
        noteSol2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSol2[0]);
      }
      break;
    case 107:
      if (noteSol_2[0].paused) {
        noteSol_2[0].play();
      } else {
        noteSol_2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSol_2[0]);
      }
      break;
    case 59:
      if (noteLa2[0].paused) {
        noteLa2[0].play();
      } else {
        noteLa2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteLa2[0]);
      }
      break;
    case 108:
      if (noteLa_2[0].paused) {
        noteLa_2[0].play();
      } else {
        noteLa_2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteLa_2[0]);
      }
      break;
    case 58:
      noteSi2[0].play();
      if (noteSi2[0].paused) {
        noteSi2[0].play();
      } else {
        noteSi2[0].currentTime = 0;
      }

      if (enregistre === true) {
        enregistrement.push(noteSi2[0]);
      }
      break;
    default:
  }
});




// besoin : un bouton enregistrement qui va mettre les notes appuyées dans le tableau créé pour
//          un bouton stop
//          un bouton play pour réécouter la musique
//          pouvoir clicker sur les notes ou appuyer sur les touches du clavier
//          faire en sorte que l'on puisse appuyer sur 2 notes en même temps
//          faire en sorte que quand on réécoute la chanson les notes s'allument en même temps
//          prier pour que ça marche ;-)
