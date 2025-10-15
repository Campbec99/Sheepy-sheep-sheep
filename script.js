(function(){
  function setCount(v){ document.getElementById('count').textContent = v; }

  fetch('/api/count', {cache: 'no-store'})
    .then(r => r.json())
    .then(d => setCount(d.count))
    .catch(e => {
      console.error(e);
      setCount('Error');
    });
})();
