import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
  },
  textField: {
    marginBottom: '20px',
  },
}));

export const Form = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form submission logic here
    console.log('Name:', name);
    console.log('Age:', age);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textField}
        label="Name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        className={classes.textField}
        select
        label="Age"
        value={age}
        onChange={handleAgeChange}
      >
        <MenuItem value="">Select Age</MenuItem>
        <MenuItem value="18">18</MenuItem>
        <MenuItem value="19">19</MenuItem>
        <MenuItem value="20">20</MenuItem>
      </TextField>
      <button type="submit">Submit</button>
    </form>
  );
};

