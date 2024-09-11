
"use client"
import Link from 'next/link';
import { sidebarLinks } from '../../constants/index'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

function Bottombar() {
    const router = useRouter();
    const pathname = usePathname();
    const { userId } = useAuth();

    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    if (link.route === '/profile') {
                        link.route = `/profile/${userId}`
                    }
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombar_link ${isActive && 'bg-primary-500'}`} >
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                height={24} width={24}
                            />
                            <p className='text-light-1 text-subtle-medium max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Bottombar;