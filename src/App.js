import './App.css';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details'
import useStyles from './styles'
import Main from './components/Main/Main';
function App() {
  const classes=useStyles();
  return (
    <div >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid  item xs={12} sm={4} >
          <Main/>
        </Grid>
        
        <Grid item xs={12} sm={3} >
          <Details title="Income" />
        </Grid>
        
        <Grid item xs={12} sm={3} >
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
