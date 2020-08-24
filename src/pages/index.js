import Layout from '../Layout';

export default function Home() {
  return (

    <Layout>
        <div className="container-fluid">
            <p> The PractX app {process.env.customKey} </p>  
        </div>
    </Layout>

  )
}
