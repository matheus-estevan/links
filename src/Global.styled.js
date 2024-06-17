import { createGlobalStyle} from "styled-components"

export const Theme = {
    homeBackground: "#141414",
    cardColor: "#1F1F1F",
    white: "#fff",
    linkTextColor: "#C4F82A",
    linkButtonColor: "#333333",
}

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Inter", sans-serif;;
	}

	body {
		background: ${props => props.theme.homeBackground};

		height: 100svh;
        display: flex;
        justify-content: center;
        align-items: center;
	}
`