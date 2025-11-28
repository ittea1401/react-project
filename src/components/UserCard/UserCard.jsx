const UserCard = ({ user }) => {
  return (
    <div
      className={`card bg-green  shadow-sm ${
        !user.isActive ? "filter grayscale" : ""
      }`}
    >
    <div className={`d-block mx-auto w-1/2 avatar ${
        user.isActive ? "avatar-online" : ""
      } `}>
      <div className=" w-150 rounded-full">
              <img className="mask mask-hexagon-2"
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </div>
          </div>
      <div className="card-body text-center">
        <h2 className="card-title text-center text-bold">
          {user.name.first} {user.name.last}
        </h2>
        <p className="">{user.email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            {user.isActive ? "Active" : "Deactive"}
          </button>
        </div>
      </div>
    </div> 
  );
};

export default UserCard;
