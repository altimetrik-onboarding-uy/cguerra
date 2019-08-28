import React from 'react';
import TrelloCard from './TrelloCard';

<<<<<<< HEAD
const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard text={card.text} />
      ))}
=======
const TrelloList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <TrelloCard />
>>>>>>> 19b59b528499fea27236fc666624eb08f5324695
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 5
  }
};

export default TrelloList;
