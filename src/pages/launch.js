import React, {useState, useContext, useEffect} from 'react';
import Signin from '../components/signin/index'




export default function Launch() {
    const [sty, setsty] = useState('white')
    const [name, setName] = useState('')
    const header = new Headers;
            header.append('Access-Control-Allow-Origin', 'https://master.d28iptyfs5v9n5.amplifyapp.com/')


    function addName() {
        const header = new Headers()
        header.append('Content-type','application/x-www-form-urlencoded')
        header.append('Access-Control-Allow-Origin', 'https://master.d28iptyfs5v9n5.amplifyapp.com/')

        let jbody = JSON.stringify(
            {"name": name}
        );

        fetch('https://8h1o293xm3.execute-api.us-west-1.amazonaws.com/proto', {
            method: "POST",
            body: jbody,
            headers: header
        })
        .then(setsty('red'))
        .then(setName(''))
        .then(setsty('white'))
    }
//trouble with post
    return (
        <>
            <Signin>
                <Signin.Card>
                    <Signin.Title>Name and Launch Server</Signin.Title>
                    <Signin.Input placeholder="Server ID" onChange={(e) => {setName(e.target.value)}}></Signin.Input>
                    <Signin.Button style={{color: sty}} onClick={() => addName()}/>
                </Signin.Card>
            </Signin>
        </>
    )
}