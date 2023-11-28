import { Props } from "./app.interface";

export const SvgIcon = ({ name }: Props) => {
  switch (name) {
    case "factory":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <g clipPath="url(#clip0_21_164)">
            <path
              d="M6.25 14.3672H8.4375"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5625 14.3672H13.75"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.875 11.2422H13.125L8.125 7.49219V11.2422L3.125 7.49219V17.4922"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25 17.4922H18.75"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9961 10.3953L13.0469 3.02891C13.0682 2.87968 13.1427 2.74318 13.2567 2.64455C13.3707 2.54592 13.5165 2.49181 13.6672 2.49219H15.0828C15.2335 2.49181 15.3793 2.54592 15.4933 2.64455C15.6073 2.74318 15.6818 2.87968 15.7031 3.02891L16.875 11.2422V17.4922"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_21_164">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.617188)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "blackList":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 21.1172C16.9706 21.1172 21 17.0878 21 12.1172C21 7.14662 16.9706 3.11719 12 3.11719C7.02944 3.11719 3 7.14662 3 12.1172C3 17.0878 7.02944 21.1172 12 21.1172Z"
            stroke="#505050"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M5.63477 5.75146L18.366 18.4827"
            stroke="#505050"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "breadcrumbs":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M6 3.11719L11 8.11719L6 13.1172"
            stroke="#8E8E8E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
