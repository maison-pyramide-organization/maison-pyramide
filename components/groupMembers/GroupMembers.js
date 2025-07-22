import { useEffect, useState } from "react";
import { getMembers } from "../../pages/api/services/MembersService";

import s from "./GroupMembersStyle.module.scss";
import MembersSlider from "../membersSlider/MembersSlider";

export default function GroupMembers(props) {
  const { isMobile } = props;

  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((members) => {
      // setMembers(x);
      const total = members.length;
      const targetLength = Math.ceil(total / 3); // max length per part
      const requiredLength = targetLength * 3;

      // Step 1: Pad the array with duplicates if needed
      const padded = [...members];
      let i = 0;
      while (padded.length < requiredLength) {
        padded.push(members[i % members.length]); // duplicate from start
        i++;
      }

      // Step 2: Slice into 3 equal parts
      const first = padded.slice(0, targetLength);
      const second = padded.slice(targetLength, targetLength * 2);
      const third = padded.slice(targetLength * 2, requiredLength);
      const x = [first, second, third];

      setMembers(x);
    });
  }, []);

  return (
    <>
      <div className={s.groupMembers}>
        <div className={s.hph} />
        <div className={s.members}>
          {members.map((list, i) => (
            <>
              <MembersSlider
                members={list}
                sliderIndex={i}
                isMobile={isMobile}
              />
            </>
          ))}
        </div>
        <h1>MAISON PYRAMIDE GROUP</h1>
      </div>
    </>
  );
}
