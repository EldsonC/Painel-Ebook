import styled from "styled-components";

export const HeaderStyle = styled.header `
    padding: 0 80px;
    width: calc(100vw - 160px);
    height: 73px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #0E1118;

    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 37px;

            li {
                .isactive-nav {
                    text-decoration: none;
                    color: white;
                    font-size: 12px;
                    font-weight: 500;
                }

                .notactive-nav {
                    text-decoration: none;
                    color: #8C8C8C;
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }
    }

    .actions {
        display: flex;
        gap: 10px;
        .btn-add {
            width: 30px;
            height: 30px;

            border-radius: 50%;
            border: none;
            outline: none;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #303642;

            cursor: pointer;
        }
    }

    @media screen and (max-width: 900px){
        padding: 0 15px;
        width: calc(100vw - 30px);
        height: 73px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #0E1118;

        nav {
            display: none;
            ul {
                list-style: none;
                display: flex;
                gap: 37px;

                li {
                    .isactive-nav {
                        text-decoration: none;
                        color: white;
                        font-size: 12px;
                        font-weight: 500;
                    }

                    .notactive-nav {
                        text-decoration: none;
                        color: #8C8C8C;
                        font-size: 12px;
                        font-weight: 500;
                    }
                }
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            .btn-add {
                width: 30px;
                height: 30px;

                border-radius: 50%;
                border: none;
                outline: none;

                display: flex;
                justify-content: center;
                align-items: center;

                background: #303642;

                cursor: pointer;
            }
        }
    }
`;