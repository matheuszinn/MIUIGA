import { default as React, ReactNode } from 'react';
interface RetroContextType {
    isModern: boolean;
    toggleModern: () => void;
}
export declare const useRetro: () => RetroContextType;
interface RetroProviderProps {
    children: ReactNode;
    initialModern?: boolean;
}
export declare const RetroProvider: React.FC<RetroProviderProps>;
export {};
//# sourceMappingURL=RetroProvider.d.ts.map