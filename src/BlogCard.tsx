import React from 'react';

interface BlogCardProps {
  /**
   * The title of the blog post.
   */
  title: string;
  /**
   * The content of the blog post.
   */
  description?: string;
  /**
   * The date the blog post was published.
   */
  publishedDate?: string;
  /**
   * The URL of the image to display in the blog post.
   */
  imageUrl?: string;
  /**
   * The tags associated with the blog post.
   */
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
  imageContainer: {
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0', // Added gray background for no image
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block', // Display as block element
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

export const BlogCard: React.FC<BlogCardProps> = ({ title, description, publishedDate, imageUrl, tags }) => {
  return (
    <div style={{
      ...styles.card,
      width: '320px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={styles.imageContainer}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={styles.cardImage} />
        ) : (
          <div style={{ width: '100%', height: '100%' }} />
        )}
      </div>
      <div style={{...styles.cardBody, flex: 1}}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardContent}>{description}</p>
        {publishedDate && (
          <p style={{ ...styles.cardContent, marginTop: '8px', fontSize: '0.875rem' }}>
            Published: {publishedDate}
          </p>
        )}
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