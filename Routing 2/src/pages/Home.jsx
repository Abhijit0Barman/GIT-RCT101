import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Performed Done");
    alert(`performing...`);
    navigate(`about`);
  };
  return (
    <>
      <div>
        <h1>onClick=&#123;handleClick&#125;</h1>
        {/* */}
        <button onClick={handleClick}>After Some Perform</button>
        {/* */}
        <p>
          || this is just like a normal button it wont give us option to open a
          new tab after right click on it ||
        </p>
      </div>
      <br />
      <hr />
      <div>
        <h1> onClick=&#123;() => navigate('about')&#125;</h1>
        {/* */}
        <button onClick={() => navigate(`about`)}>
          Direct To The Page using "useNavigate"
        </button>
        {/* */}
        <p>
          || this is just like a normal button it wont give us option to open a
          new tab after right click on it ||
        </p>
      </div>
      <br />
      <hr />
      <div>
        <h1>Using Link Tag Wrapping the Button</h1>
        {/* */}
        <Link to="/about">
          <button onClick={() => navigate(`about`)}>
            Direct To The Page Using Link Tag Wrap Button
          </button>
        </Link>
        {/* */}
        <p>
          || but this will give us option on right click on it "OPEN IN A NEW
          TAB ||
        </p>
      </div>
      <br />
      <hr />
    </>
  );
};

export default Home;
