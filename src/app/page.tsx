import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold">Akash Vidanage</h1>

          <p className="text-slate-400 mt-4">Computer Science Student</p>
        </div>
      </main>
    </>
  );
}