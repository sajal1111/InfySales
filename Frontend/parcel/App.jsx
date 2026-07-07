import React from "react";
import ReactDOM from "react-dom/client";
import AboutMe from "./src/AboutMe";

           /* let hone=React.createElement("h1",null,"Welcome Again");

           let h1AgainObj= <h1>Bale Bale Baki Sab The Thale</h1> //JSX

           
           console.log(hone);
           console.log(h1AgainObj);
           */
          //Component- Ist Letter Capital
          function JSG()
          {
            return(
              <div>
                <hr />
                <h1>JSG Tag **</h1>
                <hr />
                <h2>Bale Bale</h2>
                </div>
            );
          }

          function JSG2()
          {
            return(
              <>
                <hr />
                <h1>JSG Tag JSG2</h1>
                <hr />
                <h2>Bale Bale</h2>
                </>
            );
          }

          function JSG3()
          {
            return(
              <React.Fragment>
                <hr />
                <h1>JSG Tag JSG3</h1>
                <hr />
                <h2>Bale Bale</h2>
                </React.Fragment>
            );
          }

          //let ar=()=> 2
          

          let JSG4=()=>(<React.Fragment>
                <hr />
                <h1>JSG Tag JSG4 New</h1>
                <hr />
                <h2>Bale Bale</h2>
                </React.Fragment>
                )

            let root=ReactDOM.createRoot(document.getElementById("root"));
            root.render(<AboutMe></AboutMe>);

//ReactDOM.render(prntDiv,document.getElementById("root"));//send it on view
