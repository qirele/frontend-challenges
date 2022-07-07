fetch('data.json')
  .then(json => json.json())
  .then(data => {
    const maxAmount = Math.max(...data.map(el => el.amount));

    data.forEach(entry => {
      console.log(`day: ${entry.day}, amount: ${entry.amount}`);
    });
  });