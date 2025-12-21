
import { getUsesApiHook } from "../customHook/UseUsesApiHook";

const Users = () => {
let {data, isPending } = getUsesApiHook()

  if(isPending) return <h1>Loading...</h1>
  return <div className="px-10">
    <h1 className="text-4xl font-bold">UserName</h1>
    {
      data?.map((User)=>{
        return <div key={User.id}>
          <h1>{User.username}</h1>
        </div>
      })
    }
  </div>;
};

export default Users;
