'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import stageImage1 from '@/assets/stage1.jpeg';
import stageImage2 from '@/assets/stage2.jpeg';
import stageImage3 from '@/assets/stage3.jpeg';

const images = [stageImage1, stageImage2, stageImage3];

export default function ImageSlideShow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 2000); 

        return () => clearInterval(timer);
    },[currentImageIndex]);

    return (
        <Image 
            className="relative m-auto rounded-xl shadow-2xl hover:opacity-75"
            src={images[currentImageIndex]}
            width={800}
            height={600} 
            alt='Stage Image'
        />
    )
    
}