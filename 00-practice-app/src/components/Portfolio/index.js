import React from "react";
import javascript from '../../../src/javascript.webp'
import mongo from '../../../src/Mongo.png'
import MVC from '../../../src/MVC.jpeg'
import MySQL from '../../../src/mysql.jpeg'

export default class ImageComponent extends React.Component {
    0
    state = { isOpen: false };

    handleShowDialog1 = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    handleShowDialog2 = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    handleShowDialog3 = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    handleShowDialog4 = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <>
            <div>
       <img
                    className="portpic portimg"
                    src={javascript}
                    onClick={this.handleShowDialog1}
                    alt="noimage"
                />
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: 'absolute' }}
                        open
                        onClick={this.handleShowDialog1}
                    >
                        <img
                            className="image"
                            src={javascript}
                            onClick={this.handleShowDialog1}
                            alt="noimage"
                        />
                    </dialog>
                )}
            </div>
            <div>
       <img
                    className="portpic portimg"
                    src={mongo}
                    onClick={this.handleShowDialog2}
                    alt="noimage"
                />
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: 'absolute' }}
                        open
                        onClick={this.handleShowDialog2}
                    >
                        <img
                            className="image"
                            src={mongo}
                            onClick={this.handleShowDialog2}
                            alt="noimage"
                        />
                    </dialog>
                )}
            </div>
            <div>
       <img
                    className="portpic portimg"
                    src={MVC}
                    onClick={this.handleShowDialog3}
                    alt="noimage"
                />
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: 'absolute' }}
                        open
                        onClick={this.handleShowDialog3}
                    >
                        <img
                            className="image"
                            src={MVC}
                            onClick={this.handleShowDialog3}
                            alt="noimage"
                        />
                    </dialog>
                )}
            </div>
            <div>
       <img
                    className="portpic portimg"
                    src={MySQL}
                    onClick={this.handleShowDialog4}
                    alt="noimage"
                />
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: 'absolute' }}
                        open
                        onClick={this.handleShowDialog4}
                    >
                        <img
                            className="image"
                            src={MySQL}
                            onClick={this.handleShowDialog4}
                            alt="noimage"
                        />
                    </dialog>
                )}
            </div>
            </>
        );
    }
}




// import React from 'react'
// import javascript from '../../../src/javascript.webp'
// import mongo from '../../../src/Mongo.png'
// import MVC from '../../../src/MVC.jpeg'
// import MySQL from '../../../src/mysql.jpeg'

// function Portfolio(){

//     state = { isOpen: false };

//     handleShowDialog = () => {
//       this.setState({ isOpen: !this.state.isOpen });
//       console.log('cliked');
//     };

//     return(
//         <section>
//                   <div>
//         <img
//           className="portpic"
//           src={javascript}
//           onClick={this.handleShowDialog}
//           alt="no image"
//         />
//         {this.state.isOpen && (
//           <dialog
//             className="dialog"
//             style={{ position: 'absolute' }}
//             open
//             onClick={this.handleShowDialog}
//           >
//             <img
//               className="image"
//               src={javascript}
//               onClick={this.handleShowDialog}
//               alt="no image"
//             />
//           </dialog>
//         )}
//       </div>
//         {/* <div className="portpic"> 
//         <img className="portimg javascriptimg" src={javascript} alt="javascript" />
//         </div> */}
//         <div className="portpic"> 
//         <img className="portimg MVCimg" src={MVC} alt="MVC" />
//         </div>
//         <div className="portpic"> 
//         <img className="portimg Mongoimg" src={mongo} alt="Mongo" />
//         </div>
//         <div className="portpic"> 
//         <img className="portimg MySQLimg" src={MySQL} alt="MySQL" />
//         </div>
//         </section>
//     )

// }

// export default Portfolio