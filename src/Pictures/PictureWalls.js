import Wall_1 from "./Walls/Wall_1.png";
import Wall_2 from "./Walls/Wall_2.png";
import Wall_3 from "./Walls/Wall_3.png";
import Wall_4 from "./Walls/Wall_4.png";
import Wall_5 from "./Walls/Wall_5.png";
import Wall_6 from "./Walls/Wall_7.png";
import Wall_8 from "./Walls/Wall_8.png";
import Wall_9 from "./Walls/Wall_9.png";
import Wall_10 from "./Walls/Wall_10.png";
import Wall_11 from "./Walls/Wall_11.jpg";
import Wall_12 from "./Walls/Wall_12.jpg";
import Wall_13 from "./Walls/Wall_13.jpg";
import Wall_14 from "./Walls/Wall_14.jpg";
import Wall_15 from "./Walls/Wall_15.jpg";
import Wall_16 from "./Walls/Wall_16.jpg";
import Wall_17 from "./Walls/Wall_17.jpg";
import Wall_18 from "./Walls/Wall_18.jpg";
import Wall_19 from "./Walls/Wall_19.jpg";
import Wall_20 from "./Walls/Wall_20.jpg";
import Wall_21 from "./Walls/Wall_21.jpg";
import Wall_22 from "./Walls/Wall_22.jpg";

const exportArray = [
  { obj: Wall_1, title: "Wall_1" },
  { obj: Wall_2, title: "Wall_2" },
  { obj: Wall_3, title: "Wall_3" },
  { obj: Wall_4, title: "Wall_4" },
  { obj: Wall_5, title: "Wall_5" },
  { obj: Wall_6, title: "Wall_6" },
  // {obj:Wall_7,title:"Wall_7"},
  { obj: Wall_8, title: "Wall_8" },
  { obj: Wall_9, title: "Wall_9" },
  { obj: Wall_10, title: "Wall_10" },
  { obj: Wall_11, title: "Wall_11" },
  { obj: Wall_12, title: "Wall_12" },
  { obj: Wall_13, title: "Wall_13" },
  { obj: Wall_14, title: "Wall_14" },
  { obj: Wall_15, title: "Wall_15" },
  { obj: Wall_16, title: "Wall_16" },
  { obj: Wall_17, title: "Wall_17" },
  { obj: Wall_18, title: "Wall_18" },
  { obj: Wall_19, title: "Wall_19" },
  { obj: Wall_20, title: "Wall_20" },
  { obj: Wall_21, title: "Wall_21" },
  { obj: Wall_22, title: "Wall_22" },
];
export function GetPictures() {
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(exportArray);
    }, 3000);
  });

  return promise;
}

export default exportArray;
