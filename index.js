const firstRequest = prompt("Введіть перше число:");
const firstNumber = Number(firstRequest);

if (firstNumber >= 0) {
  const secondRequest = prompt("Введіть друге чило");
  const secondNumber = Number(secondRequest);

  if (secondNumber >= 0) {
    alert(`Сумма введених чисел: ${firstNumber + secondNumber}`);
    if (firstNumber < secondNumber) {
      const message = confirm("Ви впевнені, що хочете продовжити операцію?");
      if (message) {
        alert(`Різниця введених чисел: ${firstNumber - secondNumber}`);
      }
    } else {
      alert(`Різниця введених чисел: ${firstNumber - secondNumber}`);
    }

    alert(`Множення введених чисел: ${firstNumber * secondNumber}`);

    if (secondNumber === 0) {
      alert("Помилка! Друге число 0, на 0 ділити не можна");
    } else {
      alert(`Ділення введених чисел: ${firstNumber / secondNumber}`);
    }
  } else {
    alert("Помилка! Ви не ввели друге число!");
  }
} else {
  alert("Помилка! Ви не ввели число!");
}
