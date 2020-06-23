const mushroomMaker = (mushroom) => {
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <div class="card-header">${mushroom.name}</div>
    <h5 class="card-title">${mushroom.location}</h5>
    <p class="card-text">This mushroom is of size ${mushroom.size} and weighs ${mushroom.weight} grams.</p>
  </div>
</div>`;

  return domString;
};

export default { mushroomMaker };
