import React from 'react';
import Image from '../../atoms/image/Image';  
import Link from '../../atoms/link/Link';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

export interface NewsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  linkUrl: string;
  className?: string; 
}

const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, title, description, date, linkUrl, className }) => {
  return (
    <div className={`card max-w-sm shadow-lg rounded-lg overflow-hidden bg-white ${className}`}>
      <Image 
        src={imageSrc} 
        alt={title} 
        className="h-64"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
          <p>{date}</p>
          
          <Link href={linkUrl} variant="primary" hover={true} className="text-blue-500">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
