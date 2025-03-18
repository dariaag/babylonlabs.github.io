import React, { ComponentProps } from 'react';

export function AndroidIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'var(--docs-color-android)' }}
      {...props}
    >
      <path d="M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 102.558 0v-4.53c0-.706-.572-1.278-1.279-1.278zm-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 102.558 0v-4.53A1.277 1.277 0 005.656 8.71zm8.889-3.809l.768-1.388a.343.343 0 00-.133-.47.344.344 0 00-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 00-.471-.135.345.345 0 00-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809zM9.76 6.869a.346.346 0 11.005-.693.346.346 0 01-.005.693zm4.48 0a.347.347 0 010-.692.346.346 0 010 .692zM7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 002.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148v7.092z" />
    </svg>
  );
}

export function AngularIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <rect width={64} height={64} rx={10} fill="#262626" />
      <g clipPath="url(#clip0_5634_80959)">
        <path
          d="M9.018 16.033l22.201-7.91 22.8 7.77-3.692 29.373L31.219 55.85 12.41 45.407 9.018 16.033z"
          fill="#E23237"
        />
        <path
          d="M54.018 15.893L31.22 8.123v47.726l19.108-10.565 3.691-29.391z"
          fill="#B52E31"
        />
        <path
          d="M31.254 13.695L17.42 44.475l5.168-.088 2.777-6.943h12.41l3.042 7.031 4.94.088-14.503-30.868zm.035 9.862l4.676 9.773h-8.79l4.114-9.773z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_5634_80959">
          <path fill="#fff" transform="translate(9 8)" d="M0 0H45.1765V48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AppleIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.665 16.811a10.316 10.316 0 01-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 011.73-1.751 4.65 4.65 0 012.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 001.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 01-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
    </svg>
  );
}

