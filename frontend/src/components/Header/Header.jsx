import React from 'react'
import './Header.css'

const Header = () => {
  // Function to scroll to the menu section when button is clicked
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })

      // Highlight the menu in the navbar (optional)
      const menuLinks = document.querySelectorAll('.navbar-menu a')
      menuLinks.forEach(link => {
        if (link.getAttribute('href') === '#explore-menu') {
          link.click() // This will trigger the onClick handler in the navbar
        }
      })
    }
  }

  return (
    <div className='header'>
      <div className="header-contents">
        <div className="header-title-container">
          <h2 className="header-title">
            <span className="header-title-highlight">Crave</span> it.
            <span className="header-title-highlight">Tap</span> it.
            <span className="header-title-highlight">Savor</span> it.
          </h2>
          <div className="header-emoji float">🍕</div>
        </div>
        <p>Indulge in a world of flavors with our diverse menu, featuring a delectable array of dishes crafted to satisfy every craving. From sizzling street food to gourmet delicacies, we bring the best of taste and convenience right to your doorstep!</p>
        <button className="pulse" onClick={scrollToMenu}>Explore Delicious Menu</button>
      </div>
    </div>
  )
}

export default Header
