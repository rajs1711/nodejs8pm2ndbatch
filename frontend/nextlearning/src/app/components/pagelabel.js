
export default function Pagelabel({labelname,tagline="Please do action"}){
    return(
        <>
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {labelname}
          </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            {tagline}
          </p>
          <br></br>
        </>
    )
}