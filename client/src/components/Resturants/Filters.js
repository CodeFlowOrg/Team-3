import React from 'react'
import "./Filters.css"


const Filters = ()=>{
    return(
        <>
            <div className="bar">
                <div className="result">100 result</div>
                <ul className="list" >
                <a href="." className="fas fa-sliders-h" style={{'color':'orange'}}>
                {/* <li className="list-items"><i className="fas fa-sliders-h" style={{padding:"2px"}}></i>Filter</li> */}
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                    <li className="list-items">Relevance</li>
                    <li className="list-items">Rating</li>
                    <li className="list-items">Delivery time</li>
                    <li className="list-items">Cost:low to high</li>
                    <li className="list-items">Cost:high to low</li>
                </ul>
                </div>
          </>
    )
}

export {Filters}