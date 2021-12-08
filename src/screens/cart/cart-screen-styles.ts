import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    marginTop: '6rem',
    marginBottom: '3rem',
    fontSize: '20px'
  },
  productsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

export default useStyles;
