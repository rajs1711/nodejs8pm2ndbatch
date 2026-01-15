import Button from '../components/button'
import Pagelabel from '../components/pagelabel'
export default function Login(){
    return(
    <>
     <div className="bg-white py-24 sm:py-32 flex justify-center">
      <div className="mx-auto grid max-w-7xl gap-30 px-6 lg:px-8 xl:grid-cols-1 mysigupwidth" >
        <div className="max-w-xl">
          <Pagelabel labelname="SignIn Page"/>
              <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Email/username</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Password</label>
            </div>
            <Button name="signin" value="SignIn" buttonColor="text-white bg-green-700 hover:bg-blue-800"/>
           </form>
        </div>
          
      </div>
    </div>
     </>
     )
}