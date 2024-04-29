export const getMenuItems = async () =>{
    let res = await fetch('https://640ef1d54ed25579dc40e2a6.mockapi.io/menu')
    res = await res.json()
    return res
}