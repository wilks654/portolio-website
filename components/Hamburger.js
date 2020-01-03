let style = <style jsx>{`
        #hamburger {
            position : absolute;
            top : 2em;
            right : 2em;
            display : inline-block;
            z-index : 3;
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
        `} 
</style>

    
let toggleHamburger = () => {
    let hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle('open');
}

//on click inject overlay
export default function Hamburger () { 
    return (
        <div id = 'hamburger' onClick = {() => toggleHamburger()}>
            <div id = 'first' />
            <div id = 'second' />
            <div id = 'third' />
            {style}
        </div>
    )
}
