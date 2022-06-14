import Balloon_1 from './Balloons/bal_1.png';
import Balloon_2 from './Balloons/bal_2.png';
import Balloon_3 from './Balloons/bal_3.png';
import Balloon_4 from './Balloons/bal_4.png';
import Balloon_5 from './Balloons/bal_5.png';
import Balloon_6 from './Balloons/bal_7.png';
import Balloon_7 from './Balloons/bal_7.png';
import Balloon_8 from './Balloons/bal_8.png';
import Balloon_9 from './Balloons/bal_9.png';
import Balloon_10 from './Balloons/bal_10.png';
import Balloon_11 from './Balloons/bal_11.png';
import Balloon_12 from './Balloons/bal_12.png';
import Balloon_13 from './Balloons/bal_13.png';
import Balloon_14 from './Balloons/bal_14.png';
import Balloon_15 from './Balloons/bal_15.png';
import Balloon_16 from './Balloons/bal_16.png';
import Balloon_17 from './Balloons/bal_17.png';
import Balloon_18 from './Balloons/bal_18.png';
import Balloon_19 from './Balloons/bal_19.png';
import Balloon_20 from './Balloons/bal_20.png';
import Balloon_21 from './Balloons/bal_21.png';
import Balloon_22 from './Balloons/bal_22.png';






const exportArray = [
    {obj:Balloon_1,title:"Balloon_1"},
    {obj:Balloon_2,title:"Balloon_2"},
    {obj:Balloon_3,title:"Balloon_3"},
    {obj:Balloon_4,title:"Balloon_4"},
    {obj:Balloon_5,title:"Balloon_5"},
    {obj:Balloon_6,title:"Balloon_6"},
    {obj:Balloon_7,title:"Balloon_7"},
    {obj:Balloon_8,title:"Balloon_8"},
    {obj:Balloon_9,title:"Balloon_9"},
    {obj:Balloon_10,title:"Balloon_10"},
    {obj:Balloon_11,title:"Balloon_11"},
    {obj:Balloon_12,title:"Balloon_12"},
    {obj:Balloon_13,title:"Balloon_13"},
    {obj:Balloon_14,title:"Balloon_14"},
    {obj:Balloon_15,title:"Balloon_15"},
    {obj:Balloon_16,title:"Balloon_16"},
    {obj:Balloon_17,title:"Balloon_17"},
    {obj:Balloon_18,title:"Balloon_18"},
    {obj:Balloon_19,title:"Balloon_19"},
    {obj:Balloon_20,title:"Balloon_20"},
    {obj:Balloon_21,title:"Balloon_21"},
    {obj:Balloon_22,title:"Balloon_22"}
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
