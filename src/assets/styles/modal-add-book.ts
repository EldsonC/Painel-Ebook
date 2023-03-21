import styled from "styled-components";

export const StyleModalAddBook = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0px;

    background: #000000B2;

    z-index: 1000;

    .container-form {
        width: 630px;
        height: 433px;

        display: flex;

        background: white;

        header {
            padding-top: 12px;
            padding-right: 26px;
            width: calc(100% - 26px);
            
            display: flex;
            justify-content: flex-end;

            position: sticky;
            top: 0px;
        }

        .select-image {
            width: 214px;
            height: 100%;

            position: sticky;
            top: 0px;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #0E1118;

            input {
                display: none;
            }

            label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                
                cursor: pointer;

                span {
                    color: white;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }

        form {
            width: 417px;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 11px;

            input, textarea {
                padding: 15px 21px;
                width: calc(259px - 42px);
                background: #F4F8FB;
                border: 1px solid #E0E0E0;
                outline: none;
            }

            .divider-inputs {
                width: 259px;
                display: flex;

                gap: 9px;

                input {
                    width: calc(125px - 42px);
                }

            }

            .actions-form {
                width: 259px;

                display: flex;
                gap: 9px;

                button {
                    width: 125px;
                    height: 45px;

                    border: 1px solid #F7F8FC;
                    outline: none;

                    cursor: pointer;
                }

                #btn-save {
                    border: 1px solid #44FD72;
                    background: #44FD72;
                }
            }
        }
    }
    @media screen and (max-width: 900px){
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0px;

        background: #000000B2;

        z-index: 1000;

        .container-form {
            width: 95%;
            height: auto;

            display: flex;
            flex-direction: column;

            background: white;

            header {
                padding-top: 12px;
                padding-right: 26px;
                width: calc(100% - 26px);
                
                display: none;
                justify-content: flex-end;

                position: sticky;
                top: 0px;
            }

            .select-image {
                width: 100%;
                height: 300px;

                position: sticky;
                top: 0px;

                display: flex;
                justify-content: center;
                align-items: center;

                background: #0E1118;

                input {
                    display: none;
                }

                label {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    
                    cursor: pointer;

                    span {
                        color: white;
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
            }

            form {
                padding-bottom: 50px;
                margin-top: 50px;
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                gap: 11px;

                input, textarea {
                    padding: 15px 21px;
                    width: calc(259px - 42px);
                    background: #F4F8FB;
                    border: 1px solid #E0E0E0;
                    outline: none;
                }

                .divider-inputs {
                    width: 259px;
                    display: flex;

                    gap: 9px;

                    input {
                        width: calc(125px - 42px);
                    }

                }

                .actions-form {
                    width: 259px;

                    display: flex;
                    gap: 9px;

                    button {
                        width: 125px;
                        height: 45px;

                        border: 1px solid #F7F8FC;
                        outline: none;

                        cursor: pointer;
                    }

                    #btn-save {
                        border: 1px solid #44FD72;
                        background: #44FD72;
                    }
                }
            }
        }
    }

`;