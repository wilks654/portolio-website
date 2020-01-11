import Link from 'next/link';

let style = <style jsx>{`
        #hamburger {
            position : absolute;
            top : 2em;
            right : 2em;
            display : inline-block;
            z-index : 5;
        }

        #hamburger.open div {
            background-color : white;
        }

        #hamburger.open #first {
            transform: rotate(45deg);
        }

        #hamburger.open #second {
            opacity : 0;
        }

        #hamburger.open #third {
            transform: rotate(-45deg);
        }

        #hamburger:hover {
            cursor : pointer;
        }

        #hamburger div {
            transform-origin: left;
            transition: all 1s;
            ##transition: opacity 1s;
            ##transition: background-color .5s 1s;
            width : 2.1em;
            height : .25em;
            background-color : black;
            margin : .5em;
        }

        #menu-head, #menu-body {
            transition: all 1s;
            z-index : 4;
            align-items:center;
            display:flex;
            justify-content:center;
        }

        #menu-head {
            position : absolute;
            left : -100%;
            top : 0em;
            background-color : rgba(15, 24, 30, 0.75);
            width : 100%;
            height : 12.5%;
            
        }

        #menu-body {
            position : absolute;
            top : 12.5%;
            left : 100%;
            background-color : rgba(15, 24, 30, 0.5);
            width : 100%;
            height : 87.5%;
            
        }

        #menu-head.open , #menu-body.open  {
            transition: all 1s;
            left : 0em;
        }

        

        #menu-body #list {
            overflow : scroll;
            position : relative;
            color : white;
            display : grid;
            grid-gap : 4em;
            z-index : 4;
            overflow : hidden;
        }

        #menu-body #list > div {
            font-size : 2em;
            text-align : center;
        }

        #menu-body #list > div:hover{
            cursor : pointer;
            text-decoration : underline;
            color : #F36865;
        }

        #avatar {
            width : 0em;
            height : 0em;
            background-image : url('/avatar.png');
            background-color : var(--primary);
            background-size: cover;
            background-repeat:no-repeat;
            background-position: top center;
            border-radius : 60%;
            border-style : solid;
            border-width : 0px;
            border-color : var(--secondary);
            margin-top : 6em;
            transition: all 1s 0s;
            position : relative;
            z-index : 10;
        }

        #menu-head.open#avatar.active {
            transition: all 1s 1s;
        }

        #menu-head.open #avatar {
            width : 10em;
            height : 10em;
            border-width : 3px;
        }

        #hamburger-container {
            display : none;
          }
  
        @media (max-width: 700px) {
        #hamburger-container {
            display: block;
        }
        }

        `} 
</style>

    
let toggleHamburger = () => {
    let hamburger = document.getElementById("hamburger");
    let menuHead = document.getElementById("menu-head");
    let menuBody = document.getElementById('menu-body');
    
   
    menuHead.classList.toggle('open');
    menuBody.classList.toggle('open');
    hamburger.classList.toggle('open');

}

//on click inject overlay
export default function Hamburger (props) { 
    return (
        <div id = 'hamburger-container'>
            <div id = 'hamburger' onClick = {() => toggleHamburger()}>
                <div id = 'first' />
                <div id = 'second' />
                <div id = 'third' />
                {style}
            </div>
            <div id = 'menu-body'>
                <div id = 'list'>
                    {props.location !== 'index' &&
                        <Link href = '/'>
                            <div>Home</div>
                        </Link>
                    }

                    {props.location !== 'about' &&
                        <Link href = 'about'>
                            <div>About</div>
                        </Link>
                    }

                    {props.location !== 'showcase' &&
                        <Link href = 'showcase'>
                            <div>Work</div>
                        </Link>
                    }   

                    {props.location !== 'contact' &&
                        <Link href = 'contact'>
                            <div>Contact</div>
                        </Link>
                    }
                    
                </div>
            </div>    
            
            <div id = 'menu-head'>
                <div id = 'avatar' />    
            </div>
        </div>
    )
}
