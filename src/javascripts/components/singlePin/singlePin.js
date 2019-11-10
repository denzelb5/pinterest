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
    </div>
  </div>
  </div>`;
  return domString;
};

export default { createSinglePin };
