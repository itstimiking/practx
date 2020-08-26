import Link from 'next/link';
import Head from 'next/head';

const Layout = (props) => {
    
    return (
        <div>
            <Head>
                <title>PractX App</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        
            </Head>


            {props.children}

        </div>
    )
}


export default Layout;