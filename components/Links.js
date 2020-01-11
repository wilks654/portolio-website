import Link from 'next/link';

export default function Links (props) { 
    
    let style = <style jsx> 
    {`

        #links-container {
            display : flex;
            position : absolute;
            top : 2em;
            right : 2em;
            z-index : 5;
        }

        .link-container {
            width : 5em;
            text-align : center;
            border-right-style : solid;
            border-width : 1px;
            border-color : white;
        }


        .link-container:nth-child(3)  {
            border : none;
        }

        .link-container div:hover {
            cursor : pointer;
            text-decoration : underline;
        }
  
        @media (max-width: 700px) {
        #links-container {
            display: none;
        }


    `}
    </style>
    
    return (
        <div id = 'links-container'>
            {props.location !== 'index' &&
                <div className = 'link-container'>
                    <Link href = '/'>
                        <div>Home</div>
                    </Link>
                </div>
            }
            {props.location !== 'about' &&
                <div className = 'link-container'>
                    <Link href = '/about'>
                        <div>About</div>
                    </Link>
                </div>
            }
            {props.location !== 'showcase' &&
                <div className = 'link-container'>
                    <Link href = '/showcase'>
                        <div>Work</div>
                    </Link>
                </div> 
            }
            {props.location !== 'contact' &&
                <div className = 'link-container'>
                    <Link href = '/contact'>
                        <div>Contact</div>
                    </Link>
                </div>
            }
            {style}
        </div>
    )
}