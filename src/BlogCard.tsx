import React from 'react';

interface BlogCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
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
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    padding: '4px 8px',
    fontSize: '0.875rem',
    color: '#333',
  },
} as const;

export const BlogCard: React.FC<BlogCardProps> = ({ title, description: content, imageUrl, tags }) => {
  return (
    <div style={{
      ...styles.card,
      width: '320px',
      minHeight: '360px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.cardImage} />}
      <div style={styles.cardBody}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardContent}>{content}</p>
        {tags && tags.length > 0 && (
          <div style={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;