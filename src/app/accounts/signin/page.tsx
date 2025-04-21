import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function SignIn() {
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Please sign in</h1>
            <main className='flex min-h-screen font-sans justify-center'>
                <p>Must be logged in to view this page</p>
            </main>
        </>
    )
}