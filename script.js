document.querySelector('#add_subj').addEventListener('click', function() {
  const newSubject = document.createElement('div');
  newSubject.className = 'input-container';

  newSubject.innerHTML = 
    `<div class="input-container" id="input-container">
      <input type="text" name="subject" class="input">
      <input type="number" name="unit" class="input" id="unit">
      <input type="number" name="grade" class="input" id="grade">
      <button type="button" class="btn btn-danger remove">x</button>
    </div>`;

  document.querySelector('.input-row').appendChild(newSubject);
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove')) {
    event.target.closest('.input-container').remove();
  }

  if (event.target.id === 'compute') {
    computeGWA();
  }
});

function computeGWA() {
  const unitInputs = document.querySelectorAll('.input-container input#unit');
  const gradeInputs = document.querySelectorAll('.input-container input#grade');
  let totalGradeUnitProduct = 0;
  let totalUnits = 0;

  unitInputs.forEach((unitInput, index) => {
    const units = parseFloat(unitInput.value);
    const grade = parseFloat(gradeInputs[index].value);

    if (!isNaN(units) && !isNaN(grade)) {
      totalGradeUnitProduct += grade * units;
      totalUnits += units;
    }
  });

  const gwaResult = totalUnits !== 0 ? totalGradeUnitProduct / totalUnits : 0;
  document.getElementById('result').textContent = gwaResult.toFixed(2);

  const sayingsContainer = document.querySelector('.sayings');
  if (gwaResult <= 1.30) {
    sayingsContainer.innerHTML = "<strong>University Scholar:</strong> WOW HA !! galing mo ha penge pang iced coffee!! hehe";
  } else if (gwaResult <= 1.5) {
    sayingsContainer.innerHTML = "<strong>College Scholar:</strong> bawaseee kahit pambili ko lang ng donut hehe";
  } else if (gwaResult <= 1.75) {
    sayingsContainer.innerHTML = "<strong>Dean's Lister:</strong> nice ha nice";
  } else if (gwaResult < 3) {
    sayingsContainer.innerHTML = "<strong>Passed:</strong> goods na at nakapasa ka";
  } else {
    sayingsContainer.innerHTML = "<strong>Failed:</strong> bawi bawi bawiiii kaya mo 'yan";
  }
}




// function computeGWA() {
//   const gradeInputs = document.querySelectorAll('.input-container input[name="grade"]');
//   const unitInputs = document.querySelectorAll('.input-container input[name="unit"]');
//   let totalGradeUnitProduct = 0;
//   let totalUnits = 0;

//   gradeInputs.forEach((gradeInput, index) => {
//     const grade = parseFloat(gradeInput.value);
//     const units = parseFloat(unitInputs[index].value);

//     if (!isNaN(grade) && !isNaN(units)) {
//       totalGradeUnitProduct += grade * units;
//       totalUnits += units;
//     }
//   });

//   const gwaResult = totalUnits !== 0 ? totalGradeUnitProduct / totalUnits : 0;
//   document.getElementById('result').textContent = gwaResult.toFixed(2);
// }

