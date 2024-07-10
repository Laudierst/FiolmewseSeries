import styled from 'styled-components'

export const Container = styled.div`
    *{
        margin-top: 2rem;
    }
    h1 {
        margin: 3rm 0;
        color: white;
    }

    .movie {
        display: flex;
        aling-items: center;
        justify-content: center;
    }
    
    img {
        width: 400px;
        margin-left: 7px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        aling-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    button {
        background: #1DD1A1;
        boder: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 120%;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s;
    }

    .bg{
        background: #6654da;
    }

    button:hover {
        background: #5848c2;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 180%;
        color: white;
    }

    .release-date {
        opacity: 0.5;
    }

    .btnLink {
        background: #6654da;
        boder: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 120%;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s;
        text-align: center;
    }

    @media screen and (max-width: 780px) {
        *{
            margin-top: 1rem;
        }
        h1 {
            margin: 0.5rm 0;
        }
    
        .movie {
            display: flex;
            aling-items: center;
            justify-content: center;
        }
        
        img {
            width: 200px;
            height: 70vh;
            border-radius: 1rem;
        }
    
        .details {
            display: flex;
            flex-direction: column;
            aling-items: flex-start;
            margin-left: 1rem;
            max-width: 50%;
        }
        span {
            line-height: 130%;
            margin-bottom: 0.1rem;
            font-size: 80%;
        }
        button {
            .btnLink {
                background: #6654da;
                boder: none;
                cursor: pointer;
                border-radius: 1rem;
                color: white;
                padding: 0.4rem 2rem;
                margin-top: 1rem;
                font-size: 80%;
                transition: all 0.3s;
            } border-radius: 1rem;
            color: white;
            padding: 0.4rem 2rem;
            margin-top: 1rem;
            font-size: 80%;
            transition: all 0.3s;
        }

        .btnLink {
            background: rgb(15, 207, 233);
            boder: none;
            cursor: pointer;
            border-radius: 1rem;
            color: white;
            padding: 0.4rem 2rem;
            margin-top: 1rem;
            font-size: 80%;
            transition: all 0.3s;
            text-align: center;
        }
    }
`