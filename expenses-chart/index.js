const daysWrapper = document.querySelector('.days');

fetch('data.json')
  .then(json => json.json())
  .then(data => {
    const maxAmount = Math.max(...data.map(el => el.amount));
    let html = '';
    data.forEach(entry => {
      html += 
      `
        <div class="day">
          <div class="amount">${entry.amount}</div>
          <div class="graph">bruh</div>
          <div class="nameOfDay">${entry.day}</div>
        </div> 
      `;
    });
    daysWrapper.innerHTML = html;
  });