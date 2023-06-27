

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import { FieldText } from "./StreamerForm.styled";
import { postStreamers } from "../../Api";

export const StreamerForm = ( ) => { 

  const [author, setAuthor] = useState('')
  const [platform, setPlatform] = useState('')
  const [description, setDescription] = useState('')
 const handleAuthorChange = (e) => { 
  setAuthor(e.target.value);
 }
 const handlePlatformChange = (e) => { 
  setPlatform(e.target.value)
}

  const handleDescriptionChange = (e) => { 
    setDescription(e.target.value)
  }


  const handleSubmit = (e) => { 
    const test = async(user) => { 
      const response = await postStreamers(user);
      console.log('response: ', response);
      
    }
    console.log('submitted')
    e.preventDefault()
    const user = { 
      author,
      platform,
      description,
      picture : 'test'
    }
    test(user)
    setDescription('')
    setAuthor('')
    setPlatform('')

    
  
  }
  return ( 
    <form action="" onSubmit={handleSubmit}>
    <FieldText 
    label = "author"
    value={author}
      onChange={handleAuthorChange}/>
       <FieldText 
    label = "Description"
    value={description}
      onChange={handleDescriptionChange}/>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Platform</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={platform}
    label="Platform"
    onChange={handlePlatformChange}
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