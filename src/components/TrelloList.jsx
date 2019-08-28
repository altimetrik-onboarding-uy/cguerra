import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

const TrelloList = ({ title, cards, listID, onDelete }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <div>
            <IconButton
              onClick={() => onDelete(listID)}
              style={{
                float: 'right',
                display: 'flex'
              }}
            >
              <Delete fontSize='small' />
            </IconButton>
          </div>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={index}
              index={index}
              title={card.title}
              id={card.id}
              description={card.description}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    height: '100%',
    padding: 5,
    margin: 5
  }
};

export default TrelloList;
