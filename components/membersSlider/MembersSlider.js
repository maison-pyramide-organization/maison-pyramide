import s from "./MembersSliderStyle.module.scss";
import gsap from "gsap";
import { useEffect } from "react";

const MembersSlider = (props) => {
  let { members, id, isMobile } = props;
  if (!members) members = [];
  const quantity = members?.length;
  const imageWidth = isMobile ? 100 : 120;
  const gap = isMobile ? 20 : 122;

  useEffect(() => {
    const memberWidth = imageWidth + gap; // width of each member box
    let totalWidth = memberWidth * quantity;

    gsap.set(`#${id} li`, {
      x: (i) => i * memberWidth,
    });

    gsap.to(`#${id} li`, {
      duration: members?.length,
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
        id={id}
        className={`${s.slider}`}
        style={{
          "--quantity": quantity,
          "--imageWidth": `${imageWidth}px`,
          "--gap": `${gap}px`,
        }}
      >
        <ul className={s.list}>
          {members?.map((member) => (
            <li className={s.member} key={member.id}>
              <figure>
                <img src={member.image.url + "?w=300&fm=webp"} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MembersSlider;
