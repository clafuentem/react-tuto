import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles: any = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  }
});

export default useStyles;
