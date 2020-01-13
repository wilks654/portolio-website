import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
export default function About() {
    return (
      <Layout location = 'about'>

        <div id = 'about'>
          <h1>About</h1>

          <p>
            
            Hi, I'm a Web Applications Developer primarily experienced with React. 
            I have approximately 14 months commercial experience working for a startup in London.

          </p>


          <p>I know how to:</p>
          
          <ul>

            <li>Set up and implement multipage applications.</li>

            <li>Set up Redux store and associated thunks/actions.</li>

            <li>Implement pages to design specifications. </li>

            <li>Create an AWS Cloudront distributions for staging/production hosting. </li>

            <li>Handle User Authentication through AWS Incognito User Pools. </li>

            <li>Basic React project setup using Babel. I used Create React App at my last job. </li>

            <li>External framework integration.</li>

            <li>Basic website hosting.</li>

          </ul>  

          <p>I'm really keen to continue to expand upon my knowlege as a programmer. 
            And to keep pushing myself to learn new skills. 
             </p>

          <p>I am currently based in Cambridge, though I'm happy to relocate.</p>

          <p>I can provide excellent references upon request.</p>
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