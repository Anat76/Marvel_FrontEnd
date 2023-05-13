import ComicsCard from "../components/ComicsCard";

const Comics = ({ comicsData }) => {
  return (
    <section>
      <h1> je suis sur la page du Comic : {comicsData.name} !</h1>
      {comicsData.results.map((comics) => {
        return <ComicsCard key={comics._id} comics={comics} />;
      })}
    </section>
  );
};

export default Comics;
