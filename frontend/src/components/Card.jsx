const Card = ({ item }) => {
  return (
    <>
    <div className="mt-4 my-3 p-3">
      <div className="card w-[290px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="px-2 py-1 rounded-full border-[2px]">{item.price}</div>
            <div className="px-2 py-1 rounded-full border-[2px] cursor-pointer hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Card;
