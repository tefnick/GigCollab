"use client"

import Link from "next/link";
import { signup } from "./actions";
import { useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { error } from "console";

const initialFormState = { 
    errors: {
        email: [],
        password: [],
    },
    message: '', 
}

export default function SignUpPage() {
    const [state, action] = useFormState(signup, undefined);
    const { pending } = useFormStatus();
    const textFieldclassName = 'line-clamp-3 mt-2 mb-4 shadow-slate-200 shadow-lg rounded min-h-9 w-';
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Sign Up!</h1>
            <main className='flex min-h-screen font-sans'>
                <form className="max-w-2xl mx-auto" action={action}>
                    <div className="mb-5">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input
                            type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            name="first-name" 
                            placeholder="John" 
                            required 
                        /> 
                    </div>
                    <div className="mb-5">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input
                            type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            name="last-name" 
                            placeholder="Doe" 
                            required 
                        /> 
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="email" 
                            name="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@example.com" 
                            required 
                        />
                        {state?.errors?.email && 
                            <div className="text-sm text-red-500">
                                <p>{state.errors.email}</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {state?.errors?.password && 
                            <div className="text-sm text-red-500">
                                <p>
                                    Password must:
                                    <ul>
                                        {state.errors.password.map((error) => (
                                            <li key={error}> - {error}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        }
                    </div>

                    <div className="mb-5">
                        <p className="align-left">Already have an account?</p>
                        <Link
                            className="text-blue-500" 
                            href={'/accounts/signin'}> Sign in
                        </Link>
                    </div>

                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <input name="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={pending}
                    >
                        {pending? 'Submitting...' : 'Sign up'}
                    </button>

                    
                </form>
            </main>
        </>
    );
}