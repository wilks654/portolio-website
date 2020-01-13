import Hamburger from '../components/Hamburger';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

export default function Showcase() {
    return (
      <Layout location = 'showcase'>

        <div id = 'showcase'>
          <h1>Showcase</h1>
          <div id = ''>

            <a target="_blank" rel="noopener noreferrer" href = "https://github.com/wilks654/portolio-website"> 
              <ProjectCard background = '/website-thumbnail.png' />
            </a>
          </div>
        </div>
        

        <style jsx>
          {
            `
              #showcase {
                width : 80%;
                height : 80%;
                color : black;
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