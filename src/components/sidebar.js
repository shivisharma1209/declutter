import { FaChartBar, FaCog, FaQuestionCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";



export default function Sidebar() {
    const [isChannelsOpen, setIsChannelsOpen] = useState(false);

    const toggleChannels = () => {
        setIsChannelsOpen(!isChannelsOpen);
    };

    return (
        <div className="flex h-screen flex-col" style={{ position: 'relative', zIndex: 10 }}>
            <div className="bg-white-100 p-4 flex items-center">
                <div className="w-10 h-10 bg-white-500 rounded-md flex items-center justify-center text-white">
                    <img src="https://s3-alpha-sig.figma.com/img/46bf/a674/e0eb36a3e33c5afa7483a1069db52af0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tFbf4eOtuF2ueJw9oBoisPgvQzm8stojrUGKEVG9mUQ~Kj3~v11cu6yfsiMSwXeRZnF6-0zrDexry5BCHk9lpDFUAQYVG8ZmFOXm3-lsWb7FU5LTrqCA0TUWXSRuSZaASKSSsWJEsRplYtqE~C~nUXeAFO1tLDBv2fP5HKR98eAhc1w3MQGs7Zp7GJLnwDF6klnQ1tkGPsG4l-78jqbHdH8BARgC7icMEPd4nPaoxjAwad-ScfWjtDXQhCpjjNuj0veDq9PL1M1zanPTxllVyEceeBDttMgL9~Y57hGDsxFlD9fkQx9jPdG~XPuVTpdLs9NTuvOs6ynRueoOkMnshg__" alt="Image" className="w-auto h-full object-cover rounded-xl border-[2px] border-green-700"></img>
                </div>
                <div className="ml-auto">
                    <button className="w-[180.88px] h-[36px] rounded-xl text-black bg-white border-1 border-gray-300 flex p-1">
                        <div className="w-[24px] h-[24px] bg-purple-600 rounded-md text-white">SS</div>
                        <div className="pl-2">Test_brand</div>
                    </button>
                </div>
            </div>
            {/* Mini sidebar on the left */}
            <div className="flex h-full">
                <div className="w-[51px] h-[755px] bg-white h-full flex flex-col items-center border-r">
                    {/* Profile icon at top */}
                    <div className="w-[50px] h-[52px] bg-white-500 rounded-md flex items-center justify-center text-white ">
                        <img src="https://s3-alpha-sig.figma.com/img/2110/090e/3a61af9400e6657aae12698250cae3f6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xs17xl1XOdraXlujnIka~Y0dKVu4C362gn20duU8YvaYxzz~51g5EUHJ2TNSTuAFeU0CeRyFLLsrL~cw1SHTRZeZxkJbiBC3b6aJZ~cbpx7HuTx4AoXoNViwCh-~ddTH3g3KJWKwq5PLAVTHFH3PNPxOhyMvAewVYd6-rr2lh3v5BKh9VnBFqgFgaWV3CfXuU5UczQHb0diQNgOLuZVu9ZXeG2cqHLwej6lhVBnWQGDhzxrgNoJo959Uyq0nQ7vHvuzfZOH4DALiIwrpX-kDl176yF8Rx3fqv5~9q9~EXTIOwN2YUa6upXO~zRX~GY44AWffGPiu-fGF2GdVFN8ltw__" alt="Image" className="w-10 h-10 object-cover rounded-xl border-[0.5px] border-gray-200"></img>
                    </div>

                    {/* Mini sidebar icons */}
                    <div className="flex flex-col items-center">
                        <div className="w-[50px] h-[52px] bg-white-700 rounded-full flex items-center justify-center text-white">
                            <img src="https://s3-alpha-sig.figma.com/img/fe7b/54eb/ce46ec35b19e26a6c59da122cf1cbafb?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CE1p2~mVK2XD-uiUe22Eb5zT7L60SCH4ALxQGPvweI1sBN9or~vqLPR76LgXvjxjV0~sq0~dNa5TDGFpuQ~DodlyQ-xQuvh8oURO35NOID5ek5OPcommkeWwiilknIYMCbHmJD0tNqe8Jc1EwYHkto-~KHfwkPtsFykW27lI4KxPC--XUL-siWPXXVBwuBZJSXd-VPIYx3ZNFY8qfz~e~BK2p4G9dwu19-35Uvaoi4RJVO1mKaPuR3ggf1ZP3ZJHnD7OCP0ERqGTbgmr53yZYd8I3hlNZuXXsxiMCf6dbaoNEVxcqokH7x2JLkmgphvzGyomNpeViKA8wSzXezANaw__" alt="Image" className="w-10 h-10 object-cover rounded-xl"></img>
                        </div>
                    </div>
                    <div className="w-[50px] h-[52px] bg-transparent flex items-center justify-center text-green-700">
                        <div className="w-[40px] h-[40px] object-cover rounded-xl border-[0.5px] border-gray-500 flex items-center justify-center">
                            <svg width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>


                    {/* Purple icon at bottom */}
                    <div className="mt-auto w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                        <span>SS</span>
                    </div>
                </div>

                {/* Main sidebar */}
                <div className="w-[237px] h-[755px] bg-gray-50 h-full shadow-md text-black flex flex-col">

                    {/* Sidebar navigation */}
                    {/* <div> */}
                        <div className="flex-1 py-2 w-[205px] h-[236px]">
                            <ul >
                                <li className="text-gray-700 hover:bg-gray-100">
                                    <Link href="#" className="flex items-center p-4">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 21V13H15V21"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Overview
                                    </Link>
                                </li>
                                <li className="text-gray-700">
                                    <button
                                        onClick={toggleChannels}
                                        className="flex items-center p-4 w-full text-left hover:bg-gray-100"
                                    >
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="6" width="18" height="12" rx="2" ry="2"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                            <rect x="5" y="8" width="10" height="8"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                            <circle cx="17" cy="12" r="1" fill="currentColor" />
                                            <circle cx="19" cy="12" r="1" fill="currentColor" />
                                            <circle cx="17" cy="15" r="1" fill="currentColor" />
                                            <circle cx="19" cy="15" r="1" fill="currentColor" />

                                            <path d="M7 3L12 7L17 3"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                            <path d="M7 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M17 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Channels
                                        <span className="ml-auto">{isChannelsOpen ? "v" : ">"}</span>
                                    </button>
                                    {isChannelsOpen && (
                                        <ul className="pl-8 ml-4">
                                            <li className="py-2">
                                                <Link href="#" className="block text-gray-600">
                                                    Meta Ads
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="#" className="block text-gray-600">
                                                    Google Ads
                                                </Link>
                                            </li>
                                            <li className="py-2 bg-green-200 rounded-xl">
                                                <Link href="#" className="block px-2 text-gray-700">
                                                    Quick Commerce
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="text-gray-700 hover:bg-gray-100">
                                    <Link href="#" className="flex items-center p-4">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <rect x="3" y="3" width="18" height="14" rx="2" ry="2"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                            <path d="M7 21H21C21.55 21 22 20.55 22 20V10C22 9.45 21.55 9 21 9H12C11.45 9 11 9.45 11 10V20C11 20.55 11.45 21 12 21Z"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                            <circle cx="9" cy="7" r="1.5" fill="currentColor" />

                                            <path d="M4 17L9 12L13 16L18 11L21 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        Creatives
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Bottom section with help and settings */}
                        <div className="mt-auto">
                            <ul>
                                <li className="hover:bg-gray-100">
                                    <Link href="#" className="flex items-center p-4 text-gray-600">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="12" cy="8" r="1" fill="currentColor" />
                                        </svg>
                                        Help
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100">
                                    <Link href="#" className="flex items-center p-4 text-gray-600">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div >
    );
}