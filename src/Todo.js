import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Checkbox from '@mui/material/Checkbox';
// import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemSecondaryAction } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { db } from './firebase'
import "./Todo.css"
import { FormControl, TextField, Button } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        setInput('');
        setOpen(false);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                className='todo_modal'>
                <div>
                    <h4>Update Todo</h4>
                    <FormControl className='todo_modalForm'>
                        <form>
                            <TextField
                                label="update todo"
                                placeholder={props.todo.todo}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                variant='outlined'
                                size='small'
                            />
                            <Button type='submit' color="primary" variant='contained' size="small" className='todo_submit'
                                onClick={updateTodo}>Update</Button>
                        </form>
                    </FormControl>
                </div>
            </Modal>
            <Box sx={{ flexGrow: 1 }} justifyContent="center" alignItems="center" >
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={10} md={6} lg={6}>
                        <Paper>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={props.todo.todo}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end" color="primary" aria-label='edit'
                                            onClick={handleOpen} >
                                            <EditOutlinedIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={event => db.collection('todos').doc(props.todo.id).delete()}
                                            edge="end"
                                            color="secondary" aria-label='delete'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>x
        </div>
    )
}

export default Todo;