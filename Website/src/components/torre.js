import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Torre extends Component{
  render(){
    return(
      <div style={{  width:"100%"}}>
      <Grid container spacing={3} style={{height:"100%", paddingTop:"10%"}}>
        <Grid item xs={6} style={{height:"100%", padding:"5%"}}>
          <TextField id="outlined-basic" label="Write job description" variant="outlined" fullWidth="true" style={{height:"50%"}}/>
        </Grid>
        <Grid item xs={6} style={{height:"100%", padding:"5%"}}>

          <TextField id="outlined-basic" label="Predicted skills" variant="outlined" fullWidth="true" style={{height:"50%"}}/>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{height:"100%", marginTop:"5%"}}>
        <Grid item xs={12} >
          <Button variant="contained" color="primary" style={{margin:"0 auto", display:"block"}}>
            Compute skills
          </Button>
        </Grid>
      </Grid>
      </div>
    )
  }
}
export default Torre;
