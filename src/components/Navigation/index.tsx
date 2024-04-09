import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { scrollToTop } from "../../utils/scrollToTop";
import { debounce } from "../../utils/debouce";
import { BorderedButton } from "../Button";
import { useMediaQuery } from "react-responsive";

const Header = styled.header`
	position: fixed;
	width: ${(props) => (props.theme.isTabletOrMobile ? "95.5%" : "98.9%")};
	margin-right: 10px;
	height: max-content;
	top: 0px;
	padding-top: 34px;
	background: linear-gradient(180deg, #23272d 0%, rgba(35, 39, 45, 0) 100%);
	backdrop-filter: blur(4px);
	z-index: 10;
	transition: top 0.6s;
	font-family: "Avant Garde";
	display: flex;
	justify-content: space-between;
	border-bottom: ${(props) => props.theme.divider};
	align-items: center;
	.link-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		align-items: center;
		gap: 20px;
		a,
		span {
			color: ${({ theme }) => theme.primary};
			font-weight: 600;
			font-size: 20px;
			@media screen and (min-width: 750px) {
				font-size: 24px;
			}
		}
	}
	.external-links {
		text-decoration: none;
		position: relative;

		&:before {
			position: absolute;
			content: "";
			width: 0;
			border-bottom: 0px solid ${({ theme }) => theme.primary};
			left: 0;
			bottom: 0;
			transition: all 0.3s ease-in-out;
		}
		&:hover:before {
			border-top: 3px solid ${({ theme }) => theme.primary};
			width: 100%;
		}
	}
`;

const NavItems = styled.nav`
	display: flex;
	align-items: center;
	right: 0 !important;
	left: 0;
	padding-bottom: 20px;
	justify-content: space-between;

	& a {
		position: relative;
		text-decoration: none;
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
	}
`;

export const Navigation = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const isTabletOrMobile = useMediaQuery({
		query: "(max-width: 1224px)",
	});

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 50);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<React.Fragment>
			<Header style={{ top: visible ? "0" : "-117px" }}>
				<NavItems>
					<div onClick={scrollToTop}>
						<BorderedButton
							className={
								isTabletOrMobile ? "name-tag-short" : "name-tag"
							}
							overlap
						>
							{isTabletOrMobile ? (
								<span>AC</span>
							) : (
								<span>
									A<span id="n">n</span>drew Clark
								</span>
							)}
						</BorderedButton>
					</div>
				</NavItems>
				<div className="link-row">
					<a
						className="external-links"
						target="_blank"
						href="https://instagram.com/apclark_"
					>
						IG
					</a>
					<a
						className="external-links"
						target="_blank"
						href="https://www.apclark.org"
					>
						Main Portfolio ✧
					</a>
				</div>
			</Header>
		</React.Fragment>
	);
};
