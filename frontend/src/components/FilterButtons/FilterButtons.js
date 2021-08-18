import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 const FilterButtons = ({filterItem, products, all, items, allCategoris, buttons}) => {
  const classes = useStyles();

  
  
  // const [list, setList] = useState(allCategoris);


  return (
    <div position="fixed" mb={5} className={classes.root}>

      {
        buttons.map((category,i)=>{
          return  <Button variant="outlined" key={i}
          keycolor="primary" onClick={() =>filterItem(category)}>
               {category}
        </Button>
        })
      }
      {/* <Button variant="outlined" onClick={() => filterItem(allCategoris) }>All</Button>
      <Button variant="outlined" color="primary" >
        GENTLEMEN
      </Button>
      
      <Button variant="outlined"  onClick={() => filterItem('ladies')} >
      Ladies
      </Button>
      <Button variant="outlined" color="primary"   onClick={() => filterItem('native')}>
        NATIVE
      </Button>

      <Button variant="outlined" color="primary"  onClick={() => filterItem('others')}>
        OTHER ITEMS
      </Button> */}
    </div>
  );
}

export default FilterButtons;