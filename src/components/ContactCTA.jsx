import { Link } from "react-router-dom";

function ContactCTA() {
    return (
        <section className="border-t border-border">
            <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-40">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    05 / Connect
                </p>

                <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <h2 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
                        LET'S
                        <br />
                        CONNECT.
                    </h2>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 self-start border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent md:self-end"
                    >
                        Get In Touch →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ContactCTA;