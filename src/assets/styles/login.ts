import styled from "styled-components";

export const StyledLogin = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    gap: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;

        gap: 11px;

        input {
            padding: 15px 28px;
            min-width: 243px;

            font-size: 12px;
            font-weight: 400;

            color: #0E1118;

            ::placeholder {
                color: #0E1118;
                font-size: 12px;
                font-weight: 400;
            }
        }

        button {
            margin-top: 19px;
            padding: 15px 28px;
            min-width: 243px;

            font-size: 12px;
            font-weight: 700;

            color: white;

            background: #0E1118;
            border: none;
            outline: none;

            cursor: pointer;
        }
    }
`;