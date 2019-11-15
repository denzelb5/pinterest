import firebase from 'firebase/app';
import 'firebase/auth';


import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = () => new Promise((resolve, reject) => {
  const getCurrentUid = firebase.auth().currentUser.uid;
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${getCurrentUid}"`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((fbId) => {
        demBoards[fbId].id = fbId;
        boards.push(demBoards[fbId]);
      });
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);
const addBoard = (newlyCreatedBoard) => axios.post(`${baseUrl}/boards.json`, newlyCreatedBoard);

export default { getBoardsByUid, deleteBoard, addBoard };
