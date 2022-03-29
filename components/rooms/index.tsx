import Image from 'next/image'
import Link from 'next/link'

type RoomsProps = {
    dataSource: API.RoomListItem[]
}

const Rooms: React.FC<RoomsProps> = (props) => {
    return (
        <div className="md:grid grid-cols-3 gap-4 mb-4">
            {
                props.dataSource.map((room: API.RoomListItem) => (
                    <div key={room.id} className="h-full shadow flex flex-col rounded">
                        <Link href={{
                            pathname: '/room',
                            query: {
                                id: room.id
                            }
                        }} passHref>
                            <div className='bg-gray-900'>
                                <Image src={room.photos.data.thumbnail} alt={room.name} layout='intrinsic' width={400} height={200} className="transition duration-500 hover:opacity-50 object-fit-cover" />
                            </div>
                        </Link>
                        <div className='p-2 flex-1 flex flex-col'>
                            <div className='flex-1'>
                                <Link href={{
                                    pathname: '/room',
                                    query: {
                                        id: room.id
                                    }
                                }} passHref>
                                    <div className='font-bold text-green-500 hover:text-green-600 cursor-pointer'>
                                        {room.name}
                                    </div>
                                </Link>
                            </div>
                            <div className='text-gray-500'>
                                <i className='fas fa-bed'></i> {room.num_beds}
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
                                <button type="button" className="bg-white w-8 h-8 flex justify-center items-center rounded-full border hover:bg-green-500 hover:text-white transtion duration-500 btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-share-alt" /></button>
                                <ul className="dropdown-menu p-0">
                                    <li><a data-title="Twitter" href="https://twitter.com/share?url=https://defzone.net/post/su-hinh-thanh-teyvat-duoi-thoi-cua-vi-than-dau-tien-va-vi-than-thu-hai-772.html" rel="nofollow" className="w-10 h-10 flex bg-blue-300 text-white hover:text-white items-center justify-center rounded-full hover:bg-blue-400"><i className="fab fa-twitter" /></a></li>
                                    <li><a data-title="Facebook" href="https://www.facebook.com/sharer.php?u=https://defzone.net/post/su-hinh-thanh-teyvat-duoi-thoi-cua-vi-than-dau-tien-va-vi-than-thu-hai-772.html" rel="nofollow" className="w-10 h-10 flex bg-blue-500 text-white hover:text-white items-center justify-center rounded-full hover:bg-blue-600"><i className="fab fa-facebook" /></a></li>
                                    <li><a data-title="Pinterest" href="https://pinterest.com/pin/create/button/?url=https://defzone.net/post/su-hinh-thanh-teyvat-duoi-thoi-cua-vi-than-dau-tien-va-vi-than-thu-hai-772.html" rel="nofollow" className="w-10 h-10 flex bg-red-500 text-white hover:text-white items-center justify-center rounded-full hover:bg-red-600"><i className="fab fa-pinterest" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Rooms