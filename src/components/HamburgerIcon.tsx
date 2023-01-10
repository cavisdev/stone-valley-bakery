import { useStore } from "../store/store";
import { CloseSVG, MenuSVG } from "../styles/HamburgerIcon.styles";

export default function HamburgerIcon() {
  const setDropdownOpen = useStore((state) => state.setDropdownOpen);
  const dropdownOpen = useStore((state) => state.dropdownOpen);

  if (dropdownOpen)
    return (
      <CloseSVG
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-letter-x"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => setDropdownOpen()}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="4" x2="17" y2="20" />
        <line x1="17" y1="4" x2="7" y2="20" />
      </CloseSVG>
    );

  return (
    <MenuSVG
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width="48px"
      height="48px"
      viewBox="2 2 20 20"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setDropdownOpen()}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </MenuSVG>
  );
}
