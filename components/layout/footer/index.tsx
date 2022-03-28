import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-500 bg-gray-900 relative p-4">
            <div className="container py-1">
                <div className="md:flex mb-2 mt-4">
                    <div className="md:w-1/3 mb-3">
                        <div className="font-bold mb-2"><i className="fa fa-bars" /> STAY CONNECTED</div>
                        <div className="mb-2">Đăng ký nhận thông tin mới nhất</div>
                        <div className="mb-3">
                            <form className="form-inline">
                                <input type="text" className="py-2 px-3 mr-2 rounded" placeholder="Email" />
                                <button type="button" className="py-2 px-3 bg-blue-600 text-white hover:bg-blue-700 rounded">Đăng ký</button>
                            </form>
                        </div>
                        <div className="text-sm">
                            <span>hoặc</span>
                            <a href="https://supreme.defzone.net" rel="nofollow" className="text-gray-200 inline-block">đăng nhập</a>
                        </div>
                    </div>
                    <div className="md:w-1/3 mb-3">
                        <div className="font-bold mb-2"><i className="fa fa-bars" /> CONTACT US</div>
                        <div className="link mt-2">
                            <div><i className="fas fa-envelope" /> <a href="mailto:info@defzone.net" className="text-gray-500 font-bold">info@defzone.net</a></div>
                            <div><i className="fas fa-phone" /> <a href="tel:+84762559696" className="text-gray-500 font-bold">(+84) 762.559.696</a></div>
                            <div><i className="fab fa-telegram-plane" /> <a href="/home/feedback" className="text-gray-500 font-bold">Feedback</a></div>
                            <div><i className="fab fa-cloudsmith" /> Hosted by <a href="https://viettelidc.com.vn?a=80042" target="_blank" className="text-gray-500 font-bold" rel="noreferrer">Viettel IDC</a></div>
                        </div>
                    </div>
                    <div className="md:w-1/3 mb-3">
                        <div className="font-bold mb-2"><i className="fa fa-bars" /> LIÊN KẾT</div>
                        <div className="mb-3">
                            <a href="https://github.com/f7deat" className="mr-1 border border-solid border-blue-600 text-blue-600 py-1 px-2 hover:bg-blue-600 hover:text-white text-upercase inline-block">Repositories</a>
                            <a href="https://github.com/def-zone" className="mr-1 border border-solid border-blue-600 text-blue-600 p-1 px-2 hover:bg-blue-600 hover:text-white text-upercase inline-block">Organization</a>
                        </div>
                        <div className="my-2">
                            <span className="mr-2">Social:</span>
                            <a href="https://fb.me/tan.dct" target="_blank" className="text-gray-200 px-2" rel="noreferrer"><i className="fab fa-facebook" /></a>
                            <a href="https://twitter.com/f7deat" target="_blank" className="text-gray-200 px-2" rel="noreferrer"><i className="fab fa-twitter" /></a>
                            <a href="https://www.youtube.com/channel/UCAjZvAS42-HkAprlNXfFVhg" target="_blank" className="text-gray-200 px-2" rel="noreferrer"><i className="fab fa-youtube" /></a>
                            <a href="https://www.instagram.com/f7deat/" target="_blank" className="text-gray-200 px-2" rel="noreferrer"><i className="fab fa-instagram" /></a>
                        </div>
                        <div className="mb-2 text-center md:text-left">
                            Made with ♥ by <a href="https://def-zone.github.io/cms" target="_blank" className="text-gray-200" rel="noreferrer"><b>DefCMS</b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-2 border-t border-gray-600">© 2019 -
                <Link href="/" passHref>
                    <span className="font-bold text-gray-500">DefZone.Net</span>
                </Link> - <a className="font-bold text-gray-500" href="https://defzone.net/home/privacy" target="_blank" rel="noreferrer">Privacy</a></div>
        </footer>

    )
}
export default Footer