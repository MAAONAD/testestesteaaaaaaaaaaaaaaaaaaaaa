import Union from "/assets/images/Union.svg"

const AwardsV1 = () => {
    return (
        <>
            <div className="awards-sec" id="awards">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        OUR MISSIONS
                    </span>
                </div>
                <div className="awards-list">

                    {/* Award 1 */}
                    <div className="awards-box active">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>I. Creating Impact</h4>
                            <span className="date">Ensuring every project leaves a lasting impression.</span>
                        </div>
                    </div>

                    {/* Award 2 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>II. Adapting Expertise</h4>
                            <span className="date">Matching the perfect KOLs to every unique project.</span>
                        </div>
                    </div>

                    {/* Award 3 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>III. Driving Motion</h4>
                            <span className="date">Accelerating growth through innovative strategies.</span>
                        </div>
                    </div>

                    {/* Award 4 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>IV. Launching Visions</h4>
                            <span className="date">Transforming ambitious projects into impactful realities.</span>
                        </div>
                    </div>

                    {/* Award 5 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>V. Tailoring Solutions</h4>
                            <span className="date">Crafting custom approaches to meet diverse needs.</span>
                        </div>
                    </div>

                    {/* Award 6 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>VI. Sustaining Success</h4>
                            <span className="date">Building momentum for long-term project achievements.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwardsV1;
