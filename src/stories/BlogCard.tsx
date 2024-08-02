import React from 'react';

interface BlogCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large';
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, content, imageUrl, size = 'medium' }) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;