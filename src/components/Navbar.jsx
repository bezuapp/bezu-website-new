import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="text-white flex items-center justify-center text-2xl font-[var(--font-geist-mono)] py-5 gap-3 ">
      {/* <div className="h-[35px] w-[35px] object-contain">
        <Image src="/1.svg" alt="" width={35} height={35} />
      </div> */}
      Bezu AI
    </div>
  );
}
