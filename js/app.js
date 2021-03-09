const form = document.getElementById("form");
const toggle = document.getElementById("toggle");
const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");

btn.addEventListener("click", function (e) {
	e.preventDefault();

	if (name.value !== "" && age.value !== 0 && email.value !== "") {
		// Create tr
		const tr = document.createElement("tr");

		// Create td for name
		const tdName = document.createElement("td");
		tdName.textContent = name.value;
		tr.appendChild(tdName);

		// create td for age
		const tdAge = document.createElement("td");
		tdAge.textContent = age.value;
		tr.appendChild(tdAge);

		// create td for email
		const tdEmail = document.createElement("td");
		tdEmail.textContent = email.value;
		tr.appendChild(tdEmail);

		tbody.appendChild(tr);
      toggle.classList.remove('show')
      toggle.classList.add('hide')
	} else {
      toggle.classList.add('show')
      toggle.classList.remove('hide')
	}
});
