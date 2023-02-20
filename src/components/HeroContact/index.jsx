import React from 'react'
import Image from 'next/image'
import { useReducer } from 'react';

const HeroContact = () => {
    const initialFormState = {
        name: "",
        email: "",
        company: "",
        title: "",
        message: ""
        };

        const ValidityState = {
            NameError: false,
            EmailError: false,
            CompanyError: false,
            TitleError: false,
            MessageError: false,
            isFormValid: false,
            
        }
        
        const formValidityReducer = (state, action) => {
            let isValid = false;
            switch(action.type){
                case "VALIDATE_NAME": 
                isValid = action.payLoad.name.length > 0 ? true: false
                return{
                ...state,
                ...({NameError: isValid, isFormValid: isValid && state.NameError && !state.EmailError && !state.CompanyError && !state.TitleError && !state.MessageError}),
                }
                case "VALIDATE_EMAIL":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               
                isValid = ( action.payLoad.email.length > 0 &&  emailRegex.test(action.payLoad.email) ) ? true: false
                return{
                ...state,
                ...({EmailError: isValid, isFormValid: isValid && !state.NameError && !state.EmailError && !state.CompanyError && !state.TitleError && !state.MessageError}),
                }
                case "VALIDATE_COMPANY":
                isValid = action.payLoad.company.length > 0 ? true: false
                return{
                ...state,
                ...({CompanyError:isValid, isFormValid: isValid && !state.NameError && !state.EmailError && !state.CompanyError && !state.TitleError && !state.MessageError}),
                }
                case "VALIDATE_TITLE":
                isValid = action.payLoad.title.length > 0 ? true: false
                return{
                ...state,
                ...({TitleError: isValid, isFormValid: isValid && !state.NameError && !state.EmailError && !state.CompanyError && !state.TitleError && !state.MessageError}),
                }
                case "VALIDATE_MESSAGE":
                isValid = action.payLoad.message.length > 0 ? true: false
                return{
                ...state,
                ...({MessageError: isValid, isFormValid: isValid && !state.NameError && !state.EmailError && !state.CompanyError && !state.TitleError && !state.MessageError}),
                }
                case "VALIDATION_FORM":
                return{
                ...state,
                ...({isFormValid: state.NameError && state.EmailError && state.CompanyError && state.TitleError && state.MessageError}),
                }

                default:
                return state;
                
            }
            }

        const formReducer = (state, action) => {
            const {name, value} = action.payLoad;
            

            switch(action.type){
                case "UPDATE":
            return{
                ...state, [name]: value, 
            }
            case "RESET":
            return{
                ...initialFormState

            }
            default:
            return state;
        }
        }
        
        const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, ValidityState)

        const [formData, setFormData] = useReducer(formReducer, initialFormState);


    const onButtonPress = (event) => {
        event.preventDefault();
        if (formValidityData.isFormValid){
            
            console.log("Form is valid")
            setFormData({type:"RESET", payLoad: FormData})
        } else {
            console.log("Form is not valid")
        }
        //Form submission happens here
    }
    return (
        <div className=' -z-10 overflow-x-hidden relative bg-green w-full h-auto flex flex-col items-center justify-center place-content-center'>
        <Image className="object-cover absolute top-0 -left-[9rem]"src={"/assets/bg-pattern-about-2-contact-1.svg"} alt="bg-pattern-about-2-contact-1"  width={200} height={200} />
        <Image className="object-cover absolute bottom-0 -right-[9.3rem]" src={"/assets/bg-pattern-contact-2.svg"} alt="bg-pattern-contact-2" width={200} height={200} />
        <div className='flex lg:flex-row flex-col lg:items-start items-center content-center justify-between w-[90%] place-content-start  pb-[2em]'>
            <div className='flex w-full flex-col  lb:mb-0 mb-[1em] lg:items-start  items-center content-start'>
                <h1 className=' md:mb-[.3em] lg:text-[5vw]  md:text-[6rem] text-[5rem] font-bold text-white'>Contact</h1>
                <h2 className='md:mb-[.3em] text-corla font-bold lg:text-[3vw]  text-[4rem]'>Ask us about</h2>
                <div className='flex flex-col content-center'>
                    <div className='flex flex-row items-center content-center'>
                        <Image  className="mr-[1em]"src={"/assets/icon-person.svg"} alt="icon-person" width="56" height="56"/>
                        <p className='text-white lg:text-[1.5vw] md:text-[2rem] text-[1.5rem] font-bold'>The quality of our talent network</p>
                    </div>
                    <div className='flex flex-row items-center content-center'>
                        <Image  className="mr-[1em]" src={"/assets/icon-cog.svg"} alt="icon-person" width="56" height="56"/>
                        <p className='text-white lg:text-[1.5vw] md:text-[2rem] text-[1.5rem] font-bold'>Usage & implementation of our software</p>
                    </div>
                    <div className='flex flex-row items-center content-center'>
                        <Image  className="mr-[1em]" src={"/assets/icon-chart.svg"} alt="icon-person" width="56" height="56"/>
                        <p className='text-white font-bold lg:text-[1.5vw] md:text-[2rem] text-[1.5rem]'>How we help drive innovation</p>
                    </div>
                </div>
            </div>
        
        
            <form onSubmit={onButtonPress} className='flex flex-col lg:w-[50%] w-[90%]'>
            <label htmlFor="" className={`border-b-[1px] ${!formValidityData.NameError ?   'border-corla' :'border-white'} `} >
                <input  type="text" name="name"className="text-white mb-[0.5em] outline-none border-none  bg-green w-screen md:h-[3vw] h-[4rem]  " placeholder="Name" 
                onChange={(e) =>setFormData({type:"UPDATE", payLoad: e.target})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_NAME", payLoad: formData})}
                value={formData.name}
                />
                <p className={`text-corla ${formValidityData.NameError ?   'invisible' :'visible'} `}>Please write your name </p>
            </label>
            <label htmlFor="" className={`border-b-[1px] ${!formValidityData.EmailError ?  'border-corla':'border-white'}
        `}>
                <input  type="text" name="email"className="cursor-pointer text-white  my-[0.5em] outline-none border-none  bg-green w-screen md:h-[3vw] h-[4rem]"  placeholder="Email"
                
                onChange={(e) =>setFormData({type:"UPDATE", payLoad: e.target})} 
                onBlur={(e) => setFormValidityData({type: "VALIDATE_EMAIL", payLoad: formData})}
                value={formData.email}
                />
                <p className={`text-corla ${formValidityData.EmailError ?   'invisible' :'visible'} `}>Please write a valid email </p>
            </label>
            <label htmlFor="" className={`border-b-[1px] ${!formValidityData.CompanyError ?  'border-corla':'border-white'}
        `}>
                <input type="text"name="company"  className="text-white my-[0.5em] outline-none border-none  bg-green w-screen md:h-[3vw] h-[4rem] " placeholder="Company Name"    
                onChange={(e) =>setFormData({type:"UPDATE", payLoad: e.target})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_COMPANY", payLoad: formData})}
                value={formData.company}
                    />
                    <p className={`text-corla ${formValidityData.CompanyError ?   'invisible' :'visible'} `}>Please write the name of company </p>
            </label>
            <label htmlFor="" className={`border-b-[1px] ${!formValidityData.TitleError ?  'border-corla':'border-white'}
        `}>
                <input type="text" name="title" className="text-white my-[0.5em] outline-none border-none  bg-green w-screen md:h-[3vw] h-[4rem] "  placeholder="Title" 
                onChange={(e) =>setFormData({type:"UPDATE", payLoad: e.target})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_TITLE", payLoad: formData})}
                value={formData.title}
                />

            <p className={`text-corla ${formValidityData.TitleError ?   'invisible' :'visible'} `}>Please write your title </p>
            </label>
            <label htmlFor="" className={`border-b-[1px] ${!formValidityData.MessageError ?  'border-corla':'border-white'}
        `}>
                <textarea type="text" name="message" className="text-white my-[0.5em] outline-none border-none  bg-green w-screen md:h-[6vw] h-[8rem] " placeholder="Message"
                onChange={(e) =>setFormData({type:"UPDATE", payLoad: e.target})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_MESSAGE", payLoad: formData})}
                value={formData.message}
                />
                <p className={`text-corla ${formValidityData.MessageError ?   'invisible' :'visible'} `}>Please write your message </p>
            </label>
            <button type="submit" onClick={()=> setFormValidityData({type:"VALIDATION_FORM",payload:formData})}  className='mt-[2em] py-[1em] w-[123px] h-[48px] bg-white rounded-2xl px-[2em] text-green font-bold'>Send</button>
        </form>
        </div>
        </div>
    )
}

export default HeroContact
