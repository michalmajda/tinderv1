import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import IconButton from '@mui/material/IconButton';
import "./BottomButtons.css";

function BottomButtons(){
    return(
        <div className="bottom-buttons">
            
            <IconButton aria-label="reload" size="large">           
                <ReplaySharpIcon fontSize="large" className='reload-icon'/>
 
            </IconButton>
            <IconButton aria-label="dislike" size="large">
                <ClearRoundedIcon fontSize="large" className='dislike-icon' />
            </IconButton>
            <IconButton aria-label="superlike" size="large">
                <GradeRoundedIcon fontSize="large" className='superlike-icon' />
            </IconButton>
            <IconButton aria-label="like" size="large">
                <FavoriteSharpIcon fontSize="large" className='like-icon' />
            </IconButton>
            <IconButton aria-label="boost" size="large">
                <ElectricBoltRoundedIcon fontSize="large" className='boost-icon' />
            </IconButton>
        </div>
    );
}

export default BottomButtons;