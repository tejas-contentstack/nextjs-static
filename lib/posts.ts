
export const getById = async (id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json();
    return {...post, timestamp: (new Date).toISOString()};
}