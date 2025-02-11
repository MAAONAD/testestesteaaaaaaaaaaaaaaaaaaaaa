import Union from "/assets/images/Union.svg"
import shape from "/assets/images/shape.svg"
import logo1 from "/assets/images/logo-1.png"
import btnArrow from "/assets/images/btn-arrow.svg"
import { Link } from "react-router-dom";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json"
import SingleTeamV1 from "./SingleTeamV1"

const TeamV1 = () => {
    return (
        <>
            <div className="team-sec" id="team">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        OUR KOLS
                    </span>
                </div>

                <div className="team-members">
                    {TeamV1Data.map(member =>
                        <SingleTeamV1 member={member} key={member.id} />
                    )}

                    {/* Join Us Section */}
                    <div className="team-cv-box" data-aos="fade-up" data-aos-delay={400}>
                        <img src={shape} alt="shape" className="overlay" />
                        <div className="team-cv-header">
                            <img src={logo1} alt="logo" />
                            <h3 className="title">And<br />So Much More.</h3>
                            <p>At getMotion, we know that every project is unique, with its own vision, goals, and challenges. That’s why we’ve built a diverse network of KOLs, each perfectly suited to different needs and industries. Whether you’re launching a bold new idea or refining an established brand, our experts are ready to push your vision forward with precision and impact.</p>
                        </div>
                        <div className="team-cv-footer">
                            <Link to="/contact" className="theme-btn">
                            Discover The Full Lineup
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;