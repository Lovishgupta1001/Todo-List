import React from 'react';
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
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, todo: doc.data().todo
      })))
    })
  }, []);

  const createTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input
    });
    setInput('');
  };
  return (
    <div className="App">
      <Appbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} alignItems="center"
          justifyContent="center" className='App_grid'>
          <Grid item xs={8} sm={8} md={4} lg={4}>
            <TextField
              label="Create Todo"
              variant="outlined"
              size="small"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Button disabled={!input} type="submit" variant="contained" className='App_submitBtn' onClick={createTodo}>SAVE</Button>
          </Grid>
        </Grid>
      </Box>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
