import React from 'react';
import AmazonImage from '../../assets/images/client/amazon.svg';
import GoogleImage from '../../assets/images/client/google.svg';
import LenovoImage from '../../assets/images/client/lenovo.svg';
import PaypalImage from '../../assets/images/client/paypal.svg';
import ShopifyImage from '../../assets/images/client/shopify.svg';
import SpotifyImage from '../../assets/images/client/spotify.svg';

const OurClientAndPartners = () => {

    const logos = [AmazonImage, GoogleImage, PaypalImage, LenovoImage, ShopifyImage, SpotifyImage];
    return (
        <section className='w-full min-h-[3vw] bg-gray-50 dark:bg-[#0F172A]'>
            {/* <div className='flex flex-col items-center my-[2%] bg-white'>
                    <h6 className="text-green-600 text-[1em] font-medium uppercase mb-2">Our Clients & Partners </h6>
                </div> */}
            <div className="overflow-hidden py-6 mx-auto">
                <div
                    className="flex space-x-8"
                    style={{
                        animation: "scroll 20s linear infinite",
                    }}
                >
                    {/* Duplicate logos for seamless scroll */}
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                        >
                            <img src={logo} alt={`logo-${index}`} className="object-contain h-full" />
                        </div>
                    ))}
                </div>
                <style jsx>{`@keyframes scroll {0% {transform: translateX(0);}100% {transform: translateX(-50%);}}`}</style>
            </div>
        </section>
    )
}

export default OurClientAndPartners