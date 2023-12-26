import React from "react"
import photo from '../images/personal-photo.jpg'


function Info() {
    return (
        <div className="info">
            <img src={photo} alt="personal-photo" className="personal-photo"></img>
            <h1 className="name">Lucas Su</h1>
            <h3 className="title">Full-Stack Developer</h3>
            <small className="email">lijie.su93@gmail.com</small>
            <div className="buttons">
                <button className="button-email">
                    <i class="fas fa-envelope" id='icon-1'></i>
                    <p>Email</p>
                </button>
                <button className="button-linkedin">
                    <i class="fab fa-linkedin" id='icon-2'></i>
                    <p>LinkedIn</p>
                </button>
            </div>

        </div>
    )
}
export default Info