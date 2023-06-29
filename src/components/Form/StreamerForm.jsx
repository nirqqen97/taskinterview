import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Container,
  FieldText,
  Flex,
  MuiSelect,
  FlexColumn,
  SbmtButton,
} from "./StreamerForm.styled";
import { postStreamers } from "../../Api";

export const StreamerForm = ({ setStreamerList }) => {
  const [author, setAuthor] = useState("");
  const [platform, setPlatform] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "author":
        setAuthor(value);
        break;
      case "platform":
        setPlatform(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      author,
      platform,
      description,
      picture: "test",
    };

    const response = await postStreamers(user);

    if (response) {
      setDescription("");
      setAuthor("");
      setPlatform("");

      setStreamerList((prevList) => [...prevList, response]);
    }
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <Flex>
          <FieldText
            label="Author"
            name="author"
            value={author}
            onChange={handleChange}
            required
          />
          <FieldText
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
        </Flex>
        <FlexColumn>
          <FormControl required>
            <InputLabel id="demo-simple-select-label">Platform</InputLabel>
            <MuiSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="platform"
              value={platform}
              label="Platform"
              onChange={handleChange}
            >
              <MenuItem value="Twitch">Twitch</MenuItem>
              <MenuItem value="YouTube">YouTube</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="Kick">Kick</MenuItem>
              <MenuItem value="Rumble">Rumble</MenuItem>
            </MuiSelect>
          </FormControl>
          <SbmtButton type="submit">Submit</SbmtButton>
        </FlexColumn>
      </form>
    </Container>
  );
};

StreamerForm.propTypes = {
  setStreamerList: PropTypes.func,
};
