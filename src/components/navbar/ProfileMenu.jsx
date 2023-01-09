import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
const settings = ['Profil', 'statistici', 'Deconectare'];

function ProfileMenu({ userData, onLoggedIn }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClickProfile = (setting) => {
    CloseUserMenu();
    navigate('/profile');
  };

  const handleClickDashboard = (setting) => {
    CloseUserMenu();
    navigate('/dashboard');
  };

  const handleClickDisconect = (setting) => {
    onLoggedIn(false, {});
    navigate('/login');
    CloseUserMenu();
  };

  const CloseUserMenu = () => {
    setAnchorElUser(null);
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userData.firstName} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={CloseUserMenu}
      >

        <MenuItem onClick={() => handleClickProfile()}>
          <Typography textAlign="center">Profil</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClickDashboard()}>
          <Typography textAlign="center">statistici</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClickDisconect()}>
          <Typography textAlign="center">Deconectare</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileMenu;