// import  { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import { FieldText } from "./StreamerForm.styled";

export const StreamerForm = ( ) => { 

  const [name, setName] = useState('')
  const [platform, setPlatform] = useState('')

 const handleNameChange = (e) => { 
  setName(e.target.value);


 }
  const handleChange = (e) => { 
    setPlatform(e.target.value)
  }

  const handleSubmit = (e) => { 
    console.log('submitted')
    e.preventDefault()
    setName('')
    setPlatform('')
  }
  return ( 
    <form action="" onSubmit={handleSubmit}>
    <FieldText 
    label = "Name"
    value={name}
      onChange={handleNameChange}/>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Platform</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={platform}
    label="Platform"
    onChange={handleChange}
  >
    <MenuItem value="Twitch">Twitch</MenuItem>
    <MenuItem value="YouTube">YouTube</MenuItem>
    <MenuItem value="TikTok">TikTok</MenuItem>
    <MenuItem value="Kick">Kick</MenuItem>
    <MenuItem value="Rumble">Rumble</MenuItem>
  </Select>
</FormControl>
  <button type="submit">Submit</button>
    </form>
)
} 