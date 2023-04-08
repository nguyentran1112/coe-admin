import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import {useSelector} from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
const UpdateInfo = ({changePopup, maintenanceId}) => {
  const selector = useSelector((state) => state)
  const closePopup = (bool) => {
    changePopup(bool)
  }
  const handleChange = (event) => {
   
    setSelectEmployee(event.target.value);
  }
  const [selectEmployee, setSelectEmployee] = React.useState('')
  
  
  const items = selector?.employee?.listEmployee

  
  return(
    <React.Fragment>
  <Box
  sx={{
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '320px',
    zIndex: 1,
    typography: "body1",
    backgroundColor: "white",
    boxShadow: "1px 2px 9px #9E9E9E",
    borderRadius: 4,
    margin: "4em",
    padding: "1em",
  }}
>
  <CloseIcon onClick={() => closePopup(false)} style={{display: 'flex'}} />
  <div style={{fontSize: '18px', margin: '8px'}}>{`Cập nhật đơn bảo trì ${maintenanceId}`}</div>
  <FormControl fullWidth sx={{mt: 2}} >
        <InputLabel id="demo-simple-select-label">Nhân viên</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectEmployee}
          label="Nhân viên"
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem value={item._id}>{item.username}</MenuItem>

          ))}
        </Select>
      </FormControl>
      <Button
            type="submit"
            sx={{ mt: 3,boxShadow: "1px 2px 9px #1976D2" }}
            variant="contained"
          >
            Cập nhật
          </Button>
  </Box>
  </React.Fragment>)
};

export default UpdateInfo;