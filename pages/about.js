import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
export default function About() {
    return (
      <Layout location = 'about'>

        <div id = 'about'>
          <h1>About</h1>
          <p>Web Application Developer specialising in React.</p>

          <p>Currently based in Cambridge, happy to relocate.</p>

          <p>Can provide excellent references upon request.</p>
        </div>
        <style jsx>
          {
            `
              #about {
                width : 80%;
                height : 80%;

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