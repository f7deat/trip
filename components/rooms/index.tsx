import Image from 'next/image'
import Link from 'next/link'

type RoomsProps = {
    dataSource: API.Payload<API.RoomListItem[]>
}

const Rooms: React.FC<RoomsProps> = (props) => {
    return (
        <div>
            <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2 mb-1">Bạn muốn đi đâu?</div>
            <div className="md:grid grid-cols-2 gap-4 mb-3">
                {
                    props.dataSource.data.map((room: API.RoomListItem) => (
                        <div key={room.id} className="h-full shadow flex flex-col rounded">
                            <Link href={{
                                pathname: '/room/[id]',
                                query: {
                                    id: room.id
                                }
                            }} passHref>
                                <div className='bg-gray-900'>
                                    <Image src={room.photos.data.thumbnail} alt={room.name} layout='intrinsic' width={500} height={230} className="transition duration-500 hover:opacity-50 object-fit-cover" />
                                </div>
                            </Link>
                            <div className='p-2 flex-1 flex flex-col'>
                                <Link href={{
                                    pathname: '/room',
                                    query: {
                                        property_type: room.property_type.data.id
                                    }
                                }} passHref>
                                    <a className='text-sm mb-1 text-red-600'>{room.property_type.data.name}</a>
                                </Link>
                                <div className='flex-1 mb-1'>
                                    <Link href={{
                                        pathname: '/room/[id]',
                                        query: {
                                            id: room.id
                                        }
                                    }} passHref>
                                        <a className='font-bold text-green-500 hover:text-green-600 cursor-pointer'>
                                            {room.name}
                                        </a>
                                    </Link>
                                </div>

                                <div className='flex items-center gap-4 mb-2'>
                                    <div>
                                        <i className='fas fa-bed mr-1 text-sm'></i>
                                        <span className='mr-1 text-red-600'>{room.num_beds}</span>
                                        <span>giường</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-person-booth mr-1 text-sm"></i>
                                        <span className='mr-1 text-red-600'>{room.num_bedrooms}</span>
                                        <span>phòng ngủ</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-shower mr-1 text-sm"></i>
                                        <span className='mr-1 text-red-600'>{room.num_bathrooms}</span>
                                        <span>phòng tắm</span>
                                    </div>
                                </div>

                                <div className="text-gray-500 mb-1">
                                    <i className="fas fa-map-marker-alt mr-1" />
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: room.address.data.area_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 text-gray-500">{room.address.data.area}</a>
                                    </Link>,
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: room.address.data.city_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 ml-1 text-gray-500">{room.address.data.city}</a>
                                    </Link>,
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: room.address.data.state_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 ml-1 text-gray-500">{room.address.data.state}</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-b text-gray-600 flex justify-between p-1 items-center">
                                <div className="flex flex-grow text-sm items-center gap-3">
                                    <div>
                                        <span className="mr-1">
                                            {room.reviews_count}
                                        </span>
                                        <i className="fas fa-comment" />
                                    </div>
                                    <div>
                                        <span className='mr-1'>{room.rating.toFixed(0)}</span>
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="bg-white w-10 h-10 flex justify-center items-center rounded-full border hover:bg-green-500 hover:text-white transtion duration-500 btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-share-alt" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <div className='text-right font-bold mb-2'>
                    Trang:
                    <span className='text-red-600 mx-1'>{props.dataSource.meta?.pagination.current_page}/{props.dataSource.meta?.pagination.total_pages}</span>
                    -
                    Tổng: <span className='text-red-600 mx-1'>{props.dataSource.meta?.pagination.total}</span>
                    phòng
                </div>
                <div className='flex gap-2'>
                    <Link href={{
                        pathname: '/',
                        query: {
                            page: ((props.dataSource.meta?.pagination.current_page || 1) - 1)
                        }
                    }}>
                        <a className='px-4 py-1 rounded bg-gray-800 text-white hover:text-white'><i className="fas fa-angle-double-left mr-1 text-sm"></i>Trang trước</a>
                    </Link>
                    <Link href={{
                        pathname: '/',
                        query: {
                            page: ((props.dataSource.meta?.pagination.current_page || 1) + 1)
                        }
                    }}>
                        <a className='px-4 py-1 rounded bg-gray-800 text-white hover:text-white'>Trang sau<i className="fas fa-angle-double-right ml-1 text-sm"></i></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Rooms