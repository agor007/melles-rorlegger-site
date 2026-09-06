const menyknapp = document.querySelector(".menu-toggle");
const meny = document.querySelector("#hovedmeny");
const aar = document.querySelector("#aar");
const skjema = document.querySelector("#kontaktskjema");
const statusfelt = document.querySelector("#skjema-status");

if (aar) aar.textContent = String(new Date().getFullYear());

if (menyknapp && meny) {
  menyknapp.addEventListener("click", () => {
    const aapen = meny.classList.toggle("open");
    menyknapp.setAttribute("aria-expanded", String(aapen));
  });
  meny.querySelectorAll("a").forEach((lenke) => {
    lenke.addEventListener("click", () => {
      meny.classList.remove("open");
      menyknapp.setAttribute("aria-expanded", "false");
    });
  });
}

if (skjema) {
  skjema.addEventListener("submit", (hendelse) => {
    hendelse.preventDefault();
    const navn = document.getElementById("navn").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const epost = document.getElementById("epost").value.trim();
    const melding = document.getElementById("melding").value.trim();
    if (!navn || !telefon || !epost || !melding) {
      statusfelt.textContent = "Fyll ut alle feltene før du sender.";
      return;
    }
    const emne = encodeURIComponent(`Henvendelse fra ${navn}`);
    const body = encodeURIComponent(`Navn: ${navn}\nTelefon: ${telefon}\nE-post: ${epost}\n\nMelding:\n${melding}`);
    window.location.href = `mailto:mellesrorlegger@gmail.com?subject=${emne}&body=${body}`;
    statusfelt.textContent = "E-postvinduet skal åpne seg nå.";
  });
}
