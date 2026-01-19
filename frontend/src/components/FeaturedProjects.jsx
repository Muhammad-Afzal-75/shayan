import React from 'react';

const FeaturedProjects = () => {
    // Reusing the high-quality Gemini generated images
    const projects = [
        {
            id: 1,
            title: "Techno Plaza Facade",
            category: "Commercial Exterior",
            image: "/images/slider/Gemini_Generated_Image_24fsgg24fsgg24fs.png"
        },
        {
            id: 2,
            title: "PSO Station Branding",
            category: "Corporate Identity",
            image: "/images/slider/Gemini_Generated_Image_ifhf22ifhf22ifhf.png"
        },
        {
            id: 3,
            title: "Bank Alfalah Main Branch",
            category: "Cladding & Glazing",
            image: "/images/slider/Gemini_Generated_Image_kcl35kcl35kcl35k.png"
        },
        {
            id: 4,
            title: "Modern Residential Villa",
            category: "Residential Design",
            image: "/images/slider/Gemini_Generated_Image_p19n5pp19n5pp19n.png"
        },
        {
            id: 5,
            title: "Skyline Tower",
            category: "Architectural Glazing",
            image: "/images/slider/Gemini_Generated_Image_tnzziutnzziutnzz.png"
        },
        {
            id: 6,
            title: "City Mall Entrance",
            category: "ACM Paneling",
            image: "/images/slider/plaza.png"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of landmark projects that showcase our commitment to quality and architectural excellence.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-72 md:h-80">
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 font-bold uppercase text-xs tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    {project.title}
                                </h3>
                                <button className="mt-4 text-white text-sm font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300 hover:text-blue-400">
                                    View Details
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        VIEW ALL PROJECTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
