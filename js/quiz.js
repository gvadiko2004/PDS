document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = document.querySelectorAll(".quiz__question");
  const prevButton = document.querySelector(".btn-open-users");
  const nextButton = document.querySelector(".button-next");
  const nextText = nextButton.querySelector(".next-text");
  let currentStep = 0;

  // Функция для проверки, активировать ли кнопку "Next"
  function updateNextButtonState() {
    const currentQuestion = quizQuestions[currentStep];
    const radioInputs = currentQuestion.querySelectorAll('input[type="radio"]');
    let allFilled = false;

    // Для последнего вопроса проверяем все radio кнопки, кроме комментария
    if (currentStep === quizQuestions.length - 1) {
      allFilled = Array.from(radioInputs).some((input) => input.checked); // Проверка на заполненность хотя бы одного radio
    } else {
      // Для других вопросов проверяем, выбрана ли радио кнопка
      allFilled = Array.from(radioInputs).some((input) => input.checked);
    }

    // Сделать кнопку активной, если выбран хотя бы один radio input
    if (allFilled) {
      nextButton.classList.remove("disabled");
    } else {
      nextButton.classList.add("disabled");
    }
  }

  // Функция обновления видимости шагов
  function updateStep() {
    quizQuestions.forEach((question, index) => {
      question.style.display = index === currentStep ? "block" : "none";
    });

    // Скрываем кнопки в зависимости от текущего шага
    prevButton.style.display = currentStep === 0 ? "none" : "inline-flex";

    // Меняем текст на кнопке "Next" на "Send" на 4-м шаге
    const buttonText =
      currentStep === quizQuestions.length - 1 ? "Send" : "Next"; // "Send" на последнем шаге
    nextText.textContent = buttonText;

    // Обновляем состояние кнопки "Next"
    updateNextButtonState();
  }

  // Функция для анимации вопросов
  function animateQuestions() {
    quizQuestions.forEach((question) => {
      question.classList.add("fade-out"); // Добавляем класс для анимации
    });

    // Вернуть opacity обратно к 1 через некоторое время
    setTimeout(() => {
      quizQuestions.forEach((question) => {
        question.classList.remove("fade-out"); // Убираем класс после анимации
      });
    }, 500); // Время, соответствующее длительности анимации (500ms)
  }

  // Обработчик для кнопки "previous"
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentStep > 0) {
      currentStep--;
      updateStep();
    }
  });

  // Обработчик для кнопки "next"
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    const currentQuestion = quizQuestions[currentStep];
    const radioInputs = currentQuestion.querySelectorAll('input[type="radio"]');
    const isAnyRadioChecked = Array.from(radioInputs).some(
      (input) => input.checked
    );

    if (!isAnyRadioChecked) {
      // Если ни одна радио кнопка не выбрана, активируем анимацию
      animateQuestions();
    } else {
      if (currentStep < quizQuestions.length - 1) {
        currentStep++;
        updateStep();
      } else {
        // Действия при отправке (последний шаг)
        alert("Thank you for completing the quiz!");

        // Сброс формы после отправки
        setTimeout(() => {
          // Возвращаем все в исходное состояние
          currentStep = 0; // Сброс шага на первый
          updateStep(); // Обновляем видимость
        }, 1000); // Задержка 1 секунда для отображения alert
      }
    }
  });

  // Инициализация
  updateStep();

  // Отслеживаем изменения в радиокнопках
  quizQuestions.forEach((question) => {
    const radioInputs = question.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.addEventListener("change", updateNextButtonState);
    });
  });
});

const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menuMobile = document.querySelector(".menu__mobile");

btnOpen.addEventListener("click", function () {
  menuMobile.classList.add("active");
});

btnClose.addEventListener("click", function () {
  menuMobile.classList.remove("active");
});
