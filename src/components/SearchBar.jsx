import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper,  IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const {mode} = useContext(SwitchModeContext);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
            
        }

    }
    return (
        <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: ' 1px solid #e3e3e3',
            pl: '2',
            boxShadow: 'none',
            mx: 'auto',
            // mr: { sm: 5 }
        
        }}
        >
            <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => { setSearchTerm(e.target.value)}}
            value={searchTerm}
            />
            <IconButton type="submit" sx={{ p: '10px', color: mode === 'dark' ? 'red' : 'black' }}>
                <Search />
            </IconButton>
    
        </Paper>
    )
   

}

export default SearchBar;