
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

let toastTimer;

function showToast(message) {
    clearTimeout(toastTimer);

    toast.textContent = message;
    toast.classList.add("show");

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Demo membership buttons
document.querySelectorAll(".join-btn").forEach(button => {
    button.addEventListener("click", () => {
        const plan = button.dataset.plan;

        const interest = document.getElementById("interest");
        interest.value = `${plan} Membership`;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

        showToast(`${plan} plan selected — demo only.`);
    });
});

// Demo contact form
document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = document.getElementById("name").value.trim();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    showToast(`Thanks, ${name}! This is a demo form.`);
    form.reset();
});

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();