'use strict';
import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';

const form = document.getElementById('datecalc');

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  let { firstDate, secondDate } = event.target.elements;
  firstDate = firstDate.value, secondDate = secondDate.value;
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}