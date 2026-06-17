import { default as React, ReactNode } from 'react';
interface FramesetContextType {
    isMobile: boolean;
    minimizedFrames: string[];
    toggleFrame: (id: string) => void;
}
export declare const useFrameset: () => FramesetContextType;
interface FramesetProps {
    children: ReactNode;
    breakpoint?: number;
}
export declare const Frameset: React.FC<FramesetProps>;
export {};
//# sourceMappingURL=Frameset.d.ts.map