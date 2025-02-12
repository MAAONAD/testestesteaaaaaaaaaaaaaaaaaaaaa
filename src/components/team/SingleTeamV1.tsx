import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    delay?: number;
    twitterUrl?: string;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
    const { id, thumb, name, designation, text, delay } = member;

    return (
        <>
<div className="team-member-box" data-aos="fade-up" data-aos-delay={delay}>
  <div className="img-box">
    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
      <img src={`/assets/images/${thumb}`} alt="team-img" />
    </a>
  </div>
  <div className="content">
    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
      <span className="name">{name}</span>
    </a>
    <span className="designation">{designation}</span>
    <div className="shape"><span /></div>
    <p>{text}</p>
  </div>
</div>
        </>
    );
};

export default SingleTeamV1;
