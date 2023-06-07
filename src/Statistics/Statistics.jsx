import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <section className="p-6 bg-white dark:text-gray-900 mt-4">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                            <div className="flex flex-col justify-center align-middle">
                                {counterOn && <p className="text-4xl font-bold leading-none lg:text-6xl "><CountUp start={0} end={50} duration={2}></CountUp>+</p>}
                            </div>
                        </ScrollTrigger>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                            <div className="flex flex-col justify-center align-middle">
                                {counterOn && <p className="text-4xl font-bold leading-none lg:text-6xl "><CountUp start={0} end={89} duration={2}></CountUp>K</p>}
                            </div>
                        </ScrollTrigger>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                            <div className="flex flex-col justify-center align-middle">
                                {counterOn && <p className="text-4xl font-bold leading-none lg:text-6xl "><CountUp start={0} end={3} duration={2}></CountUp>+</p>}
                            </div>
                        </ScrollTrigger>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statistics;