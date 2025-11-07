// Отображение текущего года
document.getElementById("year").textContent = new Date().getFullYear();

// Кнопка с приветствием
document.getElementById("greetButton").addEventListener("click", () => {
  const user = prompt("Как тебя зовут?");
  const message = user
    ? `Приятно познакомиться, ${user}! 😄`
    : "Ты не ввёл имя, но всё равно привет!";
  document.getElementById("greeting").textContent = message;
});
