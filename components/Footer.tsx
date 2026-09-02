import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer () {
    return (
        <div className="flex justify-center h-[250px]">
            <div className="flex flex-col border-t-1 p-5 gap-4 text-[12px] w-full">
                <div className="flex flex-col md:flex-row justify-between md:px-30">
                    <div>
                        <Image className="block" src="/logo.png" alt="Logo of the company" width={80} height={50} />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <p className="text-[14px]">Join our newsletter to stay up to date on features and releases.</p>
                        <input type="text" placeholder="Enter your email" className="border p-3 text-[14px]"/>
                        <button type="submit" className="border py-3 text-[14px]">Subscribe</button>
                        <p className="text-[11px]">By subscribing you agree to our Privacy Policy and consent to receive updates from DishSpot.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:px-30 md:my-[-100px]">
                    <div className="flex gap-3">
                        <FaInstagram size={18}/>
                        <FaXTwitter size={18}/>
                        <FaLinkedin size={18}/>
                        <FaYoutube size={18}/>
                    </div>
                    <Link className="underline" href="#">Privacy Policy</Link>
                    <Link className="underline" href="#">Terms of Service</Link>
                    <p>© 2024 DishSpot. All rights reserved.</p>
                </div>
            </div>      
        </div>
    )
}