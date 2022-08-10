import React from "react"



export default function About() {
    return (
        <>
        <img src="./Images/me.jpg" className="image" />
        <div className="About--div">
            
            <h3 className="About--name">Huzaifa Aziz</h3>
            <h6 className="About--job">Frontend Developer</h6>
            <a className="About--site"></a>
            <div className="About--btn">
                <div className="align--btn">
                    <form action="mailto:huzaifaaziz90@gmail.com">
                        <button className="Email--btn" ><i className='fa fa-envelope'></i> Email</button>
                    </form>
                    <button className="Linkedin--btn" action="https://www.linkedin.com/in/huzaifah-aziz-63092996/"><i className='fa fa-linkedin'></i> Linkedin</button>

                </div>
            </div>
        </div>
        </>
    )
}