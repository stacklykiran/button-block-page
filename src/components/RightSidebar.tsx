import React, { useState } from 'react';
import { ChevronDown, Play, Maximize } from 'lucide-react';
import { BlockData } from '../types';

interface RightSidebarProps {
  selectedBlock: BlockData | null;
  onUpdateBlock: (id: string, props: any) => void;
  onClose?: () => void;
}

export default function RightSidebar({ selectedBlock, onUpdateBlock }: RightSidebarProps) {
  const props = selectedBlock?.props || {};
  const id = selectedBlock?.id || '';
  
  const width = props.width || '600px';
  const borderRadius = props.borderRadius || '18px';

  const [activeTab, setActiveTab] = useState<'button' | 'styles'>('button');
  const [showVideoSettings, setShowVideoSettings] = useState(true);
  const [showPlay, setShowPlay] = useState(true);

  const handleWidthChange = (delta: number) => {
    let currentWidth = parseInt(width.replace(/\D/g, ''));
    if (isNaN(currentWidth)) currentWidth = 600;
    const newWidth = Math.max(100, currentWidth + delta); // minimum 100px
    onUpdateBlock(id, { ...props, width: `${newWidth}px` });
  };

  return (
    <aside className="w-[300px] bg-[#FFF3F0] flex flex-col flex-shrink-0 border-l border-orange-100 overflow-y-auto">
      {/* Tabs */}
      <div className="flex px-6 pt-6">
        <button 
          className={`flex-1 pb-4 text-base font-bold border-b-[2px] transition ${activeTab === 'button' ? 'text-[#0B1D40] border-[#0B1D40]' : 'text-[#566583] border-gray-300 hover:bg-black/5'}`}
          onClick={() => setActiveTab('button')}
        >
          Button
        </button>
        <button 
          className={`flex-1 pb-4 text-base font-bold border-b-[2px] transition ${activeTab === 'styles' ? 'text-[#0B1D40] border-[#0B1D40]' : 'text-[#566583] border-gray-300 hover:bg-black/5'}`}
          onClick={() => setActiveTab('styles')}
        >
          Styles
        </button>
      </div>

      <div className="px-6 py-6 space-y-6 flex-1 overflow-y-auto">
        {activeTab === 'button' ? (
          <>
            {/* Settings Accordion Header */}
            <button 
              className="w-full flex items-center justify-between text-[15px] font-bold text-[#0B1D40] hover:bg-black/5 p-1 rounded -ml-1 transition"
              onClick={() => setShowVideoSettings(!showVideoSettings)}
            >
              <span>Video Settings</span>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showVideoSettings ? '' : '-rotate-90'}`} />
            </button>

            {showVideoSettings && (
              <div className="space-y-6 pt-2">
                {/* Cover Image */}
        <div>
          <h4 className="text-[#0B1D40] text-[15px] font-bold mb-3">Cover image</h4>
          <div className="relative rounded-lg overflow-hidden h-[120px] bg-slate-300 border border-gray-200">
             <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600&h=400" className="w-full h-full object-cover" alt="Cover" />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/20 transition group"
                onClick={() => alert("Upload dialog would appear to replace image")}
              >
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black/10 backdrop-blur-[2px] group-hover:bg-black/30">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
          </div>
        </div>

                {/* Width */}
                <div>
                  <h4 className="text-[#0B1D40] text-[15px] font-bold mb-3">Width</h4>
                  <div className="w-full border border-gray-300 bg-white rounded-lg flex items-center justify-between overflow-hidden focus-within:border-blue-500 transition-colors">
                    <input 
                      type="text" 
                      className="flex-1 px-4 py-2.5 text-[15px] text-center text-[#0B1D40] font-bold border-r border-gray-200 focus:outline-none"
                      value={width}
                      onChange={(e) => onUpdateBlock(id, { ...props, width: e.target.value })}
                    />
                    <button className="px-3 md:px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-500 flex-shrink-0 focus:outline-none">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Play Controls */}
            <div className="pt-2">
               <button 
                 className="w-full flex items-center justify-between text-[15px] font-bold text-[#0B1D40] mb-4 hover:bg-black/5 p-1 rounded -ml-1 transition"
                 onClick={() => setShowPlay(!showPlay)}
               >
                  <span>Play</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showPlay ? '' : '-rotate-90'}`} />
               </button>

               {showPlay && (
                 <>
                   <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-[#0B1D40] text-white flex items-center justify-center shadow-sm hover:bg-[#152B52]">
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              
              <span className="text-gray-400 font-bold text-lg leading-none">+</span>
              
                   <div className="flex items-center gap-4 px-2">
                      {/* Replaced slider with an empty gap or just removing the element */}
                   </div>

                   <button 
                     className="w-8 h-8 rounded-full bg-[#0B1D40] text-white flex items-center justify-center shadow-sm hover:bg-[#152B52]"
                     onClick={() => alert("Forward mapped!")}
                   >
                     <ChevronDown className="w-4 h-4 -rotate-90" />
                   </button>
                </div>

                <div className="mt-6 w-full border border-gray-300 bg-transparent rounded-xl flex items-center justify-between px-5 py-2 hover:bg-black/5 transition-colors">
                  <button 
                    className="text-gray-500 hover:text-[#0B1D40] font-medium text-xl leading-none flex items-center justify-center"
                    onClick={() => handleWidthChange(-20)}
                    title="Decrease Width"
                  >
                    –
                  </button>
                  <button 
                    className="text-gray-500 hover:text-[#0B1D40] font-medium text-[22px] leading-none flex items-center justify-center"
                    onClick={() => handleWidthChange(20)}
                    title="Increase Width"
                  >
                    +
                  </button>
                  <button 
                    className="text-gray-500 hover:text-[#0B1D40] font-medium leading-none flex items-center justify-center"
                    onClick={() => alert("Flow layout execution.")}
                  >
                    <span className="text-lg">→</span>
                  </button>
                  <button 
                    className="text-gray-500 hover:text-[#0B1D40] flex items-center justify-center"
                    onClick={() => onUpdateBlock(id, { ...props, width: '100%' })}
                    title="Maximize Width"
                  >
                    <Maximize className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </>
             )}
            </div>
          </>
        ) : (
          <div className="space-y-6 pt-2">
            {/* Border Radius moved to Styles tab */}
            <div>
              <h4 className="text-[#0B1D40] text-[15px] font-bold mb-3">Border Radius</h4>
              <div className="w-full border border-gray-300 bg-white rounded-lg flex items-center overflow-hidden focus-within:border-blue-500 transition-colors">
                 <input 
                   type="text" 
                   className="w-full text-center py-2.5 text-[15px] text-[#0B1D40] font-bold focus:outline-none"
                   value={borderRadius}
                   onChange={(e) => onUpdateBlock(id, { ...props, borderRadius: e.target.value })}
                 />
              </div>
            </div>
            
            <div className="text-center p-6 text-gray-400 font-medium text-sm border-2 border-dashed border-gray-200 rounded-lg">
               More typography and color styling options coming soon in next major update.
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
