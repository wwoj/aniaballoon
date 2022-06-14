import Deco_1 from './Balloons/bal_1.png';
import Deco_2 from './Balloons/bal_2.png';
import Deco_3 from './Balloons/bal_3.png';
import Deco_4 from './Balloons/bal_4.png';
import Deco_5 from './Balloons/bal_5.png';
import Deco_6 from './Balloons/bal_6.png';
import Deco_7 from './Balloons/bal_7.png';
import Deco_8 from './Balloons/bal_8.png';
import Deco_9 from './Balloons/bal_9.png';
import Deco_10 from './Balloons/bal_10.png';
import Deco_11 from './Balloons/bal_11.png';
import Deco_12 from './Balloons/bal_12.png';
import Deco_13 from './Balloons/bal_13.png';
import Deco_14 from './Balloons/bal_14.png';
import Deco_15 from './Balloons/bal_15.png';
import Deco_16 from './Balloons/bal_16.png';
import Deco_17 from './Balloons/bal_17.png';
import Deco_18 from './Balloons/bal_18.png';
import Deco_19 from './Balloons/bal_19.png';
import Deco_20 from './Balloons/bal_20.png';
import Deco_21 from './Balloons/bal_21.png';
import Deco_22 from './Balloons/bal_22.png';


// import Ballon_23 from './Decorations/bal_23.png';
// import Ballon_24 from './Decorations/bal_24.png';

const exportArray = [{obj:Deco_1,title:"Decoration_1"},
{obj:Deco_2,title:"Decoration_2"},
{obj:Deco_3,title:"Decoration_3"},
{obj:Deco_4,title:"Decoration_4"},
{obj:Deco_5,title:"Decoration_5"},
{obj:Deco_6,title:"Decoration_6"},
{obj:Deco_7,title:"Decoration_7"},
{obj:Deco_8,title:"Decoration_8"},
{obj:Deco_9,title:"Decoration_9"},
{obj:Deco_10,title:"Decoration_10"},
{obj:Deco_11,title:"Decoration_11"},
{obj:Deco_12,title:"Decoration_12"},
{obj:Deco_13,title:"Decoration_13"},
{obj:Deco_14,title:"Decoration_14"},
{obj:Deco_15,title:"Decoration_15"},
{obj:Deco_16,title:"Decoration_16"},
{obj:Deco_17,title:"Decoration_17"},
{obj:Deco_18,title:"Decoration_18"},
{obj:Deco_19,title:"Decoration_19"},
{obj:Deco_20,title:"Decoration_20"},
{obj:Deco_21,title:"Decoration_21"},
{obj:Deco_22,title:"Decoration_22"},

]
export function GetPictures() {
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(exportArray);
    }, 3000);
  });

  return promise;
}
export default exportArray;