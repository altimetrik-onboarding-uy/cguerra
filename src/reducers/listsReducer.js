const initialState = [
  {
    title: 'Last episode',
    id: 0,
    cards: [
      {
        id: 0,
        test:
          'Ea exercitation ullamco laboris sint sint est commodo anim reprehenderit exercitation Lorem ipsum aliquip.'
      },
      {
        id: 1,
        test: 'Veniam cillum excepteur ut ullamco.'
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
