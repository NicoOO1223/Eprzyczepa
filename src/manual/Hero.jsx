import React from 'react'
import './Front.css'

function Front() {
  return (
    <section className='section'
    style={{ backgroundImage: "url(process.env.PUBLIC_URL + './Img/2b.jpg')" }}> 
    <h1>Zarezerwuj swoja przyczepe!</h1>
        <div className="cta">
          <a href="#">Zobacz nasze przyczepy →</a>
        </div>
    </section>
  )
}

export default Front