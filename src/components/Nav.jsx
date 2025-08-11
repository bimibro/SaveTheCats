import React, {useState} from 'react'
import './Nav.css'

const Nav = () => {
//javascript for functionality (eg dropdowns)


  return (
    <div className='NavWrapper'>
      <div className="NavContentWrapper">
          <div className='Logo'><a href='/'><i className="fa-solid fa-shield-cat"></i></a><span>Save The Cats</span></div>
          <div className='Links'>
            <a className='why' ><span onClick={() => window.location.href='/eeee'}>Why?</span></a> {/*Why? (why i created this site)(the good that i hope to do)*/}
            <a className='problem' ><span onClick={() => window.location.href='/problem'}>The Problem</span></a> {/*The problem? (take the counter idea (increasing counter on how many cats put in shelters, how many are merked, how many strays found*/}
            <a className='adoption' ><span onClick={() => window.location.href='/adoption'}>Adoption</span></a> {/*Adoption (the benefits of adoption as well as links to adoption sites and information pages.)*/}
            
            <div className='StoriesWrapper'>
              <a className='stories' ><span>More <i class="fa-solid fa-chevron-down"></i></span></a> {/*Stories (stories of cats who have been adopted and rescued. a slideshow of content including the cats story and an image (slides to the next cat / story))*/}
              
              <div className='StoriesDropDownWrapper'>
                <div className='DropDownContent'>
                    <div className='DropDownTitle'>
                      <h3>More From Save The Cats</h3>
                    </div>

                    {/*drop down content box 1 */}
                    <div className='DropDownContentBoxes'>
                      <div className='DropDownContentBoxesicon'>
                        <img src="./public/CatIcon.png" alt="https://www.flaticon.com/free-animated-icons/animals"/>
                      </div>
                      <div className='DropDownContentBoxesText'>
                        <h4>Featured Rescue Cats</h4>
                        <p>Discover the adoption and rescue stories of the cats featured on Save The Cats.</p>
                      </div>
                    </div>
                    {/*drop down content box 2 */}
                    {/*the content plan with this one is to just have it link to a seperate page that displays the same exact visualisation charts that will be added to the main page later on*/}
                    <div className='DropDownContentBoxes'>
                      <div className='DropDownContentBoxesicon'>
                        <img src="./public/CatIcon2.png" alt="https://www.flaticon.com/free-stickers/statistics"/>
                      </div>
                      <div className='DropDownContentBoxesText'>
                        <h4>Statistics & Visualisations</h4>
                        <p>Real-time graphics that illustrate cat adoption figures and related trends.</p>
                      </div>
                    </div>
                    {/*drop down content box 3*/}
                    {/*Charties. similar idea to box 2. the charity section will already be on the page. but this will link to another page with the exact same charity content*/}
                    <div className='DropDownContentBoxes'>
                      <div className='DropDownContentBoxesicon'>
                        <img src="./public/CatIcon3.png" alt="https://www.flaticon.com/free-stickers/charity"/>
                      </div>
                      <div className='DropDownContentBoxesText'>
                        <h4>Charities & Organisations</h4>
                        <p>Discover the charities and organisations that assist cat rescue and adoption efforts.</p>
                      </div>
                    </div>
                    {/*drop down content box 4*/}
                    {/*Personal Git Link*/}
                    <div className='DropDownContentBoxes' onClick={() => window.open('https://github.com/bimibro')}>
                      <div className='DropDownContentBoxesicon'>
                        <img src="./public/CatIcon4.png" alt="https://www.flaticon.com/free-icons/github"/>
                      </div>
                      <div className='DropDownContentBoxesText'>
                        <h4>Explore My GitHub Portfolio</h4>
                        <p>Discover a collection of my projects and ongoing work on GitHub.</p>
                      </div>
                    </div>

                </div>
              </div>
            </div>

            <div className='LinkButton'>
              <button onClick={() => window.location.href='/eeee'}><i className="fa-solid fa-paw"></i>Help The Cause</button> {/*a button redirecting to a page with information on charities and orgs they can support to help the cause*/}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav