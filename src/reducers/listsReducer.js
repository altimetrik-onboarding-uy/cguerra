const initialState = [
  {
    title: 'Last episode',
    id: 0,
    cards: [
      {
        id: 0,
<<<<<<< HEAD
        text:
=======
        test:
>>>>>>> 19b59b528499fea27236fc666624eb08f5324695
          'Ea exercitation ullamco laboris sint sint est commodo anim reprehenderit exercitation Lorem ipsum aliquip.'
      },
      {
        id: 1,
<<<<<<< HEAD
        text: 'Veniam cillum excepteur ut ullamco.'
      }
    ]
  },
  {
    title: 'This episode',
    id: 0,
    cards: [
      {
        id: 0,
        text:
          'Irure quis culpa pariatur id quis duis voluptate aute proident aute anim excepteur irure.'
      },
      {
        id: 1,
        text:
          'Velit id magna sit aliqua officia exercitation tempor id aliqua commodo mollit ex cupidatat exercitation.'
      },
      {
        id: 2,
        text: 'Ad nisi aute ipsum cillum.'
=======
        test: 'Veniam cillum excepteur ut ullamco.'
>>>>>>> 19b59b528499fea27236fc666624eb08f5324695
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
