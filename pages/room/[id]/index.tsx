import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { queryRoom, queryRooms } from "../../../api/rooms";
import Footer from "../../../components/layout/footer";
import Header from "../../../components/layout/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import RelatedRooms from "../../../components/rooms/related";
import Script from "next/script";
import Sidebar from "../../../components/layout/sidebar";
import { queryPropertyTypes } from "../../../api/collections";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await queryRoom(context.query['id']);
    const propertyTypes = await queryPropertyTypes();
    const relateds = await queryRooms({
        page: 1,
        sid: data.data.data.address.data.area_id,
        limit: 4
    })
    return {
        props: {
            data: data.data.data,
            propertyTypes: propertyTypes.data.data,
            relateds: relateds.data.data.filter(x => x.id !== data.data.data.id)
        }
    }
}

const Room: NextPage = ({ data, propertyTypes, relateds }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <Head>
                <title>Những chuyến vi vu bất tận cùng trip.defzone.net</title>
                <meta name="description" content="Đặt phòng, homestay, căn hộ studio đi du lịch, nghỉ dưỡng trên cả nước" />
                <meta name="zalo-platform-site-verification" content="JjQK5vhhCJL2-QigdSi1DNlSZpcNhbjlD3a" />
                <meta property="og:url" content={`https://trip.defzone.net/room/${data.id}`} />
                <meta property="og:title" content={data.name} />
                <meta property="og:image" content={data.featured_photo} />
                <meta property="og:description" content={data.summary} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                {
                    data.photos.data.map((photo: API.Photo) => (
                        <SwiperSlide key={photo.id}>
                            <Image src={photo.photo_url} alt="IMG" className="object-fit-cover" width={500} height={400} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <main className="container px-2">
                <div className="px-4 py-2 bg-gray-100 rounded flex gap-4 mb-2">
                    <Link href="/" passHref>
                        <a className="cursor-pointer"><i className="fas fa-home mr-1"></i>Trang chủ</a>
                    </Link>
                    {data.destinations.data.map((destination: API.Destination) => (
                        <Link href={{
                            pathname: '/',
                            query: {
                                sid: destination.id
                            }
                        }} key={destination.id}>
                            <a key={destination.id}>{destination.name}</a>
                        </Link>
                    ))}
                </div>
                <div className="md:flex gap-4">
                    <main className="md:w-2/3 mb-4">
                        <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">{data.name}</div>
                        <div className="border p-4 mb-2">
                            <div className="product-des" dangerouslySetInnerHTML={{ __html: data.introduction }}></div>
                            <div className="mb-2">
                                <div className="font-bold mb-1 text-lg">Địa chỉ</div>
                                <div className="">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <span className="mr-2">{data.address.data.full_address}</span>
                                    <a href={`https://www.google.com/maps/search/${data.address.data.full_address}`} target="_blank" rel="noreferrer" >Mở Google Map<i className="fas fa-external-link-alt ml-1"></i></a>
                                </div>
                            </div>
                            <div className="font-bold text-lg">Tiện ích</div>
                            <div className="grid grid-cols-3 p-2">
                                {
                                    data.amenities.data.map((amenity: API.AmenitiesListItem) => (
                                        <div key={amenity.id}><i className="fab fa-free-code-camp mr-1"></i>{amenity.name}</div>
                                    ))
                                }
                            </div>
                            <div className="font-bold text-lg mb-4">Đặt phòng</div>
                            <a href={`${data.url}/?cid=1884`} target="_blank" rel="noreferrer" className="font-medium text-white rounded w-full px-4 py-2 bg-green-500 text-center block hover:text-white hover:bg-green-600">Đặt phòng ngày trên Luxstay</a>
                        </div>
                        <div className="mb-4">
                            <div className="px-4 py-2 bg-gray-800 text-white rounded-t font-bold">Bình luận</div>
                            <div className="zalo-comment-plugin" data-appid="1480964497389913514" data-size="5" data-href={`https://trip.defzone.net/room/${data.id}`}></div>
                        </div>
                    </main>
                    <aside className="md:w-1/3 mb-4">
                        <div className="mb-4">
                            <div className="px-4 py-2 rounded-t bg-gray-800 text-white font-bold">Thông tin Host</div>
                            <div className="flex items-center py-2 gap-4">
                                <Image src={data.host.data.avatar} width={70} height={70} alt={data.host.data.full_name} className="rounded-full object-fit-cover" />
                                <div className="flex-grow">
                                    <div className="mb-1">
                                        <span className="mr-1 font-bold">{data.host.data.full_name}</span>
                                        <i className="text-red-600">({data.host.data.response_rate}<i className="fas fa-grin-stars mx-1 text-sm"></i>/{data.host.data.rooms}<i className="fas fa-person-booth mx-1 text-sm"></i>)</i>
                                    </div>
                                    <div className="text-gray-500">
                                        <i className="fas fa-mobile mr-1"></i>
                                        {data.host.data.phone}
                                        <i className="fas fa-check-circle ml-1 text-green-500 text-sm"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Sidebar propertyTypes={propertyTypes} />
                    </aside>
                </div>

                <div className='container mb-4'>
                    <RelatedRooms data={relateds} />
                </div>
            </main>
            <Footer />
            <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>
        </div>
    )
}
export default Room