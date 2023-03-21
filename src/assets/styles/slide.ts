import styled from "styled-components";

export const SlideStyle = styled.div `
    padding: 0 80px;
    margin-top: 47px;
    width: calc(100vw - 160px);

    .slide {
        width: 100%;
        display: flex;

        gap: 31px;
        
        border-bottom: 1px solid #D9D9D9;

        button {
            padding: 13px 0px;

            border: none;
            outline: none;

            background: transparent;

            font-size: 16px;
            font-weight: 500;
            color: #303642;

            cursor: pointer;
        }

        #first-btn {
            margin-left: 21px;
            font-weight: 700;

            ::before {
                content: "";
                display: flex;

                width: 100%;
                height: 4px;
                
                position: relative;
                bottom: -33px;

                background: #303642;
            }
        }
    }

    @media screen and (max-width: 900px){
        padding: 0 15px;
        margin-top: 15px;
        width: calc(100vw - 30px);

        .slide {
            width: 100%;
            display: flex;
            justify-content: center;

            gap: 31px;
            
            border-bottom: 1px solid #D9D9D9;

            button {
                padding: 13px 0px;

                border: none;
                outline: none;

                background: transparent;

                font-size: 16px;
                font-weight: 500;
                color: #303642;

                cursor: pointer;
            }

            #first-btn {
                margin-left: 0px;
                font-weight: 700;

                ::before {
                    content: "";
                    display: flex;

                    width: 100%;
                    height: 4px;
                    
                    position: relative;
                    bottom: -33px;

                    background: #303642;
                }
            }
        }
    }
`;