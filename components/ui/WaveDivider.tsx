type WaveVariant = "surface-to-surface-container-low" | "surface-container-low-to-surface-container";

interface WaveDividerProps {
    variant: WaveVariant;
}

const WAVE_CONFIG: Record<
    WaveVariant,
    { bgClass: string; svgClass: string; path: string }
> = {
    "surface-to-surface-container-low": {
        bgClass: "bg-surface",
        svgClass: "text-surface-container-low fill-current",
        path: "M0,48 C240,16 480,80 720,40 C960,0 1200,64 1440,32 L1440,80 L0,80 Z",
    },
    "surface-container-low-to-surface-container": {
        bgClass: "bg-surface-container-low",
        svgClass: "text-surface-container fill-current",
        path: "M0,16 C320,64 640,-16 960,32 C1200,64 1360,16 1440,24 L1440,80 L0,80 Z",
    },
};

export default function WaveDivider({ variant }: WaveDividerProps) {
    const config = WAVE_CONFIG[variant];

    return (
        <div className={`w-full overflow-hidden leading-none ${config.bgClass}`}>
            <svg
                className={`relative block w-full h-10 md:h-14 ${config.svgClass}`}
                preserveAspectRatio="none"
                viewBox="0 0 1440 80"
            >
                <path d={config.path} />
            </svg>
        </div>
    );
}
