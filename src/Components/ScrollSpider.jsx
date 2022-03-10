import {React, useState, useEffect} from 'react'

export default function ScrollSpider() {
    
    const [stringHeight, setStringHeight] = useState("0%");

    var body = document.body, html = document.documentElement;

    var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    useEffect(()=>{
        const scrollHandler = function(){
            if(window.scrollY>100){
                setStringHeight(`${((window.scrollY-100)/pageHeight)*100}%`);
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    
    return (
        <div>
            <div className="scroll-spider">
                <div className="spider-string" style={{height:stringHeight}}></div>
                <div className="spider"><a href="#"><i class="fas fa-spider"></i></a></div>
            </div>
        </div>
    )
}
