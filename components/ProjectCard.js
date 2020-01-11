export default function ProjectCard(props) {

/*
<div className = 'link'>
                    <img src='/github.png' alt="github logo" />
                </div>
*/ 

    return (
        <div id = 'project-card'>
            <div id = 'image' />
            <div id = 'links-container'>
                
            </div>


            <style jsx>
                {

                    `
                    #project-card {
                        border-style : solid;
                        border-color : white;
                        border-width : 2px;
                        width : 10em;
                    }

                    #project-card:hover,  #project-card:hover #links-container  {
                        border-color : var(--secondary);
                        cursor : pointer;
                    }

                    #image {
                        width : 10em;
                        height : 12em;
                        background-image : url(${props.background});
                        background-size: cover;
            background-repeat:no-repeat;
                    }

                    .link {
                        justify-content : center;
                        display : grid;
                        padding : .25em;
                        background-color : var(--primary-opaque-light);
                    }

                    .link img {
                        height : 2em;
                        width : 2em;
                    }

                    #links-container {
                        border-top-style : none;
                        border-color : white;
                        border-width : 2px;
                    }
                    `
                }
            </style>                
        </div>    
    )

}