// @ts-nocheck
import styled from "styled-components";

export const BorderedButton = styled.a.attrs((props) => ({
	className: "bordered-button",
}))`
	position: relative;
	display: block;
	border: ${(props) =>
			props.responsive && props.theme.isTabletOrMobile ? "2px" : "4px"}
		solid ${(props) => props.theme.primary};
	border-radius: ${(props) => (props.small ? "4" : "8")}px;
	padding: ${(props) =>
		props.small
			? "11px 15px 6px 15px"
			: props.responsive && props.theme.isTabletOrMobile
			? "3px 10px 0px 10px"
			: props.largeText && !props.theme.isTabletOrMobile
			? "44px 40px 24px 40px"
			: "12px 20px 2px 20px"};
	font-size: ${(props) =>
		props.small
			? "18px"
			: props.responsive
			? "calc(100% + 1.6vw)"
			: props.largeText
			? "calc(100% + 4.7vw)"
			: "40px"};
	background-color: ${(props) => props.theme.secondary};

	line-height: ${(props) => (props.small ? 18 : 37)}px;
	font-weight: 700;
	overflow: hidden;
	text-transform: uppercase;
	text-decoration: none;
	width: max-content;
	& span {
		mix-blend-mode: ${(props) => !props.overlap && "difference"};
		color: #fff;
	}
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${(props) => props.theme.primary};
		transform: translate3d(0, 100%, 0);
		transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
	}
	&:hover::before {
		${(props) =>
			!props.overlap &&
			`transform: translate3d(0, 0, 0);
		transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);`}
	}
	&:hover {
		cursor: pointer;
	}
	/* Styles for name tag */
	&.name-tag-short {
		margin: 0 auto;
		letter-spacing: -4px;
		padding: 12px 10px 2px 10px;
	}
	&.name-tag {
		letter-spacing: -4px;
		& #n {
			letter-spacing: -11px;
		}
	}
`;
