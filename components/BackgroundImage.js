
export default function BackgroundImage(props) {

    let url;
    if (props.url === undefined) {
        url = '/stock-background.jpg'
    }

    let style = <style jsx>{`
       
        #background-image {
            position : absolute;
            top: 0em;
            left: 0em;
            width : 100%;
            height : 100%;
            background : url(`+ url +`);
            filter : blur(2px);
          }

    `} 
    </style>

    return (
        <div id = 'background-image'>
            {style}
        </div>
    )

}
