import { Box } from "@mui/material";
import Memberstab from "./Memberstab";
import CloseIcon from '@mui/icons-material/Close';

const Members = (props) => {

    const closeHandler=()=>{
       props.setmemTab((state)=> !state);

    }
  return (
    <div >
      <Box
        sx={{
          height: "540px",
          backgroundColor: "white",
          width: "320px",
          marginTop: "em",
          marginLeft: "1em",
          
        }}
      >
          <div>
              <button className="btn shadow-none" style={{marginLeft:"17em"}} onClick={closeHandler}>
                <CloseIcon/>
              </button>
          </div>
        <div style={{overflowY:"scroll"}}>
          <Memberstab/>
        </div>
      </Box>
    </div>
  );
};

export default Members;
