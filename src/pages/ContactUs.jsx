import {React, useState, useRef} from 'react'
import swiftreach from '/swiftreach.png'

const ContactUs = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '',})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send('service_3z3s82p', 'template_4peqmw6',
    {from_name: form.name,
     to_name: 'Victor',
     from_email: form.email,
     to_email:  'victorogunsusi6@gmail.com',
     message: form.message,},
    'so9aRHIeqLCWQXGRi'
     )
     .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: '',
      })
     }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
     })
  }


  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start pt-4'>
      <div className='mb-4'>
        <img className='w-20' src={swiftreach} alt="logo" />
      </div>
      <div className='w-[93vw] bg-[#12352420] dark:bg-[#545454] rounded-3xl'>
        <div className='pl-4 pt-4'>
          <h3>Any Questions?</h3>
          <h1 className='text-[#123524] dark:text-[#80ffba] text-2xl font-bold'>Get in Touch</h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className='w-[90vw] flex flex-col px-4 py-2 gap-4'>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Name</span>
              <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Email</span>
              <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Message</span>
              <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
            </label>

            <button className='bg-[#123524] dark:bg-[#80ffba] dark:text-black py-3 px-8 outline-none w-[84vw] text-white font-bold shadow-md shadow-primary rounded-xl mb-2' type='submit'>{loading ? 'Sending...' : 'Send'}</button>
          </form>
      </div>
    </div>
  )
}

export default ContactUs