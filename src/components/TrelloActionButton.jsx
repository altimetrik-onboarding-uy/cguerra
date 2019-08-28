import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    title: ''
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  handleInputChange = e => {
    this.setState({ title: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { title } = this.state;

    if (title) {
      this.setState({
        title: ''
      });
      dispatch(addList(title));
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { title } = this.state;

    if (title) {
      this.setState({
        title: ''
      });
      dispatch(addCard(listID, title));
    }
    return;
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          marginTop: 5
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this Card...';
    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 271,
            padding: '6px 8px 2px'
          }}
        >
          <TextareaAutosize
            autoFocus
            aria-label='maximum height'
            placeholder={placeholder}
            defaultValue={this.state.title}
            onBlur={this.closeForm}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none',
              overflow: 'hidden'
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant='contained'
            style={{
              color: 'white',
              backgroundColor: '#5acc44'
            }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  }
};

export default connect()(TrelloActionButton);
