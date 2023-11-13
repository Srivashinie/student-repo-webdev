// Add your code here
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dateofbirth = document.getElementById("date-of-birth").value;
  let pronouns = form.querySelector('input[name="Preferred pronouns"]:checked');
  let emptyfields = [];

  if (!name || !username || !email || !dateofbirth || !pronouns || !password) {
    if (
      !name &&
      !username &&
      !email &&
      !dateofbirth &&
      !pronouns &&
      !password
    ) {
      alert("Please fill in all details");
    } else {
      if (!name) {
        emptyfields.push("Name");
      }
      if (!username) {
        emptyfields.push("Username");
      }
      if (!email) {
        emptyfields.push("Email");
      }
      if (!password) {
        emptyfields.push("Password");
      }
      if (!dateofbirth) {
        emptyfields.push("Date of Birth");
      }
      if (!pronouns) {
        emptyfields.push("Preferred Pronouns");
      }
      alert("Please fill in " + emptyfields + " field(s).");
    }
  } else {
    let adjustedDate = dateofbirth + "T00:00:00";
    let date = new Date(adjustedDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    console.log("========= Form Submission =========");
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Date of birth:", date);
    if (pronouns) {
      console.log("Preferred pronouns: ", pronouns.value);
    }
    alert("Your response has been recorded. Thank you!");
    form.reset();
  }
});
