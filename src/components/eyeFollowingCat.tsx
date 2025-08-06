import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const CatSvgComponent = ({
    svgRef,
    className,
}: {
    svgRef: any;
    className?: string;
}) => (
    <svg
        viewBox="0 0 128 56"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        ref={svgRef}
    >
        <defs id="defs1" />
        <g id="layer1" transform="translate(-0.12402685,38.383918)">
            <g id="g19" className="body">
                <path
                    style={{
                        fill: "#11111b",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 1.12876,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    d="m 63.084468,10.773039 h 35.907246 c 1.078346,-5.9517746 -0.205739,-9.1631255 -1.013852,-12.9266092 0,0 1.438905,-1.8955475 1.741542,-3.0164367 0.743626,-2.7541876 -0.230128,-5.7176901 0.0327,-8.5583671 0.274306,-2.964721 1.605276,-8.786715 1.605276,-8.786715 0,0 0.19234,-6.489856 -1.18283,-9.293641 -0.613853,-1.251544 -2.661368,-3.083797 -2.661368,-3.083797 -7.509577,4.390325 -13.784264,10.629308 -20.488253,15.92592 -0.478761,0.478762 -1.154663,0.704062 -2.027703,0.675902 -4.703143,-1.577105 -8.676266,-2.032509 -11.912757,-2.196678 -3.88643,-0.197141 -7.998161,0.168977 -12.335194,1.098339 0,0 -3.246018,-5.108294 -5.069258,-7.5194 -1.868256,-2.470646 -3.535245,-5.21913 -5.998619,-7.096964 -1.332771,-1.01597 -4.562331,-2.11219 -4.562331,-2.11219 0,0 -1.606684,1.477203 -2.027706,2.450141 -1.251318,2.891678 -1.175836,6.227327 -1.182826,9.378129 -0.0047,2.099381 0.774345,4.152746 0.76039,6.252086 -0.01397,2.102923 -0.779987,4.150111 -0.844879,6.252084 -0.04793,1.552291 0.03371,3.1238778 0.337952,4.6468188 0.191912,0.9606535 0.945761,1.8085944 0.929363,2.7880924 -0.03118,1.8620905 -1.461857,3.4391651 -1.943214,5.23823335 -0.479873,1.79350375 -0.862741,3.63629835 -0.929363,5.49169235 -0.0528,1.4702562 0.422436,4.3933601 0.422436,4.3933601 z"
                    id="path1"
                />
                <path
                    style={{
                        fill: "#FCBC90",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 0.253969,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "normal",
                    }}
                    d="m 53.155048,-8.4456622 c -1.08677,-0.887455 -2.77817,-1.455284 -4.180014,-1.396282 -2.128439,0.08958 -4.232342,1.122689 -5.620548,2.7385987 -1.028524,1.1972309 -1.418379,2.8655569 -1.47641,4.4428501 -0.0264,0.7175229 0.213725,1.438651 0.631533,2.0225769 0.587449,0.821021 2.180399,1.7671032 3.126923,2.1181984 1.584715,0.5878123 2.58407,0.5687977 4.267868,0.4215571 1.677943,-0.1467337 3.55415,-0.5695319 4.731308,-1.7742383 0.896352,-0.9173336 1.397729,-2.357061 1.267315,-3.6329689 -0.195158,-1.9092752 -1.261421,-3.7263821 -2.747975,-4.940292 z"
                    id="path9"
                />
                <path
                    style={{
                        fill: "#FCBC90",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 0.253969,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "normal",
                    }}
                    d="m 68.576166,-0.9707405 c -0.555478,-1.5335148 0.391141,-3.3190738 1.411984,-4.5529621 0.759503,-0.9180088 1.781524,-1.7357165 2.812397,-2.2060505 1.223637,-0.5582811 2.651766,-0.9782281 3.970917,-0.7159131 1.608617,0.3198754 3.077499,1.4096162 4.139896,2.6591289 1.053971,1.2396014 1.732596,2.8644304 1.943216,4.4778455 0.170965,1.3096496 0.320888,2.4423145 -0.561543,3.4250254 -0.933905,1.040029 -2.635832,1.4054448 -4.085279,1.5597417 C 77.086442,3.7954431 73.773839,2.9527175 73.773839,2.9527175 71.184148,1.9144812 69.324433,1.0950059 68.576166,-0.9707405 Z"
                    id="path10"
                />
                <path
                    style={{
                        fill: "#faebd7",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 0.253969,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    d="M 54.997327,4.5378891 C 54.718703,4.2987219 54.671774,3.8193775 54.758358,3.4625369 c 0.110019,-0.4534417 0.509401,-0.8142833 0.896127,-1.0753522 0.511523,-0.3453176 1.150161,-0.489535 1.762384,-0.5675476 1.681943,-0.2143121 2.659933,-0.04995 4.480631,0.1906822 0.57522,0.076026 1.804923,0.3653459 2.225382,0.7651858 0.3113,0.2960374 0.552561,0.6112561 0.582482,1.0397998 0.02556,0.3661339 -0.06988,0.8206878 -0.328581,1.0810349 -0.357865,0.3601378 -1.025663,0.1016014 -1.493546,0.2987077 -0.42249,0.177986 -0.861222,0.408981 -1.135091,0.7766444 C 61.435888,6.3908904 61.479829,6.986386 61.270213,7.465236 61.132523,7.7797651 61.028415,8.144298 60.762406,8.3613628 60.462334,8.6062235 60.044394,8.7280627 59.657184,8.7198064 59.200458,8.7108516 58.715642,8.5437546 58.372734,8.2418697 58.03508,7.9446592 57.902974,7.4683881 57.745447,7.0470459 57.548385,6.5199473 57.66317,5.8763697 57.357126,5.4041426 57.125347,5.0465067 56.740417,4.7775147 56.341517,4.6275017 c -0.42032,-0.1580705 -1.003454,0.2028769 -1.34419,-0.08962 z"
                    id="path11"
                />
            </g>
            <g id="g22" className="eye" transform="translate(0, 0)">
                <circle
                    style={{
                        fill: "#11111b",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.190879,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle22"
                    cx="48.203121"
                    cy="16.98744"
                    r="2.0654414"
                    transform="rotate(-21.80684)"
                />
                <circle
                    style={{
                        fill: "#FCBC90",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.219516,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle23"
                    cx="48.203121"
                    cy="16.98744"
                    r="0.50285274"
                    transform="rotate(-21.80684)"
                />
                <circle
                    style={{
                        fill: "#11111b",
                        fillOpacity: 0,
                        stroke: "none",
                        strokeWidth: 0.190879,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle24"
                    cx="45.902374"
                    cy="11.617621"
                    r="2.0654414"
                    transform="rotate(-21.80684)"
                />
            </g>
            <g
                id="g24"
                className="eye"
                transform="translate(27.791586,2.1840141)"
            >
                <circle
                    style={{
                        fill: "#11111b",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.190879,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle22"
                    cx="48.203121"
                    cy="16.98744"
                    r="2.0654414"
                    transform="rotate(-21.80684)"
                />
                <circle
                    style={{
                        fill: "#FCBC90",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.219516,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle23"
                    cx="48.203121"
                    cy="16.98744"
                    r="0.50285274"
                    transform="rotate(-21.80684)"
                />
                <circle
                    style={{
                        fill: "#11111b",
                        fillOpacity: 0,
                        stroke: "none",
                        strokeWidth: 0.190879,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    id="circle24"
                    cx="45.902374"
                    cy="11.617621"
                    r="2.0654414"
                    transform="rotate(-21.80684)"
                />
            </g>
        </g>
    </svg>
);

const PawSvgComponent = ({
    className,
    svgRef,
}: {
    className?: string;
    svgRef?: any;
}) => {
    return (
        <svg
            viewBox="0 0 128 22"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            ref={svgRef}
        >
            <g
                id="g18"
                transform="translate(0.12402645,1.6242968)"
                className="z-10"
            >
                <path
                    style={{
                        fill: "#11111b",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 0.705473,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "normal",
                    }}
                    d="m 103.2188,13.753311 c -1.92189,-1.417011 -1.90969,-3.701851 -1.41191,-5.5761844 0.51432,-1.9366412 1.83004,-3.7659875 3.48186,-4.9002767 2.06086,-1.4151715 4.77346,-1.6652671 7.26594,-1.858727 2.35525,-0.1828127 4.82022,-0.090712 7.05471,0.6759009 2.46089,0.8442873 5.16369,2.0062953 6.59004,4.1821376 1.14863,1.7522077 1.7405,4.2609006 0.97161,6.2098456 -0.45279,1.147685 -1.71923,1.976579 -2.91483,2.281169 -1.16203,0.296028 -3.54848,-0.591413 -3.54848,-0.591413 0,0 -1.05638,1.990388 -1.94321,2.619106 -1.04643,0.741853 -2.39394,1.201272 -3.67522,1.140594 -1.38707,-0.06573 -2.74606,-0.755322 -3.84418,-1.605277 -0.81068,-0.627465 -1.85873,-2.450147 -1.85873,-2.450147 0,0 -1.57745,0.891936 -2.45014,0.929367 -1.28701,0.05516 -2.68063,-0.291622 -3.71746,-1.056095 z"
                    id="path3"
                />
                <path
                    style={{
                        fill: "#11111b",
                        fillOpacity: 1,
                        stroke: "#faebd7",
                        strokeWidth: 0.705473,
                        strokeLinecap: "square",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "normal",
                    }}
                    d="M 2.1715926,13.82717 C 0.24969837,12.410142 0.26190379,10.125302 0.75968078,8.2509859 1.2740081,6.3143269 2.5897183,4.4849842 4.2415388,3.350695 6.3023995,1.9355235 9.0150027,1.6854279 11.507477,1.4919679 c 2.355257,-0.1828126 4.820227,-0.090712 7.054718,0.6759009 2.460881,0.8442892 5.163688,2.0062953 6.590035,4.1821341 1.148635,1.7522076 1.740502,4.2609011 0.971607,6.2098451 -0.452786,1.147686 -1.719231,1.97658 -2.914821,2.281169 -1.162028,0.296028 -3.548482,-0.591412 -3.548482,-0.591412 0,0 -1.056375,1.990406 -1.943215,2.619106 -1.046425,0.741853 -2.393939,1.201271 -3.675213,1.140593 -1.387076,-0.06573 -2.746063,-0.755321 -3.844188,-1.605277 -0.8106706,-0.627446 -1.8587267,-2.450128 -1.8587267,-2.450128 0,0 -1.5774507,0.891918 -2.450141,0.929349 C 4.6020456,14.93841 3.208423,14.591625 2.1715926,13.82717 Z"
                    id="path12"
                />
            </g>
        </svg>
    );
};

export function EyeFollowingCat({ className }: { className?: string }) {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const findAngle = (x: number, y: number) => {
        const angle = Math.atan2(y, x);
        const degreeAngle = (angle * 180) / Math.PI;
        return degreeAngle;
    };

    useEffect(() => {
        const svgElement = svgRef.current;
        if (!svgElement) {
            return;
        }

        const eyes = Array.from(
            svgElement.querySelectorAll<SVGGElement>(".eye")
        );

        const body = svgElement.querySelector<SVGGElement>(".body");
        if (body) {
            body.style.zIndex = "-10";
        }

        const eyeInfos = eyes.map((eye) => {
            const bbox = eye.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;
            const originalTransform = eye.getAttribute("transform") || "";
            return {
                element: eye,
                cx,
                cy,
                originalTransform,
            };
        });

        const mouseMoveHandler = (event: MouseEvent) => {
            const pt = svgElement.createSVGPoint();
            pt.x = event.clientX;
            pt.y = event.clientY;

            const ctm = svgElement.getScreenCTM();
            if (!ctm) return;

            const svgP = pt.matrixTransform(ctm.inverse());

            for (const eyeInfo of eyeInfos) {
                const xDiff = svgP.x - eyeInfo.cx;
                const yDiff = svgP.y - eyeInfo.cy;

                const angle = findAngle(xDiff, yDiff);

                eyeInfo.element.setAttribute(
                    "transform",
                    `${eyeInfo.originalTransform} rotate(${angle}, ${eyeInfo.cx}, ${eyeInfo.cy})`
                );
            }
        };

        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <div className={cn("absolute group aspect-128/56", className)}>
            <CatSvgComponent
                svgRef={svgRef}
                className={cn(
                    "absolute group-hover:translate-y-6 transition-transform duration-300 top-0 -z-1",
                    className
                )}
            />
            <PawSvgComponent
                className={cn(
                    "absolute z-1 top-[calc(100%-1.5rem)]",
                    className
                )}
            />
        </div>
    );
}
