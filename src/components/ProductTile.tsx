import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: string;
  weight: string;
}

interface ProductTileProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductTile: React.FC<ProductTileProps> = ({ product, onOpenModal }) => {
  return (
    <div className="bg-[#faf0f0] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={300}
          height={300}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">{product.price}</span>
          <button 
            onClick={() => onOpenModal(product)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;