"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';
import { BlockData, BlockType } from '../types';

export default function Page() {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  
  // Mobile Responsiveness Sidebars
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  
  // History tracking
  const [pastStates, setPastStates] = useState<BlockData[][]>([]);
  const [futureStates, setFutureStates] = useState<BlockData[][]>([]);

  const pushState = (newBlocks: BlockData[]) => {
    setPastStates([...pastStates, blocks]);
    setFutureStates([]);
    setBlocks(newBlocks);
  };

  const undo = () => {
    if (pastStates.length === 0) return;
    const previous = pastStates[pastStates.length - 1];
    setFutureStates([blocks, ...futureStates]);
    setPastStates(pastStates.slice(0, pastStates.length - 1));
    setBlocks(previous);
  };

  const redo = () => {
    if (futureStates.length === 0) return;
    const next = futureStates[0];
    setPastStates([...pastStates, blocks]);
    setFutureStates(futureStates.slice(1));
    setBlocks(next);
  };

  const handleAddBlock = (type: BlockType) => {
    const newBlock: BlockData = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      props: {
        width: '600 px',
        borderRadius: '18 px'
      }
    };
    pushState([...blocks, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  const handleRemoveBlock = (id: string) => {
    pushState(blocks.filter(b => b.id !== id));
    if (selectedBlockId === id) {
      setSelectedBlockId(null);
    }
  };

  const handleUpdateBlock = (id: string, newProps: any) => {
    pushState(blocks.map(b => 
      b.id === id ? { ...b, props: { ...b.props, ...newProps } } : b
    ));
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F0F2F5] font-sans">
      <Header />
      <div className="flex flex-1 h-[calc(100vh-80px)] flex-shrink-0 relative w-full overflow-hidden">
        
        {/* Mobile Edge Toggle Left */}
        <button 
          onClick={() => setIsLeftOpen(!isLeftOpen)}
          className={`fixed top-1/2 -translate-y-1/2 z-40 bg-white border border-gray-300 text-gray-600 rounded-r-md p-1.5 shadow-md flex items-center justify-center transition-all duration-300 lg:hidden ${isLeftOpen ? 'left-[240px]' : 'left-0'}`}
        >
          {isLeftOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>

        {/* Left Sidebar overlay logic */}
        <div className={`
          absolute z-30 inset-y-0 left-0 bg-[#0B1D40] transition-transform duration-300 shadow-2xl lg:shadow-none
          ${isLeftOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:relative lg:translate-x-0 lg:flex
        `}>
          <LeftSidebar onAddBlock={(type) => { handleAddBlock(type); setIsLeftOpen(false); }} />
        </div>

        {/* Mobile Backdrop for Left Sidebar */}
        {isLeftOpen && (
           <div 
             className="absolute inset-0 bg-black/40 z-20 xl:hidden" 
             onClick={() => setIsLeftOpen(false)}
           />
        )}
        
        <Canvas 
          blocks={blocks} 
          selectedBlockId={selectedBlockId} 
          onSelectBlock={setSelectedBlockId}
          onRemoveBlock={handleRemoveBlock}
          canUndo={pastStates.length > 0}
          canRedo={futureStates.length > 0}
          onUndo={undo}
          onRedo={redo}
          onToggleLeft={() => setIsLeftOpen(!isLeftOpen)}
          onToggleRight={() => setIsRightOpen(!isRightOpen)}
        />
        
        {/* Mobile Backdrop for Right Sidebar */}
        {isRightOpen && (
           <div 
             className="absolute inset-0 bg-black/40 z-20 xl:hidden" 
             onClick={() => setIsRightOpen(false)}
           />
        )}

        {/* Mobile Edge Toggle Right */}
        <button 
          onClick={() => setIsRightOpen(!isRightOpen)}
          className={`fixed top-1/2 -translate-y-1/2 z-40 bg-white border border-gray-300 text-gray-600 rounded-l-md p-1.5 shadow-md flex items-center justify-center transition-all duration-300 xl:hidden ${isRightOpen ? 'right-[300px]' : 'right-0'}`}
        >
          {isRightOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>

        {/* Right Sidebar overlay logic */}
        <div className={`
          absolute z-30 inset-y-0 right-0 h-full bg-[#FFF3F0] transition-transform duration-300 shadow-2xl lg:shadow-none
          ${isRightOpen ? 'translate-x-0' : 'translate-x-[300px]'}
          xl:relative xl:translate-x-0 xl:flex
        `}>
          <RightSidebar 
            selectedBlock={blocks.find(b => b.id === selectedBlockId) || null} 
            onUpdateBlock={handleUpdateBlock}
            onClose={() => setIsRightOpen(false)}
          />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
