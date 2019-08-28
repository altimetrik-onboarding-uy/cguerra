import { CONSTANTS } from '.';

export const addCard = (listID, title, description = '') => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { listID, title, description }
  };
};
