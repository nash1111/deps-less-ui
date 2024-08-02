import React from 'react';

interface BlogCardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
  },
  cardBody: {
    padding: '16px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  cardContent: {
    fontSize: '1rem',
    color: '#666',
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, content, imageUrl }) => {
  return (
    <div style={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.cardImage} />}
      <div style={styles.cardBody}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardContent}>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;