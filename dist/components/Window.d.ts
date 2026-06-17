import { default as React, ReactNode } from 'react';
interface WindowProps {
    title: string;
    children: ReactNode;
    initialOpen?: boolean;
    onClose?: () => void;
    initialX?: string;
    initialY?: string;
}
export declare const Window: React.FC<WindowProps>;
export {};
//# sourceMappingURL=Window.d.ts.map