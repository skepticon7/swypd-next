"use client";

import FAQItem from "./FAQItem.jsx";
import {faqItems} from "../constants/index.js";
import Reveal from "./Reveal.jsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {useEffect, useState} from "react";
import {ContactModal} from "@/components";
import {toast} from "react-hot-toast";
import {useService} from "@/context/context.jsx";
import SectionWrapper from "@/hoc/SectionWrapper";

const FAQ = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [loading , setLoading] = useState(false);
    const {selectedService} = useService()
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        service : selectedService || " ",
        agree: false,
    });



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...form,
            service : prev.service || selectedService,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid =
        form.name.trim() !== "" &&
        form.message.trim() !== "" &&
        isValidEmail(form.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (response.ok) {
                setForm({ name: '', email: '', message: '' });
                toast.success("Email successfully sent");
            } else {
                toast.error("Failed to send message");
                console.error('Error:', result.error);
            }
        } catch (error) {
            toast.error("Failed to send message");
            console.error('Network error:', error);
        }finally {
            setLoading(false);
        }

    };


    useEffect(() => {
        console.log(form);
    } , [form])

    useEffect(() => {
        if (selectedService) {
            setForm((prev) => ({ ...prev, service: selectedService }));
        }
    }, [selectedService]);

    return (
        <section aria-labelledby={'FAQ-title'} id='faq' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex items-center justify-center w-full'>
            <div className='flex lg:flex-row flex-col items-start justify-center gap-10  w-full'>
                <div className="lg:w-1/2 w-full flex flex-col items-start justify-center">
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl '>FAQ</p>
                    </Reveal>
                    <Reveal>
                        <h2 id={'FAQ-title'} className='akira text-primary-red text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left leading-[1.05] mt-4'>
                            <span className=' akira xs:block lg:hidden '>questions ? we've got you</span>
                            <span className=' akira xs:hidden lg:block'>questions ?</span>
                            <span className='akira xs:hidden lg:block'>we've got you</span>
                        </h2>
                    </Reveal>

                    <div className="lg:flex hidden items-center justify-start gap-4 mt-8">
                        <Reveal>
                            <p className='oswald-regular xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-tertiary-white'>
                                Didn’t find your answer ?
                            </p>
                        </Reveal>
                        <Reveal>
                                <button
                                    aria-label={'Pops up a contact us form for the user to submit it'}
                                    onClick={() => setContactModalOpen(true)}
                                    className="akira bg-tertiary-white/90 hover:bg-tertiary-white
                                text-secondary-black cursor-pointer rounded-xs
                                transition-colors duration-200 h-full text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7 "
                                >
                                    Contact us
                                </button>
                        </Reveal>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className="w-full h-px bg-tertiary-white/60 mb-2 xs:mb-3 sm:mb-4"></div>
                    {faqItems.map((item, index) => (
                        <div key={index}>
                            <FAQItem key={index} question={item.question} answer={item.answer}/>
                            <div className="w-full h-px bg-tertiary-white/60 my-2 xs:mb-3 sm:my-4"></div>
                        </div>

                    ))}
                </div>
                <div id='contact' className="flex flex-col gap-5 w-full lg:hidden items-start ">
                    <p className='text-tertiary-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>Didn't find your answer ?  <span className='text-primary-red'>Contact us</span></p>
                    <form onSubmit={handleSubmit}  className='flex flex-col gap-4 w-full'>
                        <input
                            autoComplete="off"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            className="flex-grow oswald-regular text-tertiary-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs border focus:ring-1 focus:ring-tertiary-white  border-tertiary-white/60
                                            bg-transparent px-2 py-3 h-full"
                            placeholder="Your full name"
                        />
                        <input
                            autoComplete="off"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="text"
                            className="flex-grow oswald-regular  text-tertiary-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs focus:ring-1 focus:ring-tertiary-white border border-tertiary-white/60
                                            bg-transparent px-2 py-3 h-full"
                            placeholder="your email"
                        />
                        <textarea
                            autoComplete="off"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="flex-grow oswald-regular text-tertiary-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs border focus:ring-1 focus:ring-tertiary-white border-tertiary-white/60
                                            bg-transparent px-2 py-3 max-h-40 h-full"
                            placeholder="Let us hear from you..."
                        ></textarea>
                        <div className='flex items-center justify-start gap-2'>
                            <Checkbox
                                checked={form.agree}
                                onCheckedChange={(checked) =>
                                    setForm({ ...form, agree: checked })
                                }
                                className='
                                          data-[state=checked]:bg-primary-red
                                          data-[state=checked]:border-tertiary-white
                                          data-[state=checked]:text-tertiary-white'
                            />
                            <p className='oswald-light self-end text-xs sm:text-sm md:text-base text-tertiary-white/40 '>I agree to receive news, updates, and offers by email.</p>
                        </div>
                        <button
                            disabled={!isFormValid || loading}
                            type='submit'
                            className={`akira mt-3 cursor-pointer rounded-xs transition-colors py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                text-[0.7rem] xs:text-[0.75rem] disabled:cursor-not-allowed sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                ${
                                isFormValid && !loading
                                    ? "bg-tertiary-white/90 hover:bg-tertiary-white text-secondary-black"
                                    : "bg-tertiary-white/60  "
                            }`}
                        >
                            {loading ? (
                                'sending . . .'
                            ) : (
                                'send message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)}/>
        </section>
    )
}

export default SectionWrapper(FAQ , 'faq');

