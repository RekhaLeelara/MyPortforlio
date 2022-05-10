import React from 'react'
import portfolio from '../../../src/portfolio.webp'


function Nav({ currentPage, handlePageChange }) {

    return (
        <header className="flex-row px-1">
            {/* <img src={portfolio} className = "portfolioimg" alt="portfolio" /> */}
            <nav>
                <ul className="flex-row">
                        <div className="mx-2">
                        <a data-testid="about" href="#About"
                            onClick={() => handlePageChange('About')}

                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </div>
                    <div className="mx-2">
                        <a data-testid="portfolio" href="#Contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </div>
                    <div className="mx-2">
                        <a data-testid="portfolio" href="#Portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </div>
                    <div className="mx-2">
                        <a data-testid="resume" href="#Resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                        </div>
                </ul>
            </nav>
        </header>
        
    )
}


export default Nav;