import Hamburger from '../components/Hamburger';

let style = <style jsx>{`
        h3 {
          text-align : center;
          font-size : 4em;
        }
        `} 
</style>

const Index = () => (
    <div>
      <Hamburger />
      <div>
        <h3>Sam Wilkinson</h3>
      </div>
      {style}
    </div>
);
  
export default Index;