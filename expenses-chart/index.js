const daysWrapper = document.querySelector('.days');

fetch('data.json')
  .then(json => json.json())
  .then(data => {
    const maxAmount = Math.max(...data.map(el => el.amount));
    let html = '';

    data.forEach(entry => {
      const percent = ((entry.amount / maxAmount) * 100).toFixed(2) - 20; // crazy -20 here to offset all the graphs a bit 
      html += 
      `
        <div class="day">
          <div class="amount">$${entry.amount}</div>
          <div class="graph" data-graph="${percent}" data-day="${entry.day}"></div>
          <div class="dayName">${entry.day}</div>
        </div> 
      `;
    });
    daysWrapper.innerHTML = html;

    // set the height of a graph based on dataset
    document.querySelectorAll(".graph").forEach(el => {
      el.style.height = el.dataset.graph + "%";
    });

    // show amount of dollars spent on each day after hovering
    document.querySelectorAll(".day").forEach(day => {
      const graph = day.querySelector('.graph');
      const amount = day.querySelector('.amount');
      graph.addEventListener('mouseover', ()=>{
        amount.style.transform = "scale(1.5) translateY(-10px)";   
        graph.style.opacity = "0.8";
      })
      graph.addEventListener('mouseleave', ()=>{
        amount.style.transform = "scale(0) translateY(-10px)";
        graph.style.opacity = "1";
      });
    });

    highlightDay();
  });

function highlightDay(){ 
  const date = new Date();
  const day = date.toString().slice(0,3).toLowerCase();

  document.querySelectorAll('.graph').forEach(el=>{
    if (el.dataset.day === day) {
      el.style.background = "hsl(186, 34%, 60%)";
    }
  });

}