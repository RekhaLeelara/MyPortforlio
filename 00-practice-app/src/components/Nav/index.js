import React from 'react'
// import developer from '../../../src/developer.png'


function Nav({ currentPage, handlePageChange }) {

    return (
        // <header className="flex-row px-1">
        //     <h2>
        //         <a data-testid="link" href="/">
        //             {/* <span role="img" aria-label="profilepic"> </span> */}
        //             {/* <img src={developer} alt="developer" /> */}
        //         </a>
        //     </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#About"
                            onClick={() => handlePageChange('About')}

                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#Contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="mx-1">
                        <a data-testid="portfolio" href="#Portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="resume" href="#Resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        // </header>
    )
}


export default Nav;