import Wall_1 from "./Walls/Backgrop_1.jpg";
import Wall_2 from "./Walls/Backgrop_2.JPG";
import Wall_3 from "./Walls/Backgrop_3.jpg";
import Wall_4 from "./Walls/Backgrop_4.jpg";
import Wall_5 from "./Walls/Backgrop_5.jpg";
import Wall_6 from "./Walls/Backgrop_6.jpg";
import Wall_7 from "./Walls/Backgrop_7.jpg";
import Wall_8 from "./Walls/Backgrop_8.jpg";
import Wall_9 from "./Walls/Backgrop_9.jpg";
import Wall_10 from "./Walls/Backgrop_10.png";
import Wall_11 from "./Walls/Backgrop_11.png";
import Wall_12 from "./Walls/Backgrop_12.jpg";
import Wall_13 from "./Walls/Backgrop_13.jpg";
import Wall_14 from "./Walls/Backgrop_14.png";
import Wall_15 from "./Walls/Backgrop_15.png";
import Wall_16 from "./Walls/Backgrop_16.png";
import Wall_17 from "./Walls/Backgrop_17.jpg";



const exportArray = [
  { obj: Wall_1, title: "Wall_1" },
  { obj: Wall_2, title: "Wall_2" },
  { obj: Wall_3, title: "Wall_3" },
  { obj: Wall_4, title: "Wall_4" },
  { obj: Wall_5, title: "Wall_5" },
  { obj: Wall_6, title: "Wall_6" },
  { obj: Wall_7, title: "Wall_7" },
  { obj: Wall_8, title: "Wall_8" },
  { obj: Wall_9, title: "Wall_9" },
  { obj: Wall_10, title: "Wall_10" },
  { obj: Wall_11, title: "Wall_11" },
  { obj: Wall_12, title: "Wall_12" },
  { obj: Wall_13, title: "Wall_13" },
  { obj: Wall_14, title: "Wall_14" },
  { obj: Wall_15, title: "Wall_15" },
  { obj: Wall_16, title: "Wall_16" },
  { obj: Wall_17, title: "Wall_17" }
];
export function GetPictures() {
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(exportArray);
    }, 2000);
  });

  return promise;
}

export default exportArray;
