export default function Button(props){
    return(
        <>
         <input type="submit" name={props.name} value={props.value} className={`${props.buttonColor} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}/>
           
        </>
    )
}