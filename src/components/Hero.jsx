import React, {useState} from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='HeroWrapper'>
        <div className='HeroContent'>
            <div className='HeroContentLeft'>
                <div className='HeroContentLeftBox'>
                    <h1>
                        <span class="roboto-slab-unique" className='HerTitleReg'>Be Their Voice, </span>
                        <span class="roboto-slab-unique" className='HeroTitleHighlight'>Save a Life Today</span>    
                    </h1>
                    <p>Join our mission to give every cat a loving forever home</p>

                    <div className='HeroContentLeftBottom'>
                        <div className='HeroContentButton'>
                            <a href="#" class="nunito-sans-unique">Learn More</a>
                        </div>
                        <p>Not ready to adopt? There are still plenty of ways to help. Because every cat deserves love — and you can be the reason why.</p>
                    </div>
                </div>


            </div>
            <div className='HeroContentRight'>
                <img src="public/HeroContentCat.jpg" alt="" />
            </div>
        </div>
    </div> 
  )
}

export default Hero