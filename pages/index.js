import Hamburger from '../components/Hamburger';


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
          margin-top : 15%;
          width : 30em;
          margin-left : auto;
          margin-right: auto;
        }

        `} 
</style>

const Index = () => (
    <div>
      <Hamburger />
      <div id = 'content-container'>
        <h3>Sam Wilkinson</h3>
        <div id = 'images-container'>
          <img src='/github.png' alt="Logo" />
          <img src='/codepen.svg' alt="Logo" />
          <img src='/l-in.png' alt="Logo" />
        </div>
      </div>
      {style}
    </div>
);
  
export default Index;