
export const getProductData = async (id) => {
    let res  = await fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`)
    if (res.ok){
        res = await res.json()
        return res;
    }else{
        return []
    }
} 