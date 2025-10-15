function getData(){

    const obj={
        "name":"Saurav",
        "class":10,
        "rollnumber":1,
        "school":"DAV Public"
    }
    return obj;
}

function addData(x,y){
    return x+y
}

module.exports={
    getData,
    addData
}
//export { getData, addData}
