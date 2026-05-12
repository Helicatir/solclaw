import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { ScalperPaperPanel } from './ScalperPaperPanel';
import { AlgoTrainingPanel } from './AlgoTrainingPanel';

type AlgoTabMode = 'trading' | 'training';

export function AlgoTradingTabs() {
  const { appState, setAppState } = useAppContext();
  const [activeTab, setActiveTab] = React.useState<AlgoTabMode>('trading');

  const tabs = [
    { id: 'trading' as const, label: 'Algo Trading', icon: '⚡' },
    { id: 'training' as const, label: 'Algo Training', icon: '🎯' }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-3 text-sm font-medium flex items-center gap-2
              border-b-2 transition-colors
              ${activeTab === tab.id
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'trading' && <ScalperPaperPanel />}
        {activeTab === 'training' && <AlgoTrainingPanel />}
      </div>
    </div>
  );
}
