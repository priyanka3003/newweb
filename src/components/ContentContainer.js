import React from 'react'
import Contents from "./Contents";
import image1 from "../image/static/actor1.jpg"
import image2 from "../image/static/actor2.jpg"
import image3 from "../image/static/actor3.jpg"
import image4 from "../image/static/actor4.jpg"
import image5 from "../image/static/actor5.jpg"
import image6 from "../image/static/actor6.jpg"
import image7 from "../image/static/actor7.jpg"
import image8 from "../image/static/actor8.jpg"
import image9 from "../image/static/actor9.jpg"
import image10 from "../image/static/kids.jpg"



const ContentContainer = () => {
    return (
        <>
        <div className="content-container">
            <div className="col-8 col-6">
                <h3 className="content-head">
                    Top Star Faces
                </h3>
                
            </div >
            
                <Contents image={image1} />
                <Contents image={image2} />
                <Contents image={image3} />
                <Contents image={image4} />
                <Contents image={image5} />    
        </div>
        <hr />
        <div className="content-container">
        <div className="col-8 col-6">
            <h3 className="content1-head">
                Showing on Cinema
            </h3>
            
        </div >
        
            <Contents image={image6} />
            <Contents image={image7} />
            <Contents image={image8} />
            <Contents image={image9} />
            <Contents image={image10} />   
    </div>
    </>
    )
}

export default ContentContainer
