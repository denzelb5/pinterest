import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const demPins = response.data;
      const pins = [];
      Object.keys(demPins).forEach((fbId) => {
        demPins[fbId].id = fbId;
        pins.push(demPins[fbId]);
      });
      resolve(pins);
    })
    .catch((error) => reject(error));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);
const addPin = (newlyCreatedPin) => axios.post(`${baseUrl}/pins.json`, newlyCreatedPin);


const movePin = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${id}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const updatePin = (pinId, updatedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, updatedPin);

export default {
  getPinsByBoardId,
  deletePin,
  addPin,
  updatePin,
  movePin,
};
