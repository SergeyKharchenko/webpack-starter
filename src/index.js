import stickybits from "stickybits";

export default function handleIndexPage() {
  console.log("This is index js");

  stickybits(".blue", { useStickyClasses: true, stickyBitStickyOffset: 100 });
}
