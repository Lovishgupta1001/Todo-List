import React from 'react';
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
import { db } from './firebase'

function Todo(props) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} justifyContent="center" >
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
                                        <IconButton edge="end" color="primary" aria-label='edit'>
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