import React,{useState} from 'react'
import "./Filters.css"


const Filters = ()=>{
    const [activeClass, setActiveClass] = useState(false);

    const handleClick = ()=>{
        setActiveClass(!activeClass)
        console.log(activeClass)
    }


    return(
        <>
            <div className="bar">
                <div className="result">100 result</div>
                <a href="#" className="fas fa-sliders-h filter-button" onClick={handleClick}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div 
                className={` list ${activeClass ? 'active' :''}`}
                >
                <ul className="unordered-list-links">
                    <li className="list-items">Relevance</li>
                    <li className="list-items">Rating</li>
                    <li className="list-items">Delivery time</li>
                    <li className="list-items">Cost:low to high</li>
                    <li className="list-items">Cost:high to low</li>
                </ul>
                </div>
                </div>
          </>
    )
}

export {Filters}