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
        <Carousel className="flex items-center gap-2 relative w-9/12">
            <CarouselPrevious className="bg-secondary" variant={"default"} />
            <CarouselContent className="mx-1">
                {imagesPathArray.map((path, index) => (
                    <CarouselItem
                        key={index}
                        className="flex justify-center items-center p-2"
                    >
                        <img
                            src={path}
                            alt=""
                            className="w-60 object-contain border-2 border-border shadow-shadow rounded"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="bg-secondary" variant={"default"} />
        </Carousel>
    );
}
