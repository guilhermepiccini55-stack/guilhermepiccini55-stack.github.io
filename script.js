const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navList.classList.remove("active");
  }
});
async function carregarGitHub() {
  const card = document.getElementById("github-card");

  try {
    const response = await fetch("https://api.github.com/users/guilhermepiccini55-stack");
    const data = await response.json();

    card.innerHTML = `
      <img src="${data.avatar_url}" alt="Foto GitHub">
      <h3>${data.name}</h3>
      <p>${data.bio || "Sem bio disponível"}</p>
      <p>👥 Seguidores: ${data.followers}</p>
      <a href="${data.html_url}" target="_blank">Ver GitHub</a>
    `;
  } catch (error) {
    card.innerHTML = "<p>Erro ao carregar dados.</p>";
  }
}

carregarGitHub();
