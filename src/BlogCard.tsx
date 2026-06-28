import React from 'react';

interface BlogCardProps {
  title: string;
  description?: string;
  publishedDate?: string;
  imageUrl?: string;
  tags?: string[];
  color?: string;
}

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '16px',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
    width: '336px',
    display: 'flex',
    flexDirection: 'column',
    height: '380px',
  },
  imageContainer: {
    height: '188px',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f3f4f6 0%, #dbeafe 100%)',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardBody: {
    padding: '18px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
  },
  cardTitle: {
    color: '#111827',
    fontSize: '1.25rem',
    lineHeight: 1.25,
    margin: 0,
    marginBottom: '8px',
  },
  cardContent: {
    fontSize: '0.95rem',
    lineHeight: 1.5,
    color: '#4b5563',
    overflow: 'auto',
    flex: 1,
  },
  description: {
    margin: 0,
  },
  publishedDate: {
    color: '#6b7280',
    fontSize: '0.8125rem',
    margin: '10px 0 0',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  tag: {
    backgroundColor: '#eef2ff',
    border: '1px solid #c7d2fe',
    borderRadius: '4px',
    padding: '4px 8px',
    fontSize: '0.8125rem',
    color: '#3730a3',
  },
} as const;

export const BlogCard: React.FC<BlogCardProps> = ({ title, description, publishedDate, imageUrl, tags, color }) => {
  return (
    <div style={{ ...styles.card, backgroundColor: color || 'white' }}>
      <div style={styles.imageContainer}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={styles.cardImage} />
        ) : (
          <div style={{ width: '100%', height: '100%' }} />
        )}
      </div>
      <div style={styles.cardBody}>
        <h2 style={styles.cardTitle}>
          {title}
        </h2>
        <div style={styles.cardContent}>
          {description && <p style={styles.description}>{description}</p>}
          {publishedDate && (
            <p style={styles.publishedDate}>
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
    </div>
  );
};