export function APIIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <rect width={28} height={28} fill="#ce6533" rx={4} />
      <g stroke="#fff" clipPath="url(#api-svg-icon)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 15.875h1.25m2.5 0H19"
        />
        <path d="M9.625 16.188a.312.312 0 110-.625m0 .625a.312.312 0 100-.625m0 5.625a.312.312 0 110-.625m0 .625a.312.312 0 100-.625" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 20.875h1.25m2.5 0H19m2.5-5a2.5 2.5 0 01-2.5 2.5H9a2.5 2.5 0 110-5h10a2.5 2.5 0 012.5 2.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.5 20.875a2.5 2.5 0 01-2.5 2.5H9a2.5 2.5 0 110-5h10a2.5 2.5 0 012.5 2.5zm1.767-6.855a4.065 4.065 0 00-3.952-4.995 4.03 4.03 0 00-2.301.72 6.245 6.245 0 10-11.855 3.652"
        />
      </g>
      <defs>
        <clipPath id="api-svg-icon">
          <path fill="#fff" d="M4 4h20v20H4z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DiscordIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.075 1.826a.48.48 0 00-.127-.003c-.841.091-2.121.545-2.877.955a.48.48 0 00-.132.106c-.314.359-.599.944-.822 1.498C.887 4.95.697 5.55.59 5.984.236 7.394.043 9.087.017 10.693a.48.48 0 00.056.23c.3.573.947 1.104 1.595 1.492.655.393 1.42.703 2.036.763a.48.48 0 00.399-.153c.154-.167.416-.557.614-.86.09-.138.175-.27.241-.375.662.12 1.492.19 2.542.19 1.048 0 1.878-.07 2.54-.19.066.106.15.237.24.374.198.304.46.694.615.861a.48.48 0 00.399.153c.616-.06 1.38-.37 2.035-.763.648-.388 1.295-.919 1.596-1.492a.48.48 0 00.055-.23c-.025-1.606-.219-3.3-.571-4.71a12.98 12.98 0 00-.529-1.601c-.223-.554-.508-1.14-.821-1.498a.48.48 0 00-.133-.106c-.755-.41-2.035-.864-2.877-.955a.48.48 0 00-.126.003 1.18 1.18 0 00-.515.238 2.905 2.905 0 00-.794.999A14.046 14.046 0 007.5 3.02c-.402 0-.774.015-1.117.042a2.905 2.905 0 00-.794-.998 1.18 1.18 0 00-.514-.238zm5.943 9.712a23.136 23.136 0 00.433.643c.396-.09.901-.3 1.385-.59.543-.325.974-.7 1.182-1.017-.033-1.506-.219-3.07-.54-4.358a12.046 12.046 0 00-.488-1.475c-.2-.498-.415-.92-.602-1.162-.65-.337-1.675-.693-2.343-.79a.603.603 0 00-.058.04 1.5 1.5 0 00-.226.22 2.52 2.52 0 00-.113.145c.305.056.577.123.818.197.684.21 1.177.5 1.418.821a.48.48 0 11-.768.576c-.059-.078-.316-.29-.932-.48-.595-.182-1.47-.328-2.684-.328-1.214 0-2.09.146-2.684.329-.616.19-.873.4-.932.479a.48.48 0 11-.768-.576c.241-.322.734-.61 1.418-.82.24-.075.512-.141.816-.197a2.213 2.213 0 00-.114-.146 1.5 1.5 0 00-.225-.22.604.604 0 00-.059-.04c-.667.097-1.692.453-2.342.79-.188.243-.402.664-.603 1.162-.213.53-.39 1.087-.487 1.475-.322 1.288-.508 2.852-.54 4.358.208.318.638.692 1.181 1.018.485.29.989.5 1.386.589a16.32 16.32 0 00.433-.643c-.785-.279-1.206-.662-1.48-1.072a.48.48 0 01.8-.532c.26.392.944 1.086 4.2 1.086 3.257 0 3.94-.694 4.2-1.086a.48.48 0 01.8.532c-.274.41-.696.794-1.482 1.072zM4.08 7.012c.244-.262.575-.41.92-.412.345.002.676.15.92.412.243.263.38.618.38.988s-.137.725-.38.988c-.244.262-.575.41-.92.412a1.263 1.263 0 01-.92-.412A1.453 1.453 0 013.7 8c0-.37.137-.725.38-.988zM10 6.6c-.345.002-.676.15-.92.412-.243.263-.38.618-.38.988s.137.725.38.988c.244.262.575.41.92.412.345-.002.676-.15.92-.412.243-.263.38-.618.38-.988s-.137-.725-.38-.988A1.263 1.263 0 0010 6.6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ElectronIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={28} height={28} rx={3} fill="#2B2E3A" />
      <path
        d="M6.067 13.953a.464.464 0 00.444-.34.46.46 0 00-.045-.35c-.771-1.339-.835-2.443-.349-3.281.668-1.152 2.513-1.577 4.935-1.139a.462.462 0 00.462-.715.463.463 0 00-.297-.191c-1.369-.248-2.625-.243-3.628.014-1.045.267-1.828.81-2.271 1.57-.656 1.133-.595 2.565.348 4.2a.461.461 0 00.4.232zM18.95 8.737c1.51.02 2.466.437 2.943 1.26.666 1.147.118 2.944-1.466 4.805a.46.46 0 00.546.716.463.463 0 00.159-.12c.896-1.053 1.516-2.134 1.793-3.127.287-1.031.207-1.978-.235-2.736-.647-1.115-1.881-1.695-3.73-1.72h-.007a.461.461 0 00-.006.922h.003zm-1.648 12.711a.463.463 0 00-.633.157c-.769 1.273-1.714 1.973-2.66 1.973-1.336 0-2.626-1.373-3.457-3.675a.463.463 0 00-.871.312c.469 1.301 1.1 2.379 1.828 3.115.755.766 1.62 1.172 2.5 1.172 1.283 0 2.51-.86 3.452-2.42a.459.459 0 00-.159-.632v-.002zm4.933-3.579a1.507 1.507 0 00-1.402 2.078c-1.959.914-5.615.225-8.993-1.716-1.543-.887-2.914-1.963-3.966-3.113a.464.464 0 00-.803.29.46.46 0 00.12.332c1.116 1.218 2.563 2.356 4.188 3.29 1.888 1.083 3.856 1.81 5.692 2.1.542.088 1.09.133 1.64.136 1.084 0 2.016-.201 2.743-.6a1.51 1.51 0 10.783-2.797h-.002zm0 2.093a.59.59 0 01-.367-.127.467.467 0 00-.103-.104.59.59 0 11.469.231h.001z"
        fill="#9FEAF9"
      />
      <path
        d="M5.848 17.871c.027-.996.582-2.203 1.579-3.429 1.087-1.334 2.657-2.625 4.422-3.64 1.559-.895 3.056-1.495 4.597-1.824a.462.462 0 10-.193-.9c-1.634.348-3.224.984-4.865 1.925-3.946 2.267-6.58 5.585-6.46 8.117a1.515 1.515 0 10.92-.249zm-.084 2.091a.586.586 0 11.008-1.17.586.586 0 01-.008 1.17z"
        fill="#9FEAF9"
      />
      <path
        d="M14.01 6.515a1.51 1.51 0 001.243-.647c.838.548 1.594 1.64 2.147 3.099.61 1.612.93 3.534.93 5.557 0 1.742-.243 3.391-.703 4.856a.456.456 0 00.303.578.464.464 0 00.578-.302c.489-1.553.747-3.297.747-5.132 0-2.211-.364-4.302-1.053-6.047-.676-1.71-1.6-2.925-2.679-3.523a1.514 1.514 0 10-1.514 1.561zm0-2.093A.586.586 0 1114 5.592a.586.586 0 01.008-1.17zm-.244 8.986a1.142 1.142 0 10.483 2.231 1.14 1.14 0 00.89-1.36 1.144 1.144 0 00-1.373-.871z"
        fill="#9FEAF9"
      />
    </svg>
  );
}

