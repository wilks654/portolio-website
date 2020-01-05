let style = <style jsx>{`
        #hamburger {
            position : absolute;
            top : 2em;
            right : 2em;
            display : inline-block;
            z-index : 5;
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

        #hamburger > * {
            transform-origin: left;
            transition: all 1s;
            width : 2.1em;
            height : .25em;
            background-color : black;
            margin : .5em;
        }

        #menu-head, #menu-body {
            transition: all 1s;
            z-index : 4;
            opacity : 1;
        }

        #menu-head {
            position : absolute;
            top : -100%;
            left : 0em;
            background-color : #EA8789;
            width : 50%;
            height : 100%;

        }

        #menu-body {
            position : absolute;
            top : 100%;
            right : 0em;
            background-color : #F36865;
            width : 50%;
            height : 100%;
            
        }

        #menu-head.open , #menu-body.open  {
            transition: all 1s;
            top : 0em;
        }

        #menu-body #list {
            margin-top : 20%;
            max-height : 60%;
            overflow : scroll;
            position : relative;
            color : white;
            display : grid;
            grid-gap : 4em;
            z-index : 4;
        }

        #menu-body #list > div {
            font-size : 2em;
            text-align : center;
        }

        #menu-body #list > div:hover{
            cursor : pointer;
        }

        #avatar {
            width : 10em;
            height : 10em;
            background-color : white;
            margin-left : auto;
            margin-right : auto;
            border-radius : 60%;
            border-style : solid;
            border-width : 3px;
            border-color : black;

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
export default function Hamburger () { 
    return (
        <div>
            <div id = 'hamburger' onClick = {() => toggleHamburger()}>
                <div id = 'first' />
                <div id = 'second' />
                <div id = 'third' />
                {style}
            </div>
            <div id = 'menu-body'>
                <div id = 'list'>


                    <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                    <div>Contact</div>
                    
                </div>
            </div>    
            
            <div id = 'menu-head'>
                <div id = 'avatar' />    
            </div>
        </div>
    )
}
