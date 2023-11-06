import { useState, useEffect } from 'react';

interface ImageProps {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  className?: string;
  altText?: string;
}

const ResponsiveImage: React.FC<ImageProps> = ({
  mobileImage,
  tabletImage,
  desktopImage,
  altText = 'Image',
  className,
}) => {
  const [imageSrc, setImageSrc] = useState(getImageSrc(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(getImageSrc(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileImage, tabletImage, desktopImage]);

  function getImageSrc(width: number) {
    if (width < 376) {
      return mobileImage;
    } else if (width >= 376 && width < 992) {
      return tabletImage;
    } else {
      return desktopImage;
    }
  }

  return <img src={imageSrc} alt={altText} className={className} />;
};

export default ResponsiveImage;
