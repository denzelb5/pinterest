const createSinglePin = (pin) => {
  let domString = '';
  if (pin.name) {
    domString += `<div class="card">
    <img src="${pin.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pin.name}</h5>
      <p class="card-text">${pin.description}</p>
      <a href="${pin.siteUrl}" class="btn btn-primary">${pin.siteUrl}</a>
    </div>
  </div>`;
  } else {
    domString += '';
  }
  return domString;
};

export default { createSinglePin };