export function FlutterIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width={48} height={48} rx={10} fill="#262626" />
      <g clipPath="url(#clip0)">
        <path
          d="M27.226 5.908L8.86 24.272l5.684 5.684 24.05-24.048h-11.37zM27.098 22.843l-9.832 9.833 5.705 5.79 5.674-5.673 9.95-9.95H27.098z"
          fill="#47C5FB"
        />
        <path
          d="M22.97 38.467l4.32 4.319h11.304l-9.95-9.993-5.673 5.674z"
          fill="#00569E"
        />
        <path
          d="M17.201 32.74l5.684-5.685 5.76 5.738-5.674 5.674-5.77-5.727z"
          fill="#00B5F8"
        />
        <path
          d="M22.97 38.467l4.725-1.568.47-3.626-5.194 5.194z"
          fill="url(#paint0_linear)"
          fillOpacity={0.8}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={23.176}
          y1={34.6749}
          x2={26.9125}
          y2={36.0213}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M8.86133 5.90771H38.67933V42.83081H8.86133z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HTMLIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <rect width={100} height={100} fill="#262626" rx={20} />
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M25.42 6h3.908v3.874h3.602V6h3.908v11.725H32.93v-3.909h-3.568v3.909h-3.943m16.585-7.817h-3.45V6h10.824v3.908h-3.466v7.817h-3.908M51.094 6h4.096l2.515 4.13L60.219 6h4.095v11.725h-3.908v-5.812l-2.735 4.214-2.736-4.214v5.812h-3.84M66.252 6h3.908v7.85h5.54v3.875h-9.448"
        />
        <path
          fill="#E44D26"
          d="M25.284 86.033l-5.608-62.939h61.648L75.716 86 50.45 93"
        />
        <path fill="#F16529" d="M50.5 87.647V28.26h25.2l-4.81 53.695" />
        <path
          fill="#EBEBEB"
          d="M31.129 35.957H50.5v7.715H39.591l.714 7.901H50.5v7.697H33.236m.34 3.875h7.748l.544 6.168 8.632 2.31v8.055L34.663 75.26"
        />
        <path
          fill="#fff"
          d="M69.803 35.957H50.466v7.715H69.09m-.696 7.901H50.466v7.715h9.516l-.9 10.025-8.616 2.31v8.021L66.27 75.26"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M7 6h87v87H7z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function JSIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_2502_4649)">
        <g filter="url(#filter0_d_2502_4649)">
          <path d="M0 0h28v28H0V0z" fill="#F5DE19" />
        </g>
        <path
          d="M18.894 21.981a2.88 2.88 0 002.61 1.606c1.095 0 1.795-.547 1.795-1.305 0-.903-.72-1.227-1.924-1.754l-.66-.283c-1.908-.812-3.173-1.829-3.173-3.98 0-1.98 1.506-3.49 3.868-3.49a3.904 3.904 0 013.757 2.116l-2.065 1.32a1.795 1.795 0 00-1.696-1.132 1.148 1.148 0 00-1.264 1.132c0 .793.491 1.114 1.625 1.607l.66.283c2.245.963 3.514 1.944 3.514 4.15 0 2.378-1.868 3.68-4.377 3.68a5.075 5.075 0 01-4.814-2.7l2.144-1.25zm-9.332.23c.415.735.792 1.358 1.7 1.358.867 0 1.416-.34 1.416-1.66v-8.983h2.641v9.018c0 2.735-1.606 3.98-3.945 3.98a4.1 4.1 0 01-3.962-2.41l2.15-1.304z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2502_4649"
          x={-4}
          y={0}
          width={36}
          height={36}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2502_4649"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2502_4649"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2502_4649">
          <rect width={28} height={28} rx={4} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function KotlinIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={28} height={28} rx={4} fill="#262626" />
      <path
        d="M6.344 6.344v15.312h15.312v-.025l-3.8-3.829-3.801-3.832 3.8-3.834 3.767-3.792H6.344z"
        fill="url(#paint0_linear_2615_19807)"
      />
      <path
        d="M14.174 6.344l-7.83 7.83v7.482h.068l7.66-7.66-.017-.017 3.8-3.834 3.767-3.801h-7.448z"
        fill="url(#paint1_linear_2615_19807)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2615_19807"
          x1={6.17291}
          y1={21.8071}
          x2={21.6725}
          y2={6.13466}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0296D8" />
          <stop offset={1} stopColor="#8371D9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2615_19807"
          x1={4.26782}
          y1={19.3653}
          x2={20.1229}
          y2={4.96797}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB55C0" />
          <stop offset={1} stopColor="#F28E0E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width={48} height={48} rx={10} fill="#262626" />
      <path
        d="M23.676 26.874a3.23 3.23 0 100-6.461 3.23 3.23 0 000 6.461z"
        fill="#00D8FF"
      />
      <path
        d="M23.676 31.05a36.682 36.682 0 01-11.475-1.55 14.602 14.602 0 01-4.726-2.53 4.578 4.578 0 01-1.891-3.327c0-2.136 2.347-4.23 6.278-5.6a37.161 37.161 0 0111.814-1.741 37.054 37.054 0 0111.66 1.71 14.7 14.7 0 014.572 2.412 4.382 4.382 0 011.86 3.22c0 2.22-2.623 4.47-6.849 5.868a37.219 37.219 0 01-11.243 1.539zm0-13.203a36.116 36.116 0 00-11.306 1.657c-3.619 1.262-5.24 2.989-5.24 4.135 0 1.2 1.743 3.085 5.57 4.394a35.16 35.16 0 0010.976 1.472c3.64.065 7.268-.427 10.759-1.46 3.974-1.317 5.783-3.205 5.783-4.402a3.007 3.007 0 00-1.305-2.033 13.174 13.174 0 00-4.085-2.137 35.49 35.49 0 00-11.152-1.626z"
        fill="#00D8FF"
      />
      <path
        d="M16.337 39.757a3.41 3.41 0 01-1.726-.424c-1.85-1.067-2.492-4.145-1.715-8.236a37.16 37.16 0 014.394-11.104 37.055 37.055 0 017.305-9.246 14.7 14.7 0 014.373-2.756 4.382 4.382 0 013.72 0c1.924 1.109 2.56 4.505 1.663 8.864a37.226 37.226 0 01-4.286 10.51 36.679 36.679 0 01-7.076 9.167 14.602 14.602 0 01-4.553 2.828 6.366 6.366 0 01-2.099.397zm2.291-18.997a36.118 36.118 0 00-4.212 10.622c-.715 3.767-.029 6.032.969 6.609 1.034.598 3.543.03 6.59-2.632 2.701-2.55 4.981-5.511 6.755-8.774a35.672 35.672 0 004.111-10.05c.846-4.102.115-6.615-.921-7.212a3.007 3.007 0 00-2.414.115 13.173 13.173 0 00-3.89 2.479 35.491 35.491 0 00-6.979 8.851l-.009-.008z"
        fill="#00D8FF"
      />
      <path
        d="M31.013 39.774c-1.752 0-3.976-1.06-6.291-3.051a37.161 37.161 0 01-7.427-9.353 37.06 37.06 0 01-4.36-10.947 14.701 14.701 0 01-.205-5.169 4.383 4.383 0 011.854-3.214c1.921-1.113 5.182.031 8.51 2.985a37.22 37.22 0 016.965 8.961 36.68 36.68 0 014.407 10.71c.389 1.76.449 3.576.177 5.357a4.579 4.579 0 01-1.931 3.302 3.347 3.347 0 01-1.7.419zm-12.38-13.182a36.118 36.118 0 007.097 8.955c2.906 2.5 5.212 3.038 6.203 2.455 1.034-.6 1.796-3.053 1.01-7.022a35.166 35.166 0 00-4.227-10.224 35.668 35.668 0 00-6.649-8.58c-3.132-2.782-5.673-3.403-6.708-2.804a3.007 3.007 0 00-1.105 2.148 13.172 13.172 0 00.198 4.607 35.491 35.491 0 004.182 10.468l-.002-.003z"
        fill="#00D8FF"
      />
    </svg>
  );
}

