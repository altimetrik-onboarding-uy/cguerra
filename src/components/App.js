import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortCardList, removeList } from '../actions';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    this.props.dispatch(
      sortCardList(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  handleDelete = id => {
    this.props.dispatch(removeList(id));
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <header>
                <h2 contentEditable='true'>Hola</h2>
              </header>
            </Grid>
            <Grid item xs={12}>
              <div style={styles.listContainer}>
                {lists.map((list, index) => (
                  <TrelloList
                    key={index}
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    onDelete={this.handleDelete}
                  />
                ))}
                <TrelloActionButton list />
              </div>
            </Grid>
          </Grid>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});
export default connect(mapStateToProps)(App);
