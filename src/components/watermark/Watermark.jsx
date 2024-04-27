import React,{useEffect} from "react";


export default function Watermark ({content = '水印',rotate,font,children,cross,width,height,...props}) {
  useEffect(() => {
    genWaterMark({
      content,
      className: 'watermark',
      width,height,
      cross,font,
      rotate,
    });
  }, [cross]);
  return(
    <div className="k-watermark" style={{width,height:'200px',overflow:'hidden'}}>
       {children}
       <div className="watermark"></div>
    </div>
  )
}


const createImgBase = (options) => {
  const { content,height, width,font,rotate } = options;
  const canvas = document.createElement('canvas'); // 创建一个画布
  const ctx = canvas.getContext('2d');
  // 设置画布的宽高
  canvas.height = 2* height;
  canvas.width = 2*  width;
  if (ctx) {

    
    const radians = (rotate * Math.PI) / 180
    ctx.rotate(radians);

    // 偏移一点距离
    ctx.fillStyle = 'rgba(100,100,100,0.2)'; // 设置绘制的颜色
    ctx.font = font;// 设置字体的大小
    // 遍历水印内容
      ctx.fillText(content, 10, 80); // 拉开30的间距
      ctx.fillText(content, width -10,height+ 140)
  
  }
  return canvas.toDataURL('image/png'); // 转换程data url，可供img直接使用
};

const genWaterMark = ({
  content,
  className,
  height = 80,
  width = 200,
  font = '14px sans-serif',
  rotate = -22,
  cross
}) => {
  const dataURL = createImgBase({ content, height, width ,font,rotate});
  const defaultStyle = document.createElement('style');
  defaultStyle.innerHTML = `.${className}::after {
    content: '';
    display: block;
    width: 100%;
    height: 100vh;
    background-image: url(${dataURL});
    background-repeat: repeat;
    background-position: 0 0;
    pointer-events: none;
    position: ${cross ? 'fixed': 'static'} ;
    top: 0;
    left: 0;
  } 
  `;
  document.head.appendChild(defaultStyle);
};

