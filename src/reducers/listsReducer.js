import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 4;

const initialState = [
  {
    title: 'Last episode',
    id: '0',
    cards: [
      {
        id: '0',
        title: 'Ea exercitation ullamco laboris',
        description:
          'Elit irure irure sint nostrud labore veniam nostrud sit laboris.'
      },
      {
        id: '1',
        title: 'Veniam cillum excepteur ut ullamco.'
      }
    ]
  },
  {
    title: 'This episode',
    id: '1',
    cards: [
      {
        id: '0',
        title: 'Irure quis culpa pariatur i.'
      },
      {
        id: '1',
        title: 'Velit id magna si'
      },
      {
        id: '2',
        title: 'Ad nisi aute ipsum cillum.'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        id: listID,
        title: action.payload,
        cards: []
      };
      listID += 1;

      return [...state, newList];
    }
    case CONSTANTS.REMOVE_LIST: {
      const newState = state.filter(list => list.id !== action.payload);
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: cardID,
        title: action.payload.title,
        description: action.payload.description
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }

    case CONSTANTS.DRAG_CARD: {
      const {
        droppableIdStart,
        droppableIdEnd,
        dorppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      const newState = [...state];
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(dorppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(dorppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }

    default:
      return state;
  }
};

export default listsReducer;
