import styled from "@emotion/styled";
import { Select, TextField } from "@mui/material";

export const FieldText = styled(TextField)`
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const MuiSelect = styled(Select)`
  width: 300px;
`;

export const SbmtButton = styled.button`
  padding: 10px 56px;
  border-style: none;
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  &:hover,
  :focus {
    background-color: #5cd3a8;
  }
`;
