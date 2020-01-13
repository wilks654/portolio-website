
import Layout from '../components/Layout';
import Overlay from '../components/Overlay';
import BackgroundImage from '../components/BackgroundImage';


let style = <style jsx>{`
        h3 {
          text-align : center;
          font-size : 4em;
          margin : .25em;
        }

        #images-container {
          display : flex;
          justify-content: center;
        }

        #images-container img {
          width : 2.75em;
          height : 2.5em;
          margin-left : .5em;
          margin-right : .5em;
        }

        #images-container img:hover {
          cursor : pointer;
        }

        #content-container {
          display : grid;
          grid-gap : 1em;
          position : absolute;
          width : 100%;
          left : 0em;
          z-index : 2;
        }

        #index {
          position : absolute;
          width : 100%;
          height : 100%;
          display: flex;
          align-items:center;
          justify-content:center;
          overflow: hidden;
        }

        

        span {
          color : #F36865;
        }

        .sub-header {
          font-style : italic;
          text-align : center;
          color : var(--light-opaque);
        }

        

        `} 
</style>

const Index = () => (
        
        <Layout location = 'index'>
          
          <Overlay />
          <BackgroundImage />
          
              
          
          <div id = 'content-container'>
            
            <div className = 'header-container'>
              <h3>Sam <span>Wilkinson</span></h3>
            </div>
            <div className = 'sub-header'>
              Full Stack Developer, Cambridge UK
            </div>

            
            <div id = 'images-container'>
              <a target="_blank" rel="noopener noreferrer" href = "https://github.com/wilks654">
                <img src='/github.png' alt="github logo" />  
              </a>
              <a target="_blank" rel="noopener noreferrer" href = "http://linkedin.com/in/sam-wilkinson-944447109">
                <img src='/l-in.png' alt="linked-in logo" />
              </a>
            </div>
          </div>  
          {style}
      </Layout>

);
  
export default Index;

/*
<style jsx global> 
      {`
        

       
<img src='/codepen.svg' alt="codepen logo" />
        

        

        `
      }
      </style>
    </div>

*/