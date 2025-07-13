document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const plan = form.plan.value;

    if (!name || !email || !plan) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Example of where you'd send the form data to a server
    // fetch("/api/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, plan }),
    // }).then(response => ...);

    form.innerHTML = `
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-2 text-green-600">🎉 You're In!</h3>
        <p class="text-gray-700">Thanks for joining Intima Connect. Check your inbox for next steps.</p>
      </div>
    `;
  });
});
