import React , {useState} from "react";
import "../src/Contact.css";
function Contact(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });
    function handleChange(e){
        // console.log([e.target.name]);
        setFormData({...formData,[e.target.name]:e.target.value});
        console.log(formData);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.value);
        // const parms={
        //     name:e.target.name.value,
        //     email:e.target.email.value,
        //     message:e.target.value
        // }
        // console.log(parms);
        console.log(import.meta.VITE_SERVICE_ID);
        emailjs
          .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            () => {
                alert("Email sent successfully!!!");
              console.log('SUCCESS!');
            },
            (error) => {
                alert("Email not sent!!!");
              console.log('FAILED...', error.text);
            },
          );

          console.log(formData);
      };
    return <div className="form">
        <form action="submit" onSubmit={sendEmail}>
            <h1>Contact</h1>
            <h3 style={{fontSize:"1.4rem" ,margin:"2px 0"}}>Feel free to reach out to me via email or the contact form below. I'm always excited to connect and collaborate!</h3>
            <h4><a href="mailto:aryan0312g@gmail.com">aryan0312g@gmail.com</a></h4>
            {/* <label htmlFor="" name="name">Name :</label> */}
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}  placeholder="Name" required/>
            {/* <label htmlFor="" name="email">Email</label> */}
            <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" required/>
            <textarea name="message"  id="message" onChange={handleChange} value={formData.message} placeholder="Message" rows={10}></textarea>
            <div className="btn">
            <button type="submit">Send Message</button>
            </div>
        </form>
    </div>
}
export default Contact;