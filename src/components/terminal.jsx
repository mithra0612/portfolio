import React from 'react';

const TerminalComponent = () => {
  return (
    <div className="bg-gray-900 rounded-lg font-mono text-sm border border-gray-700 shadow-lg p-2">
      {/* Terminal Header */}
      <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-400 text-xs">terminal</div>
      </div>
      
      {/* Terminal Content */}
      <div className="text-gray-300 leading-relaxed space-y-1">
        <div className="flex">
          <span className="text-green-400">madhumithra@dev:~$</span>
          <span className="ml-2 text-white">whoami</span>
        </div>
        <div className="text-cyan-400">Madhumithra — CS undergrad | Full-Stack Developer | Code Poet</div>
        
        <div className="flex mt-3">
          <span className="text-green-400">madhumithra@dev:~$</span>
          <span className="ml-2 text-white">aboutme.txt</span>
        </div>
        <div className="text-yellow-300">• Third Year Undergraduate</div>
        <div className="text-yellow-300">• Computer Science and Engineering Student</div>
        <div className="text-yellow-300">• Eager in solving real life problems through tech solutions</div>
        
        {/* <div className="flex mt-3">
          <span className="text-green-400">madhumithra@dev:~$</span>
          <span className="ml-2 text-white">echo $PASSION</span>
        </div> */}
        {/* <div className="text-purple-400">Building software with logic and soul — Code + Poetry</div>
        
        <div className="flex mt-3">
          <span className="text-green-400">madhumithra@dev:~$</span>
          <span className="ml-2 text-white">status</span>
        </div>
        <div className="text-gray-400">Crafting meaningful tech experiences...</div> */}
        
        {/* Cursor */}
        {/* <div className="flex items-center mt-4">
          <span className="text-green-400">madhumithra@dev:~$</span>
          <div className="w-2 h-4 bg-green-400 ml-2 animate-pulse"></div>
        </div> */}
      </div>
    </div>
  );
};

export default TerminalComponent;