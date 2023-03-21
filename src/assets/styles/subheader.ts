import styled from "styled-components";

export const SubHeaderStyle = styled.div `
    padding: 50px 80px;
    width: calc(100vw - 160px);

    display: flex;
    justify-content: space-between;

    .breadcrumb {
        display: flex;
        align-items: center;

        gap: 11px;

        .image-bread {
            width: 35px;
            height: 35px;

            border-radius: 50%;

            background: #303642;
        }

        span {
            font-size: 16px;
            font-weight: 700;
            color: #303642;
        }
    }

    .input-search {
        padding: 9px 16px;

        display: flex;
        align-items: center;

        gap: 10px;

        background: #F4F8FB;
        border: 1px solid #F0F0F0;

        input {
            height: 100%;

            background: transparent;
            border: none;
            outline: none;

            ::placeholder {
                font-size: 12px;
                font-weight: 400;
                color: #303642;
            }
        }
    }
`;