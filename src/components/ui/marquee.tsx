export default function Marquee({ items }: { items: any[] }) {
    return (
        <div className="relative flex w-full overflow-x-hidden border-border border-b-2 border-t-2 bg-secondary-background text-foreground font-base">
            <div className="animate-marquee whitespace-nowrap py-3">
                {items.map((Item, index) => (
                    <div
                        key={`marquee1-${index}`}
                        className="inline-flex mx-4 text-2xl items-center"
                    >
                        {typeof Item === "function" ? <Item /> : Item}
                    </div>
                ))}
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-3">
                {items.map((Item, index) => (
                    <div
                        key={`marquee1-${index}`}
                        className="inline-flex mx-4 text-2xl items-center"
                    >
                        {typeof Item === "function" ? <Item /> : Item}
                    </div>
                ))}
            </div>

            {/* must have both of these in order to work */}
        </div>
    );
}
