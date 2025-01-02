


import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
<div  className="h-[80px] bg-slate-300  font-semibold md:text-[22px]  flex items-center ">
<div className="mx-[10px] md:leading-[80px] hidden">
© 2025 Zain&apos;s Blog. All rights reserved.
</div>

<div className="mx-[10px] md:block">
© 2025 Zain&apos;s Blog. All rights reserved.
</div>

<div className="flex ml-auto space-x-8  md:text-[33px]  text-[22px]">
  <Link href="./">
<p><FaFacebook className='text-blue-600 hover:text-green-50 '/></p>
</Link>

<Link href="./">
  <p><FaTwitter className='text-blue-600 hover:text-green-50'/></p>
</Link>

<Link href="./">
  <p><FaInstagram className='text-blue-600 hover:text-green-50'/></p>
</Link>

<Link href="https://www.linkedin.com/in/zain-khan-coding/">
  <p><FaLinkedin className='text=blue-600 hover:text-green-50'/></p>
</Link>
</div>

</div>

    </div>
  )
}
