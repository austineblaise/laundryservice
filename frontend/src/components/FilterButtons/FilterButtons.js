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

 const FilterButtons = ({filterItem, products, all, items, allCategoris, buttons, handlePokemon}) => {
  const classes = useStyles();

  
  
  // const [list, setList] = useState(allCategoris);


  return (

    <>
    <div position="fixed" mb={5} className={classes.root}>

      {/* {
        
        buttons.map((category,i)=>{
          return  <Button variant="outlined" key={i}
          keycolor="primary" onClick={() =>filterItem(category)}>
               {category}
        </Button>
        })
      } */}


{/* {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handlePokemon}>
              {type.name}
            </button>
          </>
        ))} */}



      <Button variant="outlined" onClick={handlePokemon} >All</Button>
      <Button variant="outlined" color="primary" >
      gentlemen
      </Button>
      
      <Button variant="outlined">
      ladies
      </Button>
      <Button variant="outlined" color="primary">
      native
      </Button>

      <Button variant="outlined" color="primary">
      others
      </Button>
    </div>

    </>
  );
}

export default FilterButtons;