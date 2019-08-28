import { CONSTANTS } from '../actions';

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};
export const removeList = listID => {
  return {
    type: CONSTANTS.REMOVE_LIST,
    payload: listID
  };
};

export const sortCardList = (
  droppableIdStart,
  droppableIdEnd,
  dorppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CONSTANTS.DRAG_CARD,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      dorppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  };
};
