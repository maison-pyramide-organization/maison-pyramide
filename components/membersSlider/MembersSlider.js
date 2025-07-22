import s from "./MembersSliderStyle.module.scss";
import gsap from "gsap";
import { useEffect } from "react";

const MembersSlider = (props) => {
  let { members, sliderIndex } = props;
  if (!members) members = [];
  const quantity = members?.length;
  const imageWidth = 94;
  const gap = 40;

  useEffect(() => {
    const memberWidth = imageWidth + gap + 16; // width of each member box
    let totalWidth = memberWidth * quantity;

    gsap.set(`#slider-${sliderIndex} li`, {
      x: (i) => i * memberWidth,
    });

    gsap.to(`#slider-${sliderIndex} li`, {
      duration: members?.length * 1.5,
      ease: "none",
      x: `+=${totalWidth}`, //move each box to end of the slider
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), //force x value to be between 0 and total width of the slider using modulus
      },
      repeat: -1,
    });
  }, [members]);

  return (
    <>
      <div
        id={`slider-${sliderIndex}`}
        className={`${s.slider}`}
        style={{
          "--quantity": quantity,
          "--imageWidth": `${imageWidth}px`,
          "--gap": `${gap}px`,
        }}
      >
        <ul className={s.list}>
          {members?.map((member) => (
            <li className={s.member_} key={member.id}>
              <div className={s.member}>
                <figure>
                  <img src={member.image.url + "?w=200&fm=webp"} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MembersSlider;
