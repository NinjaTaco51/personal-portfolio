import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

const categories = [
    {
        title: "languages",
        items: skills.languages,
    },
    {
        title: "Web",
        items: skills.frontendWeb,
    },
    {
        title: "Tools & Platforms",
        items: skills.toolsPlatforms,
    },
    {
        title: "AI / Data",
        items: skills.aiData,
    },
    {
        titlee: "App Dev",
        items: skills.applicationDevelopment
    }
];

function TechnologySection() {
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
            <SectionHeader number="02" title="Technologies" />
            <Reveal>
                <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-5">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="border-b border-r border-border p-6 md:p-8"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                                {category.title}
                            </h3>

                            <ul className="mt-6 space-y-3">
                                {category.items.map((item, index) => (
                                    <li
                                        key={`${item}-${index}`}
                                        className="text-lg text-text-primary"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Reveal>

        </section>
    );
}

export default TechnologySection;