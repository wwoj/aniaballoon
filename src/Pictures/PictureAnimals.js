import Deco_1 from './Balloons/bal_1.png';
import Deco_2 from './Balloons/bal_2.png';
import Deco_3 from './Decorations/Deco_3.jpg';
import Deco_4 from './Decorations/Deco_4.jpg';
import Deco_5 from './Decorations/Deco_5.jpg';
import Deco_6 from './Decorations/Deco_6.jpg';
import Deco_7 from './Decorations/Deco_7.jpg';

// import Ballon_23 from './Decorations/bal_23.png';
// import Ballon_24 from './Decorations/bal_24.png';

const exportArray = [{obj:Deco_1,title:"Decoration_1"},
{obj:Deco_2,title:"Decoration_2"},
{obj:Deco_3,title:"Decoration_3"},
{obj:Deco_4,title:"Decoration_4"},
{obj:Deco_5,title:"Decoration_5"},
{obj:Deco_6,title:"Decoration_6"},
{obj:Deco_7,title:"Decoration_7"}
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