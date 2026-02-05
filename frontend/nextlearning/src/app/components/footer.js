
import Navigationlinks from './navigationlinks'
import Copyright from './copyright'
export default function Footer(){
    
    const year=2026;

    return(
<footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 myfooter">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-body sm:text-center">
        <Copyright year='2026'/>
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