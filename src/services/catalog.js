export const getCatalogData = async (id) => {
    let res = await fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${id}`);
    if (res.ok){
        res = await res.json();
        return res[0];
    } else {
        return [];
    }
};

export const getCatalogDataAll = async (search) => {
    let res = await fetch(
        search
        ? `https://6569c6cede53105b0dd7a33a.mockapi.io/product?name=${search}`
        : `https://6569c6cede53105b0dd7a33a.mockapi.io/product`
    );
    res = await res.json();
    return res;
};

export const getCatalogDataNew = async () => {
    let res = await fetch('https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000');
    res = await res.json();
    return res
}

export const getCategoriesData = async (id) => {
    let res = await fetch(`https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${id}`);
    res = await res.json();
    return res
}

export const getCard = async (id) => {
    let res = await fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`);
    res = await res.json();
    return res
}
