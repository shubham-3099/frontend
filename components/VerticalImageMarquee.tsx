"use client";

const images = [
  "/food/food-1.png",
  "/food/food-2.png",
  "/food/food-3.png",
  "/food/food-4.png",
];

function ImageColumn({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...images, ...images];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`flex flex-col gap-4 ${
          reverse ? "animate-scroll-down" : "animate-scroll-up"
        }`}
      >
        {items.map((src, index) => (
          <div
            key={index}
            className="h-[220px] w-full shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

export default function VerticalImageMarquee() {
  return (
    <div className="grid h-[850px] grid-cols-2 gap-4 overflow-hidden">
      <ImageColumn />
      <ImageColumn reverse />
    </div>
  );
}