import SectionHeader from "./SectionHeader";
import { personal } from "../data/personal";

function EducationSection() {
    const { education } = personal;

    return (
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
            <SectionHeader number="04" title="Education" />

            <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                        {education.graduation}
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                        {education.degree}
                    </h2>

                    <p className="mt-4 text-lg text-text-secondary">
                        {education.school}
                    </p>
                </div>

                <div className="md:col-span-4 md:text-right">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                        Recent Graduate
                    </p>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;