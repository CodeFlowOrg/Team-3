import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'
import dish from "../dish.jfif"
import { CardActions , Box, Grid } from "@mui/material";
import {withStyles} from '@mui/styles'
import { Filters } from "./Filters";


const styles = theme => ({
    cardMedia:{
        height:"300px",
        width:"300px"
    }
})

const Resturant = withStyles(styles)(({classes})=>{

    const cardValues = [
        {
            img:dish,
            title:"AGNA BIRIYANI",
            time:"45 mins",
            price:"200",
            rating:"4"
        },
        {
            img:dish,
            title:"AGNA BIRIYANI",
            time:"45 mins",
            price:"200",
            rating:"4"
        },
        {
            img:dish,
            title:"AGNA BIRIYANI",
            time:"45 mins",
            price:"200",
            rating:"4"
        }
    ]

    return(
        <div >
            <Filters />
            <Grid container    display="flex" alignItems="center" justifyContent="center" >
            {
                cardValues.map( (card) => {
                    return(
                    <Grid item xs={12} sm={6} md={3}>
                       <Card sx={{ maxWidth: 350 }}>
                       <CardMedia
                           component="img"
                           className={classes.cardMedia}
                           image={card.img}
                           alt="Paella dish"
                       />
                       <CardContent>
                           <Box sx={{display:"inline-flex"}}>
                           <Typography variant="h6" color="green"  >
                                   {card.title}
                           </Typography>
                               <Rating
                               value={card.rating}
                               readOnly
                               sx={{marginLeft:"100px"}}
                               />
                           </Box>
                           <CardActions  sx={{color:'black',fontWeight:"700",justifyContent:"space-around"}}>
                           <p><i className="far fa-clock" aria-hidden="true"></i>  {card.time}</p>
                           <p>	&#8377; {card.price} <i style={{fontWeight:"500"}}>for two</i> </p>
                           </CardActions>
                       </CardContent>
                       </Card>
                   </Grid>
                    )
                   })
            }
           </Grid> 
        </div>
    )
})

export {Resturant}