import React, {useState, useContext, useEffect} from 'react';
import Signin from '../components/signin/index'



export default function Launch() {
    const [sty, setsty] = useState('white')

    const header = new Headers;
            header.append('Access-Control-Allow-Origin', 'https://master.d28iptyfs5v9n5.amplifyapp.com/')

    function get(){
        console.log('please')
    }

    
    return (
        <>
            <Signin>
                <Signin.Card>
                    <Signin.Title>Launch Cluster</Signin.Title>
                    <Signin.Button style={{color: sty}} onClick={() => fetch('https://9gozbzgseh.execute-api.us-west-1.amazonaws.com/dev').then(setsty('red'))}/>
                </Signin.Card>
            </Signin>
        </>
    )
}