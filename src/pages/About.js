import React from 'react'

export default function About() {
    return (
        <div>

            <div className='container my-5'>
                <h3>About Us</h3>
                <p>
                    Welcome to WordCraft, your go-to online text manipulation tool designed to simplify and enhance your text editing experience. We are passionate about delivering a powerful, user-friendly platform that allows you to perform a wide range of text operations with ease.

                    Our team has meticulously crafted WordCraft using modern web technologies like Bootstrap, React, and JSX, ensuring a sleek, responsive interface that works seamlessly across all devices. Whether you're looking to format, transform, or customize text, WordCraft offers the tools you need to get the job done efficiently.

                    At WordCraft, we believe in empowering our users with intuitive solutions that make text manipulation both easy and enjoyable. Join us on our journey to redefine how you interact with text, one word at a time.
                </p>
            </div>

            <div className="accordion container" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is WordCraft?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>WordCraft is an online text manipulation tool that lets you easily format, transform, and customize text. Built with Bootstrap, React, and JSX, it offers a fast, user-friendly experience for all your text editing needs.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why WordCraft?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Experience the ease and efficiency of WordCraft, your go-to tool for quick text manipulation and seamless editing. Powered by modern technologies like Bootstrap and React, WordCraft delivers a responsive and intuitive interface that makes text formatting, transformation, and customization a breeze. Best of all, it's completely free to use, saving you time and effort while enhancing your workflow.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Developed By?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>It is Developed by Thanoj Sriman</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            ThankYou
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Thank you for visiting WordCraft! We're delighted to have you explore our text manipulation tool and hope it meets all your editing needs. Your support and interest inspire us to continually improve and innovate. If you have any feedback or suggestions, please don't hesitate to reach out. Once again, thank you for choosing WordCraft!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
