import React from 'react';

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Shayan Aluminium & Glass</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="/images/slider/plaza.png"
                            alt="Construction Site"
                            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Building the Future with Excellence</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Established in 2010, Shayan Aluminium & Glass has been at the forefront of the industry in Pakistan. We specialize in turning complex architectural visions into reality using high-quality materials and precision engineering.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our team of experienced engineers, architects, and skilled labor is dedicated to delivering projects on time and within budget, ensuring complete client satisfaction.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide top-tier construction and cladding solutions that set new standards for quality, safety, and sustainability in the industry.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-900 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the most trusted and innovative construction partner in the region, known for our integrity and commitment to excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
