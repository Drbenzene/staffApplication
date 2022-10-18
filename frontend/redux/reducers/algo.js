function binaryAgent (str){

    //Convert To Array
    let arr = str.split(' ')
    //Convert To Binary
    let binary = arr.map((item) => {
        return String.fromCharCode(parseInt(item, 2))
    })
}