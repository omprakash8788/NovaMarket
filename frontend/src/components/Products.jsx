import list from '../../public/list.json'
import Card from '../components/Card'
import { Link } from 'react-router-dom'


const Products = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-pink-500">Here!</span>:
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          eligendi doloribus nulla. Inventore accusantium aliquam impedit.
          Voluptate, nostrum nulla. Voluptate.
        </p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
          Back
        </button>
        </Link>
      </div>
      {/* card */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  </>

  )
}

export default Products