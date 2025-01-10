import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_m72ih0t', // serviceID
                'template_mc77wfg', // templateID
                {
                    from_name: form.name,
                    to_name: 'Jawad Ahmad',
                    from_email: form.email,
                    to_email: 'ja5916367@gmail.com',
                    message: form.message,
                },
                'hQkBrehd4XKPBKr6E' // userID or public key
            );
            setLoading(false);
            alert('Your message has been sent');
            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
        }
    };
    return (
        <section id='contact' className='lg:h-[150vh] max-lg:h-[70vh] w-full flex flex-col justify-between items-center px-[5vw] bg-zinc-300 rounded-b-[50px]'>
            <div className="lg:h-[40vh] max-lg:h-[10vh] w-full flex justify-center items-end">
                <h1 className='text-[6vw] leading-none uppercase'>Let's Create a Website</h1>
            </div>
            <div className="lg:h-screen max-lg:h-[50vh] w-full flex">
                <div className="left h-full lg:w-[50%] max-lg:w-[100%] flex justify-center items-center">
                    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-[2vw] w-full'>
                        <label className='flex flex-col border-b-[1px] border-black gap-[1vw] w-[50%]'>
                            Name
                            <input required className='outline-none bg-transparent focus:bg-transparent active:bg-transparent' placeholder='John doe' type="text" name="name" value={form.name} onChange={handleChange} id="name" />
                        </label>
                        <label className='flex flex-col border-b-[1px] border-black gap-[1vw] w-[50%]'>
                            Email
                            <input required className='outline-none bg-transparent' type="email" name="email" value={form.email} onChange={handleChange} id="email" placeholder='john@gmail.com' />
                        </label>
                        <label className='flex flex-col border-b-[1px] border-black gap-[1vw] w-[50%]'>
                            Message
                            <textarea required rows={3} name="message" id="message" value={form.message} onChange={handleChange} className='bg-transparent outline-none' placeholder='Hi, I am interesting...' />
                        </label>
                        <button disabled={loading} type='submit' className='px-[2vw] py-[.7vw] bg-blue-800 text-zinc-300 rounded-full max-sm:text-xs relative before:content-[""] before:h-full before:w-full before:bg-zinc-300 before:left-0 before:absolute before:top-[100%] before:rounded-[50%] hover:before:top-0 before:duration-500 hover:before:rounded-[0] overflow-hidden before:z-[-1] z-[1] hover:text-zinc-800 hover:shadow-[0px_2px_4px_0px_black]'>{loading ? 'Sending...' : 'Send Message'}</button>
                    </form>
                </div>
                <div className="right max-lg:hidden h-[100vh] w-[50%] flex justify-center items-center">
                    <div className="h-[70vh] w-full bg-red-600 rounded-3xl"></div>
                </div>
            </div>
        </section>
    )
}

export default Form
