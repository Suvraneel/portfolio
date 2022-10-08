import {AppProps} from 'next/app';
import Head from 'next/head';
import {FC} from 'react';
import RightBar from "../components/rightbar/rightbar";

require('../styles/globals.css');

const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Dhiraj Chauhan</title>
            </Head>
            <div className="flex flex-col h-screen">
                <Component {...pageProps} />
                <RightBar/>
            </div>
        </>
    );
};

export default App;