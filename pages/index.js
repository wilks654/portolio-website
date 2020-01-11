
import Layout from '../components/Layout';
import Overlay from '../components/Overlay';
import BackgroundImage from '../components/BackgroundImage';


let style = <style jsx>{`
        h3 {
          text-align : center;
          font-size : 4em;
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

        #header-container {
          display : flex;
        }

        span {
          color : #F36865;
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
            
            <div id = 'images-container'>
              <img src='/github.png' alt="github logo" />  
              <img src='/l-in.png' alt="linked-in logo" />
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