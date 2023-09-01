import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

import avatar from "./logo.png";
// project imports
<<<<<<< HEAD
import Logo from 'ui-component/Logo';
=======
import config from 'config';
// import Logo from 'ui-component/Logo';
>>>>>>> c7071611c34408381ddfdf10741f4ffac1545531
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
<<<<<<< HEAD
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} >
      <Logo />
=======
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      {/* <Logo /> */}
      <img src = {avatar} alt = "loading..." />
>>>>>>> c7071611c34408381ddfdf10741f4ffac1545531
    </ButtonBase>
  );
};

export default LogoSection;
