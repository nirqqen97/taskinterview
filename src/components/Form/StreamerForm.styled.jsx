import styled from '@emotion/styled';
import { Select, TextField } from '@mui/material';


export const FieldText = styled(TextField)`
    margin-bottom: 20px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
`

export const MuiSelect = styled(Select)`
    width: 300px;
`