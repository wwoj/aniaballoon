import Deco_1 from "./Decorations/Deco_1.jpg";
import Deco_2 from "./Decorations/Deco_2.jpg";
import Deco_3 from "./Decorations/Deco_3.jpg";
import Deco_4 from "./Decorations/Deco_4.jpg";
import Deco_5 from "./Decorations/Deco_5.jpg";
import Deco_6 from "./Decorations/Deco_6.jpg";
import Deco_7 from "./Decorations/Deco_7.jpg";
import Deco_8 from "./Decorations/Deco_8.jpg";
import Deco_9 from "./Decorations/Deco_9.jpg";
import Deco_10 from "./Decorations/Deco_10.jpg";
import Deco_11 from "./Decorations/Deco_11.jpg";
import Deco_12 from "./Decorations/Deco_12.jpg";

// import Ballon_23 from './Decorations/bal_23.png';
// import Ballon_24 from './Decorations/bal_24.png';

const exportArray = [
  { obj: Deco_1, title: "Decoration_1" },
  { obj: Deco_2, title: "Decoration_2" },
  { obj: Deco_3, title: "Decoration_3" },
  { obj: Deco_4, title: "Decoration_4" },
  { obj: Deco_5, title: "Decoration_5" },
  { obj: Deco_6, title: "Decoration_6" },
  { obj: Deco_7, title: "Decoration_7" },
  { obj: Deco_8, title: "Decoration_8" },
  { obj: Deco_9, title: "Decoration_9" },
  { obj: Deco_10, title: "Decoration_10" },
  { obj: Deco_11, title: "Decoration_11" },
  { obj: Deco_12, title: "Decoration_12" },
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
