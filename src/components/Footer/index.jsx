import styles from "./Footer.module.scss";

function Footer({ information }) {
    return (
        <footer>
            <div className={styles.information}>
                <div className={styles.informationWithName}>
                    {information.name && (
                        <div className={styles.name}>
                            <span>{information.name.toUpperCase()}</span>
                        </div>
                    )}
                    {information.whatsapp && (
                        <div>
                            <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <title>WhatsApp</title>
                                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                            </svg>
                            <a href={information.whatsapp?.url} target="_blank" rel="noreferrer">
                                <span>{information.whatsapp.number}</span>
                            </a>
                        </div>
                    )}

                    {information.email && (
                        <div>
                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <title>Email</title>
                                <path
                                    d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <a href={"mailto:" + information.email} target="_blank" rel="noreferrer">
                                <span>{information.email}</span>
                            </a>
                        </div>
                    )}
                </div>
                <div className={styles.informationWithoutName}>
                    {information.instagram && (
                        <div>
                            <a href={information.instagram?.url} target="_blank" rel="noreferrer">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <title>Instagram</title>
                                    <path d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z" />
                                </svg>
                            </a>
                        </div>
                    )}

                    {information.twitter && (
                        <div>
                            <a href={information.twitter?.url} target="_blank" rel="noreferrer">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <title>Twitter</title>
                                    <path d="m19.83 8v0.52c0.0093 1.5102-0.2813 3.0072-0.8549 4.4042-0.5737 1.397-1.4189 2.6662-2.4868 3.7341s-2.3371 1.9131-3.7341 2.4868c-1.397 0.5736-2.894 0.8642-4.4042 0.8549-2.1979 0.0064-4.3508-0.6221-6.2-1.81h1c1.8135 0 3.5743-0.6092 5-1.73-0.84506-0.0076-1.666-0.2826-2.3451-0.7856s-1.1814-1.2082-1.4349-2.0144c0.25465 0.0406 0.51214 0.0607 0.77 0.06 0.35715-0.0026 0.71282-0.0462 1.06-0.13-0.90349-0.1844-1.7155-0.6753-2.2986-1.3897-0.58313-0.7143-0.90154-1.6082-0.90136-2.5303 0.55909 0.3084 1.1821 0.48299 1.82 0.50999-0.56288-0.37233-1.0241-0.87911-1.3418-1.4745-0.31777-0.59539-0.48211-1.2606-0.47816-1.9355 0.00125-0.70252 0.1875-1.3923 0.54-2 1.0117 1.2476 2.2742 2.2689 3.7058 2.9976s3.0002 1.1486 4.6042 1.2324c-0.0635-0.30264-0.097-0.61079-0.1-0.92-0.0261-0.82312 0.2026-1.6342 0.6547-2.3226 0.4522-0.68833 1.1057-1.2203 1.8715-1.5234 0.7657-0.30302 1.6064-0.3623 2.4071-0.16974s1.5224 0.62758 2.0667 1.2456c0.905-0.18179 1.7714-0.5202 2.56-1-0.3012 0.93316-0.9346 1.7232-1.78 2.22 0.8037-0.08685 1.5894-0.29593 2.33-0.62-0.5484 0.80096-1.2239 1.5069-2 2.09h-0.03z" />
                                </svg>
                            </a>
                        </div>
                    )}

                    {information.tiktok && (
                        <div>
                            <a href={information.tiktok?.url} target="_blank" rel="noreferrer">
                                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>Tiktok</title>
                                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                                </svg>
                            </a>
                        </div>
                    )}

                    {information.github && (
                        <div>
                            <a href={information.github} target="_blank" rel="noreferrer">
                                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Github</title>
                                    <path d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z" />
                                </svg>
                            </a>
                        </div>
                    )}

                    {information.codepen && (
                        <div>
                            <a href={information.codepen} target="_blank" rel="noreferrer">
                                <svg width="800px" height="800px" viewBox="0 0 48 48">
                                    <title>Codepen</title>
                                    <defs></defs>
                                    <g id="Icons" stroke="none" strokeWidth="1">
                                        <g id="Color-" transform="translate(-800.000000, -160.000000)">
                                            <path d="M847.982,176.419 C847.9775,176.3875 847.97,176.359 847.9655,176.329 C847.955,176.2705 847.9445,176.212 847.9295,176.1565 C847.9205,176.122 847.907,176.089 847.8965,176.056 C847.88,176.005 847.8635,175.9555 847.844,175.906 C847.8305,175.8715 847.814,175.837 847.7975,175.8055 C847.7765,175.7575 847.754,175.7125 847.727,175.669 C847.709,175.636 847.688,175.6045 847.6685,175.573 C847.6415,175.5295 847.613,175.4875 847.5815,175.447 C847.559,175.417 847.535,175.387 847.511,175.3585 C847.478,175.3195 847.4435,175.282 847.4075,175.246 C847.3805,175.219 847.355,175.1905 847.3265,175.1665 C847.2875,175.132 847.2485,175.099 847.2095,175.0675 C847.178,175.0435 847.148,175.0195 847.1165,174.997 C847.1045,174.9895 847.094,174.979 847.082,174.9715 L825.1445,160.3465 C824.4515,159.8845 823.55,159.8845 822.8555,160.3465 L800.9195,174.9715 C800.9075,174.979 800.897,174.9895 800.885,174.997 C800.852,175.0195 800.822,175.0435 800.792,175.0675 C800.7515,175.099 800.7125,175.132 800.675,175.1665 C800.6465,175.1905 800.6195,175.219 800.5925,175.246 C800.5565,175.282 800.522,175.3195 800.4905,175.3585 C800.465,175.387 800.441,175.417 800.4185,175.447 C800.3885,175.4875 800.36,175.5295 800.333,175.573 C800.312,175.6045 800.2925,175.636 800.273,175.669 C800.2475,175.7125 800.225,175.7575 800.2025,175.8055 C800.1875,175.837 800.171,175.8715 800.1575,175.906 C800.1365,175.9555 800.12,176.005 800.1035,176.056 C800.093,176.089 800.081,176.122 800.072,176.1565 C800.057,176.212 800.0465,176.2705 800.036,176.329 C800.03,176.359 800.0225,176.3875 800.0195,176.419 C800.0075,176.506 800,176.596 800,176.6875 L800,191.3125 C800,191.4025 800.0075,191.4925 800.0195,191.5825 C800.0225,191.611 800.03,191.641 800.036,191.671 C800.0465,191.7295 800.057,191.7865 800.072,191.8435 C800.081,191.878 800.093,191.911 800.1035,191.944 C800.12,191.9935 800.1365,192.0445 800.1575,192.0955 C800.171,192.1285 800.1875,192.1615 800.2025,192.1945 C800.225,192.241 800.2475,192.286 800.273,192.3325 C800.2925,192.364 800.312,192.3955 800.333,192.427 C800.36,192.4705 800.3885,192.511 800.4185,192.5515 C800.441,192.583 800.465,192.613 800.4905,192.6415 C800.522,192.679 800.5565,192.718 800.5925,192.7525 C800.6195,192.781 800.6465,192.808 800.675,192.8335 C800.7125,192.868 800.7515,192.901 800.792,192.9325 C800.822,192.9565 800.852,192.9805 800.885,193.003 C800.897,193.0105 800.9075,193.021 800.9195,193.0285 L822.8555,207.6535 C823.202,207.8845 823.601,208 824,208 C824.399,208 824.798,207.8845 825.1445,207.6535 L847.082,193.0285 C847.094,193.021 847.1045,193.0105 847.1165,193.003 C847.148,192.9805 847.178,192.9565 847.2095,192.9325 C847.2485,192.901 847.2875,192.868 847.3265,192.8335 C847.355,192.808 847.3805,192.781 847.4075,192.7525 C847.4435,192.718 847.478,192.679 847.511,192.6415 C847.535,192.613 847.559,192.583 847.5815,192.5515 C847.613,192.511 847.6415,192.4705 847.6685,192.427 C847.688,192.3955 847.709,192.364 847.727,192.3325 C847.754,192.286 847.7765,192.241 847.7975,192.1945 C847.814,192.1615 847.8305,192.1285 847.844,192.0955 C847.8635,192.0445 847.88,191.9935 847.8965,191.944 C847.907,191.911 847.9205,191.878 847.9295,191.8435 C847.9445,191.7865 847.955,191.7295 847.9655,191.671 C847.97,191.641 847.9775,191.611 847.982,191.5825 C847.994,191.4925 848,191.4025 848,191.3125 L848,176.6875 C848,176.596 847.994,176.506 847.982,176.419 L847.982,176.419 L847.982,176.419 Z M826.0625,165.9175 L842.2235,176.6905 L835.0055,181.519 L826.0625,175.537 L826.0625,165.9175 L826.0625,165.9175 Z M821.9375,165.9175 L821.9375,175.537 L812.996,181.519 L805.7765,176.6905 L821.9375,165.9175 L821.9375,165.9175 Z M804.125,180.5485 L809.2865,184 L804.125,187.4515 L804.125,180.5485 L804.125,180.5485 Z M821.9375,202.0825 L805.7765,191.3095 L812.996,186.4825 L821.9375,192.463 L821.9375,202.0825 L821.9375,202.0825 Z M824,188.8795 L816.7055,184 L824,179.1205 L831.296,184 L824,188.8795 L824,188.8795 Z M826.0625,202.0825 L826.0625,192.463 L835.0055,186.4825 L842.2235,191.3095 L826.0625,202.0825 L826.0625,202.0825 Z M843.875,187.4515 L838.715,184 L843.875,180.5485 L843.875,187.4515 L843.875,187.4515 Z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    )}

                    {information.linkedin && (
                        <div>
                            <a href={information.linkedin} target="_blank" rel="noreferrer">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <title>LinkedIn</title>
                                    <path d="m0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zm2.813 2.062c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zm5.031 12.844v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zm-4.969 0v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Website developed by Franco Azari</p>
            </div>
        </footer>
    );
}

export default Footer;
