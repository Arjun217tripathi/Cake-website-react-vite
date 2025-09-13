import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  withAccent?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  withAccent = true
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`${alignmentClasses[alignment]} mb-8 md:mb-12`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-3">
        {withAccent && (
          <span className="inline-block w-10 h-1 bg-primary mb-3 mr-2 rounded"></span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="text-text/80 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;