import React, { useDebugValue } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase'
import Appbar from './Appbar';
import Todo from './Todo';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {

    })
  }, []);

  // const createTodo = (e) => {
  //   e.preventDefault();
  //   setInput('');
  // };
  return (
    <div className="App">
      <Appbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} alignItems="center"
          justifyContent="center" className='App_grid'>
          <Grid item xs={8} sm={8} md={4} lg={4}>
            <TextField
              label="create todo"
              variant="outlined"
              size="small"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Button variant="contained" className='App_submitBtn'>SAVE</Button>
          </Grid>
        </Grid>
        <Todo todo="Single-line item" />
        <Todo todo="2nd Todo item" />
      </Box>
    </div>
  );
}

export default App;
