import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectIncome() {
  const [category, setCategory] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 409.5 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label-income">Select a category</InputLabel>
        <Select
          labelId="select-label-income"
          id="select-income"
          value={category}
          label="Category-income"
          onChange={handleChange}
        >
          <MenuItem value="Regular income">Regular income</MenuItem>
          <MenuItem value="Irregular income">Irregular income</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
