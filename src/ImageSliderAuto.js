import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: '',
        ButtonText: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc, ButtonText } = sliderProperty;

    const [count, setCount] = useState(0);

    const [animationCls, setAnimationCls] = useState('displayBlock fade');

    const NextClick = () => {
        setAnimationCls(() => ('displayNone fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (count <= props.ImageData.length-1) {
            setCount(count+1);
        }

        if (count === props.ImageData.length-1) {
            setCount(0);
        }
    };

    useEffect(() => {
        setSliderProperty((previous) => ({
            ...previous,
            ImageNo: props.ImageData[count].ImageNo,
            ImageName: props.ImageData[count].ImageName,
            ImageSrc: props.ImageData[count].ImageSrc,
            ButtonText: props.ImageData[count].ButtonText
        }));
    }, [count]);

    useEffect(() => {
        const interval=  setInterval(() => {
            NextClick();
        }, props.SlideInterValTime);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <>
            <div className='slideshow-container '>
                <div className="left-content">
                   
                </div>
                <div className={animationCls}>
                    <div className="numbertext">{ImageNo}</div>
                    <img src={ImageSrc} className='imageStyle' alt="Img" />
                </div>
            </div>
        </>
    );
};

export default ImageSliderAuto;

