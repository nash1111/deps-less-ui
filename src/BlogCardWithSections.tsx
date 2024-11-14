import React from 'react';

interface BlogCardWithSectionsProps {
  title: string;
  description?: string;
  publishedDate?: string;
  imageUrl?: string;
  tags?: string[];
  color?: string;
}

const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      margin: '16px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '320px',
      display: 'flex',
      flexDirection: 'column',
      height: '360px',
    },
    imageContainer: {
      height: '200px',
      overflow: 'hidden',
      backgroundColor: '#e0e0e0',
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    cardBody: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      height: '200px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '8px',
    },
    cardContent: {
      fontSize: '1rem',
      color: '#666',
      overflow: 'auto',
      flex: 1,
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

const ImageSection: React.FC<{ imageUrl?: string; title: string }> = ({ imageUrl, title }) => (
  <div style={styles.imageContainer}>
    {imageUrl ? (
      <img src={imageUrl} alt={title} style={styles.cardImage} />
    ) : (
      <div style={{ width: '100%', height: '100%' }} />
    )}
  </div>
);

const ContentSection: React.FC<{ title: string; description?: string; publishedDate?: string; tags?: string[] }> = ({ title, description, publishedDate, tags }) => (
  <div style={styles.cardBody}>
    <h2 style={styles.cardTitle}>
      {title}
    </h2>
    <div style={styles.cardContent}>
      {description && <p>{description}</p>}
      {publishedDate && (
        <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>
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

export const BlogCardWithSections: React.FC<BlogCardWithSectionsProps> = ({ title, description, publishedDate, imageUrl, tags, color }) => {
  return (
    <div style={{ ...styles.card, backgroundColor: color || 'white' }}>
      <ImageSection imageUrl={imageUrl} title={title} />
      <ContentSection title={title} description={description} publishedDate={publishedDate} tags={tags} />
    </div>
  );
};