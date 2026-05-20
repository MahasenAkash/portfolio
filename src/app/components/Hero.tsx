const Hero = () => {
    return (
        <section className="min-h-screen bg-slate-950 text-white pt-24 flex items-center justify-center px-6">
            <div className="text-center">

                <p className="text-sm uppercase text-slate-400 mb-2">
                    Hello, I'm
                </p>

                <h1 className="text-5xl font-bold">
                    Akash Vidanage
                </h1>

                <h2 className="text-slate-300 mt-4 text-xl">
                    Computer Science Student
                </h2>

                <p className="text-slate-400 mt-6 max-w-xl mx-auto">
                    I'm a Computer Science student passionate about web development and software engineering.
                    I enjoy building modern applications and continuously learning new technologies.
                </p>

            </div>
        </section>
    );
};

export default Hero;