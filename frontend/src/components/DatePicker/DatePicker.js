import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // margin: theme.spacing(3, 0, 2),
    // width: 220,
    // color: 'blue',

    width: 400,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
}));

 const DatePicker =() => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        // inputProps={{min: 0, style: { textAlign: 'center' }}}
        // InputProps={classes.inputText} 
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}


export default DatePicker;