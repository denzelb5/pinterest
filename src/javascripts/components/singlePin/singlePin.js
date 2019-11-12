import './singlePin.scss';

const createSinglePin = (pin) => {
  let domString = '';
  domString += `<div class="col-4 d-flex flex-wrap pin-card">
  <div class="card">
    <img src="${pin.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pin.name}</h5>
      <p class="card-text">${pin.description}</p>
      <a href="${pin.siteUrl}" class="btn btn-primary">Read More</a>
      <button id="${pin.id}" type="button" class="btn btn-danger remove-pin">Delete Pin</button>
    </div>
  </div>
  </div>`;
  return domString;
};

export default { createSinglePin };
