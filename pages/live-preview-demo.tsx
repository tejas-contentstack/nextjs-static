import Contentstack, { Config } from 'contentstack';

const config: Config = {
  api_key: process.env.CONTENTSTACK_API_KEY||'',
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN||'',
  environment: process.env.CONTENTSTACK_ENVIRONMENT||'',
}
const Stack = Contentstack.Stack(config);

type Song = {
  title: string
}

  type props = {
    song: Song
  }

export default function Page({song}: props) {
    return <div>
        <h1>Song</h1>
        <p>{song.title}</p>
    </div>
  }

  export async function getStaticProps(){

    try{
      const result = await getEntry('song')
      return {
          props: {song: {title: result[0].title}},
      }
    }catch(e){
      console.log(e)
      return {props:{song:{title: 'NA'}}}
    }
  }


  export const getEntry = (contentTypeUid: string) => {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();
      query
      .where('genre', 'fantasy')
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result[0]);
          },
          (error) => {
            reject(error);
          }
        );
    });
  };
  