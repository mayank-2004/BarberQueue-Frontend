export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            BarberQueue
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Premium Barbershop Experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Our Services
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Classic Haircuts</li>
              <li>• Beard Trimming</li>
              <li>• Hot Towel Shaves</li>
              <li>• Hair Styling</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Contact Info
            </h2>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <p>📍 123 Main Street</p>
              <p>📞 (555) 123-4567</p>
              <p>🕒 Mon-Sat: 9AM-7PM</p>
              <p>🕒 Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            Book Appointment
          </button>
        </div>
      </main>
    </div>
  );
}
