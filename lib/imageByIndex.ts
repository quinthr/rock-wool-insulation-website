import image3 from '../public/slide-3.jpg';
import image4 from '../public/slide-4.jpg';

export const images: any = [image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
