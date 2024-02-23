import APP_LINKS from "@/app/utils/constant";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { UrlObject } from "url";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="p-5 flex justify-between items-center">
      <div>
      <Image 
src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75" 
alt="logo"
width={200}
height={50}>
</Image>
      </div>
      <div className="flex gap-10 items-center ">
        {APP_LINKS.map((link: { href: string | UrlObject; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
          <Link href={link.href}>
            <p className="font-semibold">{link.name}</p>
          </Link>
        ))}
      </div>
      <div>
        <Input placeholder="Search Products" className="h-8" />
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative">
        <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-1 top-0">
          <p className="text-white text-xs">10</p>
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Header;