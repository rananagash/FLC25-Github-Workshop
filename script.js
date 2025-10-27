async function main() {
  const grid = document.getElementById('grid');
  const res = await fetch('data/contributors.json');
  const people = await res.json();
  people.sort((a, b) => a.name.localeCompare(b.name));
  grid.innerHTML = people.map(p => `
    <article class="card">
      <h3>${p.name}</h3>
      <div class="handle">@${p.github}</div>
      ${p.bio ? `<p>${p.bio}</p>` : ''}
      <p><a href="https://github.com/${p.github}" target="_blank">GitHub Profile</a></p>
    </article>
  `).join('');
}
main().catch(console.error);
