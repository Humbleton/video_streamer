import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
// const selectedCategory = 'New';
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    const { mode } = useContext(SwitchModeContext);
    return (
        <Stack 
        direction='row'
        sx={{
            overflowY: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}
        }}
        >
            {categories.map(category => (
                <button key={category.name} 
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && '#e0e0e0',
                    color:  mode === 'dark' ? 'white' : 'black'
                }}
                onClick={() => setSelectedCategory(category.name)}
                >
                    <span style={{ color: category.name === selectedCategory 
                        ? '#000' : mode === 'dark' ? 'red' : 'black'
                        , marginRight: '15px' }}>{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory ? '1' : '0.782', color: category.name === selectedCategory && '#000'}}>{category.name}</span>
                </button>
            ))}

        </Stack>

    )
}
export default SideBar;