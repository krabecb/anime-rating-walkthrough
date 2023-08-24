import './AnimeList.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function AnimeList(props) {
    // console.log(props)

    return (
        <div className="AnimeList">
            <h3>{props.anime.name}</h3>
            <img src={props.anime.imgSrc} />
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            />
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={props.anime.rating}
                    onChange={(e) => {props.handleRating(e, props.anime.name)}}
                />
        </div>
    )
}