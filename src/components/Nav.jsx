import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='NavWrapper'>
      <div className="NavContentWrapper">
          <div className='Logo'><a href='/'><i className="fa-solid fa-shield-cat"></i></a><span>Save The Cats</span></div>
          <div className='Links'>
            <a className='why' ><span onClick={() => window.location.href='/eeee'}>Why?</span></a> {/*Why? (why i created this site)(the good that i hope to do)*/}
            <a className='problem' ><span onClick={() => window.location.href='/problem'}>The Problem</span></a> {/*The problem? (take the counter idea (increasing counter on how many cats put in shelters, how many are merked, how many strays found*/}
            <a className='adoption' ><span onClick={() => window.location.href='/adoption'}>Adoption</span></a> {/*Adoption (the benefits of adoption as well as links to adoption sites and information pages.)*/}
            <a className='stories' ><span onClick={() => window.location.href='/stories'}>Stories</span></a> {/*Stories (stories of cats who have been adopted and rescued. a slideshow of content including the cats story and an image (slides to the next cat / story))*/}
            <div className='LinkButton'>
              <button onClick={() => window.location.href='/eeee'}><i className="fa-solid fa-paw"></i>Help The Cause</button> {/*a button redirecting to a page with information on charities and orgs they can support to help the cause*/}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav