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
import logo from '../fox.png';
import ProfileMenu from './ProfileMenu';
import AuthenticationGroup from './AuthenticationGroup'
import { Colors } from '../Globals'
import { Link } from 'react-router-dom';

const pages = [{ label: 'Harta', path: '/' },
{ label: 'salvari', path: '/saved' },
{ label: 'subcriptii', path: '/subs' },
{ label: 'inbox', path: '/inbox' }];
const navBarStyle = {
  height: 'fit-content',
  backgroundColor: Colors.dark
};

function ResponsiveAppBar({ auth, onLoggedIn }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={navBarStyle}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
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
                <MenuItem key={page.label + '_long'} onClick={handleCloseNavMenu}>
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
              <Link to={page.path} key={page.label + '_longanchor'}>
                <Button
                  key={page.label + '_longbtn'}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>

            ))}
          </Box>
          {auth.authenticated ? <ProfileMenu auth={auth} onLoggedIn={onLoggedIn} /> : <AuthenticationGroup />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;