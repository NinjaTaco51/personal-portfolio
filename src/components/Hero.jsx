import { Link } from "react-router-dom";
import { personal } from "../data/personal";

function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border">
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] items-center px-6 py-24 lg:px-10">
                <div className="w-full">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-10 bg-accent" />

                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                            Software / Web / Cloud / AI
                        </p>
                    </div>

                    <h1 className="mt-8 max-w-6xl text-[clamp(4.5rem,12vw,11rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-text-primary">
                        DAVID
                        <br />
                        <span className="text-text-secondary">LAM</span>
                    </h1>

                    <div className="mt-16 grid gap-8 md:grid-cols-12">
                        <div className="md:col-span-5 md:col-start-8">
                            <p className="text-lg leading-8 text-text-secondary">
                                {personal.introduction}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    to="/work"
                                    className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                                >
                                    Explore My Work →
                                </Link>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                                >
                                    About Me
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex items-center justify-between border-t border-border pt-5">
                        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                            B.S. Computer Science · Cal Poly Pomona
                        </p>

                        <p className="hidden font-mono text-xs uppercase tracking-wider text-text-muted md:block">
                            Scroll ↓
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;