import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { useDispatch,useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = [
  "Technology",
  "Science",
  "Coding",
  "Nature",
  "Gaming"
];

function getStyles(name, genreName, theme) {
  return {
    fontWeight:
      genreName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  // const dispatch=useDispatch();
  // const genres = useSelector((state)=>state.counter.genres)

  const theme = useTheme();
  // const [genreName, setGenreName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setGenre(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,

    );
   
   
  };

  return (
    <div>
      <FormControl sx={{width: 280 }}>
        <InputLabel id="demo-multiple-chip-label">Intrested Genre</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          defaultValue={props.genre}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Intrested Genre" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem
              key={genre}
              value={genre}
              style={getStyles(genre, props.genre, theme)}
            >
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}