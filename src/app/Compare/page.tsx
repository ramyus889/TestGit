import { Compare } from "@/componentsUi/compare";

export default function CompareDemo() {
  return (
    <div className="ms-20 mt-20">
      <Compare
        autoplay
        slideMode="drag"
        autoplayDuration={20000}
        firstImage="/img/Car4.webp"
        secondImage="/img/Car4.webp"
        className="h-[250px] w-[500px]"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top "
      />
    </div>
  );
}
