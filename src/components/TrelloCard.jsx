import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default class TrelloCard extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSave = params => {};

  render() {
    const { title, id, index, description } = this.props;
    const { open } = this.state;

    return (
      <Draggable draggableId={String(id)} key={id} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              style={{
                minWidth: 275,
                marginBottom: 5
              }}
            >
              <CardContent>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {description}
                </Typography>
              </CardContent>
              <CardActions float='right'>
                <IconButton onClick={this.handleClickOpen}>
                  <Edit fontSize='small' />
                </IconButton>
              </CardActions>
            </Card>

            <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  <label>Title</label>
                  <TextareaAutosize
                    autoFocus
                    aria-label='maximum height'
                    defaultValue={title}
                    onChange={this.handleInputChange}
                    style={{
                      resize: 'none',
                      width: '100%',
                      outline: 'none',
                      border: 'none',
                      overflow: 'hidden'
                    }}
                  />
                  <label>Description</label>

                  <TextareaAutosize
                    autoFocus
                    aria-label='maximum height'
                    defaultValue={description}
                    onChange={this.handleInputChange}
                    style={{
                      resize: 'none',
                      width: '100%',
                      outline: 'none',
                      border: 'none',
                      overflow: 'hidden'
                    }}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color='primary'>
                  Cancel
                </Button>
                <Button onClick={this.handleSave} color='primary' autoFocus>
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )}
      </Draggable>
    );
  }
}
