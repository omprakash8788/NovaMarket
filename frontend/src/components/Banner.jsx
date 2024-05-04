
const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
         <h1 className="text-4xl font-bold">
         Hello, Welcome here to NovaMarket somethings{" "}
              <span className="text-pink-500">new everything!</span>
         </h1>
         <p className="text-xl">
         NovaMarket lovers of all ages into a community where
              they can discover great dress, engage with fashion lovers and meet
              their favourite literary personalities.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="NovaMarket@gmail.com"
              />
            </label>


        </div>
        <button className="btn btn-active mt-6 btn-secondary">Submit</button>

      </div>
      <div className="order-1 w-full md:w-1/2">
            <img className='w-92 h-92 ' src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D" alt="bannerimage" />
        </div>

    </div>
    </>
  )
}

export default Banner