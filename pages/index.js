import Hamburger from '../components/Hamburger';
import Overlay from '../components/Overlay';
import BackgroundImage from '../components/BackgroundImage';
import Head from 'next/head';

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

        

        `} 
</style>

const Index = () => (
    <div id = 'index'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sam Wilkinson - Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      </Head>  
      <div id = 'mobile-resolution'>
        <Hamburger />
      </div>



      <Overlay />
      <BackgroundImage />
      
        
      <div id = 'content-container'>
        <h3>Sam Wilkinson</h3>
        <i></i>
        <div id = 'images-container'>
          <img src='/github.png' alt="github logo" />
          <img src='/codepen.svg' alt="codepen logo" />
          <img src='/l-in.png' alt="linked-in logo" />
        </div>
      </div>  
      
      {style}
      <style jsx global> 
      {`
        html, body {
          width : 100%;
          height : 100%;
          padding: none;
          margin: 0;
          color : #F5F6F2;
        }
        
        html {
          font-family: 'Source Sans Pro', sans-serif;
        }

        body {
          
          #background: url(/stock-background.jpg) no-repeat center center scroll;
          background-blend-mode: lighten;
          position : relative;
          
        }

        #mobile-resolution {
          display : none;
        }

        @media (max-width: 700px) {
          #mobile-resolution {
            display: block;
          }
        }

        `
      }
      </style>
    </div>
);
  
export default Index;