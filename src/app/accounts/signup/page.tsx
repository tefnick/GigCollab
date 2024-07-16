import Link from "next/link";

export default function SignUpPage() {

    const textFieldclassName = 'line-clamp-3 mt-2 mb-4 shadow-slate-200 shadow-lg rounded min-h-9 w-';
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Sign Up!</h1>
            <main className='flex min-h-screen font-sans'>
                <form className="max-w-2xl mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>


                {/* <htmlForm classNameName='relative mb-8 border-spacing-5'>
                    <label htmlhtmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" classNameName='line-clamp-3 mt-2 mb-4 shadow-slate-200 shadow-lg rounded min-h-9 max-w-lg'/>

                    <label htmlhtmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                    
                    <label htmlhtmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    
                    <label htmlhtmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    
                    <label htmlhtmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                    
                    <label htmlhtmlFor="location">Location</label>
                    <input type="text" id="location" name="location" />
                    
                    <label htmlhtmlFor="isVenueGigManager">Venue Gig Manager</label>
                    <input type="checkbox" id="isVenueGigManager" name="isVenueGigManager" />
                    
                    <label htmlhtmlFor="isArtist">Artist</label>
                    <input type="checkbox" id="isArtist" name="isArtist" />
                    
                    <button type="submit">Sign Up</button>
                </htmlForm> */}
            </main>
        </>
    );
}