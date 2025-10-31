import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  darkBackground?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = "center",
  darkBackground = false
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleClasses = darkBackground 
    ? "text-3xl md:text-4xl font-bold text-white mb-4" 
    : "text-3xl md:text-4xl font-bold text-gray-900 mb-4";
    
  const subtitleClasses = darkBackground 
    ? "text-lg text-gray-200 max-w-2xl mx-auto" 
    : "text-lg text-gray-600 max-w-2xl mx-auto";

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className={titleClasses}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}
      {align === "left" ? (
        <div className="mt-4 flex justify-start">
          <div className="w-20 h-1 bg-red-600 rounded-full"></div>
        </div>
      ) : (
        <div className="mt-4 flex justify-center">
          <div className="w-20 h-1 bg-red-600 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;