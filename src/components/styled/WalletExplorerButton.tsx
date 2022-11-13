import React, { useCallback } from 'react';
import HoverColorButton from "../headless/HoverColorButton";
import type { MenuButtonProps } from '../../types/MenuButtonProps';

const WalletExplorerButton = (props: MenuButtonProps) => {
    const children = useCallback((hover: boolean) => (
        <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M12 21C16.1926 21 19.7156 18.1332 20.7157 14.2529M12 21C7.80742 21 4.28442 18.1332 3.2843 14.2529M12 21C14.4853 21 16.5 16.9706 16.5 12C16.5 7.02944 14.4853 3 12 3M12 21C9.51472 21 7.5 16.9706 7.5 12C7.5 7.02944 9.51472 3 12 3M12 3C15.3652 3 18.299 4.84694 19.8431 7.58245M12 3C8.63481 3 5.70099 4.84694 4.15692 7.58245M19.8431 7.58245C17.7397 9.40039 14.9983 10.5 12 10.5C9.00172 10.5 6.26027 9.40039 4.15692 7.58245M19.8431 7.58245C20.5797 8.88743 21 10.3946 21 12C21 12.778 20.9013 13.5329 20.7157 14.2529M20.7157 14.2529C18.1334 15.6847 15.1619 16.5 12 16.5C8.8381 16.5 5.86662 15.6847 3.2843 14.2529M3.2843 14.2529C3.09871 13.5329 3 12.778 3 12C3 10.3946 3.42032 8.88743 4.15692 7.58245" 
                    stroke={hover ? 'white' : 'black'} 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg> 
            Wallet Explorer
        </>
    ), []);

    const onClick = useCallback(() => {
        window.open("https://ethoswallet.xyz/dashboard", "_blank")
    }, [])

    return (
        <HoverColorButton 
            {...props}
            onClick={onClick}
            hoverChildren={children(true)}
        >
            { children(false) }
        </HoverColorButton>
    )
}

export default WalletExplorerButton;