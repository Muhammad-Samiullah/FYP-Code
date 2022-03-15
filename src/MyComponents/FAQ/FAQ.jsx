import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div>
            <div className='paralax d-flex justify-content-center'></div>
            <div className='text-light d-flex justify-content-center align-items-center m-3 para'>
                <div>
                    <div className='bg-dark title d-flex justify-content-center align-items-center'>Career Guider</div><br />
                    <h1 className='text-white text'>Most Questions Asked by Users Related to Career Guidance</h1>
                </div>
            </div>
            <div className='paralax-div bg-dark'>
                <div className='d-flex justify-content-center align-items-center'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                QUESTION 1 <br /> text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FAQ
