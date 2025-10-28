import Link from "next/link";

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  price: string;
}

interface ProductTileProps {
  product: Product;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">{product.price}</span>
          <Link 
            href={`/products/${product.id}`}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;