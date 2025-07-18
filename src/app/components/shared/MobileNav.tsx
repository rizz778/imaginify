'use client'
import {
    Sheet,
    SheetContent,

    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../../../../constants"
import { Button } from "@/components/ui/button"

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <header className="header">
      <Link href="/" className='flex items-center gap-2 md:py-2'>
      <Image
      src="/assets/images/logo-text.svg"
      alt="logo"
      width={180}
      height={180}
      />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <Sheet>
  <SheetTrigger>
    <Image
    src="/assests/icons/menu.svg"
    alt="menu"
    width={32}
    height={32}
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <>
    <Image
    src='/assets/images/logo-text.svg'
    alt='logo'
    width={152}
    height={32}
    />
    <ul className='header-nav-elements'>
                    {navLinks.slice(0,6).map((link)=>{
                        const isActive=link.route===pathname

                        return (
                            <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                           
                            >
                                <Link className='sidebar-link cursor-pointer' href={link.route}>
                                <Image src={link.icon}
                                alt="logo"
                                width={24}
                                height={24}
                                
                                />
                                {link.label}
                                </Link>

                            </li>
                            
                        )
                    })}
                    </ul>
    </>
  </SheetContent>
</Sheet>

        </SignedIn>
        <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href="/sign-in">Login</Link>
                </Button>
               </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav