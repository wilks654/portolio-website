import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
export default function Contact() {
    return (
      <Layout location = 'contact'>

        <div id = 'contact'>
          <h1>Contact</h1>
        </div>
        <style jsx>
          {
            `
            #contact {
              width : 80%;
              height : 80%;
              color : black;
              overflow : scroll;
            }

            h1 {
              font-size : 3em;
              color : var(--secondary);
              margin : none;
            }
            `
          }
        </style>  
      </Layout>
    );
  }