const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    <h2>Astral Echo</h2>
    <p>Version: ${window.api.version}</p>
  `;
}
