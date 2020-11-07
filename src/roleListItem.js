import React from "react";
import {
  Avatar,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";

export default function RoleListItem(props) {
  const { classes, member } = props;

  const memberMeta = member.meta ? member.meta.currentTeam : {};
  const { jerseyNo, position } = memberMeta;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={} />
      </ListItemAvatar>
      <ListItemText
        disableTypography={true}
        primary={`${jerseyNo}. ${member.user.first_name} ${member.user.last_name}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {member.user.email}
            </Typography>
            <br />
            {member.team && (
              <>
                <Typography variant="body1" component="div">
                  {member.team.name}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {member.team.club.name}: {member.team.division.name}
                </Typography>
                <Typography variant="subtitle2" component="span">
                  {position}
                </Typography>
              </>
            )}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
