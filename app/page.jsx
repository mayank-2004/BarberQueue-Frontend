import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-end mb-4">
            <Link href="/SignUp" className="text-zinc-600 bg-black-700 border border-gray-400 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium py-1 px-2 rounded-lg ">
              Create Account
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            BarberQueue Title Page
          </h1>
        
        </div>
        
     
          
        
       
        <div className="text-center space-y-4">
          <Link href="/login" className="inline-block bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors mr-4">
            Book Your Slot
          </Link>
       
       
        </div>
      </main>
    </div>
  );
}
