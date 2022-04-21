import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

const City: React.FC = () => {

    const city = [
        {
            id: 352,
            name: "Hà Nội",
            image: 'https://cdn.luxstay.com/home/location/location_1_1559734709.png'
        },
        {
            id: 2189,
            name: "Vũng Tàu",
            image: 'https://cdn.luxstay.com/home/location/location_10_1559303118.png'
        },
        {
            id: 2,
            name: "Hồ Chí Minh",
            image: 'https://cdn.luxstay.com/home/location/location_5_1559735011.png'
        },
        {
            id: 3337,
            name: "Quảng Ninh",
            image: 'https://cdn.luxstay.com/home/location/location_5_1559786196.png'
        },
        {
            id: 1324,
            name: "Nha Trang",
            image: 'https://cdn.luxstay.com/home/location/location_1_1559373089.png'
        },
        {
            id: 968,
            name: "Đà Nẵng",
            image: 'https://cdn.luxstay.com/home/location/location_16_1559303173.png'
        },
        {
            id: 2022,
            name: "Hội An",
            image: 'https://cdn.luxstay.com/home/location/location_6_1559786202.png'
        }
    ]

    return (
        <Swiper loop={true} slidesPerView={2} spaceBetween={10} breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
        }} autoplay={true}>
            {
                city.map(item => (
                    <SwiperSlide key={item.id}>
                        <Link href={{
                            pathname: '/destination/[sid]',
                            query: {
                                sid: item.id
                            }
                        }}>
                            <a>
                                <div className='relative bg-gray-800'>
                                    <Image src={item.image} alt={item.name} width={250} height={300} className="transition duration-500 hover:opacity-50 object-fit-cover" />
                                    <div className='absolute text-xl text-white font-bold z-10' style={{
                                        bottom: '10%', left: '5%'
                                    }}>
                                        {item.name}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default City