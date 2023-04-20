import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

export function MovieList({ movie }) {
  return (
    <Link to={`movie/${movie.id}`}>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="star">
              <StarRateIcon color="secondary" />
              <ListItemText primary={movie.rating} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" width={100} height={100}>
              <img src={movie.thumbnail} style={{ objectFit: "cover" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={movie.title} />
        </ListItem>
      </List>
    </Link>
  );
}
