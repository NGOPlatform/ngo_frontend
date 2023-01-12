import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../wwwroot/assets/fox.png'
import ProfileMenu from './ProfileMenu';
import AuthenticationGroup from './AuthenticationGroup'
import { Colors } from '../../Globals'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Badge } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
const pages = [{ label: 'Acasa', path: '/' },
{ label: 'Harta', path: '/map' },
{ label: 'salvarile mele', path: '/saved' },
{ label: 'news', path: '/news' },
{ label: 'resources', path: '/resources' }];
const navBarStyle = {
  height: 'fit-content',
  backgroundColor: Colors.dark
};

function ResponsiveAppBar({ userData, onLoggedIn }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileRedirect = (url ) =>{
      navigate(url);
      handleCloseNavMenu();
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar  position="sticky" style={navBarStyle}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters={true} variant="dense" >
          <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Avatar alt="foxy" src={logo} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Foxy */}
          </Typography>
     
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label + '_long'} onClick={()=>{handleMobileRedirect(page.path)}} >
                  <Typography textAlign="center" >{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton sx={{ p: 0, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Avatar alt="foxy" src={logo} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Foxy */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.path} key={page.label + '_longanchor'} className={ page.path == window.location.pathname ? "activeAnchor" :""}>
                <Button
                  size="small"
                  key={page.label + '_longbtn'}
                  onClick={handleCloseNavMenu}
                  sx={{  color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>

            ))}
          </Box>
          { Object.keys(userData).length != 0 ? <ProfileMenu userData={userData} onLoggedIn={onLoggedIn} /> : <AuthenticationGroup />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;