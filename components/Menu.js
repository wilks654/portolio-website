
export default function Menu() {

    let color;
    if (props.color === undefined) {
        color = '#253c4d'
    }

    let style = <style jsx>{`
       
        #overlay {
          position : absolute;
          width : 100%;
          height : 100%;
          background-color : `+ color + `;
          opacity : 0.8;
          z-index : 1;
        }

    `} 
    </style>

    return (
        <div id = 'overlay'>
            {style}
        </div>
    )

}
