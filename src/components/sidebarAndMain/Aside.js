import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import logo from "assets/images/canary-logo-fx.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineWallet,
  AiOutlineTransaction,
  AiOutlineBank,
} from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const useStyles = makeStyles({
  root: {
    marginLeft: "30px",
    "& h6": {
      color: "#91919C",
      fontSize: "12px",
      fontWeight: 500,
    },
  },
  icon: {
    color: "#91919C",
    fontSize: "16px",
  },
  link: {
    margin: "0px 20px 0 0",
  },
  img: {
    height: "46px",
    marginLeft: "24px",
  },
});

const Aside = ({ collapsed, toggled, handleToggleSidebar, routes }) => {
  const theme = useTheme();
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <a href="/" className={classes.homeLogo}>
            <img src={logo} alt="" className={classes.img} />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent className={classes.root}>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaHome className={classes.icon} />}
            className={classes.link}
          >
            <Link to="/dashboard/home">
              <Typography variant="h6" gutterBottom color="primary">
                Home
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem icon={<AiOutlineWallet className={classes.icon} />}>
            <Link to="/dashboard/wallet">
              <Typography variant="h6" gutterBottom color="primary">
                wallet
              </Typography>
            </Link>
          </MenuItem>
          <Menu iconShape="circle">
            <SubMenu
              title={
                <Typography variant="h6" gutterBottom color="primary">
                  Transactions
                </Typography>
              }
              icon={<AiOutlineTransaction className={classes.icon} />}
            >
              <MenuItem>
                <Link to="/dashboard/newtransaction">
                  <Typography variant="h6" gutterBottom color="primary">
                    New Transactions
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/dashboard/alltransaction">
                  <Typography variant="h6" gutterBottom color="primary">
                    All Transactions
                  </Typography>
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <MenuItem icon={<IoPeopleOutline className={classes.icon} />}>
            <Link to="/dashboard/beneficiaries">
              <Typography variant="h6" gutterBottom color="primary">
                Beneficiaries
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem icon={<AiOutlineBank className={classes.icon} />}>
            <Link to="/dashboard/bank_account">
              <Typography variant="h6" gutterBottom color="primary">
                Bank Accounts
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem icon={<BiSupport className={classes.icon} />}>
            <Link to="/dashboard/support">
              <Typography variant="h6" gutterBottom color="primary">
                Support
              </Typography>
            </Link>
          </MenuItem>
          {isMobile ? (
            <MenuItem icon={<BiSupport className={classes.icon} />}>
              <Link to="/dashboard/profile">
                <Typography variant="h6" gutterBottom color="primary">
                  Profile
                </Typography>
              </Link>
            </MenuItem>
          ) : null}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
