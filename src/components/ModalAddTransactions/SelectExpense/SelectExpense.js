import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectExpense() {
  const [category, setCategory] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 409.5 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label-expense">Select a category</InputLabel>
        <Select
          labelId="select-label-expense"
          id="select-expense"
          value={category}
          label="Category-expense"
          onChange={handleChange}
        >
          <MenuItem value="Basic">Basic</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Car">Car</MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Children">Children</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
