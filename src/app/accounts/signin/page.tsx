import { signIn } from "@/auth"
import { SignInButton } from "@/components/auth/SignInButton"
import { SignOutButton } from "@/components/auth/SignOutButton"

export default function SignIn() {
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Log In!</h1>
            <main className='flex min-h-screen font-sans justify-center'>
                <SignInButton>Log in with Google</SignInButton>
            </main>
        </>
    )
}