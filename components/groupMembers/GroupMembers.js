import { useEffect, useState } from "react";
import { getMembers } from "../../pages/api/services/MembersService";

import s from "./GroupMembersStyle.module.scss";
import MembersSlider from "../membersSlider/MembersSlider";

export default function GroupMembers(props) {
  const { isMobile } = props;

  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((members) => {
      const middle = Math.ceil(members.length / 2);

      let firstHalf = members.slice(0, middle);
      let secondHalf = members.slice(middle);

      const isFirstHalfEven = firstHalf.length % 2 == 0;
      const isSecondHalfEven = secondHalf.length % 2 == 0;

      // if fh or sh not even
      if (!isFirstHalfEven && !isSecondHalfEven) {
        const middleIndex = Math.floor(firstHalf.length / 2);
        // first Half
        const firstDuplicate = firstHalf[0]; // duplicate the first element
        firstHalf.splice(middleIndex, 0, firstDuplicate); // insert in the middle
        // second Half
        const secondDuplicate = secondHalf[0]; // duplicate the first element
        secondHalf.splice(middleIndex, 0, secondDuplicate); // insert in the middle
      } else if (!isFirstHalfEven) {
        firstHalf.pop();
      }

      const x = [firstHalf, secondHalf];

      setMembers(x);
    });
  }, []);

  return (
    <>
      <div className={s.groupMembers}>
        <div className={s.hph} />
        <MembersSlider
          members={members[0]}
          id="top-slider"
          isMobile={isMobile}
        />
        <h2>MAISON PYRAMIDE GROUP</h2>
        <MembersSlider
          members={members[1]}
          id="bottom-slider"
          isMobile={isMobile}
        />
      </div>
    </>
  );
}
