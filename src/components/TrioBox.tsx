import { TRIO_PATH } from "../data/link_paths";

const TrioBox = () => {
  return (
    <section className="trio-box">
      <img className="trio right" src={TRIO_PATH}></img>
      <div className="circle-shadow"></div>
    </section>
  );
};

export default TrioBox;
