import Event_1 from "./Events/Event_001.jpg";
import Event_2 from "./Events/Event_002.jpg";
import Event_3 from "./Events/Event_003.jpg";
import Event_4 from "./Events/Event_004.jpg";
import Event_5 from "./Events/Event_005.jpg";
import Event_6 from "./Events/Event_007.jpg";
import Event_7 from "./Events/Event_007.jpg";
import Event_8 from "./Events/Event_008.jpg";
import Event_9 from "./Events/Event_009.jpg";
import Event_10 from "./Events/Event_010.jpg";
import Event_11 from "./Events/Event_011.jpg";
import Event_12 from "./Events/Event_012.jpg";
import Event_13 from "./Events/Event_013.jpg";
import Event_14 from "./Events/Event_014.jpg";
import Event_15 from "./Events/Event_015.jpg";
import Event_16 from "./Events/Event_016.jpg";
import Event_17 from "./Events/Event_017.jpg";
import Event_18 from "./Events/Event_018.jpg";
import Event_19 from "./Events/Event_019.jpg";
import Event_20 from "./Events/Event_020.jpg";
import Event_21 from "./Events/Event_021.jpg";
import Event_22 from "./Events/Event_022.jpg";
import Event_23 from "./Events/Event_023.jpg";
import Event_24 from "./Events/Event_024.jpg";
import Event_25 from "./Events/Event_025.jpg";
import Event_26 from "./Events/Event_026.jpg";
import Event_27 from "./Events/Event_027.jpg";
import Event_28 from "./Events/Event_028.jpg";
import Event_29 from "./Events/Event_029.jpg";
import Event_30 from "./Events/Event_030.jpg";
import Event_31 from "./Events/Event_031.jpg";
import Event_32 from "./Events/Event_032.jpg";
import Event_33 from "./Events/Event_033.jpg";
import Event_34 from "./Events/Event_034.jpg";
import Event_35 from "./Events/Event_035.jpg";
import Event_36 from "./Events/Event_036.jpg";
import Event_37 from "./Events/Event_037.jpg";
import Event_38 from "./Events/Event_038.jpg";
import Event_39 from "./Events/Event_039.jpg";
import Event_40 from "./Events/Event_040.jpg";
import Event_41 from "./Events/Event_041.jpg";
import Event_42 from "./Events/Event_042.jpg";
import Event_43 from "./Events/Event_043.jpg";
import Event_44 from "./Events/Event_044.jpg";
import Event_45 from "./Events/Event_045.jpg";
import Event_46 from "./Events/Event_046.jpg";
import Event_47 from "./Events/Event_047.jpg";
import Event_48 from "./Events/Event_048.jpg";


const exportArray = [
  { obj: Event_1, title: "Event_1" },
  { obj: Event_2, title: "Event_2" },
  { obj: Event_3, title: "Event_3" },
  { obj: Event_4, title: "Event_4" },
  { obj: Event_5, title: "Event_5" },
  { obj: Event_6, title: "Event_6" },
  { obj: Event_7, title: "Event_7" },
  { obj: Event_8, title: "Event_8" },
  { obj: Event_9, title: "Event_9" },
  { obj: Event_10, title: "Event_10" },
  { obj: Event_11, title: "Event_11" },
  { obj: Event_12, title: "Event_12" },
  { obj: Event_13, title: "Event_13" },
  { obj: Event_14, title: "Event_14" },
  { obj: Event_15, title: "Event_15" },
  { obj: Event_16, title: "Event_16" },
  { obj: Event_17, title: "Event_17" },
  { obj: Event_18, title: "Event_18" },
  { obj: Event_19, title: "Event_19" },
  { obj: Event_20, title: "Event_20" },
  { obj: Event_21, title: "Event_21" },
  { obj: Event_22, title: "Event_22" },
  { obj: Event_23, title: "Event_23" },
  { obj: Event_24, title: "Event_24" },
  { obj: Event_25, title: "Event_25" },
  { obj: Event_26, title: "Event_26" },
  { obj: Event_27, title: "Event_27" },
  { obj: Event_28, title: "Event_28" },
  { obj: Event_29, title: "Event_29" },
  { obj: Event_30, title: "Event_30" },
  { obj: Event_31, title: "Event_31" },
  { obj: Event_32, title: "Event_32" },
  { obj: Event_33, title: "Event_33" },
  { obj: Event_34, title: "Event_34" },
  { obj: Event_35, title: "Event_35" },
  { obj: Event_36, title: "Event_36" },
  { obj: Event_37, title: "Event_37" },
  { obj: Event_38, title: "Event_38" },
  { obj: Event_39, title: "Event_39" },
  { obj: Event_40, title: "Event_40" },
  { obj: Event_41, title: "Event_41" },
  { obj: Event_42, title: "Event_42" },
  { obj: Event_43, title: "Event_43" },
  { obj: Event_44, title: "Event_44" },
  { obj: Event_45, title: "Event_45" },
  { obj: Event_46, title: "Event_46" },
  { obj: Event_47, title: "Event_47" },
  { obj: Event_48, title: "Event_48" },

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
