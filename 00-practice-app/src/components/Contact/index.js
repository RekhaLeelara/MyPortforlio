import React from 'react'


function contact(){

  const [formState, setFormState] = useState({name: '', email:'', message:''})

  const[errorMessage, setErrorMessage] = useState('');
  const{name, email, message} = formState;



  const handleSubmit = (e) => {
    e.preventDefault();
    if(!errormessage){
      setFormState({[e.target.name]: e.target.value});
      console.log('Form', formState);
    }

  }


    return(
        <section>
        <h1 data-testid="h1tag">Contact</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5"/>
        </div>
        <button data-testid="button" type="submit">Submit</button>
        </form>
        </section>
    );
}

export default contact;