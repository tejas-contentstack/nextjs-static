type Product = {
    id: number
    uid: string
    brand: string
    equipment: string
    randomNumber: number
  }


  type props = {
    product: Product
  }

export default function Page({product}: props) {
    return <div>
        <h1>{product.equipment}</h1>
        <h2>{product.brand}</h2>
        <label>{product.randomNumber}</label>
    </div>
  }


  export async function getServerSideProps(){
    const result = await fetch('https://random-data-api.com/api/v2/appliances')
    const product = await result.json()
    return {
        props: {
            product: {...product, randomNumber: Math.floor(Math.random()*90000) + 10000}
        },
    }
  }