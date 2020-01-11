//on click inject overlay
import Head from 'next/head';
import Links from './Links';
import Hamburger from '../components/Hamburger';
export default function Layout (props) { 

    let background = '';
    
    if (props.background !== undefined ) {
      background = 'background-color : ' +   props.background + ';';
    }
    

    return (
        <div id = 'layout'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sam Wilkinson - Portfolio</title>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
            </Head>  
            <Links location = {props.location} />
            <Hamburger location = {props.location} />
            {props.children}
            <style jsx global>
                {
                    `
                        {
                            :root {
                                --primary: #253c4d;
                                --primary-opaque-dark : rgba(15, 24, 30, 0.75);
                                --primary-opaque-light : rgba(15, 24, 30, 0.5);
                                --secondary : #F36865;
                                --light : #F5F6F2;
                              }


                              html, body {
                                width : 100%;
                                height : 100%;
                                padding: none;
                                margin: 0;
                                color : var(--light);
                                position : relative;
                              }

                              body {
          
                                position : relative;
                                
                              }
                              
                              html {
                                font-family: 'Source Sans Pro', sans-serif;
                              } 

                              #layout {
                                position : absolute;
                                width : 100%;
                                height : 100%;
                                display: flex;
                                align-items:center;
                                justify-content:center;
                                overflow: hidden;
                                background-color : var(--primary)
                              }
                              
                              
                        }
                    
                    `
                }
            </style>    
        </div>
    )
}