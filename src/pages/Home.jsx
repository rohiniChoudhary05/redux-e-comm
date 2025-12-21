import { getProductApiHook } from "../customHook/UseProductApiHooks";

const Home = () => {
 let {data , isPending } = getProductApiHook();
 if(isPending) return <h1>Loading...</h1>

  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold"> Name</h1>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            {/* <img src={item.image} alt="" /> */}
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
