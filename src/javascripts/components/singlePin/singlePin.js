import './singlePin.scss';

const createSinglePin = (pin) => {
  let domString = '';
  domString += `
  <div class="card col-4 pin-card">
    <img src="${pin.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pin.name}</h5>
      <p class="card-text">${pin.description}</p>
      <a href="${pin.siteUrl}" class="btn btn-primary">Read More</a>
      <button id="${pin.id}" type="button" class="btn btn-danger remove-pin">Delete Pin</button>
      <!-- Button trigger movePin modal -->
<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#move-pin-modal">
  Move Pin
</button>
    </div>
  </div>`;
  return domString;
};

export default { createSinglePin };
