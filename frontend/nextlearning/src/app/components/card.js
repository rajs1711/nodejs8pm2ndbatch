import Link from "next/link"

export default function card({mydata}){
       
      console.log(mydata);

    return(
        <>
        {
        
        mydata.map((data)=>(
        <div key={data.id}>
        <br></br>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs cardborder" >
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{data.title}</h5>
            <p className="text-body mb-6">{data.body}</p>
            <Link href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none buttonbg">
                Read more
            </Link>
        </div>
        <br></br>
        </div>
        ))
    
        }
        


        
        </>
    )
}