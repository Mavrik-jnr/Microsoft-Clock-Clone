import React from "react";
import PropTypes from "prop-types";
import {
  Link as RouterLink,
  //   Route,
  //   Routes,
  //   MemoryRouter,
  //   useLocation,
} from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItemButton
        component={Link}
        to={to}
        sx={{
          minHeight: 48,
          justifyContent: "space-between",
          gap: "15px",
          //   px: 2.5,
        }}
      >
        {icon ? (
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: "#191919",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} color="#1a1a1a" />
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
