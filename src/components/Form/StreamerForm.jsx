
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { Container, FieldText, Flex, MuiSelect, FlexColumn } from "./StreamerForm.styled";
import { postStreamers } from "../../Api";

export const StreamerForm = ({ setStreamerList }) => {
  const [author, setAuthor] = useState('');
  const [platform, setPlatform] = useState('');
  const [description, setDescription] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const test = async (user) => {
      const response = await postStreamers(user);
      return response;     
    };

    const user = {
      author,
      platform,
      description,
      picture: 'test'
    };

    const response = await test(user);

    if (response) {
      setDescription('');
      setAuthor('');
      setPlatform('');

      setStreamerList(prevList => [...prevList, response]);
    }
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <Flex>
          <FieldText
            label="Author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
          <FieldText
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </Flex>
        <FlexColumn>
          <FormControl required>
            <InputLabel id="demo-simple-select-label">Platform</InputLabel>
            <MuiSelect
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
            </MuiSelect>
          </FormControl>
          <button type="submit">Submit</button>
        </FlexColumn>
      </form>
    </Container>
  );
};