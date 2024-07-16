import ImageSlideShow from "@/components/ImageSlideShow";

export default function Home() {
  
  return (
    <>
    <main className="font-sans">
      <h1 className="font-bold text-center text-2xl mt-6">Welcome!</h1>
      <h2 className="font-bold text-center text-xl m-6">GigManager is a booking platform that makes booking gigs simple</h2>
      <p className="text-center m-6">No need to hire a manager or booking agent, get your first gig in just a few clicks!</p>
    
      <ImageSlideShow />
    </main>
    </>
  );
}