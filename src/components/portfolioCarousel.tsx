import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./ui/carousel";

export function PortfolioCarousel({
    imagesPathArray,
}: {
    imagesPathArray: string[];
}) {
    return (
        <Carousel className="flex items-center gap-2">
            <CarouselPrevious className="bg-sidebar" variant={"default"} />
            <CarouselContent className="">
                {imagesPathArray.map((path, index) => (
                    <CarouselItem
                        key={index}
                        className="flex justify-center items-center p-2"
                    >
                        <img
                            src={path}
                            alt=""
                            className="h-64 object-contain border-2 border-border shadow-shadow rounded"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="bg-sidebar" variant={"default"} />
        </Carousel>
    );
}
