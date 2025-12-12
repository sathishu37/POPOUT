const backendURL = 'http://localhost:3001/api/users';

// form submit
const form = document.getElementById('userForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    await fetch(backendURL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    alert('Saved'); form.reset();
  });
}

// list page load
const table = document.getElementById('userTable');
if (table) {
  (async function load(){
    const res = await fetch(backendURL);
    const users = await res.json();
    table.innerHTML = users.map(u => `<tr>
      <td>${u.name||''}</td>
      <td>${u.age||''}</td>
      <td>${u.dob||''}</td>
      <td>${u.address||''}</td>
      <td>${u.mobile||''}</td>
      <td>${u.email||''}</td>
    </tr>`).join('');
  })();
}
