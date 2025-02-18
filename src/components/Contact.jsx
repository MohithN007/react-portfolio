import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { CONTACT } from '../../constants'
import logo from "../assets/logo.webp"
import { animate, motion } from "framer-motion"

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_ahlwlao', 'template_nqn01dl', form.current, {
				publicKey: 'v_83xT1159liHqPYg',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					e.target.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	};
	return (
		<div>
			<div className='flex items-center mt-10'>
				<div className="w-full">
					<motion.h1
					
					whileInView={{opacity:1,x:0}}
					initial={{opacity:0,x:-100}}
					transition={{duration:1.0}}
					className="pb-2 text-8xl tracking-tighter
                     lg:text-8xl">Want  to  get  in Touch? </motion.h1>

				</div>

				<motion.form 
				 whileInView={{opacity:1,x:0}}
				 initial={{opacity:0,x:100}}
				 transition={{duration:1.0}}
				 className="w-full  " ref={form} onSubmit={sendEmail}>
					<label for="user_name"
						class="block mb-2 text-sm font-medium 
					text-gray-900 dark:text-white">Name</label>
					<div class="relative mb-4">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
							</svg>
						</div>
						<input type="text" id="user_name" name="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />
					</div>



					<label for="user_email"
						class="block mb-2 text-sm font-medium 
					text-gray-900 dark:text-white">E-mail</label>
					<div class="relative mb-4">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
								<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
								<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
							</svg>
						</div>
						<input type="text" name="user_email" id="user_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your_email@example.com" />
					</div>


					<label for="message"
						class="block mb-2 text-sm font-medium 
					text-gray-900 dark:text-white">Message</label>
					<div class="relative mb-4">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">

						</div>
						<textarea id="message" name="message" rows="8" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 
						dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
						dark:focus:border-blue-500"  >
						</textarea>
					</div>

					<button type="submit" value="send" class="w-full justify-center text-white bg-[#24292F] hover:bg-[#242029]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050800]/30 me-2 mb-2">
						<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
						</svg>
						Send
					</button>
				</motion.form>


			</div>
			<footer className="flex flex-col items-center mt-20"><div className="items-center"><a href="#"><img src={logo} className="mx-6" width={100} height={100} alt="my-logo" />
			</a></div>
				<div className="text-center tracking-tighter mt-10 mb-8">
					<p className="my-4">ITC Rd , Bangalore , India</p>
					<p className='my-4'>
					+91 - 9008702665
					</p>
					<a href="#" className='border-b '>
						mohithn077@gmail.com
					</a>
				</div>

			</footer>



		</div>

	)
}

export default Contact