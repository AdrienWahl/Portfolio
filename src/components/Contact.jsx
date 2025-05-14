
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

function Contact() {
  const [state, handleSubmit] = useForm("xzzrjdne");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", message: "" });

  const validate = () => {
    const newErrors = { email: "", message: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.message;
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e); 
    }
  };

  if (state.succeeded) {
    return <p className="font-[Poppins]">Thanks for reaching out!</p>;
  }

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <form 
        onSubmit={handleCustomSubmit} 
        className="flex flex-col justify-center items-center h-[60vh] w-[80vh] p-4"
      >
        <h2 className="mb-10 text-2xl font-[Poppins]">
          You can contact me using this form :
        </h2>

        <label htmlFor="email" className="mb-1">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-1 bg-white rounded w-[30vh] p-2 text-black"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message" className="mb-1 font-[Poppins]">Your message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-1 bg-white rounded w-[50vh] h-[20vh] text-black p-2"
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button 
          type="submit" 
          disabled={state.submitting} 
          className="font-[Poppins] border-2 border-white rounded-full py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-br hover:scale-105 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
