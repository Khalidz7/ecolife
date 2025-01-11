'use client'

import { useState } from "react";
import Image from "next/image";

// Define the Product interface
interface Product {
  name: string;
  price: number;
  image: string;
  features: string[];
  description: string;
}

const products: Product[] = [
  {
    name: "Reusable Bamboo Utensils Set",
    price: 15.99,
    image:
      "https://img.freepik.com/free-photo/flat-lay-arrangement-zero-waste-products-green-background_23-2148491166.jpg?uid=R84301865&ga=GA1.1.1382324444.1734506381&semt=ais_hybrid",
    features: ["Eco-Friendly", "Reusable"],
    description:
      "A set of eco-friendly bamboo utensils, perfect for on-the-go meals.",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    image:
      "https://img.freepik.com/free-vector/realistic-isolated-thermos-flask-cup-composition-silver-metal-closed-open-lid-vector-illustration_1284-77963.jpg?uid=R84301865&ga=GA1.1.1382324444.1734506381&semt=ais_hybrid",
    features: ["Leak-Proof", "Durable"],
    description:
      "A durable water bottle designed to keep beverages hot or cold for hours.",
  },
  {
    name: "Organic Cotton Tote Bag",
    price: 12.99,
    image:
      "https://img.freepik.com/premium-vector/bring-your-own-bag-poster-use-reusable-cotton-bag_124848-105.jpg?uid=R84301865&ga=GA1.1.1382324444.1734506381&semt=ais_hybrid",
    features: ["Stylish", "Reusable"],
    description: "A reusable tote bag made from 100% organic cotton.",
  },
  {
    name: "Biodegradable Plant Pots",
    price: 9.99,
    image:
      "https://img.freepik.com/free-photo/flat-lay-growing-plants_23-2149198331.jpg?uid=R84301865&ga=GA1.1.1382324444.1734506381&semt=ais_hybrid",
    features: ["Eco-Friendly", "Gardening"],
    description:
      "A set of 5 biodegradable pots for planting herbs, flowers, or vegetables.",
  },
  {
    name: "Reusable Beeswax Food Wraps",
    price: 14.99,
    image:
      "https://img.freepik.com/free-photo/loaf-bread-tied-with-rope-marble-surface_114579-72132.jpg?t=st=1736292770~exp=1736296370~hmac=11479d12858fa85a52ffe576d02828579bcdaa640d80bb85ae020b5d3c08d3ba&w=1800",
    features: ["Sustainable", "Reusable"],
    description:
      "Reusable beeswax wraps for preserving food without plastic waste.",
  },
  {
    name: "Solar-Powered LED Lantern",
    price: 25.99,
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-modern-glowing-lamp_181624-17502.jpg?t=st=1736292839~exp=1736296439~hmac=cd5685105077c60c762358a8596d7cfe358aa31ae9b2a2a65ee5ddc099c141c5&w=1800",
    features: ["Energy Efficient", "Portable"],
    description:
      "An eco-friendly lantern charged by solar power, great for camping.",
  },
  {
    name: "Eco-Friendly Laundry Detergent Strips",
    price: 13.99,
    image:
      "https://img.freepik.com/premium-photo/set-reusable-bags-shopping-products-without-plastic-green-background-with-copy-space_255440-1348.jpg?w=1800",
    features: ["Compact", "Biodegradable"],
    description:
      "Lightweight detergent strips that are biodegradable and effective.",
  },
  {
    name: "Handmade Natural Soap Bars",
    price: 11.99,
    image:
      "https://img.freepik.com/free-photo/hygiene-cosmetic-balmy-products_23-2148287655.jpg?uid=R84301865&ga=GA1.1.1382324444.1734506381&semt=ais_hybrid",
    features: ["Organic", "Gentle on Skin"],
    description:
      "Handmade soap bars crafted from organic ingredients and free of harsh chemicals.",
  },
];

export default function Products() {
  return (
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div className="grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

// Define the props for ProductCard
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="w-full h-56">
        <a href="#">
          <Image
            className="h-full mx-auto"
            src={product.image}
            width={400}
            height={400}
            alt={product.name}
          />
        </a>
      </div>
      <div className="pt-6">
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {product.name}
        </a>
        <ul className="flex items-center gap-4 mt-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            ${product.price}
          </p>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            View Details
          </button>
        </div>
        {showDetails && (
          <div className="mt-4 text-gray-600">
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
