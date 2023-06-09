import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import React from "react";
import SearchBar from "./SearchBar";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const Navbar = () => {
    const {mode, setMode} = useContext(SwitchModeContext);
    return (
        <Stack direction="row"
         alignItems="center"
          p={2} sx={{position: 'sticky', 
          background: mode === 'dark' ? '#000' : '#fff', 
          top: 0, 
          justifyContent: 'space-between'}}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center',  }}> 
                <img src={logo} alt="logo" height={45}/>
            </Link>
            <SearchBar />
            <IconButton onClick={() => {setMode(prevState => prevState === 'dark' ? 'light' : 'dark')}}>
                {mode === 'dark' ? <Brightness7Icon sx={{color: 'white'}}/> : <Brightness4Icon  sx={{color: 'black'}}/>}
            </IconButton>
            
        
        </Stack>
        
    )
}


    

    
export default Navbar;