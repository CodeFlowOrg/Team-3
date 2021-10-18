import React,{useState} from 'react';
import chicken from "../../../Assets/Chicken.jpg"
import "./individual-resturant.css"
import { Grid , Rating , Paper} from '@mui/material';

const IndividualResturant = ()=>{
    const [isAddClicked, setisAddClicked] = useState(false)
    const [isBestSeller, setisBestSeller] = useState(false)

    const menu = [
        {
            "bestSeller":true,
            "name":"Biriyani",
            "rating":"4.4",
            "img":chicken
        },
        {
            "bestSeller":true,
            "name":"Mutton Biriyani",
            "rating":"4.4",
            "img":chicken
        },
        {
            "bestSeller":false,
            "name":"Tandori chicken",
            "rating":"4.4",
            "img":chicken
        },
        {
            "bestSeller":true,
            "name":"Pepper Chicken",
            "rating":"4.4",
            "img":chicken
        },

    ]

    return(
        <>
            <div className="resturant-info">
                {/* resturnat info */}
                <div className="general-details">
                    {/* mess details */}
                    <div>
                        <img src={chicken}  alt="item" className="img" width="230px" height="250px" />
                    </div>
                    <div className="name-add-time">
                        <h1 style={{fontSize:"40px",padding:"13px"}}>BK MESS</h1>
                        <h5 style={{padding:"13px"}}>South Indian | Ram Nagar</h5>
                        <div className="time-and-rating">
                        <Rating
                               value={4}
                               readOnly
                               className="rating"
                        />
                        
                            <p className="time"><i className="far fa-clock" aria-hidden="true"></i> 30mins</p>
                            <p>	&#8377; 200 <i style={{fontWeight:"500"}}>for two</i> </p>
                        </div>
                    </div>
                </div>
                <div >
                    <fieldset className="offer-code"> 
                        <legend style={{textTransform:"lowercase",padding:"0px 10px"}}> OFFER </legend>
                         10%OFF ! USE SNAPIT    
                    </fieldset>
                </div>
            </div>
            <h1 style={{"margin": "20px","padding":"10px"}}>Recommended</h1>
            <div className="menu">
               <Grid container>
                   {
                        menu.map((item)=>{
                            return(
                                <Grid item xs={9} sm={9} md={6} marginBottom={4}>  
                                <Paper elevation={3} className="item">
                                    <div className="text-and-rating">
                                <p style={{padding:"12px",color:"orange"}}><i class="fas fa-fire" style={{paddingRight:"10px"}}></i>Best seller</p>
                                <h4 style={{padding:"10px"}} >Tandoori chicken</h4>
                                <div>
                                    <h4 style={{padding:"10px"}}> <i class="fas fa-star" style={{color:"orange"}}></i> 4.4</h4>
                                </div>
                           </div>
                           <div className="image-and-add">
                               <img
                                 src={chicken}
                                 alt="chicken"
                                 className="image"
                                 />
                                 <button className="btn" onClick={()=>(setisAddClicked(!isAddClicked ))}>
                                   {
                                       isAddClicked ?
                                       "ADD+" :"Remove"
                                   }
                                 </button>
                           </div>
                       </Paper>
                    </Grid>
                            )
                        })
                       }
                       
                       

               </Grid>
            </div>
        </>
    )
}

export {IndividualResturant}