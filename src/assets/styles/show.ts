import styled from "styled-components";

export const ShowStyle = styled.div `
    margin-top: 47px;
    margin-bottom: 100px;
    padding: 0px 80px;
    width: calc(100vw - 160px);
    height: 411px;

    display: flex;
    justify-content: space-between;

    .text-data {
        width: 40%;
        display: flex;
        flex-direction: column;

        gap: 25px;

        h1 {
            font-size: 16px;
            font-weight: 700;
            color: #303642;
        }

        p {
            font-size: 14px;
            font-weight: 500;
            color: #303642;

            max-width: 363px;
        }

        .actions-btn {
            display: flex;
            gap: 15px;

            button {
                padding: 8px 0;
                width: 145px;
                
                border: 1px solid #E0E0E0;

                cursor: pointer;
            }

            #btn-arq {
                background: #44FD72;
                border-color: #44FD72;
            }
        }
    }

    .books {
        width: 60%;
        height: 411px;

        overflow-y: scroll;

        background: #F4F5F7;

        table {
            margin: 0 auto;
            width: 90%;

            thead {
                height: 50px;
                position: sticky;
                top: 0;

                background: #F4F5F7;

                td {
                    font-size: 12px;
                    font-weight: 600;
                    color: #565656;
                }
            }

            tbody {
                .first-td {
                    display: flex;
                    gap: 13px;
                    align-items: center;
                    .image {
                        width: 48px;
                        height: 48px;

                        background: #D9D9D9;

                        border-radius: 50%;
                    }

                    h1 {
                        font-size: 14px;
                        font-weight: 600;
                        color: #303642;
                    }

                    span {
                        font-size: 12px;
                        font-weight: 400;

                        color: #909090;
                    }
                }

                td {
                    margin-bottom: 22px;
                    font-size: 12px;
                    font-weight: 600;

                    color: #909090;

                    
                    .container-actions {
                        display: flex;
                        justify-content: flex-end;
                        gap: 12px;

                        .get-book {
                            width: 143px;
                            height: 37px;
    
                            background: #0E1118;
                            border: none;
                            outline: none;
    
                            font-size: 12px;
                            font-weight: 600;
                            color: white;
    
                            cursor: pointer;
                        }

                        button {
                            background: transparent;
                            border: none;
                            outline: none;

                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
`;