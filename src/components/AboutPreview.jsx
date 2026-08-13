import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { personal } from "../data/personal";

function AboutPreview() {
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
            <SectionHeader number="03" title="About" />

            <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                        Background
                    </p>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    <p className="text-2xl leading-relaxed text-text-primary md:text-3xl">
                        {personal.introduction}
                    </p>

                    <Link
                        to="/about"
                        className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors hover:text-accent"
                    >
                        About Me →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutPreview;