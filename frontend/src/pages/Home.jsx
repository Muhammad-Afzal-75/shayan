import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <HeroSlider />
            <StatsCounter />
            <Services />
            <FeaturedProjects />
            <Contact />
        </main>
    );
};

export default Home;
