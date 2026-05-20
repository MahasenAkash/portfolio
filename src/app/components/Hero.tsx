const Hero = () => {
    return (
        <section className="min-h-screen bg-slate-950 text-white pt-24 flex items-center justify-center px-6">
            <div className="text-center space-y-4">

                <p className="text-sm uppercase text-slate-400 mb-2">
                    Hello, I'm
                </p>

                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Akash Vidanage
                </h1>

                <h2 className="text-slate-300  text-xl">
                    Computer Science Student
                </h2>

                <p className="text-slate-400  max-w-xl mx-auto">
                    I'm a Computer Science student passionate about web development and software engineering.
                    I enjoy building modern applications and continuously learning new technologies.
                </p>
                <div className=" flex justify-center mt-8 gap-6">
                    <a href="https://github.com/dashboard" target="_blank" className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition">GitHub</a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition">LinkedIn</a>
                </div>

            </div>
        </section>
    );
};

export default Hero;