export function ImmunefiIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 48.226 40.845"></svg>
  );
}


export function SwiftIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2539_63566)">
        <path fill="url(#paint0_linear_2539_63566)" d="M0 0H28V28H0z" />
        <path
          d="M23.662 22.737a4.329 4.329 0 00-.337-.457 4.75 4.75 0 00-.965-.869c-.449-.3-.977-.49-1.515-.512a2.762 2.762 0 00-1.123.178c-.359.123-.707.3-1.044.48-.393.2-.786.4-1.2.567-.495.2-1.011.356-1.539.468-.662.122-1.335.167-1.998.156a13.602 13.602 0 01-3.547-.535 13.47 13.47 0 01-2.884-1.236 14.87 14.87 0 01-2.234-1.57c-.573-.49-1.1-1.014-1.594-1.57-.337-.39-.662-.802-.965-1.226a5.193 5.193 0 01-.337-.523l-2.963-3.174V5.73c0-3.486 2.84-6.315 6.353-6.315h5.668l4.198 4.232c9.474 6.393 6.41 13.442 6.41 13.442s2.694 3.007 1.616 5.647z"
          fill="url(#paint1_linear_2539_63566)"
        />
        <path
          d="M15.827 4.156c9.231 6.278 6.245 13.202 6.245 13.202s2.625 2.964 1.564 5.556c0 0-1.083-1.816-2.898-1.816-1.75 0-2.778 1.816-6.3 1.816-7.842 0-11.55-6.552-11.55-6.552 7.065 4.649 11.889 1.357 11.889 1.357C11.594 15.87 4.824 7.033 4.824 7.033c5.895 5.02 8.443 6.344 8.443 6.344-1.52-1.258-5.786-7.405-5.786-7.405 3.413 3.456 10.194 8.28 10.194 8.28C19.6 8.914 15.827 4.156 15.827 4.156z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2539_63566"
          x1={16.6332}
          y1={-0.99914}
          x2={11.3486}
          y2={29.0045}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAAE42" />
          <stop offset={1} stopColor="#EF3E31" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2539_63566"
          x1={14.0774}
          y1={-0.123364}
          x2={10.1642}
          y2={22.2452}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E39F3A" />
          <stop offset={1} stopColor="#D33929" />
        </linearGradient>
        <clipPath id="clip0_2539_63566">
          <rect width={28} height={28} rx={4} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function XIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}
