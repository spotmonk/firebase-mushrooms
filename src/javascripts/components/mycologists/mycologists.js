const mycologistMaker = (mycologist) => {
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <div class="card-header">${mycologist.name}</div>
    <h5 class="card-title">${mycologist.age} years old</h5>
  </div>
</div>`;

  return domString;
};

export default { mycologistMaker };
