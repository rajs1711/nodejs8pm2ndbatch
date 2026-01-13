import Link from 'next/link'
import Navigationlinks from './navigationlinks'
export default function Footer(){

    return(
<footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 myfooter">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Programming Classes</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <Navigationlinks/>
        </li>

    </ul>
    </div>
</footer>

    )
}