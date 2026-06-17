import { default as React, ReactNode } from 'react';
interface FrameProps {
    id: string;
    title: string;
    children: ReactNode;
    width?: string;
    className?: string;
    icon?: string;
}
export declare const Frame: React.FC<FrameProps>;
export declare const MainFrame: React.FC<{
    children: ReactNode;
    className?: string;
}>;
export {};
//# sourceMappingURL=Frame.d.ts.map