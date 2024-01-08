import { LandingSubjectBannerProps } from "../types/types";

const LandingSubjectBanner = (props: LandingSubjectBannerProps) => {
  const { subject, description } = props;
  return (
    <section className="subject-banner">
      <section className="banner-text">
        <h3>{subject}</h3>
        <p>{description}</p>
      </section>
    </section>
  );
};

export default LandingSubjectBanner;
