import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
export default function Contact() {
    return (
      <Layout location = 'contact'>

        <div id = 'contact'>
          <h1>Contact</h1>
          <div>samwilkinson.jobsearch@gmail.com</div>
        </div>
        <style jsx>
          {
            `
            #contact {
              width : 80%;
              height : 80%;

              overflow : scroll;
            }

            h1 {
              font-size : 3em;
              color : var(--secondary);
              margin : none;
            }

            #contact div {
              display : inline-block;
              border-style : solid;
              border-color : var(--light);
              border-width : 1px;
              padding : .5em;
            }

           

            `
          }
        </style>  
      </Layout>
    );
  }