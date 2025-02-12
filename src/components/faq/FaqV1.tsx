import Union from "/assets/images/Union.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec" id="faq">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        Faq
                    </span>
                    <h2 className="section-title section-title2">
                        Frequent Queries, <span>Quick Fixes</span>
                    </h2>
                    <p className="section-desc">Whether you have specific questions or need general information, our FAQ section
                        is here to help. From details about our services to guidance on choosing the right plan</p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <img src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <img src={pricingShape2} alt="shape" />
                    </div>

                    {/* Faq 1 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="number">I.</span> What types of creative services do you offer? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>At getMotion, we provide a full suite of KOL marketing and project acceleration services designed to give brands, startups, and Web3 projects the visibility they deserve.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 2 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="number">II.</span> What is your typical project timeline? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our agency understand that every project is unique, and timelines can vary based on scope, goals, and strategy. However, we follow a structured process to ensure efficiency, precision, and maximum impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 3 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="number">III.</span> Do you offer post-launch support or maintenance? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Yes. We ensure they keep growing. Our post-launch support is designed to maintain momentum, optimize performance, and sustain long-term success. Success doesn’t stop at launch. We’re here to make sure your project stays relevant, visible, and continuously growing.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 4 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="number">IV.</span> Can you assist with both online and offline creative projects? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Absolutely. We specialize in digital-first strategies, but we also understand the power of offline activations in building brand credibility and momentum. Our team is equipped to handle both online and offline creative projects, ensuring a seamless and impactful experience across all channels.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 5 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className="number">V.</span> Do your designs are tailored to each client? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Yes. We believe that every project is unique, and our designs reflect that. We don’t use generic templates, we craft every design to align perfectly with your brand’s vision, audience, and goals. We merge aesthetic appeal with strategic intent, ensuring that every design we create not only looks stunning but also drives engagement and impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 6 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span className="number">VI.</span> How do we choose the right KOLs for a project? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>At getMotion, selecting the right KOL isn’t just about numbers, it’s about strategy, alignment, and impact. We carefully analyze each project’s goals and match it with KOLs who bring the right credibility, engagement, and audience fit to ensure maximum results.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 7 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <span className="number">VII.</span> Can I see examples of your previous work? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Yes. We’ve collaborated with a diverse range of projects, crafting high-impact campaigns, visuals, and KOL-driven activations that push brands forward. Due to exclusivity, some of our work is shared upon request. Contact us to see relevant case studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;
