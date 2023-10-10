import './Contact.css';
function Contact() {
    return (
        <div id="contact">
            <div id="contact-head">
                <h1>Contact Me</h1>
            </div>
            <div id="contact-main">
                <div id="form">
                    <h2 style={{marginTop:' -37px',
            marginBottom:' 40px'}}>Contact Form</h2>
                    <form action="mailto:lakshmiranibodana@gmail.com" method="post" enctype="text/plain">
                        <label for="name">Name:</label><br />
                        <input class='input' type="text" id="name" name="name" required/><br/>
                            <label for="email">Email:</label><br />
                            <input class='input' type="email" id="email" name="email" required/><br />
                                <label for="subject">Subject:</label><br />
                                <input class='input' type="text" id="subject" name="subject" required/><br />
                                    <label for="message">Message:</label><br />
                                    <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />
                                    <input id='submit-btn' type="submit" value="Submit"/>
                    </form>
                                </div>
                                <div>
                                    <h2 style={{fontSize:' 45px',marginTop: '142px',fontWeight: '600'}}>Love to hear from you <br/>Get in touch
                                        <img style={{width: '8%',borderRadius: '46px', boxShadow: '20px 12px 0px 1px #6da5d6'}}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQwLSba9L5G-2rMZdJ-UcGTUnUqDfRAKTJM4E4LQIOV65VgxbW1fYfeszG7QSkNvrjEE&usqp=CAU"
                                            alt="" /> </h2>
                                </div>
                            </div>
                        </div>
                        );
}
export default Contact;