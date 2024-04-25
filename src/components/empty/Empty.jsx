import React from "react";
import './Empty.scss'


export default function KEmpty({children,description = '暂无数据',size = 200,...props}) {
  if(typeof size !== 'number') console.log('size参数需为数字')
  const img = <svg t="1713517311691" className="icon" viewBox="0 0 1160 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1905" width= {size} height={size}><path d="M126.018804 640.429693L119.449156 748.615573l464.380211 257.496045-3.600508-326.571193-107.605704 146.170386z" fill="#F5F7FA" p-id="1906" data-spm-anchor-id="a313x.search_index.0.i3.bde03a81GAh0DX" className="selected"></path><path d="M1042.714963 640.429693v108.18588L583.829367 1007.271972 580.177667 679.540425l112.230052 153.013057zM723.208273 591.029359L580.177667 504.156438V158.610056l457.605794 261.591409z" fill="#F5F7FA" p-id="1907"></path><path d="M580.177667 674.148195l-147.552572-81.002898L580.177667 504.156438l148.286324 86.872921zM692.407719 832.553482l-108.578352-158.405287 458.885596-252.6328 107.383871 150.060982zM467.828166 832.553482l108.578352-158.405287L117.520922 421.515395 10.137051 571.576377z" fill="#FFFFFF" p-id="1908"></path><path d="M433.375912 591.029359l143.030606-86.872921V158.610056L125.336243 420.082017z" fill="#F5F7FA" p-id="1909"></path><path d="M581.986453 663.295479l132.741003-72.897489-134.379149-78.630999-133.014028 78.153206 134.652174 73.375282zM432.061983 581.592956a8.224857 8.224857 0 0 1 3.412803-3.856468l136.478023-80.200889V174.394273L136.717943 420.679258 432.061983 581.592956zM113.016021 415.986653a8.190729 8.190729 0 0 1 2.764371-2.457219L576.150558 153.047186a8.190729 8.190729 0 0 1 4.078301-1.05797c1.74053 0 3.378676 0.546049 4.709669 1.48457l459.738797 260.123904a8.258985 8.258985 0 0 1 2.576667 2.286579l111.496299 151.83564a8.293113 8.293113 0 0 1-2.59373 12.115453l-107.281487 60.696715v111.684004a8.276049 8.276049 0 0 1-4.129493 7.166888l-456.803786 263.41726a8.190729 8.190729 0 0 1-8.122473 0.017064l-464.141314-263.400196a8.276049 8.276049 0 0 1-4.197749-7.201016v-111.684004L4.198773 579.835362a8.293113 8.293113 0 0 1-2.593731-12.115453l111.428043-151.733256z m462.605553 585.466488V694.607953l-100.199919 143.337759a8.190729 8.190729 0 0 1-10.750332 2.440155L127.91291 649.849032v97.537932l447.708664 254.083241z m16.449714-0.102384l440.354071-253.929665V649.849032L695.701075 840.368803a8.190729 8.190729 0 0 1-10.767396-2.457219l-92.862391-132.792195v296.231368zM729.487832 582.275517l294.217814-161.596259-435.200738-246.233793v322.936558l137.297096 80.337401c1.808786 1.057969 3.071523 2.713179 3.685828 4.556093z m307.084084 162.739548l-4.129492 2.388963v4.777925l4.129492-7.166888z m-468.407319-68.494972L122.059951 431.497846l-101.701552 138.508641 445.882813 252.274456 101.906321-145.743786z m24.060267 0l101.906321 145.743786 445.882814-252.274456-101.701553-138.491577-446.087582 245.022247z m-3.719956-597.411301a8.276049 8.276049 0 1 1-16.535034 0V8.293113a8.276049 8.276049 0 1 1 16.552098 0v70.815679z m-108.18588-5.358102a8.293113 8.293113 0 0 1-2.286579 11.449956 8.190729 8.190729 0 0 1-11.398764-2.303642l-32.60934-49.366207a8.293113 8.293113 0 0 1 2.286578-11.467021 8.190729 8.190729 0 0 1 11.398765 2.320707l32.60934 49.366207z m200.468094 0l32.60934-49.366207a8.190729 8.190729 0 0 1 11.398765-2.320707 8.293113 8.293113 0 0 1 2.303642 11.467021l-32.60934 49.366207a8.190729 8.190729 0 0 1-11.398764 2.303642 8.293113 8.293113 0 0 1-2.303643-11.449956z" fill="#CCCCCC" p-id="1910"></path></svg>
  return(
    <div className="k-empty" style={{width:'300px'}}>
       {img}
       <span style={{color:'#909399'}}>{description}</span>
       {children}
    </div>
  )
}