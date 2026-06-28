import React from 'react';

interface FeatureShowcaseItem {
  label: string;
  title: string;
  description: string;
}

interface FeatureShowcaseMetric {
  label: string;
  value: string;
}

interface FeatureShowcaseAction {
  label: string;
  href: string;
}

interface FeatureShowcaseProps {
  title: string;
  description: string;
  eyebrow?: string;
  features: FeatureShowcaseItem[];
  metrics?: FeatureShowcaseMetric[];
  primaryAction?: FeatureShowcaseAction;
  secondaryAction?: FeatureShowcaseAction;
  accentColor?: string;
  tone?: 'light' | 'dark';
  density?: 'comfortable' | 'compact';
}

const styles = {
  shell: {
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    boxShadow: '0 18px 48px rgba(15, 23, 42, 0.12)',
    display: 'grid',
    gap: '24px',
    overflow: 'hidden',
    width: '920px',
  },
  hero: {
    display: 'grid',
    gap: '18px',
  },
  eyebrow: {
    fontSize: '0.75rem',
    fontWeight: 700,
    margin: 0,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    letterSpacing: 0,
    lineHeight: 1.1,
    margin: 0,
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '620px',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  action: {
    alignItems: 'center',
    borderRadius: '6px',
    display: 'inline-flex',
    fontSize: '0.9rem',
    fontWeight: 700,
    justifyContent: 'center',
    minHeight: '40px',
    padding: '0 14px',
    textDecoration: 'none',
  },
  metricGrid: {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
  metric: {
    borderRadius: '8px',
    padding: '14px',
  },
  metricValue: {
    fontSize: '1.5rem',
    fontWeight: 800,
    lineHeight: 1,
    margin: '0 0 6px',
  },
  metricLabel: {
    fontSize: '0.8rem',
    lineHeight: 1.35,
    margin: 0,
  },
  featureGrid: {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
  feature: {
    borderRadius: '8px',
    padding: '16px',
  },
  featureLabel: {
    alignItems: 'center',
    borderRadius: '999px',
    display: 'inline-flex',
    fontSize: '0.75rem',
    fontWeight: 800,
    height: '28px',
    justifyContent: 'center',
    marginBottom: '12px',
    minWidth: '28px',
    padding: '0 9px',
  },
  featureTitle: {
    fontSize: '1rem',
    fontWeight: 800,
    lineHeight: 1.25,
    margin: '0 0 8px',
  },
  featureDescription: {
    fontSize: '0.9rem',
    lineHeight: 1.5,
    margin: 0,
  },
} as const;

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  eyebrow,
  features,
  metrics,
  primaryAction,
  secondaryAction,
  accentColor = '#0f766e',
  tone = 'light',
  density = 'comfortable',
}) => {
  const isDark = tone === 'dark';
  const padding = density === 'compact' ? '24px' : '32px';
  const background = isDark ? '#111827' : '#ffffff';
  const surface = isDark ? '#1f2937' : '#f9fafb';
  const border = isDark ? '#374151' : '#e5e7eb';
  const text = isDark ? '#f9fafb' : '#111827';
  const mutedText = isDark ? '#d1d5db' : '#4b5563';
  const subtleText = isDark ? '#9ca3af' : '#6b7280';

  return (
    <section
      style={{
        ...styles.shell,
        background,
        borderColor: border,
        color: text,
        padding,
      }}
    >
      <div style={styles.hero}>
        {eyebrow && <p style={{ ...styles.eyebrow, color: accentColor }}>{eyebrow}</p>}
        <h2 style={styles.title}>{title}</h2>
        <p style={{ ...styles.description, color: mutedText }}>{description}</p>
        {(primaryAction || secondaryAction) && (
          <div style={styles.actions}>
            {primaryAction && (
              <a
                href={primaryAction.href}
                style={{
                  ...styles.action,
                  backgroundColor: accentColor,
                  border: `1px solid ${accentColor}`,
                  color: '#ffffff',
                }}
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                style={{
                  ...styles.action,
                  backgroundColor: 'transparent',
                  border: `1px solid ${border}`,
                  color: text,
                }}
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        )}
      </div>

      {metrics && metrics.length > 0 && (
        <div style={styles.metricGrid}>
          {metrics.map((metric) => (
            <div key={metric.label} style={{ ...styles.metric, backgroundColor: surface, border: `1px solid ${border}` }}>
              <p style={{ ...styles.metricValue, color: text }}>{metric.value}</p>
              <p style={{ ...styles.metricLabel, color: subtleText }}>{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <div style={styles.featureGrid}>
        {features.map((feature) => (
          <article key={feature.title} style={{ ...styles.feature, backgroundColor: surface, border: `1px solid ${border}` }}>
            <span
              style={{
                ...styles.featureLabel,
                backgroundColor: `${accentColor}1a`,
                color: accentColor,
              }}
            >
              {feature.label}
            </span>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={{ ...styles.featureDescription, color: mutedText }}>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
