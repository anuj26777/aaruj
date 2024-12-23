
import React from "react";
const BlogCard = ({ title, blogImage, about, category ,  onEdit }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-6">
    <img src={blogImage} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="text-xl   text-gray-600 font-bold mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{about}</p>
    <p className="text-sm text-gray-500 mt-2">Category: {category}</p>

    <button
      onClick={onEdit}
      className="mt-3 text-blue-500 hover:text-blue-700 underline"
    >
      Edit
    </button>
  </div>
);

export default BlogCard;
