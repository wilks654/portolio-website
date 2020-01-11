import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
export default function About() {
    return (
      <Layout location = 'about'>

        <div id = 'about'>
          <h1>About</h1>
          <p>This is the about page</p>
        </div>
        <style jsx>
          {
            `
              #about {
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