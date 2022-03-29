import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import Head from "next/head"
import Link from "next/link";
import { queryRoom } from "../api/rooms";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await queryRoom(context.query['id']);
    return {
        props: {
            data: data.data.data
        }
    }
}

const Room: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <Head>
                <title>Những chuyến vi vu bất tận cùng trip.defzone.net</title>
                <meta name="description" content="Đặt phòng, homestay, căn hộ studio đi du lịch, nghỉ dưỡng trên cả nước" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container">
                <div className="px-4 py-2 bg-gray-100 rounded flex gap-4 mb-2">
                    <Link href="/" passHref>
                        <div className="cursor-pointer"><i className="fas fa-home mr-1"></i>Trang chủ</div>
                    </Link>
                    {data.destinations.data.map((destination: API.Destination) => (
                        <div key={destination.id}>{destination.name}</div>
                    ))}
                </div>
                <div className="md:flex gap-4">
                    <div className="md:w-2/3 mb-4">
                        <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">{data.name}</div>
                        <div className="border p-4">
                            <div className="product-des" dangerouslySetInnerHTML={{ __html: data.introduction }}></div>
                            <div className="font-bold">Đặt phòng</div>
                            <ul>
                                <li>
                                    <a href={`${data.url}/?cid=1884`} target="_blank" rel="noreferrer" className="font-medium">Luxstay</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Room