
  const button = document.querySelector("button");
  const result = document.getElementById("result");
  const dateInput = document.getElementById("date");

  button.addEventListener("click", () => {
    const birthDate = new Date(dateInput.value);
    if (!dateInput.value) {
      result.textContent = "Please enter your birth date.";
      return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    result.textContent = `You are ${age} years old.`;
  });

