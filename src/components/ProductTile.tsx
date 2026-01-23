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
    <article className="bg-[#faf0f0] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col" itemScope itemType="https://schema.org/Product">
      <div className="h-40 sm:h-48 overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={200}
          height={200}
          className="max-h-full max-w-full object-contain"
          itemProp="image"
        />
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2" itemProp="name">{product.name}</h3>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base" itemProp="description">{product.shortDescription}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-base sm:text-lg font-bold text-red-600" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="price" content={product.price.replace(/[^\d.]/g, '')} />
            <meta itemProp="priceCurrency" content="LKR" />
            {product.price}
          </span>
          <button 
            onClick={() => onOpenModal(product)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition duration-300 text-xs sm:text-sm"
            itemProp="url"
          >
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductTile;